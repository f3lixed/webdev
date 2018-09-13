<?php
/**
 * ESTUDIO
 */
?>
@extends ('layouts.admin')

@section ('contenido')
<!-- info empresa -->
@php
use App\Estudios\EstudioGrupoVariable;
$grupoVariableEstudio = EstudioGrupoVariable::where('fk_estudio_id',$id)
->get();
@endphp

<div class="row" >
    <div class="col-md-12" >
        <h3><strong>Estudio</strong></h3>
        <div class="panel panel-succes" id="DetalleID">
            <div class="panel-heading">
                <h1 class="panel-title">
                    {{$query->empresa->nombre_empresa}} &blacktriangleright; 
                    {{$query->granjas->granja_nombre}} &blacktriangleright; 
                    <strong>{{$query->estudios}}</strong>
                </h1>
                <hr>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 col-md-6 col-xs-12">	
                        <div class="form-group">
                            <label>ID de estudio</label>
                            <p>{{$galponGranjaID->granja_id}}</p>
                        </div>
                    </div>	
                    <div class="col-lg-4 col-sm-6 col-md-6 col-xs-12">	
                        <div class="form-group">
                            <label>Grupos de variables</label>
                            <p>
                                @foreach($grupoVariableEstudio as $estudio)
                                {{$estudio->GrupoVariable->grupo_nombre}} 
                                @endforeach
                            </p>
                        </div>
                    </div>	
                    <div class="col-lg-4 col-sm-6 col-md-6 col-xs-12">	
                        <div class="form-group">
                            <label>Animal</label>
                            <p>{{$query->animal->animal_nombre}}</p>
                        </div>
                    </div>	
                    <div class="col-lg-4 col-sm-6 col-md-6 col-xs-12">	
                        <div class="form-group">
                            <label>Número de animales</label>
                            <p>{{$query->estudio_num_animales}}</p>
                        </div>
                    </div>	
                    <div class="col-lg-4 col-sm-6 col-md-6 col-xs-12">	
                        <div class="form-group">
                            <label>Fecha</label>
                            <p>{{$query->fecha_estudio}}</p>
                        </div>
                    </div>
                </div>
                <br>
            </div>
        </div>
    </div>
</div>
<!-- Grupos de variables 
<div  class="row">
    <div class="col-md-12">
        <div class="row">
            <div class="col-md-12">
                <h3>Grupos de Variable</h3>
            </div>
        </div>
        @if(count($grupoVariableEstudio) > 0)
        <div class="table-responsive">
            <table class="table table-bordered table-striped"  id="estudios">
                <thead id="trId">
                <th>Nombre Estudio</th>
                </thead>
                <tbody>
                    @foreach($grupoVariableEstudio as $estudio)
                    <tr>
                        <td>
                            <a href="{{url('grupo-variable-estudio').'/'.$estudio->fk_estudio_id.'/'.$estudio->fk_grupo_variable_id}}">
                                {{$estudio->GrupoVariable->grupo_nombre}}
                            </a>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        @else
        <p>Aún no cuenta con grupos de variables asociados al estudio</p>
        @endif
    </div>
