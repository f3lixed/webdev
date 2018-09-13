<div class="row">
	<div class="col-md-6">
		<div class="form-group">
			{!!Form::label('nombre_empresa','Nombre Empresa')!!}
			{!!Form::text('nombre_empresa',null, ['class' => 'form-control'])!!}
		</div>
	</div>
	<div class="col-md-6">
		<div class="form-group">
			{!!Form::label('razon_social','Razón social')!!}
			{!!Form::text('razon_social',null, ['class' => 'form-control'])!!}
		</div>
	</div>
	<div class="col-md-3">
		<div class="form-group">
			{!!Form::label('nit','Nit')!!}
			{!!Form::text('nit',null, ['class' => 'form-control'])!!}
		</div>
	</div>
</div>
<div class="row" id="valor">
	<div class="col-md-3">
		<div class="form-group">
			{!!Form::label('fk_departamento_id','Departamento')!!}<br>
			{!!Form::select('fk_departamento_id', $departamento, null, ['class' => 'selectpicker', 
				'id' => 'deparamento_id', 'placeholder' => '-- Seleccione --', "data-live-search" => "true"])
			!!}
		</div>
	</div>
	<div class="col-md-3">
		<div class="form-group">
			{!!Form::label('fk_municipio_id','Ciudad')!!}
			{!!Form::select('fk_municipio_id', $ciudad, null, ['class' => 'form-control', 'id' => "ciudad_id"])!!}
		</div>
	</div>
</div>