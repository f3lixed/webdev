@extends ('layouts.admin')
@section ('contenido')
	<div class="row">
		<div class="col-md-12">
			<h3>Editar Grupo animal Variables  : <strong>{{$variable->animal->animal_nombre}}</strong> </h3>
			{!!Form::model($variable,['method'=>'POST','route'=>['animalGrupovariableUpdate',$variable->variables_id], 
				'name' => 'formAnimalVariablesEdit','files'=>'true'])!!}
				{{Form::token()}}
				<input type="hidden" name="animalIDVariable"  readonly  value="{{$variable->animal->animal_id}}" >
				<input type="hidden" name="variables_id" readonly  value="{{$variable->variable_id}}">
				<div class="row">
					<div class="col-lg-6 col-sm-2 col-md-2 col-xs-12">
						<div class="form-group">
							<label for="nombre">Animal </label>
							<input type="text" name="animal_nombre" class="form-control"  readonly  value="{{$variable->animal->animal_nombre}}">
						</div>
					</div>
					<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
						<div class="form-group">
							<div class="form-group">
								<label>Macro</label>
								{!!Form::select('variables_macro',[
										"Condicion Corporal" => "Condicion Corporal",
										"Toxinas" => "Toxinas",
										"Protozoarios" => "Protozoarios",
										"Discobacteriosis" => "Discobacteriosis",
										"Parasitismos" => "Parasitismos",
										"Clostridium Perfringens" => "Clostridium Perfringens",
										"inmunologia" => "inmunologia"
	 								],null,['class' => 'form-control'])
								!!}
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-sm-6 col-md-6 col-xs-12">
						<div class="form-group">
							<label for="descripcion"> Nombre</label>
							{!!Form::text('variable_nombre',null,['class' => 'form-control'])!!}
						</div>
					</div>
					<div class="col-lg-4 col-sm-6 col-md-6 col-xs-12">
						<div class="form-group">
							<label for="descripcion">Descripcion</label>
							{!!Form::text('variable_descripcion',null,['class' => 'form-control'])!!}
						</div>
					</div>
					<div class="col-lg-2 col-sm-2 col-md-2 col-xs-2">
						<div class="form-group">
							<label for="descripcion">Min</label>
							{!!Form::text('variable_min',null,['class' => 'form-control'])!!}
						</div>
					</div>
					<div class="col-lg-2 col-sm-2 col-md-2 col-xs-2">
						<div class="form-group">
							<label for="descripcion">Max</label>
							{!!Form::text('variable_max',null,['class' => 'form-control'])!!}
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-2 col-sm-4 col-md-4 col-xs-4">
						<div class="form-group">
							<label for="descripcion">Index G</label>
							{!!Form::text('index_g',null,['class' => 'form-control'])!!}
						</div>
					</div>
					<div class="col-lg-2 col-sm-4 col-md-4 col-xs-4">
						<div class="form-group">
							<label for="variable_descripcion">Ir operador</label>
							{!!Form::select('ir_operador',[
									">=" => ">=",
									"<=" => "<=",
								],null,['class' => 'form-control'])
							!!}
						</div>
					</div>
					<div class="col-lg-2 col-sm-4 col-md-4 col-xs-4">
						<div class="form-group">
							<label for="descripcion">calificacion operador </label>
							{!!Form::select('calificacion_operador',[
									">=" => ">=",
									"<=" => "<=",
								],null,['class' => 'form-control'])
							!!}
						</div>
					</div>
					<div class="col-lg-2 col-sm-4 col-md-4 col-xs-4">
						<div class="form-group">
							<label for="descripcion">Ir tolerancia</label>
							{!!Form::text('ir_tolerancia',null,['class' => 'form-control'])!!}
						</div>
					</div>
					<div class="col-lg-2 col-sm-4 col-md-4 col-xs-4">
						<div class="form-group">
							<label for="descripcion">Calificacion tolerancia</label>
							{!!Form::text('calificacion_tolerancia',null,['class' => 'form-control'])!!}
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-sm-4 col-md-4 col-xs-4">
						<div class="form-group">
							<label for="descripcion">Variable max programacion</label>
							{!!Form::text('variable_max_prog',null,['class' => 'form-control'])!!}
						</div>
					</div>
					<div class="col-lg-2 col-sm-4 col-md-4 col-xs-4">
						<div class="form-group">
							<label for="descripcion">calificacion text pos</label>
							{!!Form::text('calificacion_texto_pos',null,['class' => 'form-control'])!!}
						</div>
					</div>
					<div class="col-lg-2 col-sm-4 col-md-4 col-xs-4">
						<div class="form-group">
							<label for="descripcion">calificacion text neg</label>
							{!!Form::text('calificacion_texto_neg',null,['class' => 'form-control'])!!}
						</div>
					</div>
					<div class="col-lg-2 col-sm-4 col-md-4 col-xs-4">
						<div class="form-group">
							<label for="descripcion">calificacion operador</label>
							{!!Form::select('operacion_resultado',[
									"sum" => "Suma",
									"avg" => "Promedio",
									"none" => 'NA'
								],null,['class' => 'form-control'])
							!!}
						</div>
					</div>
					<div class="col-lg-2 col-sm-2 col-md-2 col-xs-2">
						<div class="form-group">
							<label for="descripcion">Adjuntar Apoyo</label>
							<input type="file" name="imagen" class="form-control">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-sm-6 col-md-6 col-xs-12">
						<div class="form-group">
							<button class="btn btn-primary" type="submit">Guardar</button>
						</div>
					</div>
				</div>
			{!!Form::close()!!}
		</div>
	</div>
@endsection

@section('scripts')

	{!!Html::script('js/validate.js')!!}
	{!!Html::script('js/validations.js')!!}

@endsection