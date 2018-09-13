<?php

namespace App\Http\Controllers\Animales;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\parametrizacion\animal;
use App\Animales\animalGrupos;
use App\Animales\AnimalVariable;
use App\variablesAnimal;
use Illuminate\Support\Facades\Input;
use Storage;
use Session;
use Illuminate\Support\Facades\Redirect;

class AnimalVariableController extends Controller
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
     dd($request->all()); 
     

     return view('variables.create',compact('listadoVariables','animaNombre','variables_macro','grupo_id','animal_id','animal_id'));

   }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

      
          //dd($request->all());  // recibe datos
         //$va= new variablesAnimal();
     $idAnimal=$request->input('animalIDVariable');

     $variable=  new variablesAnimal();
     $variable->fk_animal_id=$idAnimal;
     $variable->variables_macro= $request->input('variable_macro');
     $variable->variable_nombre= $request->input('variable_nombre');
     $variable->variable_descripcion= $request->input('variable_descripcion');
     $variable->variable_min= $request->input('variable_min');
     $variable->variable_max= $request->input('variable_max');
     $variable->index_g= $request->input('index_g');
     $variable->ir_operador= $request->input('ir_operador');
     $variable->calificacion_operador= $request->input('calificacion_operador');
     $variable->ir_tolerancia= $request->input('ir_tolerencia');
     $variable->calificacion_tolerancia= $request->input('calificacion_tolerencia');
     $variable->variable_max_prog= $request->input('variable_max_pro');
     $variable->calificacion_texto_pos= $request->input('calificacion_texto_pos');
     $variable->calificacion_texto_neg= $request->input('calificacion_texto_neg');
     $variable->operacion_resultado= $request->input('operacion_resultado');


     
     
     if(Input::hasFile('imagen')){
        $path = 'imagenes/guias/';
      $file=Input::file('imagen');
      $filename = 'name-'.uniqid().".".$file->getClientOriginalExtension();
      $file->move($path, $filename);
      $variable->variables_apoyo_visual = $filename;
    }

    $variable->save();

    return Redirect::to('/gruposAnimal/create'.'?id='.$idAnimal);


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

    public function edit($id){ 

        $variable=variablesAnimal::with('animal')->find($id);
         
        return view('variables.edit',[
            'variable' => $variable
        ]);
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
        //dd($request->all());
      $idvariable= $request->input('variable_grupo_id');
      $idAnimal=$request->input('animal_id');
      $varibles= AnimalVariable::find($idvariable);
      $varibles->grupo_nombre=$request->input('grupo_nombre');
      $varibles->fk_animal_id=$request->input('animal_id');
      $varibles->update();
      return Redirect::to('/gruposAnimal/create'.'?id='.$idAnimal);
    }

    public function UpdateVariables(Request $request){

         
        $idAnimal=$request->input('animalIDVariable');

        $variable_id=$request->variables_id;
        

        $variable=  variablesAnimal::find($variable_id);
        $variable->fk_animal_id=$idAnimal;
        $variable->variables_macro= $request->input('variables_macro');
        $variable->variable_nombre= $request->input('variable_nombre');
        $variable->variable_descripcion= $request->input('variable_descripcion');
        $variable->variable_min= $request->input('variable_min');
        $variable->variable_max= $request->input('variable_max');
        $variable->index_g= $request->input('index_g');
        $variable->ir_operador= $request->input('ir_operador');
        $variable->calificacion_operador= $request->input('calificacion_operador');
        $variable->ir_tolerancia= $request->input('ir_tolerancia');
        $variable->calificacion_tolerancia = $request->input('calificacion_tolerancia');
        $variable->variable_max_prog= $request->input('variable_max_prog');
        $variable->calificacion_texto_pos= $request->input('calificacion_texto_pos');
        $variable->calificacion_texto_neg= $request->input('calificacion_texto_neg');
        $variable->operacion_resultado= $request->input('operacion_resultado');

         if(Input::hasFile('imagen')){
            $path = 'imagenes/guias/';
          $file=Input::file('imagen');
          $filename = 'name-'.uniqid().".".$file->getClientOriginalExtension();
          $file->move($path, $filename);
          $variable->variables_apoyo_visual = $filename;
        }

        $variable->update();
        return Redirect::to('/gruposAnimal/create'.'?id='.$idAnimal);
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
