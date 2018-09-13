@extends ('layouts.admin')
@section ('contenido')
<div class="row" >
    <div class="col-md-12" >
        <h3> <strong>{{$empresa->razon_social}}</strong></h3>
        <div class="panel panel-succes" id="DetalleID">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">	
                        <div class="form-group">
                            <label>Nit</label>
                            <p>{{$empresa->nit}}</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">	
                        <div class="form-group">
                            <label>Razon Social</label>
                            <p>{{$empresa->razon_social}}</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">	
                        <div class="form-group">
                            <label>Pais</label>
                            <p>Colombia</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">	
                        <div class="form-group">
                            <label>Municipio</label>
                            <p>{{$empresa->municipio->municipio_nombre}}</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">	
                        <div class="form-group">
                            <label>Departamento</label>
                            <p>{{$empresa->departamento->departamento_nombre}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
        </div>
    </div>
</div>
<div id="vista" class="row">
    <div class="col-md-12">
        <h3>Granjas
            <a href="#">
                <button  v-if="listado1" class="btn btn-success" v-on:click="mostrarListado()" >
                    <i class="fa fa-plus"></i>
                </button>
            </a>
            <a href="" target="_blank"></a>
            <a href="#">
                <button  v-if="listado2" class="btn btn-warning" v-on:click="CerrarListado()" >
                    <i class="fa fa-close"></i>
                </button>
            </a> 
            <a href="" target="_blank"></a>
        </h3>
        @include('parametrizacion.empresa.form.error')
    </div>
    <div class="col-md-12" v-if="listado">
        <div class="listadoColor1">
            <h3 class="titleSection" v-if="listado">Crear Granja</h3>
            {!!Form::open(array('url'=>'granja','method'=>'POST','autocomplete'=>'off','files'=>'true'))!!}
            {{Form::token()}}
            <input type="hidden" name="fk_empresa_id" value="{{$empresa->empresa_id}}" >
            <div class="row">
                <div class="col-md-12">
                    <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                        <div class="form-group">
                            <label for="nombre">Empresa</label>
                            <input type="text" name="empresa"   class="form-control" readonly  value="{{$empresa->nombre_empresa}}">
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                        <div class="form-group">
                            <label for="descripcion">Granja Nombre</label>
                            <input type="text" name="granja_nombre"  class="form-control"  >
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                        <div class="form-group">
                            <button class="btn btn-primary" type="submit">Guardar</button>
                            <button class="btn btn-danger" v-on:click="CerrarListado()"  type="reset">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
            {!!Form::close()!!}
        </div>
    </div>
    <hr>
    <div class="col-md-12 margin-top">
        <div class="table-responsive">
            <table id="empresa" class="table table-striped table-bordered table-condensed">
                <thead id="trId">
                <th>Id</th>
                <!--<th>Empresa</th>-->
                <th>Granja</th>
                <th>Estado</th>
                <th>Acciones</th>
                </thead>
                @foreach($granListado as $key)
                <tr>
                    <td>
                        <a href="{{Route('galpon.create',['idEmpresa'=>$key->fk_empresa_id,'idGranja'=>$key->granja_id])}}">
                            {{$key->granja_id}}
                        </a>
                    </td>
                    <!--<td>
                            <a href="{{Route('galpon.create',['idEmpresa'=>$key->fk_empresa_id,'idGranja'=>$key->granja_id])}}">
                                    {{$key->empresa->nombre_empresa}}
                            </a>
                    </td>-->
                    <td>
                        <a href="{{Route('galpon.create',['idEmpresa'=>$key->fk_empresa_id,'idGranja'=>$key->granja_id])}}">
                            {{$key->granja_nombre}}
                        </a>
                    </td>
                    <td>
                        <a href="{{Route('galpon.create',['idEmpresa'=>$key->fk_empresa_id,'idGranja'=>$key->granja_id])}}">
                            @if($key->estado == 1)
                            Activo
                            @else
                            Inactivo
                            @endif
                        </a>
                    </td>
                    <td>
                        <a href="" data-target="#modal-edit-{{$key->granja_id}}" data-toggle="modal">
                            <button class="btn btn-primary"><i class="fa fa-pencil"></i><span class=""></span></button>
                        </a>
                    </td>
                </tr>
                @endforeach
            </table>
        </div>
    </div>
    <!--Inicio Modal-->
    @foreach($granListado as $key)
    <div class="modal fade modal-slide-in-right" aria-hidden="true"
         role="dialog" tabindex="-1" id="modal-edit-{{$key->granja_id}}">
        {{Form::Open(array('action'=>array('parametrizacion\granjaController@update',$key->granja_id),'method'=>'PUT'))}}
        <input type="hidden" name="fk_empresa_id" value="{{$key->fk_empresa_id}}" >
        <div class="modal-dialog"  >
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true"></span>
                    </button>
                    <h4 class="modal-title"> Accion Modificar</h4>
                </div>
                <div class="modal-body">
                    <div class="box box-primary col-xs-12">
                        <p>Confirme si desea Modificar la Granja "<span><strong>{{$key->granja_nombre}}</strong></span>"</p>
                        <br>
                        <div class="form-group">
                            <label for="nit_eps">Granja Nombre</label>
                            <input type="text" name="granja_nombre" class="form-control"    value="{{$key->granja_nombre}}" >
                        </div>
                        <div class="form-group">
                            <label for="nit_eps">Estado</label>
                            <select name="estado" class="form-control">
                                <option value="0">Activo</option>
                                <option value="1">Inactivo</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                        <button type="submit"    class="btn btn-primary">Modificar</button>
                    </div>
                </div>
            </div>
            {{Form::Close()}}
        </div>
    </div>
    @endforeach
    <!--fin Modal-->
</div>
@stop
@section('scripts')
<script src="{{asset('js/vue.js')}}"></script>
<script type="text/javascript">
new Vue({
    el: "#vista",
    data: {
        listado: false,
        listado1: true,
        listado2: false,
        crear: 0,
        variables: false,
        var2: true,
        var3: false,
    },
    methods: {
        mostrarListado() {
            this.listado = true;
            this.listado1 = false;
            this.listado2 = true;
        },
        CerrarListado() {
            this.listado = false;
            this.listado2 = false;
            this.listado1 = true;
        },
        mostrarVariables() {
            this.variables = true;
            this.var2 = false;
            this.var3 = true;
        },
        CerrarVariables() {
            this.variables = false;
            this.var2 = true;
            this.var3 = false;
        }
    }
});
</script>
@endsection