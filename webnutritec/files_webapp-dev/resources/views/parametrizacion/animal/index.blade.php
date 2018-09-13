@extends ('layouts.admin')

@section ('contenido')
	<div class="row">
		<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			<h3>Listado de Animales<br></h3>
			<a href="{{Route('animal.create')}}">
				<button class="btn btn-success">Nuevo</button>
			</a> 
		</div>
	</div>
	@include('parametrizacion.message')
	<div class="row margin-0">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="table-responsive">
				<table id="empresa" class="table table-striped table-bordered table-condensed">
					<thead id="trId">
						<th>Id</th>
						<th>Nombre Animal</th>
						<th>Descripcion Animal</th>
						<th>Opciones</th>
					</thead>
					@foreach($animal as $key)
						<tr>
							<td><a href="{{Route('gruposAnimal.create',["id"=>$key->animal_id])}}">{{$key->animal_id}}</a></td>
							<td><a href="{{Route('gruposAnimal.create',["id"=>$key->animal_id])}}">{{$key->animal_nombre}}</a></td>
							<td><a href="{{Route('gruposAnimal.create',["id"=>$key->animal_id])}}">{{$key->animal_descripcion}}</a></td>
							<td>
								<a href="{{Route('animal.edit',$key->animal_id)}}">
									<button class="btn btn-info"><i class="fa fa-pencil"></i></button></a>
								<a href="" data-target="#modal-delete-{{$key->animal_id}}" data-toggle="modal">
									<button class="btn btn-danger"><i class="fa fa-trash"></i></button>
								</a>
							</td>
						</tr>
						@include('parametrizacion.animal.modal')
					@endforeach
				</table>
			</div>
			
		</div>
	</div>
@section ('scripts')

@stop
@endsection