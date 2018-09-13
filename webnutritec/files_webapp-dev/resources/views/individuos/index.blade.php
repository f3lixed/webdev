<?php 
/**
 * GALPON
 */
?>
@extends ('layouts.admin')
@section ('contenido')
<div class="row">
    <div class="col-md-12"  >
        @include('parametrizacion.empresa.form.error')
    </div>
    <div class="col-md-12">
        <h3><strong>Unidad de producción</strong> del Estudio</h3>
        <div class="panel panel-succes" id="DetalleID">
            <div class="panel-heading">
                <h1 class="panel-title">{{$galponEstudio->empresa->nombre_empresa}} &blacktriangleright; 
                    {{$galponEstudio->granja->granja_nombre}}  &blacktriangleright; 
                    {{$galponEstudio->estudios->estudios}}  &blacktriangleright; 
                    <strong>{{$galponEstudio->galpon->galpon_nombre}}</strong>
                </h1>
                <hr>
                <div class="text-left">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">	
                            <div class="form-group">
                                <label>Animal</label>
                                <p>{{$galponEstudio->animal->animal_nombre}}</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">	
                            <div class="form-group">
                                <label>Línea</label>
                                <p>{{$galponEstudio->linea->linea_nombre}}</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">	
                            <div class="form-group">
                                <label>Galpon</label>
                                <p>{{$galponEstudio->galpon->sistema_produccion}}</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">	
                            <div class="form-group">
                                <label>Semanas Individuo</label>
                                <p>{{$galponEstudio->individuos_semanas}} Semana(s)</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">	
                            <div class="form-group">
                                <label>Genero</label>
                                <p>{{$galponEstudio->individios_genero}}</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">	
                            <div class="form-group">
                                <label>Lote</label>
                                <p>{{$galponEstudio->estudio_galpon_lote}}</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">	
                            <div class="form-group">
                                <label>Número de individuos</label>
                                <p>{{$galponEstudio->estudios->estudio_num_animales}}</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">	
                            <div class="form-group">
                                <label>Porcentaje de postura</label>
                                <p>{{$galponEstudio->postura}}</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">	
                            <div class="form-group">
                                <label>Consumo de Alimento G/Día</label>
                                <p>{{$galponEstudio->consumo}}</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 col-md-6 col-xs-12">	
                            <div class="form-group">
                                <label>Huevos ave alojada</label>
                                <p>{{$galponEstudio->huevos}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12"  >
            <h3><strong>Listado de Individuos</strong> en la unidad de producciòn</h3>
        </div>
        <div class="col-md-3">   
            @if($accionComletado)
            Aún existen individuos pendientes por completar su valor				
            @else
            @if($Boolean)
            <a class="btn btn-primary" href="{{url('estadisticas').'/'.$galponEstudio->estudio_galpon_id .'/'.$galponEstudio->estudios->estudio_id.'/'.$galponEstudio->estudios->fk_animal_id}}">
                <i class="fa fa-file-o" aria-hidden="true"></i> Ver al reporte
            </a>
            @else
            <a href="{{route('reportes-estudio-galpon',
				          ['estudio_galpon_id'=>$galponEstudio->estudio_galpon_id,
				                     'fk_estudio_id'=>$galponEstudio->fk_estudio_id,
				                     'fk_animal_id'=>$galponEstudio->estudios->fk_animal_id,
				                      'fk_galpone_id'=>$galponEstudio->fk_galpone_id 
				          ]
				          )}}" class="btn btn-primary"> Generar Reporte
            </a>
            @endif				    
            @endif
        </div>
        <div class="col-md-3">
            @if($accionComletado)
            <a href="{{route('estudio-variable-update',
				     	['estudio_galpon_id'=>$galponEstudio->estudio_galpon_id,
		              		'fk_estudio_id'=>$galponEstudio->fk_estudio_id,
		              		'fk_animal_id'=>$galponEstudio->estudios->fk_animal_id,
		              		'status' => 1
				     	]
				      )}}" class="btn btn-success"> 
                <i class="fa fa-check" aria-hidden="true"></i> Terminar estudio
            </a>
            @else
            <a href="{{route('estudio-variable-update',
				     	['estudio_galpon_id'=>$galponEstudio->estudio_galpon_id,
		              		'fk_estudio_id'=>$galponEstudio->fk_estudio_id,
		              		'fk_animal_id'=>$galponEstudio->estudios->fk_animal_id,
		              		'status' => 0
				     	]
				      )}}" class="btn btn-success"> 
                <i class="fa fa-check" aria-hidden="true"></i> Modificar estudio
            </a>

            @endif
        </div>
        <div class="col-md-12">
            @include('parametrizacion.message')
        </div>
        <div class="col-md-12 margin-0">
            <div class="table-responsive">
                <table class="table table-bordered table-striped" id="individuosTable">
                    <thead  id="trId" class="bg-success">
                    <th>ID</th>
                    <th>Animal</th>
                    <th>Granja</th>
                    </thead>
                    <tbody>
                        @foreach($individuos as $individuo)
                        <tr>
                            <td>
                                <a href="{{url('estudio-galpon-variables').'/'.intval($individuo->fk_estudio_galpon_id).'/'.$individuo->individio_id}}">
                                    {{$individuo->individio_id}}
                                </a>
                            </td>
                            <td>{{$individuo->animal->animal_nombre}}</td>
                            <td>{{$individuo->granja->granja_nombre}}</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    @endsection

    @section('scripts')

    <script>

        $(document).ready(function () {
            $('#individuosTable').DataTable({
                "searching": true,
                "paginate": false,
                "language": {
                    "url": '//cdn.datatables.net/plug-ins/1.10.13/i18n/Spanish.json'
                }
            });
        });

        function SendForm(id) {
            if (($('#form' + id + ' input[name=variable_valor]').val() == '') || (!Number($('#form' + id + ' input[name=variable_valor]').val()))) {
                alert('Lo sentimos, el campo variable valor es obligatorio y debe ingresar un valor númerico ');
                $('#form' + id + ' input[name=variable_valor]').focus();
                return false;
            }
            /*
             if ($('#individuo_imagen').val() == '') {
             alert('Lo sentimos, debe adjuntar una imagen');
             $('#individuo_imagen').focus()
             return false;
             }
             */
            $('#form' + id).submit();
        }
    </script>
    @stop