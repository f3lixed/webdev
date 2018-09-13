<?php

namespace App\Http\Controllers\Estudios;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Estudios\estudios;
use App\Estudios\estudioGalpones;
use App\Estudios\EstudioGrupoVariable;
use App\Estudios\estudioGalponEndividuos;
use App\Estudios\EstudioIndividuoVariable;
use App\Variable;
use App\parametrizacion\galpon;
use App\EstudioGalponResultados;
use App\variableGrupos;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Input;
use Storage;
use Session;
use App\Http\Controllers\GlobalController;
use App\parametrizacion\empresa;

### includes imgs api
use Intervention\Image\Facades\Image;

class EstudioIndividuoVariableController extends Controller {

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
        //
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
    public function destroy($id) {
        //
    }

    public function ListGalponesIndividuos($id) {

        $galponeEstudio = estudioGalpones::with('estudios', 'animal', 'empresa', 'granja', 'linea', 'galpon')->where('estudio_galpon_id', $id)->first();
        $galpon = galpon::where('galpone_id', $galponeEstudio->fk_galpone_id)->first();
        $individuos = estudioGalponEndividuos::with('animal', 'granja')->where('fk_estudio_galpon_id', $id)->get();
        $resultados = false;
        $Boolean = false;
        $accionComletado = false;

        ///  valido si todo lo del estudio en la tabla individuos variables esta como estado completado
        //$valores = new EstudioIndividuoVariable();

        if (count($individuos) > 0) {

            $resultados = EstudioIndividuoVariable::where([
                        'fk_estudio_galpon_id' => $individuos[0]->fk_estudio_galpon_id,
                        'fk_estudio_id' => $individuos[0]->fk_estudio_id,
                        'estado' => 0
                    ])
                    ->exists();

            $individuosRN = EstudioGalponResultados::where([
                        'fk_estudio_galpon_id' => $individuos[0]->fk_estudio_galpon_id,
                        'fk_estudio_id' => $individuos[0]->fk_estudio_id,
                    ])
                    ->exists();
        }

        if ($resultados) {

            $accionComletado = true;
        }

        if ($individuosRN) {

            $Boolean = true;
        }

        return view('individuos.index', [
            'name' => $galpon->sistema_produccion,
            'individuos' => $individuos,
            'galponEstudio' => $galponeEstudio,
            'accionComletado' => $accionComletado,
            'Boolean' => $Boolean,
        ]);
    }

    public function ListGalponesIndividuosVariables($galponID, $id) {

        $galponeEstudio = estudioGalpones::with('estudios', 'animal', 'empresa', 'granja', 'linea', 'galpon')->where('estudio_galpon_id', $galponID)->first();
        $galpon = galpon::where('galpone_id', $galponeEstudio->fk_galpone_id)->first();

        $individuos = EstudioIndividuoVariable::with('animal', 'granja', 'Variable')
                ->join('variables', 'estudio_individio_variable.fk_variable_id', 'variables.variable_id')
                ->orderBy('variables.con', 'asc')
                ->where('fk_estudio_galpon_id', $galponID)
                ->where('fk_individio_id', $id)
                ->get();

        $paginateIndividuos = EstudioIndividuoVariable::with('animal', 'granja', 'Variable')
                ->join('variables', 'estudio_individio_variable.fk_variable_id', 'variables.variable_id')
                ->orderBy('variables.con', 'asc')
                ->where('fk_estudio_galpon_id', $galponID)
                ->where('fk_individio_id', $id)
                ->paginate(1);

        return view('individuos.variables', [
            'individuo_id' => $id,
            'name' => $galpon->sistema_produccion,
            'individuos' => $individuos,
            'galponEstudio' => $galponeEstudio,
            'paginateIndividuos' => $paginateIndividuos
        ]);
    }

