<div class="modal fade modal-slide-in-right" aria-hidden="true" role="dialog" tabindex="-1" id="modal-edit-{{$key->grupo_variable_id}}">
	{!!Form::Open(array('action'=>array('GrupoVariablesController@update',$key->grupo_variable_id),'method'=>'PUT','id' => 'formEdit'.$key->grupo_variable_id ))!!}
	<div class="modal-dialog"  >
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true"></span>
				</button>
				<h4 class="modal-title">Accion Modificar</h4>
			</div>
			<div class="modal-body">
				<div class="box box-primary col-xs-12">
					<p>Actualizar información del grupo de variable <span><strong>"{{$key->grupo_nombre}}"</strong></span></p>
					<div class="form-group">
						<label for="nit_eps">Variable Nombre</label>
						{!!Form::text('grupo_nombre',$key->grupo_nombre,['class' => 'form-control','placeholder' => 'Nombre...',
							'id' => 'grupo_nombre'.$key->grupo_variable_id])
						!!}
						{!!Form::hidden('grupo_variable_id',$key->grupo_variable_id)!!}
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
					<button type="button" class="btn btn-primary" onclick="ValidateForm({{$key->grupo_variable_id}})">Actualizar</button>
				</div>
			</div>
		</div>
		{!!Form::Close()!!}
	</div>
</div>