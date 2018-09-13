$('#deparamento_id').change(function(event){
	if ($('#deparamento_id').val() > 0) {
		var route = $('#route').val();
		$.get(route+'/'+event.target.value+'',function(response, state){
			$('#ciudad_id').empty();
			console.log(response);
			$('#ciudad_id').append("<option value='0'>Seleccione una ciudad</option>");
			for(i=0; i<response.length; i++){
				$('#ciudad_id').append("<option value='"+response[i].municipio_id+"'>"+response[i].municipio_nombre+"</option>");
			}
		});
	}else {
		$('#ciudad_id').empty();
		$('#ciudad_id').append("<option value='0'>Seleccione una ciudad</option>");
	}
});