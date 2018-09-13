@extends ('layouts.admin')

@section ('contenido')
	<!-- info empresa -->
	<div class="row" >
		<div class="col-md-12" >
			<div class="panel panel-succes" id="DetalleID">
				<div class="panel-heading">
					<h1 class="panel-title"> <strong>{{$detalle->grupo_nombre}}</strong></h1><hr>
					<div class="row">
						<div class="col-lg-6 col-sm-4 col-md-4 col-xs-12">	
							<div class="form-group">
								<label>Id</label>
								<p>{{$detalle->grupo_variable_id}}</p>
							</div>
							<div class="form-group">
								<label>Grupo Variable</label>
								<p>{{$detalle->grupo_nombre}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
@stop