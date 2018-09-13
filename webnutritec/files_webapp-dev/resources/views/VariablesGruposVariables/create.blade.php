@extends ('layouts.admin')
@section ('contenido')
	<!-- ficha tecnica -->
	@if(count($variablesGrupos) > 0)
	<div class="row">
		<div class="col-md-12">
			<div id="DetalleID" style="padding: 15px">
				<h4><strong>{{$variablesGrupos[0]->variablesAnimal->variable_nombre}}</strong></h4><hr>
				<div class="row">
					<div class="col-md-4">
						ID<br> <strong>{{$variablesGrupos[0]->variablesAnimal->variable_id}}</strong>
					</div>
					<div class="col-md-4">
						ANIMAL<br> <strong>{{$variablesGrupos[0]->animal->animal_nombre}}</strong>
					</div>
					<div class="col-md-4">
						VARIABLES MACRO<br> <strong>{{$variablesGrupos[0]->variablesAnimal->variables_macro}}</strong>
					</div>
				</div>
				<div class="row margin-0">
					<div class="col-md-4">
						MIN<br> <strong>{{$variablesGrupos[0]->variablesAnimal->variable_min}}</strong>
					</div>
					<div class="col-md-4">
						MAX<br> <strong>{{$variablesGrupos[0]->variablesAnimal->variable_max}}</strong>
					</div>
					<div class="col-md-4">
						INDEX G<br> <strong>{{$variablesGrupos[0]->variablesAnimal->index_g}}</strong>
					</div>
				</div>
				<div class="row margin-0">
					<div class="col-md-4">
						IR OPERADOR<br> <strong>{{$variablesGrupos[0]->variablesAnimal->ir_operador}}</strong>
					</div>
					<div class="col-md-4">
						CALIFICACIÓN OPERADOR<br> <strong>{{$variablesGrupos[0]->variablesAnimal->calificacion_operador}}</strong>
					</div>
					<div class="col-md-4">
						IR TOLERANCIA<br> <strong>{{$variablesGrupos[0]->variablesAnimal->ir_tolerancia}}</strong>
					</div>
				</div>
				<div class="row margin-0">
					<div class="col-md-4">
						CALIFICACIÓN TOLERANCIA<br> <strong>{{$variablesGrupos[0]->variablesAnimal->calificacion_tolerncia}}</strong>
					</div>
					<div class="col-md-4">
						MAX PROG<br> <strong>{{$variablesGrupos[0]->variablesAnimal->variable_max_prog}}</strong>
					</div>
					<div class="col-md-4">
						CALIFICACIÓN TEXTO POSITIVO<br> <strong>{{$variablesGrupos[0]->variablesAnimal->calificacion_texto_pos}}</strong>
					</div>
				</div>
				<div class="row margin-0">
					<div class="col-md-4">
						CALIFICACIÓN TEXTO NEGATIVO<br> <strong>{{$variablesGrupos[0]->variablesAnimal->calificacion_texto_neg}}</strong>
					</div>
					<div class="col-md-4">
						OPERACIÓN RESULTADO<br> <strong>{{$variablesGrupos[0]->variablesAnimal->operacion_resultado}}</strong>
					</div>
				</div>
			</div>
		</div>
	</div>
	@endif
	<!-- registro de variables grupo -->
	<div class="row">
		<div class="col-md-12">
			<h3> 
				Grupo Variables del Animal</strong>
				<a href="#">
					<button  v-if="listado1" class="btn btn-success" id="btnShow"><i class="fa fa-plus"></i></button>
				</a> 
				<a href="#">
					<button  v-if="listado2" class="btn btn-warning" id="btnHide" ><i class="fa fa-close"></i></button>
				</a> 
			</h3>
			@include('parametrizacion.empresa.form.error')
		</div>
		<div class="col-md-12" id="contentVariables">
			<div class="listadoColor2">
				<h3>Crear Variables de grupo </h3>
				{!!Form::open(array('url'=>'varialesgrupos','method'=>'POST','autocomplete'=>'off','files'=>'true'))!!}
					<div id="listadoColor1"  v-if="listado" >
						{{Form::token()}}
						<input type="hidden" name="animalId" value="{{$animal->animal_id}}">
						<input type="hidden" name="variableId" value="{{$variables->variable_id}}">
						<div class="row">
							<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
								<div class="form-group">
									<label for="descripcion">Variable Nombre</label>
									<input type="text" name="variable_nombre" class="form-control" readonly value="{{$variables->variable_nombre}}" >
								</div>
							</div>
							<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
								<div class="form-group">
									<label for="descripcion">Animal</label>
									<input type="text" name="variable_nombre" class="form-control" readonly value="{{$animal->animal_nombre}}" >
								</div>
							</div>
							<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
								<div class="form-group">
									<label> Grupo Variables</label>
									<select name="fk_grupo_variable_id" class="form-control">
										@foreach($listadoGrupoVariables as $key)
											<option value="{{$key->grupo_variable_id}}">{{$key->grupo_nombre}}</option>
										@endforeach
									</select>
								</div>
							</div>
							<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12">
								<div class="form-group">
									<button class="btn btn-primary" type="submit">Guardar</button>
									<button class="btn btn-danger"  v-on:click="CerrarListado()" type="reset">Cancelar</button>
								</div>
							</div>
						</div>
					</div>
				{!!Form::close()!!}
			</div>
		</div>
	</div>
	@include('parametrizacion.message')
	<!-- listado de disponible -->
	<div class="row margin-0">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="table-responsive">
				<table id="empresa" class="table table-striped table-bordered table-condensed table-hover">
					<thead id="trId">
						<th>Nombre Variable</th>
						<th>Animal</th>
						<th>Grupo de Variable</th>
						<th>Eliminar</th>
					</thead>
					@foreach($variablesGrupos as $key => $value)
						<tr>
							<td>{{$value->variablesAnimal->variable_nombre}}</td>
							<td>{{$value->animal->animal_nombre}}</td>
							<td>{{$value->grupoVariables->grupo_nombre}}</td>
							<td>
								<button class="btn btn-danger" data-target="#modal-delete-{{$key}}" data-toggle="modal">
									<i class="fa fa-trash"></i>
								</button>
							</td>
							@include('VariablesGruposVariables.modal')
						</tr>					
					@endforeach
				</table>
			</div>
		</div>
	</div>
@endsection

@section('scripts')
	{!!Html::script('js/validate.js')!!}
	{!!Html::script('js/validations.js')!!}
	<script>
		
		$('#btnHide').hide();
		$('#contentVariables').hide();

		$('#btnShow').click(function(){
			$('#contentVariables').show();
			$('#btnHide').show();
			$('#btnShow').hide();
		});

		$('#btnHide').click(function(){
			$('#contentVariables').hide();
			$('#btnHide').hide();
			$('#btnShow').show();
		});

	</script>
@stop