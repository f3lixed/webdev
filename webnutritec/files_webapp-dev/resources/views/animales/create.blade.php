@extends ('layouts.admin')
@section ('contenido')
	<!-- información del estudio galpon -->
	<div class="row" >
		<div class="col-md-12" >
			<div class="panel panel-succes" id="DetalleID">
				<div class="panel-heading">
					<div class="text-left">
						<h3 class="title">{{$animal->animal_id}}</h3>
						<div class="row">
							<div class="col-md-4">
								<p class="description">ANIMAL: <strong>{{$animal->animal_nombre}} </strong></p>
							</div>
						</div>
						@php
	                      	use App\Estudios\estudioGalpones;
	                        $galpones = estudioGalpones::where('fk_animal_id','=',$animal->animal_id)->get();  
	                    @endphp
						@if(count($galpones) > 0)
<!--							<div class="row">
								<div class="col-md-12">
									<div class="table-responsive">
										<table class="table table-striped table-bordered">
											<thead id="trId">
												<th>Galpon ID</th>
												<th>Animal</th>
												<th>Empresa</th>
												<th>Granja</th>
												<th>Línea</th>
												<th>Nombre Estudio</th>
												<th>Semanas</th>
												<th>Genero</th>
												<th>Lote</th>
											</thea>
											<tbody>
												@foreach($galpones as $galpon)
													<tr>
														<td>
															{!!link_to_route('estudio-galpon-individuos', 
																$title = $galpon->estudio_galpon_id,
																$parameters = $galpon->estudio_galpon_id, $attributes = []);
															!!}
														</td>
														<td>{{$galpon->animal->animal_nombre}}</td>
														<td>{{$galpon->empresa->nombre_empresa}}</td>
														<td>{{$galpon->granja->granja_nombre}}</td>
														<td>{{$galpon->linea->linea_nombre}}</td>
														<td>{{$galpon->estudios->estudios}}</td>
														<td>{{$galpon->individuos_semanas}}</td>
														<td>{{$galpon->individios_genero}}</td>
														<td>{{$galpon->estudio_galpon_lote}}</td>
													</tr>
												@endforeach											
											</tbody>
										</table>
									</div>
								</div>
							</div>-->
						@endif
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
	<!-- botones para crear grupoos -->
	<div class="row">
		<div class="col-md-12">
			<h3> 
				Grupos de: <strong>{{$animal->animal_nombre}}</strong>
				<a href="#">
					<button  v-if="listado1" class="btn btn-success" id="btnShow"><i class="fa fa-plus"></i></button>
				</a> 
				<a href="" target="_blank"></a>
				<a href="#">
					<button  v-if="listado2" class="btn btn-warning" id="btnHide" ><i class="fa fa-close"></i></button>
				</a> 
				<a href="" target="_blank"></a>
			</h3>
			@include('parametrizacion.empresa.form.error')
		</div>
	</div>
	<!-- caja de agregar grupos animales -->
	{!!Form::open(array('url'=>'gruposAnimal','method'=>'POST','autocomplete'=>'off','name' => 'formGrupoAnimal'))!!}
		<div class="listadoColor2" id="contentInfo">
			<h3 v-if="listado">Crear Grupo </h3>
			{{Form::token()}}
			<input type="hidden" name="idanimalCreateGrupo"  readonly  value="{{$animal->animal_id}}" >
			<div class="row">
				<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
					<div class="form-group">
						<label for="nombre">Animal </label>
						<input type="text"  name="animal_nombre" class="form-control"  readonly  value="{{$animal->animal_nombre}}">
					</div>
				</div>
				<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
					<div class="form-group">
						<label for="descripcion">Grupo Nombre</label>
						<input type="text" id="panimal"  name="grupo_nombre" class="form-control" placeholder="Grupo Nombre">
					</div>
				</div>
				<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
					<div class="form-group">
						<button class="btn btn-primary" type="submit">Guardar</button>
						<button class="btn btn-danger"  type="reset">Limpiar</button>
					</div>
				</div>
			</div>
		</div>
	{!!Form::close()!!}
	@include('parametrizacion.message')
	<!-- inforación de los grupos registrados (tabla) -->
	<div  class="row margin-0">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="table-responsive">
				<table id="empresa" class="table table-striped table-bordered table-condensed table-hover">
					<thead id="trId" >
						<th>Id</th>
						<th>Nombre Animal </th>
						<th>Descripcion Animal</th>
						<th>Accion</th>
					</thead>
					@foreach($animalConsulta as $key)
					<tr>
						<td><a href="{{Route('animallineas.create' ,['idAnimal'=>$animal->animal_id,'idGrupoAnimal'=>$key->animal_grupo_id])}}"> {{$key->animal_grupo_id}}</a></td>
						<td><a href="{{Route('animallineas.create' ,['idAnimal'=>$animal->animal_id,'idGrupoAnimal'=>$key->animal_grupo_id])}}">  {{$key->grupo_nombre}}</a></td>
						<td><a href="{{Route('animallineas.create' ,['idAnimal'=>$animal->animal_id,'idGrupoAnimal'=>$key->animal_grupo_id])}}">{{$key->animal->animal_nombre}}</a></td>
						<td>
							<a href="{{Route('animallineas.edit',$key->animal_grupo_id.'-'.$key->fk_animal_id)}}">
								<button class="btn btn-info "><i class="fa fa-pencil"></i></button>
							</a>
						</td>
					</tr>
					@endforeach
				</table>
			</div>
		</div>
	</div>
	<!-- info de errores -->
	<div class="row">
		<div class="col-md-12">
			@include('parametrizacion.empresa.form.error')
			<h3> 
				Variables del: <strong>{{$animal->animal_nombre}}</strong>
				<a href="#">
					<button class="btn btn-success" id="btnShowVariables"><i class="fa fa-plus"></i></button>
				</a> 
				<a href="" target="_blank"></a>
				<a href="#">
					<button class="btn btn-warning" id="btnHideVariables" ><i class="fa fa-close"></i></button>
				</a> 
				<a href="" target="_blank"></a>
			</h3>
			@include('parametrizacion.empresa.form.error')
		</div>
	</div>
	<div class ="listadoColor2" id="contentVariables">
		<h3>Crear Variables </h3>
		{!!Form::open(array('url'=>'animalGrupovariable','method'=>'POST','autocomplete'=>'off','files'=>'true','name' => 'formAnimalVariables'))!!}
			{{Form::token()}}
			<input type="hidden" name="animalIDVariable"  readonly  value="{{$animal->animal_id}}" >
		

			<div class="row">
				<div class="col-lg-6 col-sm-2 col-md-2 col-xs-12">
					<div class="form-group">
						<label for="nombre">Animal </label>
						<input type="text"   name="animal_nombre" class="form-control"  readonly  value="{{$animal->animal_nombre}}">
					</div>
				</div>
				<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
					<div class="form-group">
						<div class="form-group">
							<label>Macro</label>
							<select name="variable_macro"    class="form-control">
								<option value="Condicion Corporal">Condicion Corporal</option>
								<option value="Toxinas">Toxinas</option>
								<option value="Protozoarios">Protozoarios</option>
								<option value="Parasitismos">Parasitismos</option>
								<option value="Clostridium Perfringens">Clostridium Perfringens</option>
								<option value="inmunologia">inmunologia</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4 col-sm-6 col-md-6 col-xs-12">
					<div class="form-group">
						<label for="descripcion"> Nombre</label>
						<input type="text"   name="variable_nombre"  class="form-control">
					</div>
				</div>
				<div class="col-lg-4 col-sm-6 col-md-6 col-xs-12">
					<div class="form-group">
						<label for="descripcion">Descripcion</label>
						<input type="text"   name="variable_descripcion"    class="form-control">
					</div>
				</div>
				<div class="col-lg-2 col-sm-2 col-md-2 col-xs-2">
					<div class="form-group">
						<label for="descripcion">Min</label>
						<input type="text"   name="variable_min"   class="form-control">
					</div>
				</div>
				<div class="col-lg-2 col-sm-2 col-md-2 col-xs-2">
					<div class="form-group">
						<label for="descripcion">Max</label>
						<input type="text"   name="variable_max"   class="form-control">
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-2 col-sm-4 col-md-4 col-xs-4">
					<div class="form-group">
						<label for="descripcion">Index G</label>
						<input type="text"   name="index_g" class="form-control"  >
					</div>
				</div>
				<div class="col-lg-2 col-sm-4 col-md-4 col-xs-4">
					<div class="form-group">
						<label for="descripcion">Ir operador</label>
						<select name="ir_operador" class="form-control"  >
							<option value=">="> >= </option>
							<option value="<="> <= </option>
						</select>
					</div>
				</div>
				<div class="col-lg-2 col-sm-4 col-md-4 col-xs-4">
					<div class="form-group">
						<label for="descripcion">calificacion operador </label>
						<select name="calificacion_operador" class="form-control">
							<option value=">="> >= </option>
							<option value="<="> <= </option>
						</select>
					</div>
				</div>
				<div class="col-lg-2 col-sm-4 col-md-4 col-xs-4">
					<div class="form-group">
						<label for="descripcion">Ir tolerancia</label>
						<input type="text"  name="ir_tolerencia" class="form-control"  >
					</div>
				</div>
				<div class="col-lg-2 col-sm-4 col-md-4 col-xs-4">
					<div class="form-group">
						<label for="descripcion">Calificacion tolerancia</label>
						<input type="text"  name="calificacion_tolerencia" class="form-control"  >
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-4 col-sm-4 col-md-4 col-xs-4">
					<div class="form-group">
						<label for="descripcion">Variable max programacion</label>
						<input type="text"  name="variable_max_pro" class="form-control" >
					</div>
				</div>
				<div class="col-lg-2 col-sm-4 col-md-4 col-xs-4">
					<div class="form-group">
						<label for="descripcion">calificacion text pos</label>
						<input type="text"  name="calificacion_texto_pos" class="form-control" >
					</div>
				</div>
				<div class="col-lg-2 col-sm-4 col-md-4 col-xs-4">
					<div class="form-group">
						<label for="descripcion">calificacion text neg</label>
						<input type="text"  name="calificacion_texto_neg" class="form-control">
					</div>
				</div>
				<div class="col-lg-2 col-sm-4 col-md-4 col-xs-4">
					<div class="form-group">
						<label for="descripcion">calificacion operador</label>
						<select name="operacion_resultado" class="form-control"  >
							<option value="sum"> Suma </option>
							<option value="avg"> Promedio </option>
							<option value="none">NA</option>
						</select>
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
						<button class="btn btn-danger" type="reset">Limpiar</button>
					</div>
				</div>
			</div>
		{!!Form::close()!!}
	</div>
	<div  class="row margin-0">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="table-responsive">
				<table id="empresa1" class="table table-striped table-bordered table-condensed table-hover">
					<thead id="trId">
						<th>Nombre Animal </th>
						<th>Macro</th>
						<th>Nombre Variable</th>
						<th>Min</th>
						<th>Mx</th>
						<th>Apoyo</th>
						<th>Accion</th>
					</thead>
					@foreach($variables as $key)
					<tr  >
						<td>
							<a href="{{Route('varialesgrupos.create',['animalId'=>$key->fk_animal_id,'variablesId'=>$key->variable_id])}}">{{$key->animal->animal_nombre}}
							</a>
						</td>
						<td><a href="#">{{$key->variables_macro}}</td>
						<td><a href="#">{{$key->variable_nombre}}</td>
						<td><a href="#">{{$key->variable_min}}</td>
						<td><a href="#">{{$key->variable_max}}</td>
						<td><a href="#"> <img class="mascara" src="{{asset('imagenes/guias/'. $key->variables_apoyo_visual)}}">Apoyo</a></td>
						<td>
							<a href="{{Route('animalGrupovariable.edit',['id' => $key->variable_id])}}" class="btn btn-info">
								<i class="fa fa-pencil"></i>
							</a>
						</td>
					</tr>
					@endforeach
				</table>
			</div>
		</div>
	</div>
@stop
@section('scripts')

	{!!Html::script('js/validate.js')!!}
	{!!Html::script('js/validations.js')!!}
	<script type="text/javascript">

		$('#btnHide').hide();
		$('#contentInfo').hide();

		$('#btnShow').click(function(){
			$('#contentInfo').show();
			$('#btnHide').show();
			$('#btnShow').hide();
		});

		$('#btnHide').click(function(){
			$('#contentInfo').hide();
			$('#btnHide').hide();
			$('#btnShow').show();
		});

		$('#btnHideVariables').hide();
		$('#contentVariables').hide();

		$('#btnShowVariables').click(function(){
			$('#contentVariables').show();
			$('#btnHideVariables').show();
			$('#btnShowVariables').hide();
		});

		$('#btnHideVariables').click(function(){
			$('#contentVariables').hide();
			$('#btnHideVariables').hide();
			$('#btnShowVariables').show();
		});

	</script>
@endsection