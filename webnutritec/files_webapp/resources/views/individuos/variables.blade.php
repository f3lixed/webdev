<?php 
/**
 * INDIVIDUO
 */
?>
@extends ('layouts.admin')
@section ('contenido')
	<div class="row">
		<div class="col-md-12"  >
			<!--<h3>Individuos por Galpon (<strong>{{$name}}</strong>)</h3> -->
			@include('parametrizacion.empresa.form.error')
		</div>
		<div class="col-md-12">
                    <h3><strong>Indivuduo</strong> en una unidad de producción del estudio</h3>
			<div class="panel panel-succes" id="DetalleID">
				<div class="panel-heading">
                                   <h1 class="panel-title">{{$galponEstudio->empresa->nombre_empresa}} &blacktriangleright; 
                                        {{$galponEstudio->granja->granja_nombre}}  &blacktriangleright; 
                                        {{$galponEstudio->estudios->estudios}}  &blacktriangleright; 
                                        {{$galponEstudio->galpon->galpon_nombre}}  &blacktriangleright; 
                                        <strong>{{$individuo_id}}</strong>
                                    </h1>
                                    <hr>
					<div class="text-left">
						<div class="row">
							<div class="col-md-4">
								Estudio Galpon ID<br><b>{{$galponEstudio->estudios->estudio_id}}</b>
							</div>
							<div class="col-md-4">
								Animal<br><b>{{$galponEstudio->animal->animal_nombre}}</b>
							</div>
							<div class="col-md-4">
								Empresa<br><b>{{$galponEstudio->empresa->nombre_empresa}}</b>
							</div>
						</div><br>
						<div class="row">
							<div class="col-md-4">
								Granja<br><b>{{$galponEstudio->granja->granja_nombre}}</b>
							</div>
							<div class="col-md-4">
								Línea<br><b>{{$galponEstudio->linea->linea_nombre}}</b>
							</div>
							<div class="col-md-4">
								Galpon<br><b>{{$galponEstudio->galpon->sistema_produccion}}</b>
							</div>
						</div><br>
						<div class="row">
							<div class="col-md-4">
								Semanas Individuo<br><b>{{$galponEstudio->individuos_semanas}} Semana(s)</b>
							</div>
							<div class="col-md-4">
								Genero<br><b>{{$galponEstudio->individios_genero}}</b>
							</div>
							<div class="col-md-4">
								Lote<br><b>{{$galponEstudio->estudio_galpon_lote}}</b>
							</div>
						</div><br>
						<!--
						<div class="row">
							<div class="col-md-4">
								Número de individuos<br><b>{{$galponEstudio->estudios->estudio_num_animales}}</b>
							</div>
						</div>
						-->
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-12 margin-0">
			<h3><strong>VARIABLES</strong> A TOMAR MUESTRA</h3>
			   <div class="row">
			    <div class="col-sm-3">
			 	    <a href="{{url('estudio-galpon-individuos'.'/'.$galponEstudio->estudio_galpon_id)}}" class="btn btn-success">
			 	    	<i class="fa fa-arrow-left"></i> Listado Individuos Por calificar
			 	    </a>
			    </div>	
			    <div class="col-sm-2">
			 	    <a data-toggle="modal" data-target="#allIndividuos" class="btn btn-warning">
			 	    	Asistente de Calificación
			 	   	</a>
			    </div>	
			</div>
			@if(Session::has('message'))
				@if(Session::get('success') == 1)
					<div class="row">
						<div class="col-md-12">
							<div class="alert alert-success alert-dismissible" role="alert">
								<button type="button" class="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								{{Session::get('message')}}
							</div>
						</div>
					</div>
				@else
					<div class="row" style="margin-top: 30px;">
						<div class="col-md-12">
							<div class="alert alert-danger alert-dismissible" role="alert">
								<button type="button" class="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								{{Session::get('message')}}
							</div>
						</div>
					</div>
				@endif
			@endif
			<div class="table-responsive">
				<table class="table table-bordered table-striped" id="individuosTable">
					<thead  id="trId" class="bg-success">
						<th>ID</th>
						<th>Animal</th>
						<th>Granja</th>
						<th>Variable</th>
						<th>Estado</th>
					</thead>
					<tbody>
						@foreach($individuos as $individuo)
						<tr>
							<td>
								<a href="#" data-toggle="modal" data-target="#individuo{{$individuo->fk_individio_id}}{{$individuo->fk_variable_id}}">
									{{$individuo->fk_individio_id}}
								</a>
							</td>
							<td>{{$individuo->animal->animal_nombre}}</td>
							<td>{{$individuo->granja->granja_nombre}}</td>
							<td>{{$individuo->Variable->variable_nombre}}</td>
							<td>
								@if($individuo->estado == 1)
									Completado
								@else
									Pendiente
								@endif
							</td>
						</tr>
						@endforeach
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<!-- MODAL -->
	@foreach($individuos as $individuo)
		<div class="modal fade" id="individuo{{$individuo->fk_individio_id}}{{$individuo->fk_variable_id}}" tabindex="1" role="dialog" aria-labelledby="User">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title text-center">
							Información del Individuo <strong>"{{$individuo->animal->animal_nombre}}"</strong>
							- Variable: #<b>{{$individuo->fk_variable_id}}</b>
						</h4>
					</div>
					<div class="modal-body">
						@include('individuos.show')
						@if($individuo->estado == 1)
							{!!Form::model($individuo,['route'=> ['store/individuo',$individuo],'method' => 'POST','class' => 'formVariablesMinMax', 'enctype' => "multipart/form-data",'files' => true,'id' => 'form'.$individuo->fk_individio_id.$individuo->fk_variable_id, 'onKeypress' => "if(event.keyCode == 13) event.returnValue = false;"])!!}
							<div class="row margin-0">
								<div class="col-md-12">
									@if($individuo->individuo_imagen)
										Imagen estudio<br>
										{!!Html::image(url('imagenes/individuos').'/'.$individuo->individuo_imagen, null, ['width' => '100%'])!!}
									@else
										<b>(No cuenta con una imagen registrada)</b>
									@endif
								</div>
								<div class="col-md-4">
									{!!Form::hidden('fk_individio_id', $individuo->fk_individio_id)!!}
									{!!Form::hidden('fk_estudio_galpon_id', $individuo->fk_estudio_galpon_id)!!}
									{!!Form::hidden('fk_variable_id', $individuo->fk_variable_id)!!}
									<!--nuevos-->
									{!!Form::hidden('variable_min', $individuo->Variable->variable_min,[
										'id' => 'variable_min'.$individuo->fk_individio_id.$individuo->fk_variable_id])
									!!}
									{!!Form::hidden('variable_max_prog', $individuo->Variable->variable_max_prog,[
										'id' => 'variable_max_prog'.$individuo->fk_individio_id.$individuo->fk_variable_id])
									!!}
									{!!Form::hidden('variable_max', $individuo->Variable->variable_max,[
										'id' => 'variable_max'.$individuo->fk_individio_id.$individuo->fk_variable_id])
									!!}
									<!--nuevos-->
									{!!Form::label('variable_valor','Variable Valor')!!}
									{!!Form::text('variable_valor', null, ['class' => 'form-control',
										'placeholder' => 'Ingrese un valor'])
									!!}
								</div>
							</div>
							{!!Form::close()!!}
						@else
							{!!Form::open(['route'=>'store/individuo', 'method' => 'POST','class' => 'formVariablesMinMax', 'enctype' => "multipart/form-data",'files' => true,
							'id' => 'form'.$individuo->fk_individio_id.$individuo->fk_variable_id, 'onKeypress' => "if(event.keyCode == 13) event.returnValue = false;"])!!}
							<div class="row" style="margin-top: 30px">
								<div class="col-md-5">
									<div class="form-group">
										{!!Form::hidden('fk_individio_id', $individuo->fk_individio_id)!!}
										{!!Form::hidden('fk_estudio_galpon_id', $individuo->fk_estudio_galpon_id)!!}
										{!!Form::hidden('fk_variable_id', $individuo->fk_variable_id)!!}
										<!--nuevos-->
										{!!Form::hidden('variable_min', $individuo->Variable->variable_min,[
											'id' => 'variable_min'.$individuo->fk_individio_id.$individuo->fk_variable_id])
										!!}
										{!!Form::hidden('variable_max_prog', $individuo->Variable->variable_max_prog,[
											'id' => 'variable_max_prog'.$individuo->fk_individio_id.$individuo->fk_variable_id])
										!!}
										{!!Form::hidden('variable_max', $individuo->Variable->variable_max,[
											'id' => 'variable_max'.$individuo->fk_individio_id.$individuo->fk_variable_id])
										!!}
										<!--nuevos-->
										{!!Form::label('variable_valor','Variable Valor')!!}
										{!!Form::text('variable_valor',null, ['class' => 'form-control',
											'placeholder' => 'Ingrese un valor'])
										!!}
									</div>
								</div>
								<div class="col-md-7">
									<div class="form-group">
										{!!Form::label('individuo_imagen','Imagen de estudio')!!}
										{!!Form::file('individuo_imagen',null, ['class' => 'form-control', 'id' => 'individuo_imagen'])!!}
									</div>
								</div>
							</div>
							{!!Form::close()!!}
						@endif
					</div>
					<div class="modal-footer">
						<button type="button" onclick="SendForm({{$individuo->fk_individio_id}}{{$individuo->fk_variable_id}})" class="btn btn-primary">
							Almacenar
						</button>
						<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
					</div>
				</div>
			</div>
		</div>
	@endforeach

	<!-- all routes -->
	<div class="modal" tabindex="-1" role="dialog" id="allIndividuos">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title text-center">
						@foreach($paginateIndividuos as $individuo)
							Información del Individuo <strong>"{{$individuo->animal->animal_nombre}}"</strong>
							- Variable: #<b>{{$individuo->fk_variable_id}}</b>
						@endforeach
					</h4>
				</div>
				<div class="modal-body">
					@foreach($paginateIndividuos as $individuo)
						@include('individuos.show')
						{!!Form::model($individuo,['route'=> ['store/individuo',$individuo],'method' => 'POST','class' => 'formVariablesMinMax', 'enctype' => "multipart/form-data",'files' => true,'id' => 'form99'.$individuo->fk_individio_id.$individuo->fk_variable_id, 'onKeypress' => "if(event.keyCode == 13) event.returnValue = false;"])
							!!}
							<div class="row margin-0">
								<div class="col-md-12">
									@if($individuo->individuo_imagen)
										Imagen estudio<br>
										{{-- {!!Html::image(url('imagenes/individuos').'/'.$individuo->individuo_imagen, null, ['width' => '100%'])!!} --}}
										@if(strlen($individuo->individuo_imagen)>30)
										<img src="{{asset($individuo->individuo_imagen)}}" width="100%">
										@else
                                          {!!Html::image(url('imagenes/individuos').'/'.$individuo->individuo_imagen, null, ['width' => '100%'])!!}
                                           {{-- <img src="{{asset('imagenes/individuos/'.$individuo->individuo_imagen)}}"> --}}
										@endif 
									@else
										<b>(No cuenta con una imagen registrada)</b>
									@endif
								</div>
								<div class="col-md-4">
									{!!Form::hidden('fk_individio_id', $individuo->fk_individio_id)!!}
									{!!Form::hidden('fk_estudio_galpon_id', $individuo->fk_estudio_galpon_id)!!}
									{!!Form::hidden('fk_variable_id', $individuo->fk_variable_id)!!}
									<!--nuevos-->
									{!!Form::hidden('variable_min', $individuo->Variable->variable_min,[
										'id' => 'variable_min99'.$individuo->fk_individio_id.$individuo->fk_variable_id])
									!!}
									{!!Form::hidden('variable_max_prog', $individuo->Variable->variable_max_prog,[
										'id' => 'variable_max_prog99'.$individuo->fk_individio_id.$individuo->fk_variable_id])
									!!}
									{!!Form::hidden('variable_max', $individuo->Variable->variable_max,[
										'id' => 'variable_max99'.$individuo->fk_individio_id.$individuo->fk_variable_id])
									!!}
									<!--nuevos-->
									{!!Form::label('variable_valor','Variable Valor')!!}
									{!!Form::text('variable_valor', null, ['class' => 'form-control',
										'placeholder' => 'Ingrese un valor'])
									!!}
									@if(@$_GET['page'])
										{!!Form::hidden('page_id', @$_GET['page'])!!}
									@else
										{!!Form::hidden('page_id', 1)!!}
									@endif
								</div>
								@if(!$individuo->individuo_imagen)
									<div class="col-md-7">
										<div class="form-group">
											{!!Form::label('individuo_imagen','Imagen de estudio')!!}
											{!!Form::file('individuo_imagen',null, ['class' => 'form-control', 'id' => 'individuo_imagen'])!!}
										</div>
									</div>
								@endif
							</div>
						{!!Form::close()!!}
					@endforeach
					      <br>
						<p style="margin-bottom: -20px !important"><strong>Ir a variable:</strong></p>

					{{$paginateIndividuos->links()}}
					<br>
				</div>
				<div class="modal-footer">
					<button type="button" onclick="SendForm(99{{$individuo->fk_individio_id}}{{$individuo->fk_variable_id}})" class="btn btn-primary">
						Almacenar
					</button>
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
@endsection

