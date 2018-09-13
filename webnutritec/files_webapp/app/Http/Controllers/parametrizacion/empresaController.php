<?php

namespace App\Http\Controllers\parametrizacion;

use App\Http\Controllers\Controller;
use App\Http\Controllers\parametrizacion\galpon;
use App\parametrizacion\departamento;
use App\parametrizacion\municipio;
use App\parametrizacion\empresa;
use Illuminate\Http\Request;
use App\parametrizacion\granja;
use Illuminate\Support\Facades\DB;
use Redirect;
use Session;
#includes
use App\Http\Controllers\GlobalController;
use App\Http\Requests\empresaRequest;
use Illuminate\Routing\Route;

class empresaController extends Controller {

    public function index() {
        if (isset($_GET['show-hidden']) && $_GET['show-hidden'] == '1') {
            $show_hidden = TRUE;
        } else {
            $show_hidden = FALSE;
        }
        $object = new GlobalController();

        if ($object->IsAdmin()) {

            $empresa = new empresa();
            if ($show_hidden) {
                $dataEmpresa = $empresa->getEmpresasHidden();
            } else {
                $dataEmpresa = $empresa->getEmpresas();
            }
            return view('parametrizacion.empresa.index', compact('dataEmpresa'));
        } else {

            $empresa = new empresa();
            $dataEmpresa = $empresa->getEmpresasFilter($object->CompaniesPermission());
            return view('parametrizacion.empresa.index', compact('dataEmpresa'));
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request) {



        $empresaId = $request->get('idAnimal');
        $granListado = granja::with('empresa')->where('fk_empresa_id', $empresaId);
        $departamento = departamento::orderBy('departamento_nombre', 'ASC')->pluck('departamento_nombre', 'departamento_id');
        $ciudad = [];
        //dd($departamento);
        return view('parametrizacion.empresa.create', compact("departamento", "granListado", 'ciudad'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function galpon($id) {

        $galpon = new empresa();
        return $galpon->dataPrueba($id);
    }

    public function store(empresaRequest $request) {

        $idEmpresa = $request->input();
        $status = 0;
        $pais = 1;

        DB::table('empresas')->insert([
            'fk_pais_id' => $pais,
            'fk_departamento_id' => $request->input('fk_departamento_id'),
            'fk_municipio_id' => $request->input('fk_municipio_id'),
            'nit' => $request->input('nit'),
            'nombre_empresa' => $request->input('nombre_empresa'),
            'razon_social' => $request->input('razon_social'),
            'estado' => $status
        ]);

        Session::flash('message', 'Empresa creada satisfactoriamente');
        return Redirect::to('empresa');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {

        //eloquent
        $data2 = empresa::find($id);

        $departamento = DB::select('select departamento_id,departamento_nombre  from  departamento');

        //$departamento2= departamento::select('departamento_nombre','departamento_id')->get();
        $departamento = departamento::orderBy('departamento_nombre', 'ASC')->pluck('departamento_nombre', 'departamento_id');
        $ciudad = municipio::where('fk_departamento_id', $data2->fk_departamento_id)->pluck('municipio_nombre', 'municipio_id');
        //dd($departamento2);
        //dd($data2)
        /// select
        $var = DB::select("SELECT em.empresa_id, em.nombre_empresa,m.municipio_nombre,de.departamento_nombre
		    from empresas as em
		    INNER JOIN departamento as de
		    on de.departamento_id=em.fk_departamento_id
		    inner JOIN municipio as m
		     on de.departamento_id= m.fk_departamento_id
		   where em.empresa_id=$id
		    GROUP by em.empresa_id");
        ///query builder
        $empresa = DB::table('empresas as em')
                ->join('departamento as di', 'em.fk_departamento_id', '=', 'di.departamento_id')
                ->join('municipio as m', 'em.fk_municipio_id', '=', 'm.municipio_id')
                ->select('em.empresa_id', 'em.nombre_empresa', 'di.departamento_id', 'di.departamento_nombre', 'm.municipio_id as empresa_id', 'm.municipio_nombre')
                ->where('em.empresa_id', '=', $id)
                ->groupBy('em.empresa_id')
                ->get();

        //dd($empresa);    

        return view('parametrizacion.empresa.edit', compact('var', 'empresa', 'data2', 'departamento', 'departamento2', 'base', 'ciudad'));
    }

    public function EditCombo($i) {

        $ciudades = DB::select('SELECT m.municipio_id, d.departamento_nombre,m.municipio_nombre
		from municipio as m
		inner JOIN departamento as d
		on m.fk_departamento_id= d.departamento_id
		where  d.departamento_id=' . $id . '');
        return $ciudades;
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

        $reglas = [
            'fk_departamento_id' => 'required',
            'fk_municipio_id' => 'required'
        ];

        $this->validate($request, $reglas);

        $departamento_id = $request->input('fk_departamento_id');
        $municipio_id = $request->input('fk_municipio_id');
        $idDepartamento = empresa::where('fk_departamento_id', $departamento_id)->where('fk_municipio_id', $municipio_id)->exists();

        $empresa = empresa::find($id);
        $empresa->nit = $request->input('nit');
        $empresa->nombre_empresa = $request->input('nombre_empresa');
        $empresa->razon_social = $request->input('razon_social');
        $empresa->fk_departamento_id = $request->input('fk_departamento_id');
        $empresa->fk_municipio_id = $request->input('fk_municipio_id');

        $empresa->update();

        Session::flash('message', 'Empresa editada satisfactoriamente');
        return Redirect::to('empresa');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {

        $empresa = empresa::find($id);
        $empresa->estado = 1;
        $empresa->update();
        Session::flash('message', 'Empresa eliminada satisfactoriamente');
        return Redirect::to('empresa');
    }

}
