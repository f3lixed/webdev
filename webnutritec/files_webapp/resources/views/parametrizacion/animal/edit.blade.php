@extends ('layouts.admin')

@section ('contenido')
    <div class="row">
        <div class="col-md-12">
            <h3>Editar animal: {{$animal->animal_nombre}} </h3>
            @include('parametrizacion.empresa.form.error')  
            {!!Form::model($animal,['method'=>'PATCH','route'=>['animal.update',$animal->animal_id]])!!}
                {{Form::token()}}
                @include('parametrizacion.animal.form.form')
            {!!Form::close()!!}
        </div>
    </div>
@endsection