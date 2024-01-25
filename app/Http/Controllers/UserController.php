<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use DB;
class UserController extends Controller
{
    public function register(Request $request){
        $request->validate([
            'name'=>'required',
            'email'=>'required|email',
            'password'=>'required|confirmed',
        ]);
        if(User::where('email', $request->email)->first()){
            return response([
                'message' => 'Email already exists',
                'status'=>'failed'
            ], 200);
        }

        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
            'tc'=>json_decode($request->tc),
        ]);
        $token = $user->createToken($request->email)->plainTextToken;
        return response([
            'user'=>$user,
            'token'=>$token,
            'message' => 'Registration Success',
            'status'=>'success',
        ], 201);
    }

    public function login(Request $request){
        $request->validate([
            'email'=>'required|email',
            'password'=>'required',
        ]);
        $user = User::where('email', $request->email)->first();
        if($user && Hash::check($request->password, $user->password)){
            $token = $user->createToken($request->email)->plainTextToken;
            return response([
                'user'=>$user,
                'token'=>$token,
                'message' => 'Login Success',
                'status'=>'success'
            ], 200);
        }
        return response([

            'message' => 'The Provided Credentials are incorrect',
            'status'=>401
        ]);
    }

    public function logout(){
        auth()->user()->tokens()->delete();
        return response([
            'message' => 'Logout Success',
            'status'=>200
        ]);
    }
    
    public function logged_user(){
        $loggeduser = auth()->user();
        return response([
            'user'=>$loggeduser,
            'message' => 'Logged User Data',
            'status'=>'success'
        ], 200);
    }

    public function change_password(Request $request){
        $request->validate([
            'password' => 'required|confirmed',
        ]);
        $loggeduser = auth()->user();
        $loggeduser->password = Hash::make($request->password);
        $loggeduser->save();
        return response([
            'message' => 'Password Changed Successfully',
            'status'=>'success'
        ], 200);
    }



    //=========user crud will be start here========//


    public function getUsers (Request $request){
        $users = User::
                 when($request->searchQuery,function ($query,$search){
                    return $query->where('name','like','%'.$search.'%')
                                 ->orWhere('email','like','%'.$search.'%')
                                 ->orWhere('phone','like','%'.$search.'%')
                                 ->orWhere('role','like','%'.$search.'%');
                 })
                 ->orderBy('id','DESC')->paginate($request->perPage)
                 ->withQueryString();
        $totalUser = DB::table('users')->count();
        return response([
          'users'=>$users,
          'status'=>200,
          'totalUser'=>$totalUser
        ]);
    }



    public function AddUser (Request $request){
        $request->validate([
            'name'=>'required',
            'email'=>'required|email',
            'password'=>'required',
            'role'=>'required',
            'status'=>'required',
            'phone'=>'required',
            'address'=>'required'
        ]);


        if(User::where('email', $request->email)->first()){
            return response([
               'message' => 'Email already exists',
               'status'=>400
            ]);
        }


        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->role = $request->role;
        $user->status = $request->status;
        $user->phone = $request->phone;
        $user->address = $request->address;
        $user->save();
        return response([
            'status'=>200,
            'message'=>'User created successfully'
        ]);


    }


    public function UpdtateUser (Request $request,$id){
        $request->validate([
            'name'=>'required',
            'email'=>'required|email',
            'role'=>'required',
            'status'=>'required',
            'phone'=>'required',
            'address'=>'required'
        ]);



        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->role = $request->role;
        $user->status = $request->status;
        $user->phone = $request->phone;
        $user->address = $request->address;
        $user->save();
        return response([
            'status'=>200,
            'message'=>'User Update successfully'
        ]);
    }



    public function DeleteUser ($id){
        $user = User::find($id);
        // if (file_exists(public_path($user->image->url))) {
        //     unlink(public_path($user->image->url));
        // }
        $user->delete();
        return response([
          'status'=>200,
          'message'=>'User deleted successfully'
        ]);
    }



}
