@extends ('layouts.admin')
@section ('contenido')
{{--@if(Auth()->user()->type1==1) --}}
<div class="row">
    @if(Auth()->user()->type2==1)  	 
    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <h3>
            Listado de Empresas 
            <a href="{{Route('empresa.create')}}"><button class="btn btn-success"><i class="fa fa-plus"></i></button></a> <a href="" target="_blank"></a>
        </h3>
    </div>
    @else
    <div class="col-md-12">
        <p>No cuenta con permisos</p>
    </div>

    @endif
</div>
@include('parametrizacion.message')
<div class="row" style="margin-top: 20px">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="table-responsive">
            <table id="empresa" class="table table-striped table-bordered table-condensed">
                <thead id="trId">
                <th>Id</th>
                <th>Nombre</th>
                <th>Razon social</th>
                <th>Departamento</th>
                <th>Municipio</th>
                <th>Opciones</th>
                </thead>
                @foreach($dataEmpresa as $key)
                <tr> 
                    <td><a href="{{Route('granja.create',["idempresa"=> $key->empresa_id])}}">{{$key->empresa_id}}</a></td>
                    <td><a href="{{Route('granja.create',["idempresa"=> $key->empresa_id])}}">{{$key->nombre_empresa}}</a></td>
                    <td><a href="{{Route('granja.create',["idempresa"=> $key->empresa_id])}}">{{$key->razon_social}}</a> </td>
                    <td><a href="{{Route('granja.create',["idempresa"=> $key->empresa_id])}}">{{$key->departamento_nombre}}</a></td>
                    <td>{{$key->municipio_nombre}} </td>
                    <td>
                        <a href="{{Route('empresa.edit',$key->empresa_id)}}">
                            <button class="btn btn-info"><i class="fa fa-pencil"></i></button>
                        </a>
                        <a href="" data-target="#modal-delete-{{$key->empresa_id}}" data-toggle="modal">
                            <button class="btn btn-danger"><i class="fa fa-trash"></i></button>
                        </a>
                    </td>
                </tr>
                @include('parametrizacion.empresa.modal')
                @endforeach
            </table>
        </div>
    </div>
</div>
{{--@else
     <div class="col-md-12">
        <p>No cuenta con permisos para ver esta informacion Comuniquece con su administrador</p>
	</div>
	@endif--}}
            @endsection