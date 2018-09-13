<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\RolesEmpresasGranjas;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table="users";
    protected $fillable = [
        'name', 'email', 'password','apellidos','cedula','rol','type1','type2','type3','type4','id_empresa'
    ];
    

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
          'password', 'remember_token',
    ];

   
   public function Roles(){

      return $this->hasMany(RolesEmpresasGranjas::Class);

   }


   public static function ValidarRoles($idempresa=null){

          #### id usuario actual  
          $idUserAuth= Auth()->user()->id;
          ###  validar   si el usuario tiene empresa asignada al  tener solo empresa puede acceder a todo lo de la empresa
          $PermisoEmpresaMinuscula =  RolesEmpresasGranjas::where(['user_id'=>$idUserAuth,'fk_empresa_id'=>$idempresa])->get();
        
          ## valido si el usuario con session existe 
          $dataAUthRoles= User::where('id',$idUserAuth)->get();  
          
          if($PermisoEmpresaMinuscula){ ####  valido  cuando el usuario este asignado ala empresa puede ver todo lo de la empresa

                   
                  foreach ($PermisoEmpresaMinuscula as $role) {

                        if($role->user_id==Auth()->user()->id){
                            return true;    
                        } 
                   }   
                

              return false; 
          }

   }   

   public function ValidarRolesEempresaGranja($idEmoresa=null,$idGranja=null){

          #### id usuario actual  
          $idUserAuth= Auth()->user()->id;
                ###Permiso Empresa
          $PermisoEmpresaGranjas= RolesEmpresasGranjas::where(['user_id'=>$idUserAuth,'fk_empresa_id'=>$idEmoresa,'fk_granja_id'=>$idGranja])->get();
          // dd($PermisoEmpresaGranjas);

          $dataAUthRoles= User::where('id',$idUserAuth)->get();  
           
          


         if($PermisoEmpresaGranjas){
             
                    
                  foreach ($PermisoEmpresaGranjas as $role) {

                        if($role->user_id==Auth()->user()->id){
                            return true;    
                        } 
                   }   
                

            return false; 

         }   

   }






}
