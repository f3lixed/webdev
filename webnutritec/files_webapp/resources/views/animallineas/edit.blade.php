@extends ('layouts.admin')

@section ('contenido')
	<div class="row">
		<div class="col-md-12">
			<h3>Editar Grupo animal: <strong>{{$gruposAnimalesID->grupo_nombre}}</strong> </h3>
			@include('parametrizacion.empresa.form.error')
			{!!Form::model($gruposAnimalesID,['method'=>'PATCH','route'=>['animallineas.update',$gruposAnimalesID->animal_grupo_id],
				'name' => 'formEditAnimalLinea'])!!}
				{{Form::token()}}
				<input type="hidden" name="grupo_animal_id" value="{{$gruposAnimalesID->fk_animal_id}}">
				<div class="row">
					<div class="col-lg-6 col-sm-6 col-md-6 col-xs-6">
						<div class="form-group">
							<label for="nombre">Animal Nombre</label>
							<input type="text" name="animal_nombre" class="form-control" readonly value="{{$gruposAnimalesID->animal->animal_nombre}}" placeholder="NIt">
						</div>
					</div>
					<div class="col-lg-6 col-sm-6 col-md-6 col-xs-6">
						<div class="form-group">
							<label for="nombre">Nombre grupo Animal</label>
							<input type="text" name="grupo_nombre" class="form-control" value="{{$gruposAnimalesID->grupo_nombre}}" 
								placeholder="Nombre empresa...">
						</div>
					</div>
					<div class="col-lg-6 col-sm-6 col-md-6 col-xs-6">
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
@stop