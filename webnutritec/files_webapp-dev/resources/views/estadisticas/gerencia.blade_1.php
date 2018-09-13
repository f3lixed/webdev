@extends ('layouts.admin')

@section ('contenido')
	{!!Form::open(['route'=>'informe-gerencial', 'method' => 'GET', 'role' => 'search'])!!}
		<div class="row">
			<div class="col-md-3">
			 	<div class="form-group">
			 		{!!Form::label('empresaselect','Empresa')!!}
			 		{!!Form::select('empresaselect', $empresas, null, ['class' => 'form-control','id' => 'empresaselect',
			 			'placeholder' => '-- Seleccione --'])!!}
			 	</div>
			</div>
			<div class="col-md-3">
			 	<div class="form-group">
			 		{!!Form::label('granja','Granja')!!}
			 		{!!Form::select('granja', [], null, ['class' => 'form-control','id' => 'granja','disabled' => 'true',
			 		'placeholder' => '-- Seleccione --'])!!}
			 	</div>
			</div>
			<div class="col-md-3">
			 	<div class="form-group">
			 		{!!Form::label('galpon','Galpon')!!}
			 		{!!Form::select('galpon', [], null, ['class' => 'form-control','id' => 'galpon','disabled' => 'true',
			 		'placeholder' => '-- Seleccione --'])!!}
			 	</div>
			</div>
			<div class="col-md-3">
			 	<div class="form-group">
			 		{!!Form::label('lote','Lote')!!}
			 		{!!Form::select('lote', [], null, ['class' => 'form-control','id' => 'lote','disabled' => 'true',
			 		'placeholder' => '-- Seleccione --'])!!}
			 	</div>
			</div>
		</div>
		{!!Form::submit('Buscar',['class'=>'btn btn-primary'])!!}
	{!!Form::close()!!}
	@php

		$visible = @$_GET['lote'] ? true: false; 

	@endphp
	@if($visible)
		<div class="row" style="margin-top: 50px">

			<div class="col-md-6" id="box1">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">ISAG  VS SEMANAS</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					 {{--  div dodne se grafica  --}}
					<div class="box-body">
						<div class="chart">
							<canvas id="ChartIsag1" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(PESO)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="ChartPeso28" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Conformacion de Pechuga)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar1" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Indice de Grasa Abdominal)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar2" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>
		</div>   

       
       <div class="row">
			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Ulceras en Cavidad Oral)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar3" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Candida albicans en buche)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar4" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>
		</div>   

		<div class="row">
			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Proventriculitis)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar5" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Erosión de Molleja)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar6" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>
		</div>   
        
        <div class="row">
			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Consumo de Cama o Material extraño, plumas)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar7" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Eimeria Acervulina)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar8" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>
		</div> 

		<div class="row">
			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Eimeria Maxima)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar9" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Eimeria Tenella)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar10" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>
		</div>  

		<div class="row">
			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Balonamiento Gastro intestinal)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar11" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Inflamacion intestinal)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar12" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>
		</div> 

		<div class="row">
			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Delgadez intestinalo)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar13" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Exceso de agua en intestino)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar14" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>
		</div> 

		<div class="row">
			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Exceso contenido intestinal espumoso)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar15" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Exceso de moco intestinal)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar16" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>
		</div> 

		<div class="row">
			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Particulas de alimento sin digerir)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar17" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Desprendimiento Celular)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar18" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Hemorragias intestinales)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar19" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Tenias)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar20" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Heterakis)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar21" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>
		

			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Ascaris)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar22" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>	

	<div class="row">
				<div class="col-md-6" id="box5">
					<!-- AREA CHART -->
					<div class="box box-primary">
						<div class="box-header with-border">
							<h3 class="box-title" style="font-size:17px;">(Enteritis Necrotica)</h3>
							<div class="box-tools pull-right">
								<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
							</div>
						</div>
						<div class="box-body">
							<div class="chart">
								<canvas id="Chartvar23" width="200" height="200"></canvas> 
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-6" id="box5">
					<!-- AREA CHART -->
					<div class="box box-primary">
						<div class="box-header with-border">
							<h3 class="box-title" style="font-size:17px;">(Tamaño de bolsa /bursometro)</h3>
							<div class="box-tools pull-right">
								<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
							</div>
						</div>
						<div class="box-body">
							<div class="chart">
								<canvas id="Chartvar24" width="200" height="200"></canvas> 
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
				<div class="col-md-6" id="box5">
					<!-- AREA CHART -->
					<div class="box box-primary">
						<div class="box-header with-border">
							<h3 class="box-title" style="font-size:17px;">(Hemorragias en bolsa de fabricio)</h3>
							<div class="box-tools pull-right">
								<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
							</div>
						</div>
						<div class="box-body">
							<div class="chart">
								<canvas id="Chartvar25" width="200" height="200"></canvas> 
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-6" id="box5">
					<!-- AREA CHART -->
					<div class="box box-primary">
						<div class="box-header with-border">
							<h3 class="box-title" style="font-size:17px;">(atrofia de timo)</h3>
							<div class="box-tools pull-right">
								<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
							</div>
						</div>
						<div class="box-body">
							<div class="chart">
								<canvas id="Chartvar26" width="200" height="200"></canvas> 
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


		<div class="row">
			<div class="col-md-6" id="box5">
				<!-- AREA CHART -->
				<div class="box box-primary">
					<div class="box-header with-border">
						<h3 class="box-title" style="font-size:17px;">(Esplenomegalia)</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="Chartvar27" width="200" height="200"></canvas> 
						</div>
					</div>
				</div>
			</div>
		</div>
	@endif
