@extends ('layouts.admin')
@section ('contenido')
	<div class="row">
		<div class="col-md-12"  >
			<h3>Listado de Estudios</h3>
		</div>
		<div class="col-md-12 margin-0">
			<div class="table-responsive">
				@if(count($estudios) > 0)
					<div class="table-responsive">
						<table class="table table-bordered table-striped"  id="empresa">
							<thead id="trId">
								<th>Id</th>
                                <th>Empresa</th>
								<th>Granja</th>
								<th>Nombre Estudios</th>
								<th>Fecha</th>
							</thead>
							<tbody>
								@foreach($estudios as $estudio)
								<tr>
									<td>
										{!!link_to_route('estudio-galpon-detalle', $title = $estudio->estudio_id,
											$parameters = $estudio->estudio_id, $attributes = ['class' => '']);
										!!}
									</td>
                                    
                                      <td>

                                    	{!!link_to_route('estudio-galpon-detalle', $title = $estudio->empresa->nombre_empresa,
											$parameters = $estudio->estudio_id, $attributes = ['class' => '']);
										!!}
                                    	
                                    </td>

                                    <td>
                                    	{!!link_to_route('estudio-galpon-detalle', $title = $estudio->granjas->granja_nombre,
											$parameters = $estudio->estudio_id, $attributes = ['class' => '']);
										!!}
                                    </td>





									<td>
										{!!link_to_route('estudio-galpon-detalle', $title = $estudio->estudios,
											$parameters = $estudio->estudio_id, $attributes = ['class' => '']);
										!!}
									</td>
									<td>
										{{$estudio->fecha_estudio}}
									</td>
								</tr>
								@endforeach
							</tbody>
						</table>
					</div>
				@else
					<p>Aún no cuenta con estudios en la granja registrados</p>
				@endif
			</div>
		</div>
	</div>
@endsection

@section('scripts')

@stop