    public function UpdateIndividuo(Request $request) {

        $urlImage = "";

        $page = $request->page_id ? $request->page_id : 0;

        if (is_numeric($request->fk_individio_id) && is_numeric($request->fk_variable_id)) {

            $path = 'imagenes/individuos/';
            //dd($path);

            if (Input::hasFile('individuo_imagen')) {

                $file = Input::file('individuo_imagen');
                $name = "individuo-" . uniqid() . "." . $file->getClientOriginalExtension();
                $file->move($path, $name);
                $urlImage = $name;
            }

            $update = EstudioIndividuoVariable::where('fk_individio_id', $request->fk_individio_id)
                    ->where('fk_variable_id', $request->fk_variable_id)
                    ->update([
                'variable_valor' => $request->variable_valor,
                'individuo_imagen' => $urlImage,
                'estado' => 1
                    ]
            );

            if ($update) {

                Session::flash('success', 1);
                Session::flash('message', 'Variable actualizada exitosamente');
            } else {

                Session::flash('success', 2);
                Session::flash('message', 'No se actualizo ningun dato!!');
            }
        } else {

            Session::flash('success', 2);
            Session::flash('message', 'Solo se pueden procesar datos numericos !!');
        }

        if ($page > 0) {

            if ($page == 28) {

                return Redirect::to('estudio-galpon-variables/' . $request->fk_estudio_galpon_id . '/' . $request->fk_individio_id);
            } else {

                $page += 1;
            }

            return Redirect::to('estudio-galpon-variables/' . $request->fk_estudio_galpon_id . '/' . $request->fk_individio_id . '?page=' . $page);
        } else {

            return Redirect::to('estudio-galpon-variables/' . $request->fk_estudio_galpon_id . '/' . $request->fk_individio_id);
        }
    }

    public function DetalleGrupoVariable($estudio, $grupo) {

        $grupoVariableEstudio = EstudioGrupoVariable::where('fk_estudio_id', $estudio)->where('fk_grupo_variable_id', $grupo)->first();
        return view('parametrizacion.grupo', [
            'grupoVariable' => $grupoVariableEstudio
        ]);
    }

