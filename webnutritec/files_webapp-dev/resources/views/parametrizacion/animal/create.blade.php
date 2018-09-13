@extends ('layouts.admin')

@section ('contenido')
	<div class="row">
		<div class="col-md-12">
			<h3>Nuevo Animal</h3>
			@include('parametrizacion.empresa.form.error')	
			{!!Form::open(array('url'=>'animal','method'=>'POST','autocomplete'=>'off'))!!}
				{{Form::token()}}
				@include('parametrizacion.animal.form.form')
			{!!Form::close()!!}
		</div>
	</div>
@endsection