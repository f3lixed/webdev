@extends ('layouts.admin')

@section ('contenido')
<!-- info empresa -->
<div class="row" >
    <div class="col-md-12" >
        <h3> <strong>Estudios</strong> creados y <strong>Unidades de producción</strong> de la granja</h3>
        <div class="panel panel-succes" id="DetalleID">
            <div class="panel-heading">
                <h1 class="panel-title">{{$galponGranjaID->empresa->nombre_empresa}} &blacktriangleright; <strong>{{$galponGranjaID->granja_nombre}}</strong></h1>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-12">

        <div id="exTab1" class="container">	
            <ul  class="nav nav-tabs">
                <li class="active">
                    <a  href="#1a" data-toggle="tab">Estudios realizados</a>
                </li>
                <li><a href="#2a" data-toggle="tab">Unidades de producción</a>
                </li>

                </li>
            </ul>
            <div class="tab-content clearfix">
                <div class="tab-pane active" id="1a">
                    <!-- crear estudios -->
                    <div class="row">
                        <br/>
                        <div class="col-md-12">
                            @if(count($galponIndividuos) > 0)
                            <a href="#">
                                <button class="btn btn-success" id="showInfo"><i class="fa fa-plus"> Agregar estudio</i></button>
                            </a>
                            <a href="#">
                                <button class="btn btn-warning" id="hiddenInfo"><i class="fa fa-close"> Cancelar</i></button><br/>
                            </a>
                            @endif
                        </div>
                        <div class="col-md-12" id="contentInfoEstudio">
                            <div class="listadoColor2">
                                <h3>Crear Estudio en la granja: <strong>{{$granjaListado->granja_nombre}}</strong> </h3>
                                {!!Form::open(array('url'=>'estudio','method'=>'POST','autocomplete'=>'on', 'id' => 'formEstudio','name' => 'formEstudio'))!!}
                                {{Form::token()}}
                                <input type="hidden" name="fk_empresa_id" value="{{$empresasListado->empresa_id}}" >
                                <input type="hidden" name="fk_granja_id" value="{{$granjaListado->granja_id}}" >
                                <div class="row">
                                    <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label for="nombre">Empresa</label>
                                            <input type="text" name="empresa" class="form-control" readonly  value="{{$empresasListado->nombre_empresa}}">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label for="descripcion">Granja</label>
                                            <input type="text" name="granja_nombre" class="form-control" readonly  value="{{$granjaListado->granja_nombre}}" >
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-3 col-md-3 col-xs-12">
                                        <div class="form-group">
                                            <label>Animal</label>
                                            <select name="fk_animal_id_estudio" class="form-control">
                                                <option value=>Seleccione una opción</option>
                                                @foreach($animal as $key)
                                                <option value="{{$key->animal_id}}">{{$key->animal_nombre}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-sm-6 col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label for="descripcion">Cantidad de animales</label>
                                            <input type="text" name="estudio_num_animales" class="form-control" placeholder="Digite numero " >
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-sm-6 col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label for="descripcion">Estudio</label>
                                            <input type="text" name="estudio" class="form-control" placeholder="Digite Estudio " >
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-3 col-md-3 col-xs-12">
                                        <div class="form-group">
                                            <label for="cantidad">Grupo Variables</label>
                                            {!!Form::select('fk_grupo_variable_id[]',$grupoVariable, null,["title"=>"seleccionar Grupo" ,"class" => "selectpicker", 
                                            "multiple" => "multiple"])
                                            !!}
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="panel ">
                                        <div class="panel-body">
                                            <h3>Agregar un Galpon al estudio</h3>
                                            <div class="col-lg-4 col-sm-6 col-md-6 col-xs-12 hide" >
                                                <div class="form-group">
                                                    <label for="num_comprobante">Empresa</label>
                                                    <input type="text" name="num_comprobante" readonly   value="{{$empresasListado->nombre_empresa}}" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-sm-6 col-md-6 col-xs-12 hide">
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
                                            <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">
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
                                            <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">
                                                <div class="form-group">
                                                    <label for="stock" id="edad-label">Edad</label>
                                                    <input type="number" id="semana" class="form-control" placeholder="Edad">
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">
                                                <div class="form-group">
                                                    <label>Sexo</label>
                                                    <select id="genero" class="form-control" data-live-search="true">
                                                        <option value="0">Seleccione una opción</option>
                                                        <option value="HEMBRA">HEMBRA</option>
                                                        <option value="MACHOS">MACHO</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">
                                                <div class="form-group">
                                                    <label>Lote</label>
                                                    <input type="text" id="lote" class="form-control" placeholder="Digite lote">
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">
                                                <div class="form-group">
                                                    <label>Porcentaje de postura</label>
                                                    <input type="text" id="postura" class="form-control" placeholder="Digite Porcentaje de postura">
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">
                                                <div class="form-group">
                                                    <label>Consumo de alimento G/Día</label>
                                                    <input type="text" id="consumo" class="form-control" placeholder="Digite Consumo de alimento">
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">
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
                                                    <th>% Postura</th>
                                                    <th>Consumo G/Día</th>
                                                    <th>H.A.A.</th>
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
                    <!-- estudios creados -->
                    <div  class="row">
                        <div class="col-md-12">
                            @php
                            use App\Estudios\estudios;
                            $estudios = estudios::where('fk_empresa_id',$empresasListado->empresa_id)
                            ->where('fk_granja_id',$granjaListado->granja_id)
                            ->get();
                            @endphp
                            @if(count($estudios) > 0)
                            <div class="table-responsive">
                                <table class="table table-bordered table-striped"  id="estudios">
                                    <thead id="trId">
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Fecha</th>
                                    </thead>
                                    <tbody>
                                        @foreach($estudios as $estudio)
                                        <tr>
                                            <td>
                                                {!!link_to_route('estudio-galpon-detalle', $title = $estudio->estudio_id,
                                                $parameters = $estudio->estudio_id, $attributes = ['class' => '']);
                                                !!}
                                            </td>
                                            <td>
                                                {!!link_to_route('estudio-galpon-detalle', $title = $estudio->estudios,
                                                $parameters = $estudio->estudio_id, $attributes = ['class' => '']);
                                                !!}
                                            </td>
                                            <td>
                                                {{$estudio->fecha_estudio}}
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
                    <!-- galpones -->
                </div>



                <div class="tab-pane" id="2a">
                    @include('parametrizacion.message')
                    <div  class="row">
                        <br/>
                        <div class="col-md-12">
                            <a href="#">
                                <button class="btn btn-success" id="showGalpones"><i class="fa fa-plus"> Agregar unidad de producción</i></button>
                            </a>
                            <a href="#">
                                <button class="btn btn-warning" id="hiddenGalpones"><i class="fa fa-close">Cancelar</i></button><br/>
                            </a>
                            @include('parametrizacion.empresa.form.error')			
                            <br/>
                        </div>
                        <div class="col-md-12" id="infoGalponesContent">
                            {!!Form::open(array('url'=>'galpon','method'=>'POST','autocomplete'=>'on','files'=>'true'))!!}
                            <div class="listadoColor2">
                                {{Form::token()}}
                                <input type="hidden" name="fk_empresa_id" value="{{$empresasListado->empresa_id}}" >
                                <input type="hidden" name="fk_granja_id" value="{{$granjaListado->granja_id}}" >
                                <div class="row">
                                    <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label for="nombre">Empresa</label>
                                            <input type="text" name="empresa"   class="form-control" readonly  value="{{$empresasListado->nombre_empresa}}">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label for="descripcion">Unidad de producción</label>
                                            <input type="text" name="galpon_nombre"  class="form-control" placeholder="Nombre Unidad de producción">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label for="descripcion">Ambiente</label>

                                            <select class="form-control" name="tipo_ambiente" placeholder="Digite Sistema Tipo de Ambiente"  >
                                                <option value="jaula">Normal</option>
                                                <option value="otros">Otros</option>

                                            </select>

                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <label for="descripcion">Sistema de Produccion</label>
                                            <select class="form-control" name="sistema_produccion" placeholder="Digite Sistema Produccion"  >
                                                <option value="jaula">Jaula</option>
                                                <option value="piso">Piso</option>
                                                <option value="tradicional">Tradicional</option>
                                                <option value="cama profunda">Cama profunda</option>
                                                <option value="otros">Otros</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <button class="btn btn-primary" type="submit">Guardar</button>
                                            <button class="btn btn-danger" type="reset">Cancelar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {!!Form::close()!!}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            @if(count($listadoGalpon) > 0)
                            <div class="table-responsive">
                                <table class="table table-bordered table-striped">
                                    <thead id="trId">
                                    <th>Id</th>
                                    <!--
                                    <th>Empresa</th>
                                    <th>Granja</th>
                                    -->
                                    <th>Unidad de producción</th>
                                    <th>Sistema Produccion</th>
                                    <th>Tipo Ambiente</th>
                                    <th>Acciones</th>
                                    </thead>
                                    @foreach($listadoGalpon as $key)
                                    <tr>
                                        <td>{{$key->galpone_id}}</td>
                                        <!--
                                        <td>{{$key->empresa->nombre_empresa}}</td>
                                        <td>{{$key->granja->granja_nombre}}</td>
                                        -->
                                        <td>{{$key->galpon_nombre}}</td>
                                        <td>{{$key->sistema_produccion}}</td>
                                        <td>{{$key->tipo_ambiente}}</td>
                                        <td>
                                            <button class="btn btn-info" data-target="#modal-edit-{{$key->galpone_id}}" data-toggle="modal">
                                                <i class="fa fa-pencil"></i>
                                            </button>
                                            <!--  
                                                    <a href="" data-target="#modal-delete-idTabien" data-toggle="modal"><button class="btn btn-danger">Eliminar</button></a>
                                            -->
                                        </td>
                                    </tr>
                                    @endforeach
                                </table>
                            </div>
                            @else
                            <p>Aún no cuenta con galpoones en la granja registrados</p>
                            @endif
                        </div>
                    </div>
                    @include('parametrizacion.galpon.modal')
                </div></div></div></div>

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
        $('#btnStoreInDb').attr('disabled', 'disabled');

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

        function UpdateDropdown(id) {

            $("#galponId").children("option[value^=" + id + "]").attr('disabled', 'disabled');
            //$('#galponId option:selected').remove();
        }
        function limpiar() {

            IdGalpon = $('#galponId').val(0);
            idLinea = $('#lineaId').val(0);
            Semana = $('#semana').val('');
            Genero = $('#genero').val(0);
            Lote = $('#lote').val('');
            // 3 variables
            Postura = $('#postura').val('');
            Consumo = $('#consumo').val('');
            Huevos = $('#huevos').val('');
        }

        function cleanFields() {

            IdGalpon = $('#galponId').val(0);
            idLinea = $('#lineaId').val(0);
            Semana = $('#semana').val('');
            Genero = $('#genero').val(0);
            Lote = $('#lote').val('');
            // 3 variables
            Postura = $('#postura').val('');
            Consumo = $('#consumo').val('');
            Huevos = $('#huevos').val('');
        }

        function eliminar(index, id) {

            $("#fila" + index).remove();
            $("#galponId").children("option[value^=" + id + "]").removeAttr('disabled');
            count = $('tr[id^=fila]').length;
            if (count <= 0) {
                $('#btnStoreInDb').attr('disabled', 'disabled');
            }
        }
    </script>
    @endsection