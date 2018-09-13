<div class="row">
	<div class="col-md-6">
		<div class="form-group">
			{!!Form::label('animal_nombre','Nombre Animal')!!}
			{!!Form::text('animal_nombre',null,['class' => 'form-control','placeholder' => 'Nombre del Animal'])!!}
		</div>
	</div>
	<div class="col-md-12">
		<div class="form-group">
			{!!Form::label('animal_descripcion','Descripción Animal')!!}
			{!!Form::textarea('animal_descripcion',null,['class' => 'form-control','placeholder' => 'Descripción del Animal','rows'=>3])!!}
		</div>
	</div>
	<div class="col-md-12">
		<button class="btn btn-primary" type="submit">Guardar</button>
		<button class="btn btn-danger" type="reset">Limpiar</button>
	</div>
</div>