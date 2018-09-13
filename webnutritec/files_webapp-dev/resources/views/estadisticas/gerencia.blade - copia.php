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
		{!!Form::submit('Buscar',['class'=>'btn btn-primary', 'id' => 'btnSearch'])!!}
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
						<h3 class="box-title" style="font-size:17px;">ULCERAS EN CAVIDAD ORAL</h3>
						<div class="box-tools pull-right">
							<button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="box-body">
						<div class="chart">
							<canvas id="ChartIsagDetallado" width="200" height="200"></canvas> 
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

			//graphic 2
			$IndividuosEGR = EstudioGalponResultados::select(
					'variables.variable_id','variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas',
					\DB::raw('100*(estudio_galpon_resultados.porcentaje_afectacion) as isagtotal')
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

	        $Peso3 = EstudioGalponResultados::select(
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
	            ->groupBy('variables.variable_id','estudio_galpon_resultados.fk_estudio_galpon_id')
	            ->get();

	            //dd($Peso3);

	          //// consulta  var 4
	            $variable4 = EstudioGalponResultados::select(
					'variables.variable_id','variables.variable_nombre','estudio_galpon_resultados.lote',
					'estudio_galpones.fk_estudio_id','estudio_galpones.individuos_semanas',
					\DB::raw('100*(estudio_galpon_resultados.porcentaje_afectacion) as isagtotal')
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
	          //// fin consulta var 4

	          


	            


		@endphp

		@if($visible)
			//graficas de conformación muscular
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


			//issac detallado
			var ctx = document.getElementById("ChartIsagDetallado").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "ULCERAS EN CAVIDAD ORAL",
		                data: [
		                	@php
				        		foreach($IndividuosEGR as $cm){
				        			echo '"'.$cm->isagtotal.'",';
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
		        		foreach($IndividuosEGR as $cm){
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
				                   		ctx.fillText(data+'g.', bar._model.x, bar._model.y+7);
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
				        			echo '"'.$cm->isagtotal.'",';
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
				                   		ctx.fillText(data+'g.', bar._model.x, bar._model.y+7);
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



          ///fin var 4   



			//PESO
			var ctx = document.getElementById("ChartPeso28").getContext('2d');
			data = {
			    datasets: [
			     	{
		                label: "PESO",
		                data: [
		                	@php
				        		foreach($Peso3 as $cm){
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
		        		foreach($Peso3 as $cm){
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
				                   		ctx.fillText(data+'g.', bar._model.x, bar._model.y-15);
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


