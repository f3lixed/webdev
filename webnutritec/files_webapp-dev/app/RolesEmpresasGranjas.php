<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class RolesEmpresasGranjas extends Model
{
    
    protected $table="users_empresas_granjas";
    protected $fillable=['user_id','fk_granja_id','fk_empresa_id'];

   
    public function user(){

    	return $this->belongsTo(User::Class,'user_id');
    }

    public function empresa(){
       return $this->belongsTo('App\parametrizacion\empresa','fk_empresa_id');
    }  

    public  function granja(){
      return $this->belongsTo('App\parametrizacion\granja', 'fk_granja_id');
    } 

}
