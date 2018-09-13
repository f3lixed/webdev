<?php

namespace App\Http\Controllers;

use App\EstudioGalponResultados;
use App\Estudios\EstudioGrupoVariable;
use App\Estudios\EstudioIndividuoVariable;
use App\Estudios\estudioGalponEndividuos;
use App\Estudios\estudioGalpones;
use App\Estudios\estudios;
use App\Http\Controllers\Controller;
use App\Variable;
use App\lineapeso;
use App\parametrizacion\galpon;
use Illuminate\Filesystem\response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Maatwebsite\Excel\Facades\Excel;
use Session;
//includes
use App\parametrizacion\empresa;
use App\parametrizacion\granja;

class HomeController extends Controller {

    function AutoGranja(Request $request, $id) {

        if ($request->ajax()) {
            $granja = granja::where('fk_empresa_id', $id)->get();
            return response()->json($granja);
        }
    }

    function AutoGalpon(Request $request, $id) {

        if ($request->ajax()) {
            $galpon = galpon::where('fk_granja_id', $id)->get();
            //dd($galpon);
            return response()->json($galpon);
        }
    }

    function AutoLote(Request $request, $empresa, $granja) {

        if ($request->ajax()) {

            $lote = EstudioGalponResultados::join('estudio_galpones', 'estudio_galpon_resultados.fk_estudio_galpon_id', 'estudio_galpones.estudio_galpon_id')
                    ->where([
                        'estudio_galpon_resultados.fk_empresa_id' => $empresa,
                        'estudio_galpon_resultados.fk_granja_id' => $granja,
                        'estudio_galpones.estado' => 1
                    ])
                    ->where('estudio_galpon_resultados.lote', '!=', null)
                    ->groupBy('estudio_galpon_resultados.lote')
                    ->get();

            return response()->json($lote);
        }
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {


        return view('home');
    }

    public function Estadisticas($galpon, $estudio, $animal) {
        $IndividuoVariable = EstudioIndividuoVariable::with('estudioGalpon')
                ->where([
                    'fk_estudio_galpon_id' => $galpon,
                    'fk_estudio_id' => $estudio,
                        //'fk_variable_id' => 28
                ])
                ->get();

        $EstudioVariable = estudioGalpones::find($galpon);
        $SemanasAnimal = \App\Animales\animalGrupoLineaPeso::where([
                    'peso_id' => $EstudioVariable->individuos_semanas,
                    'fk_linea_id' => $EstudioVariable->fk_linea_id
                ])
                ->first();

        if ($SemanasAnimal) {
            $PromPeso = (($SemanasAnimal->peso_min + $SemanasAnimal->peso_max) / 2);
        } else {

            $PromPeso = 0;
        }

//        $AnimalSemanaDatos = \App\Animales\animalGrupoLineaPeso::where('fk_linea')

        $EstudioGalponResultado = EstudioGalponResultados::with('Variable')
                ->where([
            'fk_estudio_galpon_id' => $galpon,
            'fk_estudio_id' => $estudio
        ]);

        $Estudio = estudios::where('estudio_id', $estudio)->first();
        $html_title = "{$Estudio->fecha_estudio} - {$Estudio->empresa->nombre_empresa} - {$Estudio->granjas->granja_nombre} - Lote: {$EstudioVariable->estudio_galpon_lote}";
        return view('estadisticas.index', [
            'html_title' => $html_title,
            'IndividuoVariable' => $IndividuoVariable,
            'EstudioVariable' => $EstudioVariable,
            'PromPeso' => $PromPeso,
            'EstudioGalponResultado' => $EstudioGalponResultado,
            'Estudio' => $Estudio,
            'SemanasAnimal' => $SemanasAnimal,
            'galpon' => $galpon
        ]);
    }

    public function UpdateAllAnimalsInGalpon($galpon, $estudio, $animal, $status) {

        $IndividuoVariable = EstudioIndividuoVariable::with('estudioGalpon')
                ->where([
                    'fk_estudio_galpon_id' => $galpon,
                    'fk_estudio_id' => $estudio,
                ])
                ->update(['estado' => $status]);

        if ($IndividuoVariable) {

            Session::flash('message', 'Estudio finalizado exitosamente');
        } else {

            Session::flash('message', 'Lo sentimos, no podemos procesar tu solicitud en este momento.');
        }

        return Redirect::to('estudio-galpon-individuos/' . $galpon);
    }

    //export data to excel
    public function ExportDataExcel($galpon, $estudio, $animal) {

        $IndividuoVariable = EstudioIndividuoVariable::with('estudioGalpon')
                ->where([
                    'fk_estudio_galpon_id' => $galpon,
                    'fk_estudio_id' => $estudio,
                        //'fk_variable_id' => 28
                ])
                ->get();

        $EstudioVariable = estudioGalpones::find($galpon);
        $SemanasAnimal = lineapeso::where([
                    'peso_id' => $EstudioVariable->individuos_semanas,
                    'fk_linea_id' => $EstudioVariable->fk_linea_id
                ])
                ->first();

        $EstudioGalponResultado = EstudioGalponResultados::with('Variable')
                ->where([
            'fk_estudio_galpon_id' => $galpon,
            'fk_estudio_id' => $estudio
        ]);

        $Estudio = estudios::where('estudio_id', $estudio)->first();

        $nameFile = date('Y-m-d') . " Reporte de Individuos Resultado";


        Excel::create($nameFile, function($excel) use($nameFile, $IndividuoVariable, $EstudioVariable, $EstudioGalponResultado, $Estudio, $SemanasAnimal) {

            $excel->sheet('Hoja de usuarios', function($sheet) use($nameFile, $IndividuoVariable, $EstudioVariable, $EstudioGalponResultado, $Estudio, $SemanasAnimal) {

                $sheet->setPageMargin(0.25);
                $sheet->setBorder('A1', 'solid');
                $sheet->loadView('excel.individuos', [
                    'IndividuoVariable' => $IndividuoVariable,
                    'EstudioVariable' => $EstudioVariable,
                    'EstudioGalponResultado' => $EstudioGalponResultado,
                    'Estudio' => $Estudio,
                    'SemanasAnimal' => $SemanasAnimal
                ]);
            });
        })->export('xls');

        /*
          return view('excel.individuos',[
          'IndividuoVariable' => $IndividuoVariable,
          'EstudioVariable' => $EstudioVariable,
          'EstudioGalponResultado' => $EstudioGalponResultado,
          'Estudio' => $Estudio,
          'SemanasAnimal' => $SemanasAnimal
          ]);
         */
    }

    public function UpdateDescription(Request $request) {

        $EstudioVariable = estudioGalpones::where('estudio_galpon_id', $request->galpon_id)
                ->where('fk_estudio_id', $request->fk_estudio_id)
                ->update(['description' => $request->description]);

        if ($EstudioVariable) {

            Session::flash('message', 'Estudio actualizado exitosamente');
        } else {

            Session::flash('message', 'Lo sentimos, no podemos procesar tu solicitud en este momento.');
        }

        return Redirect::to('estadisticas/' . $request->galpon_id . '/' . $request->fk_estudio_id . '/' . $request->fk_animal_id);
    }

}