@section('scripts')
	
	@if(@$_GET['page'])
		<script>
			$('#allIndividuos').modal('show');
		</script>
	@endif

	<script>

		$(document).ready(function() {
			$('#individuosTable').DataTable({
				"searching": true,
				"paginate":false,
				"language": {
					"url": '//cdn.datatables.net/plug-ins/1.10.13/i18n/Spanish.json'
				}
			});
		});

		function SendForm(id){

			var minVal = $('#variable_min'+id).val();
			var maxVal = $('#variable_max'+id).val();
			var maxProgramacion = $('#variable_max_prog'+id).val();
			var valueSend = $('#form'+id+' input[name=variable_valor]').val();

			if ((Number(valueSend) >= Number(minVal)) && Number(Number(valueSend) <= Number(maxProgramacion))) {

				$('#form'+id).submit();
                return true;
			
			}else{

				alert('Mínimo: '+minVal+' | Maximo: '+maxVal+' | Maximo Programación: '+maxProgramacion);
                return false;
			}

			/*
			if (($('#form'+id+' input[name=variable_valor]').val() == '') || (!Number($('#form'+id+' input[name=variable_valor]').val()))) {
				alert('Lo sentimos, el campo variable valor es obligatorio y debe ingresar un valor númerico ');
$('#form'+id+' input[name=variable_valor]').focus();
return false;
}
*/
/*
if ($('#individuo_imagen').val() == '') {
alert('Lo sentimos, debe adjuntar una imagen');
$('#individuo_imagen').focus()
return false;
}
*/
}
</script>
@stop