    public function ReporteEstudiosGalpon(Request $request) {

        //dd($request->all());
        $Estudios = estudios::find($request->fk_estudio_id);
        $variables = variableGrupos::with('variablesAnimal')->orderBy('fk_variable_id', 'ASC')->get();

        foreach ($variables as $variable) {

            if ($variable->variablesAnimal->operacion_resultado == 'avg') {

                //promedio
                $RESULT = EstudioIndividuoVariable::where([
                            'fk_variable_id' => $variable->variablesAnimal->variable_id,
                            'fk_estudio_galpon_id' => $request->estudio_galpon_id
                        ])
                        ->select(DB::raw('AVG(variable_valor) AS valorAVG'))
                        ->first();

                //maximo esperado
                $MaximoEsperado = $variable->variablesAnimal->variable_max;

                //nivel de afectacion
                $NivelAfectacion = EstudioIndividuoVariable::where([
                            'fk_variable_id' => $variable->variablesAnimal->variable_id,
                            'fk_estudio_galpon_id' => $request->estudio_galpon_id
                        ])
                        ->where('variable_valor', '<>', 0)
                        ->count();

                $NivelAfectacionResult = ($NivelAfectacion / $Estudios->estudio_num_animales);

                if ($variable->variablesAnimal->ir_operador == '<=') {

                    $BoolIr = ($RESULT->valorAVG <= $variable->variablesAnimal->ir_tolerancia);
                } else if ($variable->variablesAnimal->ir_operador == '=>') {

                    $BoolIr = ($RESULT->valorAVG >= $variable->variablesAnimal->ir_tolerancia);
                }

                if ($BoolIr) {

                    $BoolIrStore = 1;
                } else {

                    $BoolIrStore = 0;
                }

                // calificacion
                if ($variable->variablesAnimal->calificacion_operador == '<=') {

                    $Calificacion = ($RESULT->valorAVG <= $variable->variablesAnimal->calificacion_tolerancia);
                } else if ($variable->variablesAnimal->calificacion_operador == '>=') {

                    $Calificacion = ($RESULT->valorAVG >= $variable->variablesAnimal->calificacion_tolerancia);
                }

                if ($Calificacion) {

                    $CalificacionStore = $variable->variablesAnimal->calificacion_texto_pos;
                } else {

                    $CalificacionStore = $variable->variablesAnimal->calificacion_texto_neg;
                }

                $GrupoVariables = EstudioGrupoVariable::where('fk_estudio_id', $request->fk_estudio_id)
                        ->where('fk_grupo_variable_id', 1)
                        ->first();

                $ISAG = ((($RESULT->valorAVG * $NivelAfectacionResult) * $variable->variablesAnimal->index_g) /
                        ($GrupoVariables->GrupoVariable->constante * $Estudios->estudio_num_animales)
                        );
            } else if ($variable->variablesAnimal->operacion_resultado == 'sum') {

                //promedio
                $RESULT = EstudioIndividuoVariable::where([
                            'fk_variable_id' => $variable->variablesAnimal->variable_id,
                            'fk_estudio_galpon_id' => $request->estudio_galpon_id
                        ])
                        ->select(DB::raw('SUM(variable_valor) AS valorAVG'))
                        ->first();

                //maximo esperado
                $MaximoEsperado = $variable->variablesAnimal->variable_max;

                //nivel de afectacion
                $NivelAfectacion = EstudioIndividuoVariable::where([
                            'fk_variable_id' => $variable->variablesAnimal->variable_id,
                            'fk_estudio_galpon_id' => $request->estudio_galpon_id
                        ])
                        ->where('variable_valor', '<>', 0)
                        ->count();

                $NivelAfectacionResult = ($NivelAfectacion / $Estudios->estudio_num_animales);

                if ($variable->variablesAnimal->ir_operador == '<=') {

                    $BoolIr = ($RESULT->valorAVG <= ($variable->variablesAnimal->ir_tolerancia * $Estudios->estudio_num_animales));
                } else if ($variable->variablesAnimal->ir_operador == '>=') {

                    $BoolIr = ($RESULT->valorAVG >= ($variable->variablesAnimal->ir_tolerancia * $Estudios->estudio_num_animales));
                }

                if ($BoolIr) {

                    $BoolIrStore = 1;
                } else {

                    $BoolIrStore = 0;
                }

                //  calificacion 
                if ($variable->variablesAnimal->calificacion_operador == '<=') {

                    $Calificacion = ($RESULT->valorAVG <= ($variable->variablesAnimal->calificacion_tolerancia * $Estudios->estudio_num_animales));
                } else if ($variable->variablesAnimal->calificacion_operador == '>=') {

                    $Calificacion = ($RESULT->valorAVG >= ($variable->variablesAnimal->calificacion_tolerancia * $Estudios->estudio_num_animales));
                }

                if ($Calificacion) {

                    $CalificacionStore = $variable->variablesAnimal->calificacion_texto_pos;
                } else {

                    $CalificacionStore = $variable->variablesAnimal->calificacion_texto_neg;
                }

                $ISAG = ((($RESULT->valorAVG * $NivelAfectacionResult) * $variable->variablesAnimal->index_g) /
                        ($GrupoVariables->GrupoVariable->constante * $Estudios->estudio_num_animales)
                        );
            }

            $idEstudio = $request->fk_estudio_id;
            $idGalpone = $request->fk_galpone_id;

            $EstudioGalponesId = estudioGalpones::where([
                        'fk_galpone_id' => $idGalpone,
                        'fk_estudio_id' => $idEstudio,
                        'estudio_galpon_id' => $request->estudio_galpon_id,
                        'estado' => 1
                    ])->get();

            $lote = $EstudioGalponesId[0]['estudio_galpon_lote'];

            $IGVlist = EstudioIndividuoVariable::where('fk_estudio_galpon_id', $request->estudio_galpon_id)
                    ->where('fk_variable_id', $variable->variablesAnimal->variable_id)
                    ->first();

            //dd($IGVlist);

            $create = EstudioGalponResultados::create([
                        //request
                        'fk_estudio_galpon_id' => $request->estudio_galpon_id,
                        'fk_estudio_id' => $request->fk_estudio_id,
                        'fk_animal_id' => $request->fk_animal_id,
                        //others
                        'fk_empresa_id' => $IGVlist->fk_empresa_id,
                        'fk_granja_id' => $IGVlist->fk_granja_id,
                        'fk_linea_id' => $IGVlist->fk_linea_id,
                        'fk_galpone_id' => $IGVlist->fk_galpone_id,
                        'fk_variable_id' => $variable->variablesAnimal->variable_id,
                        //results
                        'resultado' => $RESULT->valorAVG,
                        'maximo_esperado' => $MaximoEsperado,
                        'ir' => $BoolIrStore,
                        'nivel_afeccion' => $NivelAfectacion,
                        'porcentaje_afectacion' => $NivelAfectacionResult,
                        'calificacion' => $CalificacionStore,
                        'index_g' => $variable->variablesAnimal->index_g,
                        'isag' => $ISAG,
                        'lote' => $lote
            ]);
        }

        Session::flash('message', 'Reporte generado exitosamente');
        return Redirect::to('estudio-galpon-individuos/' . $request->estudio_galpon_id);
    }

