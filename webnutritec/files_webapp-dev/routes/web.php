<?php

use App\User;
//use  App\regional\Municipio;
use App\parametrizacion\empresa;
use App\parametrizacion\departamento;
use App\parametrizacion\municipio;
use App\EstudioGalponResultados;
use App\parametrizacion\granja;

Auth::routes();

Route::group(['middleware' => ['web', 'auth']], function () {
    ///  truncante 

    /*
      Route::get('/truncate',function(){
      DB::statement('SET FOREIGN_KEY_CHECKS = 0');
      \App\parametrizacion\empresa::truncate();
      \App\parametrizacion\granja::truncate();
      \App\parametrizacion\galpon::truncate();
      \App\Estudios\estudios::truncate();
      \App\Estudios\EstudioGrupoVariable::truncate();
      \App\Estudios\estudioGalpones::truncate();
      \App\Estudios\EstudioIndividuoVariable::truncate();
      \App\Estudios\estudioGalponEndividuos::truncate();
      EstudioGalponResultados::truncate();
      });
     */


    ///  fiun truncate
    ##### redireigir usuarios

    Route::post('delete/granja', [
        'as' => 'delete/granja',
        'uses' => 'UserController@DeleteGranjas'
    ]);


    Route::get('/error', function() {


        return view('permisos.index');
    });

    //*autos
    Route::get('auto/granja/{id}', 'HomeController@AutoGranja');
    Route::get('auto/galpon/{id}', 'HomeController@AutoGalpon');
    Route::get('auto/lote/{empresa}/{galpon}', 'HomeController@AutoLote');
    Route::get('/', 'HomeController@index');

    /*
      DB::listen(function($query){
      echo "<pre>{$query->sql}</pre>";
      }); */

    Route::get('/home', 'HomeController@index')->name('home');

    Route::get('index', function() {
        return view('prueba');
    });

    //rutas empresa

    Route::get('/empresa', function() {

        return view('user.index');
    });


    Route::get('/u', function() {

        $a = new App\User();
        return $a->ValidarRoles();
    });



    /// fin ruta empresa
    //  ruta test 

    Route::get('/test', function() {

        $user = new User();
        //$user->id=1;
        $user->name = "Klan1";
        $user->email = "andres@hotmail.com";
        $user->password = bcrypt('12345678');
        $user->save();
    });




    ////////////////////RUTAS COMBO box/////////////////////////
    Route::get('empresasGranjas/{idempresa}', function($idempresa) {

        $data = granja::orderBy('fk_empresa_id', 'ASC')->where('fk_empresa_id', $idempresa)->get();
        return response()->json($data);
    });



    ///// fin ruta test
    ///combo dinamico///

    Route::get('/ciudades/{id}', function($id) {


        $ciudades = DB::select('SELECT m.municipio_id, d.departamento_nombre,m.municipio_nombre
     from municipio as m
     inner JOIN departamento as d
     on m.fk_departamento_id= d.departamento_id
     where  d.departamento_id=' . $id . '');
        return $ciudades;
    });




    Route::get('/empresaGranjas/{id}', function($id) {

        $galpones = DB::select('SELECT em.empresa_id,em.nombre_empresa,gra.granja_nombre,gra.granja_id
    from empresa as em
    inner JOIN empresa_granjas as gra
    on gra.fk_empresa_id=em.empresa_id
    where em.empresa_id=' . $id . '
    ');

        return $galpones;
    });

    Route::get('/editcombo/{id}', 'parametrizacion\empresaController@EditCombo');

    Route::get('/testdata/{id}', 'parametrizacion\empresaController@galpon');


    // frin combo dinamico 
    ////  Rutas modulo parametrizacion   tipo Resources//

    Route::resource('empresa', 'parametrizacion\empresaController');
    Route::get('/updateEmpresa/{id}/{nombre}', 'parametrizacion\empresaController@edit');
    Route::resource('granja', 'parametrizacion\granjaController');
    Route::resource('galpon', 'parametrizacion\galponController');
    Route::resource('animal', 'parametrizacion\animalController');

    Route::resource('gruposAnimal', 'Animales\AnimalesController');
    Route::resource('animallineas', 'Animales\AnimalLineasController');
    Route::resource('animalGrupovariable', 'Animales\AnimalVariableController');
    Route::resource('user', 'UserController');
    Route::resource('variable', 'VariableController');
    Route::resource('lineapeso', 'lineapesoController');
    //// 
    Route::resource('varialesgrupos', 'VariablesGruposVarialesController');
    Route::resource('gruposVariables', 'GrupoVariablesController');

    Route::resource('estudio', 'Estudios\EstudiosController');

    Route::post('animalGrupovariableUpdate', [
        'as' => 'animalGrupovariableUpdate',
        'uses' => 'Animales\AnimalVariableController@UpdateVariables'
    ]);

    Route::post('deleteGrupoVariable', [
        'as' => 'deleteGrupoVariable',
        'uses' => 'VariablesGruposVarialesController@delete'
    ]);

    Route::get('estudio-galpon-individuos/{id}', [
        'as' => 'estudio-galpon-individuos',
        'uses' => 'Estudios\EstudioIndividuoVariableController@ListGalponesIndividuos'
    ]);

    Route::get('estudio-galpon-variables/{galponID}/{id}/', [
        'as' => 'estudio-galpon-variables',
        'uses' => 'Estudios\EstudioIndividuoVariableController@ListGalponesIndividuosVariables'
    ]);

    Route::get('estudio-galpon-detalle/{id}', [
        'as' => 'estudio-galpon-detalle',
        'uses' => 'parametrizacion\galponController@ShowEGD'
    ]);

    Route::get('list-estudios/', [
        'as' => 'list-estudios',
        'uses' => 'parametrizacion\galponController@ListEstudios'
    ]);

    Route::post('store/individuo', [
        'as' => 'store/individuo',
        'uses' => 'Estudios\EstudioIndividuoVariableController@UpdateIndividuo'
    ]);

    Route::get('detalle-variable/{id}', [
        'as' => 'detalle-variable',
        'uses' => 'VariablesGruposVarialesController@DetalleVariable'
    ]);

    Route::put('updateGranja/{$id}', [
        'as' => 'updateGranja',
        'uses' => 'parametrizacion\granjaController@granjaIdit'
    ]);

    Route::get('grupo-variable-estudio/{estudio}/{grupo}', [
        'as' => 'grupo-variable-estudio',
        'uses' => 'Estudios\EstudioIndividuoVariableController@DetalleGrupoVariable'
    ]);

    /// Fin rutas parametrizacion
    Route::get('reportes-estudio-galpon', [
        'as' => 'reportes-estudio-galpon',
        'uses' => 'Estudios\EstudioIndividuoVariableController@ReporteEstudiosGalpon'
    ]);

    Route::get('estadisticas/{galpon}/{estudio}/{animal}', [
        'as' => 'estadisticas',
        'uses' => 'HomeController@Estadisticas'
    ]);

    Route::get('excel-estudio-galpon/{galpon}/{estudio}/{animal}', [
        'as' => 'excel-estudio-galpon',
        'uses' => 'HomeController@ExportDataExcel'
    ]);

    Route::get('estudio-variable-update/{galpon}/{estudio}/{animal}/{status}', [
        'as' => 'estudio-variable-update',
        'uses' => 'HomeController@UpdateAllAnimalsInGalpon'
    ]);

    Route::get('informe-gerencial/', [
        'as' => 'informe-gerencial',
        'uses' => 'Estudios\EstudioIndividuoVariableController@InformeGerencial'
    ]);

    Route::post('update-description', [
        'as' => 'update-description',
        'uses' => 'HomeController@UpdateDescription'
    ]);

    Route::get('logout', 'Auth\LoginController@logout');

    //////nuevos
    Route::post('estudio/update', ['as' => 'estudio/update', 'uses' => 'Estudios\EstudiosController@UpdateEstudioGalpon']);
    Route::get('estudio/delete/{id}', ['as' => 'estudio/delete', 'uses' => 'Estudios\EstudiosController@DeleteEstudioGalpon']);
});
