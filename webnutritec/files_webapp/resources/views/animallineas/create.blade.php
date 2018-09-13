@extends ('layouts.admin')

@section ('contenido')
	<div class="row">
		<div class="col-md-12">
			<h3> 
				Linea geneticas: <strong>{{$AnimalesListado->animal_nombre}}</strong>
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
				{!!Form::open(array('url'=>'animallineas','method'=>'POST','autocomplete'=>'off','files'=>'true','name' => 'formLineaAnimal'))!!}
					<h3>Crear linea Animal</h3>
					<div id="listadoColor1"  v-if="listado">
						{!!Form::token()!!}
						<input type="hidden" name="idanimalCreateGrupo" value="{{$grupoAnimales->animal_grupo_id}}" >
						<input type="hidden" name="idanimal" value="{{$grupoAnimales->fk_animal_id}}" >
						<div class="row">
							<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
								<div class="form-group">
									<label for="nombre">Grupo Animal</label>
									<input type="text"  class="form-control" readonly  value="{{$grupoAnimales->grupo_nombre}}">
								</div>
							</div>
							<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
								<div class="form-group">
									<label for="descripcion">Animal</label>
									<input type="text"  class="form-control"  readonly value="{{ $grupoAnimales->animal->animal_nombre}}" >
								</div>
							</div>
							<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
								<div class="form-group">
									<label for="descripcion">Linea Nombre</label>
									<input type="text" name="linea_nombre" class="form-control" >
								</div>
							</div>
							<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
								<div class="form-group">
									<label for="descripcion">Linea Descripcion</label>
									<input type="text" name="linea_descripcion" class="form-control">
								</div>
							</div>
							<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
								<div class="form-group">
									<button class="btn btn-primary" type="submit">Guardar</button>
									<button class="btn btn-danger" v-on:click="CerrarListado()" type="reset">Cancelar</button>
								</div>
							</div>
						</div>
					</div>
				{!!Form::close()!!}
			</div>
		</div>
	</div>
	@include('parametrizacion.message')
	<div class="row margin-0">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="table-responsive">
				<table id="empresa" class="table table-striped table-bordered table-condensed" >
					<thead id="trId">
						<th>Id</th>
						<th>Nombre Animal</th>
						<th>Grupo Animal</th>
						<th>linea nombre</th>
						<th>linea Descripcion</th>
						<th>Acciones</th>
					</thead>
					@foreach($valores as $key)
						<tr>
							<td><a href="{{Route('lineapeso.create',['lineaId'=>$key->linea_id])}}">{{$key->linea_id}}</a></td>
							<td><a href="{{Route('lineapeso.create',['lineaId'=>$key->linea_id])}}"> {{$key->animal->animal_nombre}}</a></td>
							<td><a href="{{Route('lineapeso.create',['lineaId'=>$key->linea_id])}}">{{$key->animalGrupos->grupo_nombre}}</a></td>
							<td><a href="{{Route('lineapeso.create',['lineaId'=>$key->linea_id])}}">{{$key->linea_nombre}}</a></td>
							<td><a href="{{Route('lineapeso.create',['lineaId'=>$key->linea_id])}}">{{$key->linea_descripcion}}</a></td>
							<td>
								<a href="{{Route('gruposAnimal.edit',$key->linea_id)}}">
									<button class="btn btn-info"><i class="fa fa-pencil"></i></button>
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