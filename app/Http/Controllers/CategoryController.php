<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categorie;
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $categories = Categorie::
                      when($request->searchQuery,function ($query,$search){
                        return $query
                               ->where('categorie_name','like','%'.$search.'%');
                      })->orderBy('id','DESC')->paginate($request->perPage)->withQueryString();
        $totalCategorie = Categorie::count();
        return response()->json([
            'categories'=>$categories,
            'status'=>200, 
            'totalCategorie'=>$totalCategorie
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
             'categorie_name'=>'required',
             'status'=>'required',
        ]);

        $categorie = new Categorie();
        $categorie->categorie_name = $request->categorie_name;
        $categorie->status = $request->status;
        $categorie->save();
        return response([
            'status'=>200,
            'message'=>'Categorie Added Successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $categorie = Categorie::findOrFail($id);
        return response()->json($categorie);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'categorie_name'=>'required',
        ]);

        $categorie =Categorie::findOrFail($id);
        $categorie->categorie_name = $request->categorie_name;
        $categorie->status = $request->status;
        $categorie->save();
        return response()->json([
            'success' => true,
            'message'=>'Categorie Updated Successfully',
            'status'=>200
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $categorie =Categorie::findOrFail($id);
        $categorie->delete();
        return response([
            'status'=>200,
            'message'=>'Categorie deleted successfully'
        ]);
    }
}