    public function InformeGerencial(Request $request) {

        if (isset($_GET['empresaselect']) && is_numeric($_GET['empresaselect'])) {
            $empresa_id = $_GET['empresaselect'];
            $empresa = empresa::find($empresa_id);
            $nombre_empresa = $empresa->nombre_empresa;
        } else {
            $nombre_empresa = NULL;
        }
        if (isset($_GET['granja']) && is_numeric($_GET['granja'])) {
            $granja_id = $_GET['granja'];
            $granja = \App\parametrizacion\granja::find($granja_id);
            $granja_nombre = $granja->granja_nombre;
        } else {
            $granja_nombre = NULL;
        }
        if (isset($_GET['lote']) && !empty($_GET['lote'])) {
            $lote = $_GET['lote'];
            $html_title = "{$empresa->nombre_empresa} - {$granja->granja_nombre} - Lote: {$lote}";
        } else {
            $html_title = "Eliga los datos para el reporte";
            $lote = NULL;
        }

        $object = new GlobalController();

        if ($object->IsAdmin()) {

            $empresas = empresa::orderBy('nombre_empresa', 'ASC')->where('estado',0)->pluck('nombre_empresa', 'empresa_id');
        } else {

            $empresas = empresa::whereIn('empresa_id', $object->CompaniesPermission())
                    ->orderBy('nombre_empresa', 'ASC')
                    ->pluck('nombre_empresa', 'empresa_id');
        }
        return view('estadisticas.gerencia', [
            'html_title' => $html_title,
            'empresas' => $empresas,
            'empresa_nombre' => $nombre_empresa,
            'granja_nombre' => $granja_nombre,
            'lote' => $lote,
        ]);
    }

    public function UpdateIndividuoApi(Request $request) {

        $data = $request->input('data');


        $img = "";

        if ($data) {

            foreach ($data as $key) {


                if ($key['individuo_imagen']) {

                    $imagen = $key['individuo_imagen'];
                    $dataI = base64_decode($imagen);
                    $filename = "inv-" . uniqid() . ".jpg";
                    $destinationPath = ('imagenes/individuos/');
                    $fullPath = $destinationPath . $filename;
                    // //dd($fullPath);
                    $thumbs = Image::make($dataI)->orientate();
                    // //dd($thumbs);
                    $thumbs->save($fullPath);
                    $img = $fullPath;
                } else {

                    $img = "";
                }



                $update = EstudioIndividuoVariable::where(['fk_individio_id' => $key['fk_individio_id'], 'fk_variable_id' => $key['fk_variable_id']])
                        ->update([
                    'variable_valor' => $key['variable_valor'],
                    'individuo_imagen' => $img,
                    'estado' => 1
                        ]
                );
            }

            return Response()->json('update exitoso');
        }
    }

}