@stop

@section('scripts')
	{!!Html::script("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js")!!}
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.min.js"></script>
	<script>

		$('#empresaselect').prop('selectedIndex',0);
		$('#btnSearch').attr('disabled','disabled');

		//granja
		$('#empresaselect').change(function(event){
			if ($('#empresaselect').val() > 0) {
				var route = '{{url("auto/granja")}}';
				$.get(route+'/'+event.target.value+'',function(response, state){
					$('#granja').empty();
					//console.log(response.length);
					$('#granja').append("<option value='0'>-- Seleccione --</option>");
					for(i=0; i<response.length; i++){
						$('#granja').append("<option value='"+response[i].granja_id+"'>"+response[i].granja_nombre+"</option>");
					}
					$('#granja').removeAttr('disabled');
				});
			}else {
				$('#granja').empty();
				$('#granja').append("<option value='0'>-- Seleccione --</option>");
				$('#granja').attr('disabled','disabled');
			}
		});

		//galpon
		$('#granja').change(function(event){
			if ($('#granja').val() > 0) {
				var route = '{{url("auto/galpon")}}';
				$.get(route+'/'+event.target.value+'',function(response, state){
					$('#galpon').empty();
					//console.log(response.length);
					$('#galpon').append("<option value='0'>-- Seleccione --</option>");
					for(i=0; i<response.length; i++){
						$('#galpon').append("<option value='"+response[i].galpone_id+"'>"+response[i].galpon_nombre+"</option>");
					}
					$('#galpon').removeAttr('disabled');
				});
			}else {
				$('#galpon').empty();
				$('#galpon').append("<option value='0'>-- Seleccione --</option>");
				$('#galpon').attr('disabled','disabled');
			}
		});

		//lote
		$('#galpon').change(function(event){
			if ($('#galpon').val() > 0) {

				var route = '{{url("auto/lote")}}';

				var empresa = $('#empresaselect').val();
				var granja = $('#granja').val();
			
				$.get(route+'/'+empresa+'/'+granja+'/'+event.target.value,function(response, state){
					$('#lote').empty();
					//console.log(response.length);
					$('#lote').append("<option value='0'>-- Seleccione --</option>");
					for(i=0; i<response.length; i++){
						$('#lote').append("<option value='"+response[i].lote+"'>"+response[i].lote+"</option>");
					}
					$('#lote').removeAttr('disabled');
				});
			}else {
				$('#lote').empty();
				$('#lote').append("<option value='0'>-- Seleccione --</option>");
				$('#lote').attr('disabled','disabled');
			}
		});

		$('#lote').change(function(){

			if ($(this).val() > 0) {
				$('#btnSearch').removeAttr('disabled');
			}else{
				$('#btnSearch').attr('disabled','disabled');
			}
		});

		//	##### CHARTS ######
		@php

			use App\EstudioGalponResultados;
			use Illuminate\Support\Facades\DB;

			//params
			$company = @$_GET['empresaselect'] ? $_GET['empresaselect']: false; 
			$granja = @$_GET['granja'] ? $_GET['granja']: false; 
			$galpon = @$_GET['galpon'] ? $_GET['galpon']: false; 
			$lote = @$_GET['lote'] ? $_GET['lote']: false; 

			//isaac total #1 graphic 
			$IsacTotal = EstudioGalponResultados::select(
					'estudio_galpon_resultados.lote','estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas',
					\DB::raw('100*(1-SUM(estudio_galpon_resultados.isag)) as isagtotal')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->where([
					'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote 
				])
				->groupBy('estudio_galpones.fk_estudio_id')
				->get();

			//graphic 28
	        $variable28 = EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', 'estudio_galpon_resultados.resultado'
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 28 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id')
	            ->groupBy('estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //dd($variable28);
                  /////////

	               $var28=DB::select('select     var.variable_id,  var.variable_nombre   ,est.lote ,eg.fk_estudio_id,eg.individuos_semanas, est.resultado  
						from estudio_galpon_resultados  as est
						     inner JOIN estudio_galpones as eg
						     on eg.estudio_galpon_id= est.fk_estudio_galpon_id 
						     inner  JOIN  variables as var
						      on var.variable_id=est.fk_variable_id
						      where  var.variable_id in ("28")
						      and est.lote="'.$lote.'"
                              and est.fk_empresa_id="'.$company.'"
                              and est.fk_granja_id="'.$granja.'"
                              and est.fk_galpone_id="'.$galpon.'"
						  GROUP  by  var.variable_id,  est.fk_estudio_galpon_id');

	            //dd($var28);



	            ////

	            //graphic 1
			$variable1= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', 'estudio_galpon_resultados.resultado'
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 1 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //graphic 2
			$variable2= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', 'estudio_galpon_resultados.resultado'
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 2 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();


	            ////graphic 3
			$variable3= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 3 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	          //// consulta  var 4
	            $variable4= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 4 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	          
            	//// consulta  var 5
	            $variable5= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 5 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 6
	            $variable6= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 6 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 7
	            $variable7= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 7 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 8
	            $variable8= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 8 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 9
	            $variable9= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 9 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 10
	            $variable10= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 10 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 11
	            $variable11= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 11 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 12
	            $variable12= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 12 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 13
	            $variable13= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 13 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 14
	            $variable14= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 14 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 15
	            $variable15= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 15 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 16
	            $variable16= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 16 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 17
	            $variable17= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 17 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 18
	            $variable18= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 18 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 19
	            $variable19= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 19 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 20
	            $variable20= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 20 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 21
	            $variable21= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 21 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 22
	            $variable22= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 22 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 23
	            $variable23= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 23 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 24
	            $variable24= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', 'estudio_galpon_resultados.resultado'
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 24 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 25
	            $variable25= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 25 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 26
	            $variable26= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 26 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //// consulta  var 27
	            $variable27= EstudioGalponResultados::select(
					'variables.variable_id',  'variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas', \DB::raw('100*estudio_galpon_resultados.porcentaje_afectacion as porcentaje_afectacion')
				)
				->join('estudio_galpones','estudio_galpon_resultados.fk_estudio_galpon_id','estudio_galpones.estudio_galpon_id')
				->join('variables','estudio_galpon_resultados.fk_variable_id','variables.variable_id')
	            ->where([
	                'estudio_galpon_resultados.fk_empresa_id' => $company,
					'estudio_galpon_resultados.fk_granja_id' => $granja,
					'estudio_galpon_resultados.fk_galpone_id' => $galpon,
					'estudio_galpon_resultados.lote' => $lote ,
					'variables.variable_id' => 27 //aca va el id de la variable
	            ])
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();
	          


	            


		@endphp

		@if($visible)
			//graficas de conformación muscular

			///////ISAG TOTAL
			var ctx = document.getElementById("ChartIsag1").getContext('2d');
			data = {
			    datasets: [
			        {
			        	label: "ISAG TOTAL",
		                data: [
				        	@php
				        		foreach($IsacTotal as $isac){
				        			echo '"'.$isac->isagtotal.'",';
				        		}
				        	@endphp,
				        	100,0
				        ],
		                borderWidth: 1,
		                backgroundColor: [
			                'rgba(255,99,132, .3)',
			                'rgba(75, 192, 192, .3)',
			            ],
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
		            },
			    ],
		    	labels: [
		    		@php
		        		foreach($IsacTotal as $isac){
		        			echo '"Semana '.$isac->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'bar',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		//console.log(meta);
					           	if (meta.type == 'bar') {
					               	meta.data.forEach(function (bar, index) {
					                   	var data = dataset.data[index];
					                   	ctx.fillText(data+'%', bar._model.x, bar._model.y - 5);
					               	});
					           	}
				           	});
				       	}
				   	},

			    }
			});


			//Chartvar1
			var ctx = document.getElementById("Chartvar1").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Conformacion de Pechuga",
		                data: [
		                	@php
				        		foreach($variable1 as $cm){
				        			echo '"'.$cm->resultado.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable1 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			});

			//Chartvar2
			var ctx = document.getElementById("Chartvar2").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Indice de Grasa Abdominal",
		                data: [
		                	@php
				        		foreach($variable2 as $cm){
				        			echo '"'.$cm->resultado.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable2 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			});

          /// var  3

          var ctx = document.getElementById("Chartvar3").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Ulceras en Cavidad Oral",
		                data: [
		                	@php
				        		foreach($variable3 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable3 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 


			/// var  4

          var ctx = document.getElementById("Chartvar4").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Candida albicans en buche",
		                data: [
		                	@php
				        		foreach($variable4 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable4 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 

			/// var  5

          var ctx = document.getElementById("Chartvar5").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Proventriculitis",
		                data: [
		                	@php
				        		foreach($variable5 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable5 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 

			/// var  6

          var ctx = document.getElementById("Chartvar6").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Erosión de Molleja",
		                data: [
		                	@php
				        		foreach($variable6 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable6 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 

			/// var  7

          var ctx = document.getElementById("Chartvar7").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Consumo de Cama o Material extraño(Plumas)",
		                data: [
		                	@php
				        		foreach($variable7 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable7 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 

			/// var  8

          var ctx = document.getElementById("Chartvar8").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Eimeria Acervulina",
		                data: [
		                	@php
				        		foreach($variable8 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable8 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 

			/// var  9

          var ctx = document.getElementById("Chartvar9").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Eimeria Maxima",
		                data: [
		                	@php
				        		foreach($variable9 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable9 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 

			/// var  10

          var ctx = document.getElementById("Chartvar10").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Eimeria Tenella",
		                data: [
		                	@php
				        		foreach($variable10 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable10 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 

			/// var  11

          var ctx = document.getElementById("Chartvar11").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Balonamiento Gastro intestinal",
		                data: [
		                	@php
				        		foreach($variable11 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable11 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 

			/// var  12

          var ctx = document.getElementById("Chartvar12").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Inflamacion intestinal",
		                data: [
		                	@php
				        		foreach($variable12 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable12 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 

			/// var  13

          var ctx = document.getElementById("Chartvar13").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Delgadez intestinal",
		                data: [
		                	@php
				        		foreach($variable13 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable13 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 

			/// var  14

          var ctx = document.getElementById("Chartvar14").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Exceso de agua en intestino",
		                data: [
		                	@php
				        		foreach($variable14 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable14 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 


			/// var  15

          var ctx = document.getElementById("Chartvar15").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Exceso contenido intestinal espumoso",
		                data: [
		                	@php
				        		foreach($variable15 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable15 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 

			/// var  16

          var ctx = document.getElementById("Chartvar16").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Exceso de moco intestinal",
		                data: [
		                	@php
				        		foreach($variable16 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable16 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 

			/// var  17

          var ctx = document.getElementById("Chartvar17").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Particulas de alimento sin digerir",
		                data: [
		                	@php
				        		foreach($variable17 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable17 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 

			/// var  18

          var ctx = document.getElementById("Chartvar18").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Desprendimiento Celular",
		                data: [
		                	@php
				        		foreach($variable18 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable18 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 


			/// var  19

          var ctx = document.getElementById("Chartvar19").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Hemorragias intestinales",
		                data: [
		                	@php
				        		foreach($variable19 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable19 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 

			/// var  20

          var ctx = document.getElementById("Chartvar20").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Tenias",
		                data: [
		                	@php
				        		foreach($variable20 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable20 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 


			/// var  21

          var ctx = document.getElementById("Chartvar21").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Heterakis",
		                data: [
		                	@php
				        		foreach($variable21 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable21 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 


			/// var  22

          var ctx = document.getElementById("Chartvar22").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Ascaris",
		                data: [
		                	@php
				        		foreach($variable22 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable22 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 


			/// var  23

          var ctx = document.getElementById("Chartvar23").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Enteritis Necrotica",
		                data: [
		                	@php
				        		foreach($variable23 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable23 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 


			/// var  24

          var ctx = document.getElementById("Chartvar24").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Tamaño de bolsa /bursometro",
		                data: [
		                	@php
				        		foreach($variable24 as $cm){
				        			echo '"'.$cm->resultado.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable24 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 

			/// var  25

          var ctx = document.getElementById("Chartvar25").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Hemorragias en bolsa de fabricio",
		                data: [
		                	@php
				        		foreach($variable25 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable25 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 


			/// var  26

          var ctx = document.getElementById("Chartvar26").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "atrofia de timo",
		                data: [
		                	@php
				        		foreach($variable26 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable26 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 

			/// var  27

          var ctx = document.getElementById("Chartvar27").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "Esplenomegalia",
		                data: [
		                	@php
				        		foreach($variable27 as $cm){
				        			echo '"'.$cm->porcentaje_afectacion.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			               
			                'rgba(255,99,132,1)',
			                'rgba(75, 192, 192, 1)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($variable27 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'%', bar._model.x+25, bar._model.y+20);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			}); 





           



			//PESO
			var ctx = document.getElementById("ChartPeso28").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "PESO",
		                data: [
		                	@php
				        		foreach($var28 as $cm){
				        			echo '"'.$cm->resultado.'",';
				        		}
				        	@endphp
		                ],
		                borderWidth: 1,
		                backgroundColor:'transparent',
			            borderColor: [
			                'rgba(75, 192, 192, 3)',
			            ],
	            	},
			    ],
		    	labels: [
			        @php
		        		foreach($var28 as $cm){
		        			echo '"Semana '.$cm->individuos_semanas.'",';
		        		}
		        	@endphp
			    ],
			};

			var myBarChart = new Chart(ctx,{
			    type: 'line',
			    data: data,
			    options: {
	    			tooltips: false,
		           	hover: false,
	    			animation: {
				       	onComplete: function () {
				           	var chartInstance = this.chart,
				            ctx = chartInstance.ctx;
				           	ctx.textAlign = 'center';
				           	ctx.textBaseline = 'bottom';
					        ctx.fillStyle = '#414141';
				           	this.data.datasets.forEach(function (dataset, i) {
				           		var meta = chartInstance.controller.getDatasetMeta(i);
				           		;
				               	meta.data.forEach(function (bar, index) {
				                   	var data = dataset.data[index];
				                   	//console.log(dataset.data[index]);
				                   	if (Number(dataset.data[index]) != 0){
				                   		ctx.fillText(data+'g.', bar._model.x+25, bar._model.y+15);
				                   	}
				               	});
				           	});
				       	}
				   	},
				   	scales: {
			            xAxes: [{
			                stacked: true
			            }],
			            yAxes: [{
			                stacked: true
			            }]
			        }
			    }
			});


		@endif
	</script>
@stop


