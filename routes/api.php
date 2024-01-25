<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use  \App\Http\Controllers\UserController as UserController;
use  \App\Http\Controllers\CategoryController as CategoryController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//=======public routes=========//
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);


Route::middleware(['auth:sanctum'])->group(function(){
    Route::post('/logout', [UserController::class, 'logout']);
    Route::get('/loggeduser', [UserController::class, 'logged_user']);
    Route::post('/changepassword', [UserController::class, 'change_password']);
});

 //=======user crud route=========//
 Route::get('/users', [UserController::class, 'getUsers']);
 Route::post('/adduser', [UserController::class, 'AddUser']);
 Route::post('/updateuser/{id}', [UserController::class, 'UpdtateUser']);
 Route::delete('/deleteuser/{id}', [UserController::class, 'DeleteUser']);


//===========categories routes============//
Route::resource('categories',CategoryController::class);