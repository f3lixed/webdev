@extends ('layouts.admin')

@section ('contenido')
	<div class="row">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<h3>Editar Grupo animal: <b>{{$linea->linea_nombre}}</b> </h3>
			@include('parametrizacion.empresa.form.error')
			{!!Form::model($linea,['method'=>'PATCH','route'=>['gruposAnimal.update',$linea->linea_id],'name' => 'formLineaAnimal'])!!}
				{{Form::token()}}
				<input type="hidden" name="animal_id" value="{{$linea->fk_animal_id}}">
				<input type="hidden" name="fk_animal_grupo_id" value="{{$linea->fk_animal_grupo_id}}">
				<input type="hidden" name="linea_id" value="{{$linea->linea_id}}">
				<div class="row">
					<div class="col-lg-6 col-sm-6 col-md-6 col-xs-6">
						<div class="form-group">
							<label for="nombre">Animal Nombre Grupo </label>
							<input type="text" name="grupo_nombre_animal" class="form-control" readonly value="{{$linea->animalGrupos->grupo_nombre}}" placeholder="NIt">
						</div>
					</div>
					<div class="col-lg-6 col-sm-6 col-md-6 col-xs-6">
						<div class="form-group">
							<label for="nombre">Nombre Animal</label>
							<input type="text" name="animal_nombre" class="form-control"  readonly value="{{$linea->animal->animal_nombre}}" placeholder="Nombre empresa...">
						</div>
					</div>
					<div class="col-lg-6 col-sm-6 col-md-6 col-xs-6">
						<div class="form-group">
							<label for="nombre">Linea Nombre</label>
							<input type="text" name="linea_nombre" class="form-control" value="{{$linea->linea_nombre}}" placeholder="Nombre empresa...">
						</div>
					</div>
					<div class="col-lg-6 col-sm-6 col-md-6 col-xs-6">
						<div class="form-group">
							<label for="nombre">Linea Descripcion</label>
							<input type="text" name="linea_descripcion" class="form-control" value="{{$linea->linea_descripcion}}" placeholder="Nombre empresa...">
						</div>
					</div>
					<div class="col-lg-6 col-sm-6 col-md-6 col-xs-6">
						<div class="form-group">
							<button class="btn btn-primary" type="submit">Guardar</button>
							<button class="btn btn-danger" type="reset">Cancelar</button>
						</div>
					</div>
				</div>
			{!!Form::close()!!}
		</div>
	</div>
@stop

@section('scripts')
	{!!Html::script('js/validate.js')!!}
	{!!Html::script('js/validations.js')!!}
@stop