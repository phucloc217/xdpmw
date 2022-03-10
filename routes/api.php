<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\StudentController;
use  App\Http\Controllers\FacultyController;
use  App\Http\Controllers\ClassController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('students', StudentController::class)->middleware('auth:api');

Route::resource('faculty', FacultyController::class);
Route::resource('class', ClassController::class);

Route::post('/register',[UserController::class,'register']);
Route::post('/login',[UserController::class,'login']);
