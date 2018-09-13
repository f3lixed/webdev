<div class="modal fade modal-slide-in-right" aria-hidden="true" role="dialog" tabindex="-1" id="modal-delete-{{$key}}">
	{{Form::Open(['route' => 'deleteGrupoVariable', 'method' => 'POST'])}}
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">×</span>
                </button>
                <h4 class="modal-title">Eliminar Grupo Variable</h4>
			</div>
			<div class="modal-body">
				<p>Confirme si desea eliminar este registro</p>
				{!!Form::hidden('fk_variable_id', $value->fk_variable_id)!!}
				{!!Form::hidden('fk_animal_id', $value->fk_animal_id)!!}
				{!!Form::hidden('fk_grupo_variable_id', $value->fk_grupo_variable_id)!!}
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
				<button type="submit" class="btn btn-primary">Confirmar</button>
			</div>
		</div>
	</div>
	{{Form::Close()}}
</div>