</div>-->
<!-- estudios creados -->
<div  class="row">
    <div class="col-md-12">
        @include('parametrizacion.message')
    </div>
    <div class="col-md-12">
        <div class="row">
            <div class="col-md-12">
                <h3><strong>Unidades de producciòn</strong> en el estudio 
                    @if(count($galponIndividuos) > 0)
                    <!--                    <a href="#">
                                            <button class="btn btn-success" id="showInfo"><i class="fa fa-plus"></i></button>
                                        </a>
                                        <a href="#">
                                            <button class="btn btn-warning" id="hiddenInfo"><i class="fa fa-close"></i></button>
                                        </a>-->
                    @endif
                </h3>
            </div>
        </div>
        <div class="row">
            @php

            use App\Estudios\estudios;
            use App\Estudios\estudioGalpones;

            //listado de galpones del estudio
            $estudioGalpon = estudioGalpones::where([
            'fk_estudio_id' => $id,
            'estado' =>  1
            ])->get();
            //informacion del estudio
            $estudioInfo = estudios::find($id);

            @endphp

            <div class="col-md-12" id="contentInfoEstudio">
                <div class="listadoColor2">
                    {!!Form::open(array('url'=>'estudio/update','method'=>'POST','autocomplete'=>'on', 'id' => 'formEstudio','name' => 'formEstudio'))!!}
                    {{Form::token()}}
                    {!!Form::hidden('id_estudio_update', $id)!!}
                    <input type="hidden" name="fk_empresa_id" value="{{$empresasListado->empresa_id}}" >
                    <input type="hidden" name="fk_granja_id" value="{{$granjaListado->granja_id}}" >
                    <input type="hidden" name="fk_granja_id" value="{{$granjaListado->granja_id}}" >
                    <div class="row">
                        <div class="panel ">
                            <div class="panel-body">
                                <h3>Agregar un Galpon al estudio</h3>
                                <div class="col-lg-2 col-sm-6 col-md-6 col-xs-12">
                                    <div class="form-group">
                                        <label for="num_comprobante">Empresa</label>
                                        <input type="text" name="num_comprobante" readonly   value="{{$empresasListado->nombre_empresa}}" class="form-control">
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-6 col-md-6 col-xs-12">
                                    <div class="form-group">
                                        <label for="num_comprobante">Granja</label>
                                        <input type="text" name="num_comprobante" readonly   value="{{$granjaListado->granja_nombre}}" class="form-control" >
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">
                                    <div class="form-group">
                                        <label>Unidades de producciòn</label>
                                        <select class="form-control " id="galponId" data-live-search="true">
                                            <option value="0">Seleccione una opción</option>
                                            @foreach($galponIndividuos as $key)
                                            <option value="{{$key->galpone_id}}">{{$key->galpon_nombre}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-6 col-md-6 col-xs-12">
                                    <div class="form-group">
                                        <label for="cantidad">Lineas Animal</label>
                                        <select id="lineaId" class="form-control" onchange="CambiarEdadLabel(this);">
                                            <option value="0">Seleccione una opción</option>
                                            @foreach($animalLinea as $key)
                                            <option value="{{$key->linea_id}}">{{$key->linea_nombre}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-6 col-md-6 col-xs-12">
                                    <div class="form-group">
                                        <label for="stock" id="edad-label">Edad</label>
                                        <input type="number" id="semana" class="form-control" placeholder="Edad">
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-6 col-md-6 col-xs-12">
                                    <div class="form-group">
                                        <label>Sexo</label>
                                        <select id="genero" class="form-control" data-live-search="true">
                                            <option value="0">Seleccione una opción</option>
                                            <option value="HEMBRA">HEMBRA</option>
                                            <option value="MACHOS">MACHO</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-6 col-md-6 col-xs-12">
                                    <div class="form-group">
                                        <label>Lote</label>
                                        <input type="text" id="lote" class="form-control" placeholder="Digite lote">
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-6 col-md-6 col-xs-12">
                                    <div class="form-group">
                                        <label>Porcentaje de postura</label>
                                        <input type="text" id="postura" class="form-control" placeholder="Digite Porcentaje de postura">
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-6 col-md-6 col-xs-12">
                                    <div class="form-group">
                                        <label>Consumo de alimento G/Día</label>
                                        <input type="text" id="consumo" class="form-control" placeholder="Digite Consumo de alimento">
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-6 col-md-6 col-xs-12">
                                    <div class="form-group">
                                        <label>Huevos ave alojada</label>
                                        <input type="text" id="huevos" class="form-control" placeholder="Digite Huevos ave alojada">
                                    </div>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12">
                                    <div class="form-group">
                                        <button type="button" onclick="return AgregarItemTable()" class="btn btn-primary">Agregar</button>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12">
                                    <table id="detalles" class="table table-striped table-bordered table-condensed table-hover">
                                        <thead style="background-color:#A9D0F5">
                                        <th>Opciones</th>
                                        <th>Galpon</th>
                                        <th>lineas</th>
                                        <th>edad</th>
                                        <th>Sexo</th>
                                        <th>Lote</th>
                                        <th>Postura</th>
                                        <th>Consumo</th>
                                        <th>Huevos</th>
                                        </thead>
                                        <tbody></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12" id="guardar">
                            <div class="form-group"  class="text-center">
                                <button class="btn btn-primary" type="submit" id="btnStoreInDb">Guardar</button>
                                <button class="btn btn-danger">Cancelar</button>
                            </div>
                        </div>
                    </div>
                    {!!Form::close()!!}
                </div>
            </div>
        </div>
        @if(count($estudioGalpon) > 0)
        <div class="table-responsive">
            <table class="table table-bordered table-striped"  id="estudios">
                <thead id="trId">
                <th>Id</th>
                <th>Nombre Estudio</th>
                <th>Unidad de producciòn</th>
                <th>Eliminar</th>
                </thead>
                <tbody>
                    @foreach($estudioGalpon as $estudio)
                    <tr>
                        <td>{{$estudio->estudio_galpon_id}}</td>
                        <td>{{$estudio->estudios->estudios}}</td>
                        <td>
                            {!!link_to_route('estudio-galpon-individuos', $title = $estudio->galpon->galpon_nombre,
                            $parameters = $estudio->estudio_galpon_id, $attributes = ['class' => '']);
                            !!}
                        </td>
                        <td>
                            {!!link_to_route('estudio/delete', $title = '', $parameters = $estudio->estudio_galpon_id, 
                            $attributes = ['class' => 'btn btn-danger btn-sm fa fa-trash','onclick' => 'return ConfirmAction();']);
                            !!}
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        @else
        <p>Aún no cuenta con estudios en la granja registrados</p>
        @endif
    </div>
</div>
@include('parametrizacion.galpon.modal')
@stop

@section('scripts')
{!!Html::script('js/validate.js')!!}
{!!Html::script('js/validations.js')!!}
<script type="text/javascript">

    $(document).ready(function () {

        $('#estudios').DataTable({
            "searching": true,
            "paginate": false,
            "language": {
                "url": '//cdn.datatables.net/plug-ins/1.10.13/i18n/Spanish.json'
            }
        });
    });

    $('#hiddenInfo').hide();
    $('#contentInfoEstudio').hide();

    $('#showInfo').click(function () {
        $('#contentInfoEstudio').show();
        $('#hiddenInfo').show();
        $('#showInfo').hide();
    });

    $('#hiddenInfo').click(function () {
        $('#contentInfoEstudio').hide();
        $('#hiddenInfo').hide();
        $('#showInfo').show();
    });

    $('#hiddenGalpones').hide();
    $('#infoGalponesContent').hide();

    $('#showGalpones').click(function () {
        $('#infoGalponesContent').show();
        $('#hiddenGalpones').show();
        $('#showGalpones').hide();
    });

    $('#hiddenGalpones').click(function () {
        $('#infoGalponesContent').hide();
        $('#hiddenGalpones').hide();
        $('#showGalpones').show();
    });

    $('#btnSend').click(function () {
        if (($('#variable_valor').val() == '') || (!Number($('#variable_valor').val()))) {
            alert('Lo sentimos, el campo variable valor es obligatorio y debe ingresar un valor númerico ');
            $('#variable_valor').focus();
            return false;
        }
        if ($('#individuo_imagen').val() == '') {
            alert('Lo sentimos, debe adjuntar una imagen');
            $('#individuo_imagen').focus()
            return false;
        }
        $('#form').submit();
    });

</script>
<script type="text/javascript">

    var count = 0;
    var IdsGalpon = [];
    function CambiarEdadLabel(id) {
        idLinea = $('#lineaId').val();
        if (idLinea == 7 || idLinea == 8) {
            $('#edad-label').html('Edad en días');
        } else {
            $('#edad-label').html('Edad en Semanas');
        }
    }
    function AgregarItemTable() {
        IdGalpon = $('#galponId').val();
        GalponTxt = $('#galponId option:selected').text();
        idLinea = $('#lineaId').val();
        LineaTxt = $('#lineaId option:selected').text();
        Semana = $('#semana').val();
        Genero = $('#genero').val();
        Lote = $('#lote').val();
        // 3 variables
        Postura = $('#postura').val();
        Consumo = $('#consumo').val();
        Huevos = $('#huevos').val();

        if ((!Number(IdGalpon)) && (Number(IdGalpon) == 0)) {
            alert('Debe seleccionar un galpon');
            $('#galponId').focus();
            return false;
        }
        if ((!Number(idLinea)) && (Number(idLinea) == 0)) {
            alert('Debe seleccionar una linea animal');
            $('#lineaId').focus();
            return false;
        }
        if ((!Number(Semana)) && (Number(Semana) == 0)) {
            alert('Debe digitar un número de semanas valido (numerico)');
            $('#semana').focus();
            return false;
        }
        if ((!Number(Genero)) && (Number(Genero) == 0)) {
            alert('Debe seleccionar un genero');
            $('#genero').focus();
            return false;
        }
        if (($('#lote').val().length <= 1)) {
            alert('Lo sentimos, debe ingresar un lote valido, minimo de 2 caracteres');
            $('#lote').focus();
            return false;
        }
        var row = '<tr class="selected" id="fila' + count + '">\n\
<td><button type="button" class="btn btn-warning" onclick="eliminar(' + count + ',' + IdGalpon + ');">X</button></td>\n\
<td><input type="hidden" name="galpones[]" value="' + IdGalpon + '"><p>' + GalponTxt + '</p></td>\n\
<td><input type="hidden" name="lineas[]" value="' + idLinea + '"><p>' + LineaTxt + '</p></td>\n\
<td><input type="hidden" name="semanas[]" value="' + Semana + '"><p>' + Semana + '</p></td>\n\
<td><input type="hidden" name="generos[]" value="' + Genero + '"><p>' + Genero + '</p></td>\n\
<td><input type="hidden" name="lotes[]" value="' + Lote + '"><p>' + Lote + '</p></td>\n\
<td><input type="hidden" name="postura[]" value="' + Postura + '"><p>' + Postura + '</p></td>\n\
<td><input type="hidden" name="consumo[]" value="' + Consumo + '"><p>' + Consumo + '</p></td>\n\
<td><input type="hidden" name="huevos[]" value="' + Huevos + '"><p>' + Huevos + '</p></td>\n\
</tr>';
        IdsGalpon.push(IdGalpon);
        count++;
        UpdateDropdown(IdGalpon);
        limpiar();
        $('#detalles').append(row);
        $('#btnStoreInDb').removeAttr('disabled');
    }

    function UpdateDropdown() {

        $('#galponId option:selected').remove();
    }
    function limpiar() {

        IdGalpon = $('#galponId').val(0);
        idLinea = $('#lineaId').val(0);
        Semana = $('#semana').val('');
        Genero = $('#genero').val(0);
        Lote = $('#lote').val('');
    }

    function cleanFields() {

        IdGalpon = $('#galponId').val(0);
        idLinea = $('#lineaId').val(0);
        Semana = $('#semana').val('');
        Genero = $('#genero').val(0);
        Lote = $('#lote').val('');
    }

    function eliminar(index) {

        $("#fila" + index).remove();
    }

    function ConfirmAction() {

        if (confirm('¿Esta seguro de eliminar este galpón?')) {
            return true;
        } else {
            return false;
        }
    }
</script>
@endsection