<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\variableGrupos;
use App\grupoVariables;
use App\parametrizacion\animal;
use App\variablesAnimal;
use App\Animales\animalLinea;
use Illuminate\Support\Facades\Redirect;
use Session;

class VariablesGruposVarialesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //dd($request->all());
        $animalId=$request->input('animalId');
        $variablesId=$request->input('variablesId');
        $listadoGrupoVariables=grupoVariables::select('grupo_variable_id','grupo_nombre')->get();
        $animal=animal::find($animalId);
        $variables=variablesAnimal::find($variablesId);
        $variablesGrupos= variableGrupos::with(['animal','variablesAnimal'])
            ->where('fk_animal_id','=',$animalId)
            ->where('fk_variable_id','=',$variablesId)
            ->get();

        $animalLineas=animalLinea::where('fk_animal_id','=',$animalId)->get();

        return view('VariablesGruposVariables.create',compact('listadoGrupoVariables','animal',
              'variables','variablesGrupos','animalLineas'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){

        $idanimal=$request->input('animalId');
        $variablesId=$request->input('variableId');

        $exists = variableGrupos::where([
                'fk_variable_id' => $request->variableId,
                'fk_animal_id' => $request->animalId,
                'fk_grupo_variable_id' => $request->fk_grupo_variable_id
            ])
            ->exists();

        if ($exists) {
            
            Session::flash('message','¡Advertencia!  El grupo de variable ya se encuentra asociado al animal');
        
        }else{

            $grupoVariables=  new variableGrupos();
            $grupoVariables->fk_animal_id=$idanimal;
            $grupoVariables->fk_variable_id=$variablesId;
            $grupoVariables->fk_grupo_variable_id=$request->input('fk_grupo_variable_id');
            $grupoVariables->save();

            Session::flash('message','Grupo de variable almacenado exitosamente');
        }

        return Redirect::to('/varialesgrupos/create?animalId='.$idanimal.'&variablesId='.$variablesId);
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request){

        $variable= variableGrupos::where([
            'fk_variable_id' => $request->fk_variable_id,
            'fk_animal_id' => $request->fk_animal_id,
            'fk_grupo_variable_id' => $request->fk_grupo_variable_id
        ]);

        if ($variable) {
            
            $variable->delete();
            Session::flash('message','Grupo de variable eliminado satisfactoriamente');
        }
        
        return Redirect::to('/varialesgrupos/create?animalId='.$request->fk_animal_id.'&variablesId='.$request->fk_variable_id);
    }

    public function DetalleVariable($id){

        $detalle = grupoVariables::find($id);

        return view('individuos.detalle_variable',[
            'detalle' => $detalle
        ]);
    }
}
