@extends ('layouts.admin')

@section ('contenido')

	<div class="row">
		<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
			<h3>Listado de Usuarios <a href="{{Route('user.create')}}"><button class="btn btn-success">Nuevo</button></a></>
		</div>
	</div>

	<div class="row">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			@if(Session::has('message'))
                @if(Session::get('status') == 1)
                    <div class="alert alert-success alert-dismissible  show" role="alert">
    			     	<strong>* * * {{Session::get('message')}} * * *</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                @else
                    <div class="alert alert-danger alert-dismissible  show" role="alert">
                        <strong>* * * {{Session::get('message')}} * * *</strong><br>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                @endif
            @endif
			<div id="app" class="table-responsive">
				<table class="table table-striped table-bordered table-condensed table-hover">
					<thead>
						<th>Id</th>
						<th>Nombre</th>
						<th>Email</th>
						<th>Rol</th>
						<th>Opciones</th>
					</thead>
	               @foreach ($usuarios as $usu)
						<tr>
							<td>{{ $usu->id}}</td>
							<td>{{ $usu->name}}</td>
							<td>{{ $usu->email}}</td>
							<td>{{$usu->rol}}</td>
							<td>
								<a href="{{Route('user.edit',$usu->id)}}"><button class="btn btn-info" @click="User(1)">Editar</button></a>
		                        <!-- <a href="" data-target="#modal-delete-{{$usu->id}}" data-toggle="modal"><button class="btn btn-danger">Eliminar</button></a>-->
							</td>
						</tr>
					@endforeach
				</table>
			</div>
		</div>
	</div>
@endsection