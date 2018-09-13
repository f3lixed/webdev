<?php

namespace App\Estudios;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class EstudioIndividuoVariable extends Model{
    
  protected $table = "estudio_individio_variable";
	protected $fillable = [
		'fk_variable_id','fk_individio_id','fk_estudio_galpon_id','fk_animal_id','fk_empresa_id','fk_granja_id','fk_linea_id','fk_galpone_id',
		'fecha_estudio_individuo','variable_valor','individuo_imagen','fk_estudio_id','estado'
	];

	public $timestamps = false;


	public function  estudioGalpon (){
    	return $this->belongsTo('App\Estudios\estudioGalpones','fk_estudio_galpon_id');
    }

    public  function animal(){
        return $this->belongsTo('App\parametrizacion\animal','fk_animal_id');
    }   

    public function empresa(){
       return $this->belongsTo('App\parametrizacion\empresa','fk_empresa_id');
    }  

    public  function granja(){
      return $this->belongsTo('App\parametrizacion\granja', 'fk_granja_id');
    } 

    public  function animalLinea(){
       return $this->belongsTo('App\Animales\animalLinea','fk_linea_id');
    }

    public function galpon(){
      return $this->belongsTo('App\parametrizacion\galpon','fk_galpone_id');
    }

    public function Variable(){
      return $this->belongsTo('App\variablesAnimal','fk_variable_id');
    }

     /// accion para insertar datos en mi array       
    public function setCompletado($id){

       $completo=DB::select("SELECT iv.estado,
                         if(iv.estado,iv.estado='0','falta')  as resultado  
                         FROM estudio_galpones as  es
                         inner JOIN estudio_individio_variable as iv
                         on iv.fk_estudio_galpon_id= es.estudio_galpon_id
                         where iv.fk_estudio_galpon_id='".$id."'");
                         //dd($completo);     
       //// validar que todos esten estado completado 
       foreach($completo as $key) {

            if($key->resultado ==='falta'){
             //dd($this->dataValidar);
              return  $almacenarVariables= "falso"; 
           }

          //dd($this->dataValidar);
           return   $almacenarVariables = "verdadero"; 
        }  
    }

   /// mostrar  datos  
    public   function getCompletado($id){

         return $this->setCompletado($id);

     }
}
