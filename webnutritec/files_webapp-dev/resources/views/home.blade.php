@extends('layouts.admin')

@section('contenido')
  <div class="panel panel-primary">
    <div class="panel-heading">Calendario Estudios</div>
    <div class="panel-body" >
        {!! $calendar_details->calendar() !!}

    </div>
  </div>
@endsection
<script type="text/javascript">
function festivosRender(view, element) {
    $.ajax({
        type: 'GET',
        dataType : 'json',
        async: true,
        data: {inicio:view.start.format('YYYY-MM-DD'), fin:view.end.format('YYYY-MM-DD')},
        url: 'diasFestivos',
        success: function(data){
          // console.log(startFecha.format('yyyy-MM-dd'));
                if(view.name==='month' || view.name === 'basicWeek' || view.name === 'agendaWeek'){
                    $.each(data, function(index, value) {
                      // var startFecha = view.start._d;
                      console.log(value.start+" - "+view.start.format('YYYY-MM-DD'));
                        addClassFestivo(value.start, view.name);
                    });
                }else if(view.name === 'basicDay' || view.name === 'agendaDay'){
                    $('td.fc-widget-content').css('background-color', '');
                    var esfestivo = false;

                    $.each(data, function(index, value) {
                      // console.log("dia "+value.start+" - "+view.start.format('yyyy-MM-dd'));
                        if(value.start == view.start.format('YYYY-MM-DD'))
                            esfestivo = true;

                        if(esfestivo)
                            addClassFestivo(value.start, view.name);
                    });
                }

                //domingos para todas las vistas (mes,semana,dia)
                $('td.fc-sun').css('background-color', '#FA7A7A');
        },
        error: function(jqXHR, textStatus, errorThrown ){
            bootbox.alert('Error: ' + errorThrown);
        }
    });
}

diaCalendar = ['fc-sun', 'fc-mon', 'fc-tue', 'fc-wed', 'fc-thu', 'fc-fri', 'fc-sat'];

function addClassFestivo(fecha, viewname) {
  console.log(viewname+" - "+fecha);
    if (viewname === 'month') {
        //$("td[data-date='" + fecha + "']").addClass('festivo');
        $("td[data-date='" + fecha + "']").css('background-color', '#FA7A7A');
    } else if (viewname === 'basicDay' || viewname === 'agendaDay') {
        $('td.fc-widget-content').css('background-color', '#FA7A7A');
    } else if (viewname === 'basicWeek' || viewname === 'agendaWeek') {
        var dia = diaCalendar[diaSemana(fecha)];
        // console.log('dia: ' + fecha + ' semana: ' + dia);
        $('td.' + dia).css('background-color', '#FA7A7A');
    }

}

//Recibe fecha en formato YYYY/MM/DD
function diaSemana(fecha) {
    fecha = fecha.split('-');
    if (fecha.length !== 3) {
        return null;
    }
    //Vector para calcular dia de la semana de un anho regular.
    var regular = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
    //Vector para calcular dia de la semana de un anho bisiesto.
    var bisiesto = [0, 3, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
    //Vector para hacer la traduccion de resultado en dia de la semana.

    //Dia especificado en la fecha recibida por parametro.
    var dia = fecha[2];
    //Modulo acumulado del mes especificado en la fecha recibida por parametro.
    var mes = fecha[1] - 1;
    //Anho especificado por la fecha recibida por parametros.
    var anno = fecha[0];
    //Comparación para saber si el año recibido es bisiesto.
    if (esBisiesto(anno))
        mes = bisiesto[mes];
    else
        mes = regular[mes];
    //Se retorna el resultado del calculo del día de la semana.
    return Math.ceil(Math.ceil(Math.ceil((anno - 1) % 7) + Math.ceil((Math.floor((anno - 1) / 4) - Math.floor((3 * (Math.floor((anno - 1) / 100) + 1)) / 4)) % 7) + mes + dia % 7) % 7);
}

function esBisiesto(anno) {
    return ((anno % 4 === 0) && !(anno % 100 === 0 && anno % 400 !== 0));
}
</script>
