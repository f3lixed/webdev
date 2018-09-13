@extends ('layouts.admin')

@section ('contenido')
<div class="row">
	<div class="col-md-12">
		<h3>Nuevo Usuario</h3>
		@if (count($errors)>0)
			<div class="alert alert-danger">
				<ul>
					@foreach ($errors->all() as $error)
					<li>{{$error}}</li>
					@endforeach
				</ul>
			</div>
		@endif
		{!!Form::open(array('url'=>'user','method'=>'POST', 'name' => 'UserFormCreate'))!!}		
			@include('usuarios.form.form')
		{!!Form::close()!!}
	</div>
</div>
@endsection

@section('scripts')
	<script type="text/javascript">

		$('#id_empresa').change(function(event){

			if ($('#id_empresa').val() > 0) {

				var route = '{{url("empresasGranjas")}}';

				$.get(route+'/'+event.target.value+'',function(response, state){
					$('#granjas').empty();
					console.log(response);
					$('#granjas').append("<option value='0'>-- Seleccione --</option>");
					for(i=0; i<response.length; i++){
						$('#granjas').append("<option value='"+response[i].granja_id+"'>"+response[i].granja_nombre+"</option>");
					}
					$('#granjas').selectpicker('render').selectpicker('refresh');
					$('#granjas').selectpicker('selectAll');
				});

			}else {

				$('#granjas').empty();
				$('#granjas').append("<option value='0'>-- Seleccione --</option>");
				$('#granjas').selectpicker('render').selectpicker('refresh');
			}
		});

		if ($('#id_empresa').val() > 0) {

			var route = '{{url("empresasGranjas")}}';

			$.get(route+'/'+$('#id_empresa').val()+'',function(response, state){
				$('#granjas').empty();
				console.log(response);
				$('#granjas').append("<option value='0'>-- Seleccione --</option>");
				for(i=0; i<response.length; i++){
					$('#granjas').append("<option value='"+response[i].granja_id+"'>"+response[i].granja_nombre+"</option>");
				}
				$('#granjas').selectpicker('render').selectpicker('refresh');
				$('#granjas').selectpicker('selectAll');
			});

		}else {

			$('#granjas').empty();
			$('#granjas').append("<option value='0'>-- Seleccione --</option>");
			$('#granjas').selectpicker('render').selectpicker('refresh');
		}

	</script>
@stop