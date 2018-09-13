<?php

namespace App\Http\Controllers\parametrizacion;

use App\Http\Controllers\Controller;
use App\Estudios\estudios;
use App\parametrizacion\empresa;
use App\parametrizacion\galpon;
use App\parametrizacion\granja;
use App\Animales\animalLinea;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\parametrizacion\animal;
use App\grupoVariables;
use Redirect;
use Session;
use App\Http\Controllers\GlobalController;

class galponController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct() {

        $this->middleware('Roles', ['only' => ['create']]);
    }

    public function index() {
        $galpones = new galpon();
        $galpon = $galpones->getGalpones();
        return view('parametrizacion.galpon.index', compact('galpon'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request) {

        //dd($request->all());

        $idempresa = $request->get('idEmpresa');
        $idgranja = $request->get('idGranja');

        $empresa = DB::select('SELECT em.empresa_id,em.nombre_empresa,gra.granja_nombre,gra.granja_id
            from empresas as em
            inner JOIN empresa_granjas as gra
            on gra.fk_empresa_id=em.empresa_id
            group by em.empresa_id 
        ');

        $empresasListado = empresa::find($idempresa);
        $granjaListado = granja::find($idgranja);
        $galponGranjaID = granja::find($idgranja);
        //dd($galponGranjaID);    
        $animal = animal::all();
        $galponIndividuos = galpon::where('fk_granja_id', '=', $idgranja)->get();
        $animalLinea = animalLinea::all();
        $grupoVariable = grupoVariables::pluck('grupo_nombre', 'grupo_variable_id');
        //dd($galponIndividuos); 

        $listadoGalpon = galpon::with(['empresa', 'granja'])->where('fk_granja_id', '=', $idgranja)
                ->where('fk_empresa_id', '=', $idempresa)
                ->get();
        //$granja= granja::select('granja_id','granja_nombre')->get();

        return view('parametrizacion.galpon.create', compact('empresa', 'empresasListado', 'granjaListado', 'listadoGalpon', 'animal', 'galponIndividuos', 'animalLinea', 'grupoVariable', 'galponGranjaID'));
    }

    public function ShowEGD($id) {

        $query = estudios::find($id);
        $empresasListado = empresa::find($query->fk_empresa_id);
        $granjaListado = granja::find($query->fk_granja_id);
        $galponGranjaID = granja::find($query->fk_granja_id);
        //dd($galponGranjaID);    


        $animal = animal::all();
        $galponIndividuos = galpon::where('fk_granja_id', '=', $query->fk_granja_id)->get();
        $animalLinea = animalLinea::all();
        $grupoVariable = grupoVariables::pluck('grupo_nombre', 'grupo_variable_id');
        //dd($galponIndividuos); 

        $listadoGalpon = galpon::with(['empresa', 'granja'])->where('fk_granja_id', '=', $query->fk_granja_id)
                ->where('fk_empresa_id', '=', $query->fk_empresa_id)
                ->get();

        return view('parametrizacion.galpon.galpon_estudio', compact('empresasListado', 'id', 'query', 'granjaListado', 'listadoGalpon', 'animal', 'galponIndividuos', 'animalLinea', 'grupoVariable', 'galponGranjaID')
        );
    }

    public function ListEstudios() {
        
        if (isset($_GET['show-hidden']) && $_GET['show-hidden'] == '1') {
            $show_hidden = TRUE;
        } else {
            $show_hidden = FALSE;
        }

        $obj = new GlobalController();
        
        /**
         * TODO: aqui hay que mejorar esto, por que puede ser que entre un operario con permisos de variables de granja y el estudio sea
         */

        if ($obj->IsAdmin()) {
            if ($show_hidden) {
                $estudios = estudios::orderBy('estudio_id', 'DESC')
                        ->join('empresas', 'estudios.fk_empresa_id', '=', 'empresas.empresa_id')
                        ->where('empresas.estado', 1)
                        ->get();
            } else {
                $estudios = estudios::orderBy('estudio_id', 'DESC')
                        ->join('empresas', 'estudios.fk_empresa_id', '=', 'empresas.empresa_id')
                        ->where('empresas.estado', 0)
                        ->get();
            }
        } else {

            $estudios = estudios::orderBy('estudio_id', 'DESC')
                    ->join('empresas', 'estudios.fk_empresa_id', '=', 'empresas.empresa_id')
                    ->where('empresas.estado', 0)
                    ->where('fk_user_id', Auth()->user()->id)
                    ->get();
        }

        return view('individuos.estudios', [
            'estudios' => $estudios
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {

        $reglas = [
            'tipo_ambiente' => 'required',
            'sistema_produccion' => 'required',
            'galpon_nombre' => 'required'
        ];


        $this->validate($request, $reglas);

        $idEmpresa = $request->input('fk_empresa_id');
        $granjaId = $request->input('fk_granja_id');

        DB::table('empresa_granja_galpones')->insert([
            'tipo_ambiente' => $request->input('tipo_ambiente'),
            'sistema_produccion' => $request->input('sistema_produccion'),
            'galpon_nombre' => $request->input('galpon_nombre'),
            'fk_granja_id' => $request->input('fk_granja_id'),
            'fk_empresa_id' => $request->input('fk_empresa_id'),
            'estado' => 0
        ]);
        flash()->success('creado exitosamente');
        return Redirect::to('/galpon/create?idEmpresa=' . $idEmpresa . '&idGranja=' . $granjaId);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        $ids = explode('-', $id);
        $empresa = empresa::find($ids[1]);
        $idDepartamento = $empresa->fk_departamento_id;

        $dataGranjas = galpon::find($id);
        $galpones = new galpon();
        $dataShow = $galpones->getEmpresaItem($ids[0], $idDepartamento);
        //dd($dataShow);
        return view('parametrizacion.galpon.show', compact('dataShow', 'dataGranjas'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        $galpon = galpon::find($id);
        //dd($galpon->sistema_produccion);
        $empresa = DB::select('SELECT em.empresa_id,em.nombre_empresa,gra.granja_nombre,gra.granja_id
                 from empresa as em
                 inner JOIN empresa_granjas as gra
                 on gra.fk_empresa_id=em.empresa_id
                group by em.empresa_id 
                   ');

        return view('parametrizacion.galpon.edit', compact('galpon', 'empresa'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        //dd($request->all());   
        $galpones = galpon::find($id);
        $galpones->tipo_ambiente = $request->input('tipo_ambiente');
        $galpones->sistema_produccion = $request->input('sistema_produccion');
        $galpones->fk_empresa_id = $request->input('fk_empresa_id');
        $galpones->fk_granja_id = $request->input('fk_granja_id');
        $galpones->update();

        Session::flash('message', 'Galpon actualizado satisfactoriamente');
        return Redirect::to('galpon/create?idEmpresa=' . $request->input('fk_empresa_id') . '&idGranja=' . $request->input('fk_granja_id'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        $galpon = galpon::find($id);
        $galpon->estado = 1;
        $galpon->update();
        flash()->error('eliminado exitosamente');
        return Redirect::to('/galpon');
    }

}
