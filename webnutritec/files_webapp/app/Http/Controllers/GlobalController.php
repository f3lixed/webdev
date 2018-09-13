<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Acuatank\Http\Requests;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;
#required
use Auth;
use App\RolesEmpresasGranjas;

class GlobalController extends Controller{
    
    //admin
    public function IsAdmin(){

    	$UserAuth = Auth::user()->rol;
    	$bool = false;

    	if ($UserAuth == "admin") {
    		
    		$bool = true;
    	}

    	return $bool;
    }

    //redireccionar
    public function RedirectToHome(){

    	Session::flash('message','No tienes permisos para acceder a esta sección');
        Session::flash('error',1);
        return Redirect::to('home');
    }

    //permisos por empresa
    public function CompaniesPermission(){

    	$user = Auth::user()->id;
    	$companies = RolesEmpresasGranjas::where('user_id', $user)->get();
    	$data = [];

    	foreach ($companies as $company) {
    		
    		array_push($data, $company->fk_empresa_id);
    	}

    	return $data;
    }

    // permisos por granja
    public function GranjasPermission(){

        $user = Auth::user()->id;
        $granjas = RolesEmpresasGranjas::where('user_id', $user)->get();
        $data = [];

        foreach ($granjas as $granja) {
            
            array_push($data, $granja->fk_granja_id);
        }

        return $data;
    }
}
