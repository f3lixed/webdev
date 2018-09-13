<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class Roles
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

          $idempresa=Request()->idempresa; 
          $idEmpresa=Request()->idEmpresa;
          $idGranja=Request()->idGranja;
              
           if(Auth()->user()->rol==="admin"){
               
               return $next($request);
           }


          // $idgranja =Request()->idGranja; 
          if($idempresa){

             if(Auth::User()->ValidarRoles($idempresa)){ 
            
                 return $next($request); 
            }else{

               return redirect('/error');
            }



        } 

        if($idEmpresa && $idGranja){
            
             if(Auth::User()->ValidarRolesEempresaGranja($idEmpresa,$idGranja)){ 
            
                 return $next($request); 
            }else{

              return redirect('/error');
            }


        }  

         
           
        
        return redirect('/');
    }
    

}
