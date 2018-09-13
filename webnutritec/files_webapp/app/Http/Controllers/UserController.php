<?php

namespace App\Http\Controllers;

use App\Http\Requests\usuariosRequest;
use App\Http\Requests\usuariosRequestUpdate;
use Illuminate\Support\Facades\Session;
// use Illuminate\Auth\Middleware\Auth;
use App\Http\Controllers\GlobalController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use App\parametrizacion\empresa;
use App\RolesEmpresasGranjas;
use App\parametrizacion\granja;
use App\User;

class UserController extends Controller{

	/**
	* Display a listing of the resource.
	*
	* @return \Illuminate\Http\Response
	*/
	public function index(){

		$object = new GlobalController();

		if ($object->IsAdmin()) {
			
			$usuarios= User::all();
			return view('usuarios.index',compact('usuarios'));	
		
		}else{

			return $object->RedirectToHome();
		}
	}

	/**
	* Show the form for creating a new resource.
	*
	* @return \Illuminate\Http\Response
	*/

	public function ListRoles(){
 
		$list = ["admin" => 'Admin', "user" => 'Usuario'];
		return $list;
	}

	public function create(){

		$object = new GlobalController();

		if ($object->IsAdmin()) {
			
			$rols = $this->ListRoles();
			$empresas = empresa::select('nombre_empresa','empresa_id')->pluck('nombre_empresa','empresa_id');
			$granja = [];
			$granjaSelected = [];
			$user = [];
			return view('usuarios.create',compact('empresas','rols','granja','granjaSelected','user'));
		
		}else{

			return $object->RedirectToHome();
		}
	}

	/**
	* Store a newly created resource in storage.
	*
	* @param  \Illuminate\Http\Request  $request
	* @return \Illuminate\Http\Response
	*/
	public function store(usuariosRequest $request){ 
           
        //dd($request->all());

        $create = User::create([
        	'name' => $request->name, 
        	'email' => $request->email, 
        	'password' => bcrypt($request->password),  
        	'cedula' => $request->cedula, 
        	'rol' => $request->rol, 
        	'type1' => $request->type1, 
        	'type2' => $request->type2, 
        	'type3' => $request->type3, 
        	'type4' => $request->type4, 
        	'id_empresa' => $request->id_empresa
        ])->id;

        if ($create) {
        	
        	$count = count($request->granjas);

        	if ($count > 0) {
        		
        		for ($i=0; $i < $count; $i++) { 

        			if ($request->granjas[$i] != 0) {
        				
        				RolesEmpresasGranjas::create([
							'user_id' => $create,
							'fk_granja_id' => $request->granjas[$i],
							'fk_empresa_id' => $request->id_empresa
						]);
        			}
        		}
        	}

        	Session::flash('status',1);
        	Session::flash('message','Usuario almacenado satisfactoriamente');
        
        }else{

        	Session::flash('status',0);
        	Session::flash('message','Lo sentimos, no podemos procesar tu solicitud en este momento.');
        }

        return Redirect::to('/user');
	}

	/**
	* Show the form for editing the specified resource.
	*
	* @param  int  $id
	* @return \Illuminate\Http\Response
	*/


	public function edit($id){

		$object = new GlobalController();

		if ($object->IsAdmin()) {
			
			$user= User::find($id);
			$empresas = empresa::select('nombre_empresa','empresa_id')->get();
			$rols = $this->ListRoles();
			$empresas = empresa::select('nombre_empresa','empresa_id')->pluck('nombre_empresa','empresa_id');
			$granja = granja::where('fk_empresa_id', $user->id_empresa)->pluck('granja_nombre','granja_id');
			$granjaSelected = RolesEmpresasGranjas::with('empresa','granja')->where('user_id', $user->id)->get();

			return view('usuarios.edit',compact('user','empresas','rols','granja','granjaSelected'));
		
		}else{

			return $object->RedirectToHome();
		}
	}

	/**
	* Update the specified resource in storage.
	*
	* @param  \Illuminate\Http\Request  $request
	* @param  int  $id
	* @return \Illuminate\Http\Response
	*/
	public function update(usuariosRequestUpdate $request, $id){    
        
		$user = User::find($id);

		$oldCompany = $user->id_empresa;

        $user->name = $request->name;  
		$user->cedula = $request->cedula; 
		$user->rol = $request->rol; 
		$user->type1 = $request->type1; 
		$user->type2 = $request->type2; 
		$user->type3 = $request->type3; 
		$user->type4 = $request->type4; 
		$user->id_empresa = $request->id_empresa;

		if ($request->password) {
			
			$user->password = bcrypt($request->password); 
		}

        if ($user->save()) {

        	if ($oldCompany != $request->id_empresa) {
        		
        		RolesEmpresasGranjas::where('user_id', $user->id)->delete();
        	}
        	
        	$count = count($request->granjas);

        	if ($count > 0) {
        		
        		for ($i=0; $i < $count; $i++) { 

        			if ($request->granjas[$i] != 0) {

        				$exists = RolesEmpresasGranjas::where([
        					'user_id' => $user->id,
        					'fk_granja_id' => $request->granjas[$i],
        				])->exists();
        				
	        			if (!$exists) {
	        				
	        				RolesEmpresasGranjas::create([
								'user_id' => $user->id,
								'fk_granja_id' => $request->granjas[$i],
								'fk_empresa_id' => $request->id_empresa
							]);
	        			}
        			}
        		}
        	}

        	Session::flash('status',1);
        	Session::flash('message','Usuario actualizado satisfactoriamente');
        
        }else{

        	Session::flash('status',0);
        	Session::flash('message','Lo sentimos, no podemos procesar tu solicitud en este momento.');
        }

        return Redirect::to('/user');
	}

	public function DeleteGranjas(Request $request){

		$delete = RolesEmpresasGranjas::where('id', $request->id)->delete();

		if ($delete) {
			
			$message = "Granja eliminada satisfactoriamente";
		
		}else{

			$message = "Lo sentimos, no podemos procesar tu solicitud en este momento!";
		}

		return $message;
	}
}
