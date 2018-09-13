<!--Inicio Modal-->
@foreach($listadoGalpon as $key)
	<div class="modal fade modal-slide-in-right" aria-hidden="true" role="dialog" tabindex="-1" id="modal-edit-{{$key->galpone_id}}">
		{{Form::Open(array('action'=>array('parametrizacion\galponController@update',$key->galpone_id),'method'=>'PUT'))}}
			<input type="hidden" name="fk_empresa_id" value="{{$empresasListado->empresa_id}}" >
			<input type="hidden" name="fk_granja_id" value="{{$granjaListado->granja_id}}" >
			<div class="modal-dialog"  >
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true"></span>
						</button>
						<h4 class="modal-title"> Acción Modificar</h4>
					</div>
					<div class="modal-body">
						<div class="box box-primary col-xs-12">
							<p>Confirme si desea Modificar el galpon "<span><strong>{{$key->sistema_produccion}}</strong></span>"</p>
							<br>
							<div class="form-group">
								<label for="nit_eps">Sistema Producción</label>
								<input type="text" name="sistema_produccion" class="form-control"   value="{{$key->sistema_produccion}}" >
							</div>
							<div class="form-group">
								<label for="nit_eps">Tipo de Ambiente</label>
								<input type="text" name="tipo_ambiente" class="form-control"   value="{{$key->tipo_ambiente}}" >
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
							<button type="submit" class="btn btn-primary">Modificar</button>
						</div>
					</div>
				</div>
			{{Form::Close()}}
		</div>
	</div>
@endforeach
<!--fin Modal-->