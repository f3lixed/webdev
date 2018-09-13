<?php
/**
 * Controlador de los estudios, aqui hice lo de 3 variables para guardar los 
 * datos que vienen del formulario 
 */
namespace App\Http\Controllers\Estudios;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Estudios\estudios;
use App\Estudios\estudioGalpones;
use App\Estudios\EstudioGrupoVariable;
use App\Estudios\estudioGalponEndividuos;
use App\Estudios\EstudioIndividuoVariable;
use App\Variable;
use App\variablesAnimal;
use App\variableGrupos;
use Auth;
//news
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;

class EstudiosController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {

        $null = 0;
        $dateStudy = date('Y-m-d H:m:s');

        $estudio = estudios::create([
                    'fk_animal_id' => $request->fk_animal_id_estudio,
                    'fk_empresa_id' => $request->fk_empresa_id,
                    'fk_granja_id' => $request->fk_granja_id,
                    'fk_user_id' => Auth::user()->id,
                    'estudio_num_animales' => $request->estudio_num_animales,
                    'estudios' => $request->estudio,
                    'fecha_estudio' => $dateStudy
                ])->estudio_id;

        if ($estudio) {

            $countGrupoVariables = count($request->fk_grupo_variable_id);

            if ($countGrupoVariables) {

                for ($k = 0; $k < $countGrupoVariables; $k++) {

                    $storeEGV = EstudioGrupoVariable::create([
                                'fk_grupo_variable_id' => $request->fk_grupo_variable_id[$k],
                                'fk_estudio_id' => $estudio
                    ]);
                }
            }

            $galpones = $request->galpones ? 1 : 2;

            if ($galpones == 1) {

                $countGalpones = count($request->galpones);

                if ($countGalpones > 0) {

                    for ($i = 0; $i < $countGalpones; $i++) {

                        $storeEG = estudioGalpones::create([
                                    'fk_estudio_id' => $estudio,
                                    'fk_empresa_id' => $request->fk_empresa_id,
                                    'fk_animal_id' => $request->fk_animal_id_estudio,
                                    'fk_granja_id' => $request->fk_granja_id,
                                    'fk_linea_id' => $request->lineas[$i],
                                    'fk_galpone_id' => $request->galpones[$i],
                                    'individuos_semanas' => $request->semanas[$i],
                                    'individios_genero' => $request->generos[$i],
                                    'estudio_galpon_lote' => $request->lotes[$i],
                                    // 3 variables
                                    'postura' => $request->postura[$i],
                                    'consumo' => $request->consumo[$i],
                                    'huevos' => $request->huevos[$i],
                                ])->estudio_galpon_id;

                        $individuosTotales = $request->estudio_num_animales;

                        for ($j = 0; $j < $individuosTotales; $j++) {

                            $storeEGI = estudioGalponEndividuos::create([
                                        'fk_estudio_galpon_id' => $storeEG,
                                        'fk_estudio_id' => $estudio,
                                        'fk_animal_id' => $request->fk_animal_id_estudio,
                                        'fk_empresa_id' => $request->fk_empresa_id,
                                        'fk_granja_id' => $request->fk_granja_id,
                                        'fk_linea_id' => $request->lineas[$i],
                                        'fk_galpone_id' => $request->galpones[$i],
                                    ])->individio_id;

                            if ($storeEGI) {

                                for ($l = 0; $l < $countGrupoVariables; $l++) {

                                    $fkVariables = variableGrupos::where('fk_grupo_variable_id', $request->fk_grupo_variable_id[$l])->get();

                                    if ($fkVariables) {

                                        foreach ($fkVariables as $fkVariable) {

                                            if ($request->fk_animal_id_estudio == $fkVariable->fk_animal_id) {

                                                EstudioIndividuoVariable::create([
                                                    'fk_variable_id' => $fkVariable->fk_variable_id,
                                                    'fk_individio_id' => $storeEGI,
                                                    'fk_estudio_galpon_id' => $storeEG,
                                                    'fk_animal_id' => $request->fk_animal_id_estudio,
                                                    'fk_empresa_id' => $request->fk_empresa_id,
                                                    'fk_granja_id' => $request->fk_granja_id,
                                                    'fk_linea_id' => $request->lineas[$i],
                                                    'fk_galpone_id' => $request->galpones[$i],
                                                    'fecha_estudio_individuo' => $dateStudy,
                                                    'variable_valor' => $null,
                                                    'estado' => 0,
                                                    'fk_estudio_id' => $estudio
                                                        //'fk_grupo_variable_id' => $request->fk_grupo_variable_id[$l]
                                                ]);
                                            }
                                        }
                                    } else {

                                        echo "Lo sentimos, el grupo de variables: (" . $request->fk_grupo_variable_id[$l] . ") No esta asociado a ninguna variable";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        return Redirect::to('/galpon/create?idEmpresa=' . $request->fk_empresa_id . '&idGranja=' . $request->fk_granja_id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //NUEVOSSSSSS

    public function UpdateEstudioGalpon(Request $request) {

        $null = 0;
        $dateStudy = date('Y-m-d H:m:s');

        $estudio = $request->id_estudio_update;

        if ($estudio) {

            $countGrupoVariables = count($request->fk_grupo_variable_id);

            /*
              if ($countGrupoVariables) {

              for ($k=0; $k < $countGrupoVariables; $k++) {

              $storeEGV = EstudioGrupoVariable::create([
              'fk_grupo_variable_id' => $request->fk_grupo_variable_id[$k],
              'fk_estudio_id' => $estudio
              ]);
              }
              }
             */

            $galpones = $request->galpones ? 1 : 2;

            if ($galpones == 1) {

                $countGalpones = count($request->galpones);

                if ($countGalpones > 0) {

                    for ($i = 0; $i < $countGalpones; $i++) {

                        $existsInDb = estudioGalpones::where([
                                    'fk_galpone_id' => $request->galpones[$i],
                                    'estudio_galpon_lote' => $request->lotes[$i]
                                ])->exists();

                        if (!$existsInDb) {

                            $storeEG = estudioGalpones::create([
                                        'fk_estudio_id' => $estudio,
                                        'fk_empresa_id' => $request->fk_empresa_id,
                                        'fk_animal_id' => $request->fk_animal_id_estudio,
                                        'fk_granja_id' => $request->fk_granja_id,
                                        'fk_linea_id' => $request->lineas[$i],
                                        'fk_galpone_id' => $request->galpones[$i],
                                        'individuos_semanas' => $request->semanas[$i],
                                        'individios_genero' => $request->generos[$i],
                                        'estudio_galpon_lote' => $request->lotes[$i],
                                        // 3 variables
                                        'postura' => $request->postura[$i],
                                        'consumo' => $request->consumo[$i],
                                        'huevos' => $request->huevos[$i],
                                    ])->estudio_galpon_id;

                            $individuosTotales = $request->estudio_num_animales;

                            for ($j = 0; $j < $individuosTotales; $j++) {

                                $storeEGI = estudioGalponEndividuos::create([
                                            'fk_estudio_galpon_id' => $storeEG,
                                            'fk_estudio_id' => $estudio,
                                            'fk_animal_id' => $request->fk_animal_id_estudio,
                                            'fk_empresa_id' => $request->fk_empresa_id,
                                            'fk_granja_id' => $request->fk_granja_id,
                                            'fk_linea_id' => $request->lineas[$i],
                                            'fk_galpone_id' => $request->galpones[$i],
                                        ])->individio_id;

                                if ($storeEGI) {

                                    for ($l = 0; $l < $countGrupoVariables; $l++) {

                                        $fkVariables = variableGrupos::where('fk_grupo_variable_id', $request->fk_grupo_variable_id[$l])->get();

                                        if ($fkVariables) {

                                            foreach ($fkVariables as $fkVariable) {

                                                if ($request->fk_animal_id_estudio == $fkVariable->fk_animal_id) {

                                                    EstudioIndividuoVariable::create([
                                                        'fk_variable_id' => $fkVariable->fk_variable_id,
                                                        'fk_individio_id' => $storeEGI,
                                                        'fk_estudio_galpon_id' => $storeEG,
                                                        'fk_animal_id' => $request->fk_animal_id_estudio,
                                                        'fk_empresa_id' => $request->fk_empresa_id,
                                                        'fk_granja_id' => $request->fk_granja_id,
                                                        'fk_linea_id' => $request->lineas[$i],
                                                        'fk_galpone_id' => $request->galpones[$i],
                                                        'fecha_estudio_individuo' => $dateStudy,
                                                        'variable_valor' => $null,
                                                        'estado' => 0,
                                                        'fk_estudio_id' => $estudio
                                                            //'fk_grupo_variable_id' => $request->fk_grupo_variable_id[$l]
                                                    ]);
                                                }
                                            }
                                        } else {

                                            echo "Lo sentimos, el grupo de variables: (" . $request->fk_grupo_variable_id[$l] . ") No esta asociado a ninguna variable";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        return Redirect::to('estudio-galpon-detalle/' . $estudio);
    }

    public function DeleteEstudioGalpon($id) {

        if (is_numeric($id)) {

            $estudio = estudioGalpones::where('estudio_galpon_id', $id)->first();

            if ($estudio) {

                $update = $estudio->update([
                    'estado' => 0
                ]);

                if ($update) {

                    Session::flash('message', 'Galpón eliminado exitosamente');
                } else {

                    Session::flash('message', 'Lo sentimos, no podemos procesar tu solicitud en estos momentos (e1)');
                }
            } else {

                Session::flash('message', 'Lo sentimos, no podemos procesar tu solicitud en estos momentos (e2)');
            }
        }

        return Redirect::to('estudio-galpon-detalle/' . $estudio->fk_estudio_id);
    }

}
