@extends ('layouts.admin')
@section ('contenido')
	<div class="row">
		<div class="col-md-12">
			<h3>Grupo Variables
				<a href="#">
					<button class="btn btn-success" id="showInfo"><i class="fa fa-plus"></i></button>
				</a>
				<a href="#">
					<button class="btn btn-warning" id="hiddenInfo"><i class="fa fa-close"></i></button>
				</a>
			</h3>
			@include('parametrizacion.empresa.form.error')
		</div>
		<div class="col-md-12" id="contentInfoEstudio">
			<div class="listadoColor2">
				<h3>Crear Grupo Variables </h3>
				{!!Form::open(array('url'=>'gruposVariables','method'=>'POST','autocomplete'=>'off','files'=>'true','name' => 'formGrupoVariables'))!!}
					<div id="listadoColor1"  v-if="listado" >
						{{Form::token()}}
						<div class="row">
							<div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
								<div class="form-group">
									<label for="descripcion">Nombre del grupo de variable</label>
									{!!Form::text('grupo_nombre',null,['class' => 'form-control','placeholder' => 'Nombre...'])!!}
								</div>
							</div>
							<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12">
								<div class="form-group">
									<button class="btn btn-primary" type="submit">Guardar</button>
									<button class="btn btn-danger" type="reset">Limpiar</button>
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
				<table id="empresa" class="table table-striped table-bordered table-condensed table-hover">
					<thead id="trId">
						<th>Id</th>
						<th>Nombre Variables</th>
						<th>Acciones</th>
					</thead>
					<tbody>
						@foreach($listado as $key)
							<tr>
								<td>
									{!!link_to_route('detalle-variable', $title = $key->grupo_variable_id,
										$parameters = $key->grupo_variable_id, $attributes = ['class' => '']);
									!!}
								</td>
								<td>
									{!!link_to_route('detalle-variable', $title = $key->grupo_nombre,
										$parameters = $key->grupo_variable_id, $attributes = ['class' => '']);
									!!}
								</td>
								<td>
									<button class="btn btn-info" data-target="#modal-edit-{{$key->grupo_variable_id}}" data-toggle="modal">
										<i class="fa fa-pencil"></i>
									</button>
								</td>
							</tr>
							@include('gruposVariables.modal')
						@endforeach
					</tbody>
				</table>
			</div>
		</div>
	</div>
@endsection

@section('scripts')
	{!!Html::script('js/validate.js')!!}
	{!!Html::script('js/validations.js')!!}
	<script>
		$('#hiddenInfo').hide();
		$('#contentInfoEstudio').hide();

		$('#showInfo').click(function(){
			$('#contentInfoEstudio').show();
			$('#hiddenInfo').show();
			$('#showInfo').hide();
		});

		$('#hiddenInfo').click(function(){
			$('#contentInfoEstudio').hide();
			$('#hiddenInfo').hide();
			$('#showInfo').show();
		});

		
		function ValidateForm(id){

			var NameVar = $('#grupo_nombre'+id).val();

			if (NameVar == '') {

				alert('Lo sentimos, el campo nombre variable es obligatorio');
				$('#grupo_nombre'+id).focus();
				return false;
			
			}else{

				$('formEdit'+id).submit();
			}
		}

	</script>
@stop