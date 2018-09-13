<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\grupoVariables;
use App\variableGrupos;
use App\parametrizacion\animal;
use App\variablesAnimal;
use Illuminate\Support\Facades\Redirect;
use Session;

class GrupoVariablesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $listado=grupoVariables::all();

        return view('gruposVariables.create',compact('listado'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){

        grupoVariables::create($request->all());
        Session::flash('message','Grupo de variable registrada exitosamente');
        return Redirect::to('/gruposVariables/create');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id){

        $edit = grupoVariables::find($request->grupo_variable_id)->update([
            'grupo_nombre' => $request->grupo_nombre
        ]);

        if ($edit) {
            
            Session::flash('message','Grupo de variable actualizada exitosamente');
        }
       
        return Redirect::to('/gruposVariables/create');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
