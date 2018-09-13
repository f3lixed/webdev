<div class="row">
	<div class="col-md-4">
		<div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
			<label for="name" class="control-label">Nombre(*)</label>
			{!!Form::text('name',null,['class' => 'form-control'])!!}
			@if ($errors->has('name'))
				<span class="help-block">
					<strong>{{ $errors->first('name') }}</strong>
				</span>
			@endif
		</div>
	</div>
	<div class="col-md-4">
		<div class="form-group{{ $errors->has('cedula') ? ' has-error' : '' }}">
			<label for="cedula" class="control-label">Cedula</label>
			{!!Form::text('cedula',null,['class' => 'form-control'])!!}
			@if($errors->has('cedula'))
				<span class="help-block">
					<strong>{{ $errors->first('cedula') }}</strong>
				</span>
			@endif
		</div>
	</div>
	<div class="col-md-4">
		<div class="form-group {{ $errors->has('rol') ? ' has-error' : '' }}">
			<label for="rol" class="control-label">Rol(*)</label>
			{!!Form::select('rol',$rols,null,['class' => 'form-control','placeholder' => '-- seleccione --'])!!}
			@if ($errors->has('rol'))
				<span class="help-block">
					<strong>{{ $errors->first('rol') }}</strong>
				</span>
			@endif
		</div>
	</div>
</div>
<div class="row">
	<div class="col-md-4">
		<div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
			<label for="email" class="control-label">E-Mail(*)</label>
			@if($user)
				{!!Form::text('email',null,['class' => 'form-control','disabled' => 'disabled'])!!}
			@else
				{!!Form::text('email',null,['class' => 'form-control'])!!}
			@endif
			@if ($errors->has('email'))
				<span class="help-block">
					<strong>{{ $errors->first('email') }}</strong>
				</span>
			@endif
		</div>
	</div>
	<div class="col-md-4">
		<div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
			<label for="password" class="control-label">Password(*)</label>
			{!!Form::password('password',['class' => 'form-control'])!!}
			@if ($errors->has('password'))
				<span class="help-block">
					<strong>{{ $errors->first('password') }}</strong>
				</span>
			@endif
		</div>
	</div>
	<div class="col-md-4">
		<div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
			<label for="password_confirmation" class="control-label">Confirmar Password</label>
			{!!Form::password('password_confirmation',['class' => 'form-control'])!!}
			@if ($errors->has('password_confirmation'))
				<span class="help-block">
					<strong>{{ $errors->first('password_confirmation') }}</strong>
				</span>
			@endif
		</div>
	</div>
</div>
<div class="row">
	<div class="col-md-12">
		<div class="form-group{{ $errors->has('empresas') ? ' has-error' : '' }}">
			<h3>Permisos por empresa  y granjas</h3>
			<div class="row">
				<div class="col-md-3">
					<div class="form-group {{ $errors->has('id_empresa') ? ' has-error' : '' }}">
						<label for="id_empresa" class="control-label">Empresas(*)</label>
						{!!Form::select('id_empresa',$empresas,null,['class' => 'form-control','placeholder' => '-- seleccione --',
							'id' => 'id_empresa'])
						!!}
						@if ($errors->has('id_empresa'))
							<span class="help-block">
								<strong>{{ $errors->first('id_empresa') }}</strong>
							</span>
						@endif
					</div>
				</div>
				<div class="col-md-3">
					<div class="form-group {{ $errors->has('granjas') ? ' has-error' : '' }}">
						<label for="granjas" class="control-label">Granjas(*)</label>
						{!!Form::select('granjas[]', $granja, null,['class' => 'selectpicker','placeholder' => '-- seleccione --',
							'id' => 'granjas','multiple' => 'multiple','title' => '-- sin seleccionar --'
						])!!}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
@if(count($granjaSelected) > 0)
<div class="row">
	<div class="col-md-8">
		<div class="table-responsive">
			<table class="table table-striped table-bordered table-condensed">
				<thead>
					<th>Empresa</th>
					<th>Graja</th>
					<th>Eliminar</th>
				</thead>
				<tbody>
					@foreach($granjaSelected as $granja)
						<tr>
							<td>{{$granja->empresa->nombre_empresa}}</td>
							<td>{{$granja->granja->granja_nombre}}</td>
							<td>
								<button class="btn btn-danger" onclick="DeleteGranja('{{$granja->id}}')" type="button">
									<i class="fa fa-trash"></i>
								</button>
							</td>
						</tr>
					@endforeach
				</tbody>
			</table>	
		</div>
	</div>
</div>
@endif
<div class="row">
	<div class="col-md-7">
		<h3>Acciones</h3>
		<div class="form-check">
			<input type="hidden" name="type1" value="0">
			<label class="form-check-label" for="type1">
				{!!Form::checkbox('type1', 1, null,['class' => 'form-check-input','id' => 'type1'])!!} Leer
			</label>
		</div>
		<div class="form-check">
			<input type="hidden" name="type2" value="0">
			<label class="form-check-label" for="type2">
				{!!Form::checkbox('type2', 1, null,  ['class' => 'form-check-input','id' => 'type2'])!!} Crear
			</label>
		</div>
		<div class="form-check">
			<input type="hidden" name="type3" value="0">
			<label class="form-check-label" for="type3">
				{!!Form::checkbox('type3', 1, null,['class' => 'form-check-input','id' => 'type3'])!!} Modificar
			</label>
		</div>
		<div class="form-check">
			<input type="hidden" name="type4" value="0">
			<label class="form-check-label" for="type4">
				{!!Form::checkbox('type4', 1, null,['class' => 'form-check-input','id' => 'type4'])!!} Informes de Gerencia
			</label>
		</div>
		<div class="form-group">
			<button class="btn btn-primary" type="submit">Guardar</button>
			<button class="btn btn-danger" type="reset">Cancelar</button>
		</div>
	</div>
</div>
{!!Form::hidden('_token',csrf_token(),['id' => '_token'])!!}