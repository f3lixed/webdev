<?php

namespace App\Animales;

use Illuminate\Database\Eloquent\Model;

class animalGrupoLineaPeso extends Model {

    protected $table = "animal_grupo_linea_peso";
    protected $primaryKey = "peso_id";
    public $timestamps = false;
    protected $fillable = ['peso_genero', 'peso_semana', 'peso_unidad','peso_min','peso_max','peso_prom','postura','consumo','huevos'];


    public function animalLinea() {

        return $this->hasMany('App\Animales\animalLinea');
    }

}
