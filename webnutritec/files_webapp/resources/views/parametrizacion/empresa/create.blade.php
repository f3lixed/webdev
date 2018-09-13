@extends ('layouts.admin')

@section ('contenido')
	<div class="row">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<h3>Nueva Empresa</h3>
			@include('parametrizacion.empresa.form.error')
			{!!Form::open(array('url'=>'empresa','method'=>'POST','autocomplete'=>'off'))!!}
				{{Form::token()}}
				@include('parametrizacion.empresa.form.form')
				<div class="row">
					<div class="col-lg-12 col-sm-6 col-md-6 col-xs-6">
							<button class="btn btn-primary" type="submit">Guardar</button>
							<button class="btn btn-danger" type="reset">Limpiar</button>
						</div>				
					</div>
				</div>
			{!!Form::close()!!}
		</div>
	</div>
@stop

@section('scripts')
	{!!Html::script('js/city.js')!!}
@endsection