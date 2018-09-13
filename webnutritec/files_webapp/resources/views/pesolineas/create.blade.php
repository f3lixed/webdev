@extends ('layouts.admin')

@section ('contenido')
	<div class="row">
		<div class="col-md-12">
			<h3> 
				Animal Grupo Linea Peso</strong>
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
				<h3>Crear Variables</h3>
				{!!Form::open(array('url'=>'lineapeso','method'=>'POST','autocomplete'=>'off','files'=>'true', 'name' => 'FormLineaPeso'))!!}
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
									<select name="peso_genero" class="form-control">
										<option value="HEMBRA">Hembra</option>
										<option value="MACHOS">Machos</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-4 col-sm-4 col-md-4 col-xs-4">
							<div class="form-group">
								<label for="descripcion">Peso semana</label>
								<input type="text"  name="peso_semana" class="form-control">
							</div>
						</div>
						<div class="col-lg-2 col-sm-2 col-md-2 col-xs-2">
							<div class="form-group">
								<label for="descripcion">Peso min</label>
								<input type="text"  name="peso_min" class="form-control">
							</div>
						</div>
						<div class="col-lg-2 col-sm-2 col-md-2 col-xs-2">
							<div class="form-group">
								<label for="descripcion">Peso max</label>
								<input type="text" name="peso_max" class="form-control">
							</div>
						</div>
						<div class="col-lg-2 col-sm-2 col-md-2 col-xs-2">
							<div class="form-group">
								<label for="descripcion">Peso promedio</label>
								<input type="text"  name="peso_prom" class="form-control">
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
							<div class="form-group">
								<button class="btn btn-primary" type="submit">Guardar</button>
								<button class="btn btn-danger" type="reset">Limpiar</button>
							</div>
						</div>
					</div>
				{!!Form::close()!!}
			</div>
		</div>
	</div>		
	@include('parametrizacion.message')
	<div  class="row margin-0">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="table-responsive">
				<table id="empresa" class="table table-striped table-bordered table-condensed table-hover">
					<thead id="trId">
						<th>Id</th>
						<th>Peso Genero</th>
						<th>Linea Animal</th>
						<th>Peso Semana</th>
						<th>Peso Min</th>
						<th>Peso Max</th>
						<th>Peso Promedio</th>
						<th>Accion</th>
					</thead>
					@foreach($peso as $key)
						<tr>
							<td>{{$key->peso_id}}</td>
							<td>{{$key->peso_genero}}</td>
							<td>{{$key->animalLinea->linea_nombre}}</td>
							<td>{{$key->peso_semana}}</td>
							<td>{{$key->peso_min}}</td>
							<td>{{$key->peso_max}}</td>
							<td>{{$key->peso_prom}}</td>
							<td>
								<a class="btn btn-info" href="{{Route('lineapeso.edit',$key->peso_id)}}">
									<i class="fa fa-pencil"></i>
								</a>
							</td>
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