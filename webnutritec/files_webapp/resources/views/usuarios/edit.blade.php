@extends ('layouts.admin')
@section ('contenido')
<div class="row">
    <div class="col-lg-12">
        <h3>Editar Usuario: {{ $user->name}}</h3>
        @if (count($errors)>0)
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{$error}}</li>
                    @endforeach
                </ul>
            </div>
        @endif
        {!!Form::model($user,['method'=>'PATCH','route'=>['user.update',$user->id]])!!}
            @include('usuarios.form.form')
        {!!Form::close()!!}
    </div>
</div>
@endsection

@section('scripts')
    <script type="text/javascript">

        $('#id_empresa').change(function(event){

            if (confirm('Recuerde, si cambia la empresa perdera acceso a las demas granjas que ha asiganado anteriormente!\n\n ¿desea continuar?')) {

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
            
            }else{

                $('#id_empresa').val({{$user->id_empresa}});
                return false;
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
            });

        }else {

            $('#granjas').empty();
            $('#granjas').append("<option value='0'>-- Seleccione --</option>");
            $('#granjas').selectpicker('render').selectpicker('refresh');
        }

        function DeleteGranja(id){

            var token = $('#_token').val();
            var route = "{{url('delete/granja')}}";

            if(confirm('¿Esta seguro de eliminar el acceso del usuario a esta granja?')){

                $.ajax({
                    type:'POST',
                    url: route,
                    cache:false,
                    data:{
                        '_token': token, 
                        'id': id
                    },
                    success:function(server){
                        alert(server);
                        location.reload();
                    }
                });
            }
        }

    </script>
@stop
