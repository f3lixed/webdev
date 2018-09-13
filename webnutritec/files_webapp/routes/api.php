<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


#######  api login

Route::post('login','ApiController@login')->name('login');

Route::post('estudiosUsuario/{id}','ApiController@getEstudiosIdUser')->name('estudiosUsuario');
Route::post('updateEstudio','Estudios\EstudioIndividuoVariableController@UpdateIndividuoApi')->name('updateEstudio');

