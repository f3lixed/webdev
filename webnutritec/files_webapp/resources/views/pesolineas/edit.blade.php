@extends ('layouts.admin')

@section ('contenido')
	<div class="row">
		<div class="col-md-12">
			<h3>Editar Linea de Peso</h3>
			{!!Form::model($peso,['method'=>'PUT','route'=>['lineapeso.update',$peso], 'name' => 'FormLineaPeso'])!!}
				{{Form::token()}}
				<input type="hidden" name="idAnimalLinea"  readonly  value="{{$linea->linea_id}}" >
				<div class="row">
					<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
						<div class="form-group">
							<label for="nombre">Animal Linea</label>
							<input type="text"   name="animal_linea" class="form-control"  readonly  value="{{$linea->linea_nombre}}">
						</div>
					</div>
					<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
						<div class="form-group">
							<div class="form-group">
								<label>Peso Genero</label>
								{!!Form::select('peso_genero',['HEMBRA' => 'Hembra', 'MACHOS' => 'Machos'],null,['class' => 'form-control'])!!}
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-sm-4 col-md-4 col-xs-4">
						<div class="form-group">
							<label for="descripcion">Peso semana</label>
							{!!Form::text('peso_semana', null,['class' => 'form-control'])!!}
						</div>
					</div>
					<div class="col-lg-2 col-sm-2 col-md-2 col-xs-2">
						<div class="form-group">
							<label for="descripcion">Peso min</label>
							{!!Form::text('peso_min', null,['class' => 'form-control'])!!}
						</div>
					</div>
					<div class="col-lg-2 col-sm-2 col-md-2 col-xs-2">
						<div class="form-group">
							<label for="descripcion">Peso max</label>
							{!!Form::text('peso_max', null,['class' => 'form-control'])!!}
						</div>
					</div>
					<div class="col-lg-2 col-sm-2 col-md-2 col-xs-2">
						<div class="form-group">
							<label for="descripcion">Peso promedio</label>
							{!!Form::text('peso_prom', null,['class' => 'form-control'])!!}
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
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