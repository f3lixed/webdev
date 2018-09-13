@extends('layouts.admin')
@section('html-title', $html_title)
@section('css')	
@stop

@section ('contenido')
<div class="row">
    <div class="col-md-12 text-center ">
        <h3>INFORME DE CONDICIÓN CORPORAL</h3>
    </div>
</div>
<button onclick="PdfGenerate('{{uniqid()}}')" class="btn btn-success" style="margin-bottom: 40px">
    Generar Reporte
</button>
<div id="Reporte" style="background: #fff !important">
    <div class="row">
        <div class="col-md-4 col-xs-12 col-sm-12 col-lg-4">
            <div class="table-responsive">
                <table class="table" style="background: #E9F7EF">
                    <tr>
                        <th>Fecha</th>
                        <td>{{$Estudio->fecha_estudio}}</td>
                    </tr>
                    <tr>
                        <th>Empresa</th>
                        <td>{{$Estudio->empresa->nombre_empresa}}</td>
                    </tr>
                    <tr>
                        <th>Granja</th>
                        <td>{{$Estudio->granjas->granja_nombre}}</td>
                    </tr>
                    <tr>
                        <th>Lote</th>
                        <td>{{$EstudioVariable->estudio_galpon_lote}}</td>
                    </tr>
                    <tr>
                        <th>Edad Semanas</th>
                        <td>{{$EstudioVariable->individuos_semanas}}</td>
                    </tr>
                    <tr>
                        <th>Linea</th>
                        <td>{{$EstudioVariable->linea->linea_nombre}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="col-md-8 col-xs-12 col-sm-12 col-lg-8">
            <a href="{{route('excel-estudio-galpon',
				     	['estudio_galpon_id' => $galpon,
		              		'fk_estudio_id' => $Estudio->estudio_id,
		              		'fk_animal_id' => $Estudio->fk_animal_id 
				     	]
				      )}}" class="btn btn-success" id="btnGenerarExcel"> 
                <i class="fa fa-table" aria-hidden="true"></i> Generar Excel
            </a>
            {!!Form::model($EstudioVariable,['method'=>'POST','route'=>['update-description',$EstudioVariable]])!!}
            <div class="form-group" style="margin-top: 20px">
                {!!Form::label('description','Observación')!!}<br>
                {!!Form::textarea('description',null,['class' => 'form-control','rows' => 3])!!}
                {!!Form::hidden('galpon_id', $galpon)!!}
                {!!Form::hidden('fk_estudio_id', $Estudio->estudio_id)!!}
                {!!Form::hidden('fk_animal_id', $Estudio->fk_animal_id)!!}
            </div>
            <div class="form-group">
                <button class="btn btn-primary" id="BtnSave">
                    <i class="fa fa-save"></i> Guardar
                </button>
            </div>
            {!!Form::close()!!}
        </div>
    </div>

    <!-- Estadísticas gráficos -->
    <div class="row">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
        <div class="col-md-6" id="box1">
            <!-- AREA CHART -->
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title" style="font-size:17px;">Evolucion Pesos</h3>
                    <div class="box-tools pull-right">
                        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="chart">
                        <canvas id="ChartPesos" width="200" height="200"></canvas> 
                    </div>
                </div><!-- /.box-body -->
            </div><!-- /.box -->
        </div>
        <div class="col-md-6" id="box2">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title" style="font-size:17px;">Conformación Muscular</h3>
                    <div class="box-tools pull-right">
                        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="chart">
                        <canvas id="ChartMuscular" width="200" height="200"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6" id="box3">
            <div class="box box-success">
                <div class="box-header with-border">
                    <h3 class="box-title" style="font-size:17px;">Cumplimiento de Peso</h3>
                    <div class="box-tools pull-right">
                        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="chart">
                        <canvas id="ChartCumplimiento" width="200" height="200"></canvas>
                    </div>
                </div><!-- /.box-body -->
            </div><!-- /.box -->
        </div>
        <div class="col-md-6" id="box4">
            <div class="box box-success">
                <div class="box-header with-border">
                    <h3 class="box-title" style="font-size:17px;">ISAG Obtenido</h3>
                    <div class="box-tools pull-right">
                        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="chart">
                        <canvas id="ChartIsaag" width="200" height="200"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>       
    <!-- 3 variables -->
    <div class="row">
        <div class="col-md-4" id="box3">
            <div class="box box-success">
                <div class="box-header with-border">
                    <h3 class="box-title" style="font-size:17px;">Porcentaje de postura</h3>
                    <div class="box-tools pull-right">
                        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="chart">
                        <canvas id="ChartPostura" width="200" height="200"></canvas>
                    </div>
                </div><!-- /.box-body -->
            </div><!-- /.box -->
        </div>
        <div class="col-md-4" id="box3">
            <div class="box box-success">
                <div class="box-header with-border">
                    <h3 class="box-title" style="font-size:17px;">Consumo de alimento G/Día</h3>
                    <div class="box-tools pull-right">
                        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="chart">
                        <canvas id="ChartConsumo" width="200" height="200"></canvas>
                    </div>
                </div><!-- /.box-body -->
            </div><!-- /.box -->
        </div>
        <div class="col-md-4" id="box3">
            <div class="box box-success">
                <div class="box-header with-border">
                    <h3 class="box-title" style="font-size:17px;">Huevos ave alojada</h3>
                    <div class="box-tools pull-right">
                        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="chart">
                        <canvas id="ChartHuevos" width="200" height="200"></canvas>
                    </div>
                </div><!-- /.box-body -->
            </div><!-- /.box -->
        </div>

    </div>
    <!-- END 3 variables -->
    <div class="row">
        <div class="col-md-6" id="box5">
            <!-- AREA CHART -->
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title" style="font-size:17px;">Variables Isag</h3>
                    <div class="box-tools pull-right">
                        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="chart">
                        <canvas id="ChartIsagDetallado" width="250" height="340"></canvas> 
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6" id="box6">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title" style="font-size:17px;">Distribución Tamaño Bolsas Fabricio</h3>
                    <div class="box-tools pull-right">
                        <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    </div>
                </div>
                <div class="box-body">
                    <div class="chart">
                        <canvas id="ChartDistribucion" width="250" height="340"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 text-center">
            <p>CONFIDENCIAL</p>
        </div>
    </div>
</div>
<div>
@stop

@section('scripts')
	{!!Html::script("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js")!!}
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.min.js"></script>
	@php

		//grafica del peso
		$VarPeso = $IndividuoVariable->where('fk_variable_id',28);
		//$VarPesoAvg = $VarPeso->avg('variable_valor');
		$VarPesoAvg = number_format($VarPeso->avg('variable_valor') ,0,"","");

		//conformación muscular
		$VarCM = $IndividuoVariable->where('fk_variable_id', 1);

		//cumplimiento de peso
		$SemanasGalpon = $EstudioVariable->individuos_semanas;

		//isaag detallado
		$PromEGR = $EstudioGalponResultado->sum('isag');

		//issag detallado 2
		$IndividuosEGR = $EstudioGalponResultado->get();

		//distribución tamaño bolsas
		$DistribucionTB = $IndividuoVariable->where('fk_variable_id',24);

	@endphp
	<script>

		function PdfGenerate(id) {
			//if (!isChartRendered) return; // return if chart not rendered
			document.getElementById('BtnSave').style.display = "none";
			document.getElementById('btnGenerarExcel').style.display = "none";
			document.getElementById('Reporte').style.padding = "20px";
			//box
			document.getElementById('contentBoxFirst').style.width = "1360px";
			document.getElementById('contentBoxFirst').style.overflow = "scroll";
			document.getElementById('contentBoxFirst').style.position = "absolute";
			//styles box canvas
			document.getElementById('box1').style.width = "50%";
			document.getElementById('box2').style.width = "50%";
			document.getElementById('box3').style.width = "50%";
			document.getElementById('box4').style.width = "50%";
			document.getElementById('box5').style.width = "50%";
			document.getElementById('box6').style.width = "50%";
			document.getElementById('box1').style.float = "left";
			document.getElementById('box2').style.float = "left";
			document.getElementById('box3').style.float = "left";
			document.getElementById('box4').style.float = "left";
			document.getElementById('box5').style.float = "left";
			document.getElementById('box6').style.float = "left";

			//function
			html2canvas(document.getElementById('Reporte'), {
				onrendered: function(canvas) {
					var link = document.createElement('a');
					link.href = canvas.toDataURL('pdf');
					link.download = 'reporte-estadisticas'+id+'.jpg';
					link.click();
					//box
					document.getElementById('contentBoxFirst').style.width = "100%";
					document.getElementById('contentBoxFirst').style.overflow = "hidden";
					document.getElementById('contentBoxFirst').style.position = "relative";
					//others
					document.getElementById('BtnSave').style.display = "block";
					document.getElementById('btnGenerarExcel').style.display = "inline-block";
					document.getElementById('Reporte').style.padding = "0";
					//styles box canvas
					document.getElementById('box1').style.width = "";
					document.getElementById('box2').style.width = "";
					document.getElementById('box3').style.width = "";
					document.getElementById('box4').style.width = "";
					document.getElementById('box5').style.width = "";
					document.getElementById('box6').style.width = "";
				}
			});

			//location.reload();
		}
		//graficas del peso
		var ctx = document.getElementById("ChartPesos").getContext('2d');
		data = {
		    datasets: [
	            {
	                label: "Promedio: "+{{$VarPesoAvg}},
	                data: [
	                	@php
			        		foreach($VarPeso as $peso){
			        			echo '"'.$VarPesoAvg.'",';
			        		}
			        	@endphp
	                ],
	                type: 'line',
	                lineTension: 1,
	                pointRadius: 1,
	                fill: false,
	                spanGaps: true,
	                borderColor: 'rgba(255, 99, 132, .7)',
            	},
		        {
		        	label: "Evolución pesos (gramos)",
	                data: [
			        	@php
			        		foreach($VarPeso as $peso){
			        			echo '"'.$peso->variable_valor.'",';
			        		}
			        	@endphp
			        ],
	                borderWidth: 1,
	                backgroundColor: 'rgba(100, 165, 45, 0.2)',
	                borderColor: 'rgba(100, 165, 45, 1)',
	            },
		    ],
	    	labels: [
		        @php
	        		foreach($VarPeso as $peso){
	        			echo '"'.$peso->fk_individio_id.'",';
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
				                   	ctx.fillText(data, bar._model.x, bar._model.y - 5);
				               	});
				           	}
			           	});
			           	//isChartRendered = true
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
		//graficas de conformación muscular
		var ctx = document.getElementById("ChartMuscular").getContext('2d');
		data = {
		    datasets: [
		        {
		        	label: "Conformación Muscular",
	                data: [
			        	@php
			        		foreach($VarCM as $cm){
			        			echo '"'.$cm->variable_valor.'",';
			        		}
			        	@endphp
			        ],
	                borderWidth: 1,
	                backgroundColor: 'rgba(75, 192, 192, .3)',
	                borderColor: 'rgba(75, 192, 192, 1)',
	            },
		    ],
	    	labels: [
		        @php
	        		foreach($VarCM as $cm){
	        			echo '"'.$cm->fk_individio_id.'",';
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
				                   	ctx.fillText(data, bar._model.x, bar._model.y + 15);
				               	});
				           	}
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

		//cumplimiento de peso
		var ctx = document.getElementById("ChartCumplimiento").getContext('2d');
		data = {
		    datasets: [
		    	{
		        	label: "Esperado",
	                data: [
			        	{{$PromPeso}},0
			        ],
	                borderWidth: 1,
	                backgroundColor: 'rgba(75, 192, 192, .3)',
	                borderColor: 'rgba(75, 192, 192, 1)',
	            },
		     	{
	                label: "Real",
	                data: [
	                	{{$VarPesoAvg}},0
	                ],
	                borderWidth: 1,
	                backgroundColor: 'rgba(255, 99, 132, .3)',
	                borderColor: 'rgba(255, 99, 132, 1)',
            	},             	

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
				                   	ctx.fillText(data, bar._model.x, bar._model.y - 5);
				               	});
				           	}
			           	});
			       	}
			   	},
			   	
			   	
		    }
		});
//Postura
		var ctx = document.getElementById("ChartPostura").getContext('2d');
		data = {
		    datasets: [
		    	{
		        	label: "Esperado",
	                data: [
                                    {{$SemanasAnimal->postura}},0
			        ],
	                borderWidth: 1,
	                backgroundColor: 'rgba(75, 192, 192, .3)',
	                borderColor: 'rgba(75, 192, 192, 1)',
	            },
		     	{
	                label: "Real",
	                data: [
                            {{$EstudioVariable->postura}},0
	                ],
	                borderWidth: 1,
	                backgroundColor: 'rgba(255, 99, 132, .3)',
	                borderColor: 'rgba(255, 99, 132, 1)',
            	},             	

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
				                   	ctx.fillText(data, bar._model.x, bar._model.y - 5);
				               	});
				           	}
			           	});
			       	}
			   	},
			   	
			   	
		    }
		});
//consumo
		var ctx = document.getElementById("ChartConsumo").getContext('2d');
		data = {
		    datasets: [
		    	{
		        	label: "Esperado",
	                data: [
			        	{{$SemanasAnimal->consumo}},0
			        ],
	                borderWidth: 1,
	                backgroundColor: 'rgba(75, 192, 192, .3)',
	                borderColor: 'rgba(75, 192, 192, 1)',
	            },
		     	{
	                label: "Real",
	                data: [
	                	{{$EstudioVariable->consumo}},0
	                ],
	                borderWidth: 1,
	                backgroundColor: 'rgba(255, 99, 132, .3)',
	                borderColor: 'rgba(255, 99, 132, 1)',
            	},             	

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
				                   	ctx.fillText(data, bar._model.x, bar._model.y - 5);
				               	});
				           	}
			           	});
			       	}
			   	},
			   	
			   	
		    }
		});
//Huevos
		var ctx = document.getElementById("ChartHuevos").getContext('2d');
		data = {
		    datasets: [
		    	{
		        	label: "Esperado",
	                data: [
			        	{{$SemanasAnimal->huevos}},0
			        ],
	                borderWidth: 1,
	                backgroundColor: 'rgba(75, 192, 192, .3)',
	                borderColor: 'rgba(75, 192, 192, 1)',
	            },
		     	{
	                label: "Real",
	                data: [
	                	{{$EstudioVariable->huevos}},0
	                ],
	                borderWidth: 1,
	                backgroundColor: 'rgba(255, 99, 132, .3)',
	                borderColor: 'rgba(255, 99, 132, 1)',
            	},             	

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
				                   	ctx.fillText(data, bar._model.x, bar._model.y - 5);
				               	});
				           	}
			           	});
			       	}
			   	},
			   	
			   	
		    }
		});
		//issac obtenido
		var ctx = document.getElementById("ChartIsaag").getContext('2d');
		data = {
		    datasets: [
		    	{
		        	label: "Esperado",
	                data: [
			        	({{number_format($PromEGR * 100 ,2,".","")}}), ''
			        ],
	                borderWidth: 1,
	                backgroundColor: 'rgba(75, 192, 192, .3)',
	                borderColor: 'rgba(75, 192, 192, 1)',
	            },
		     	{
	                label: "Real Granja",
	                data: [
	                	(100-({{$PromEGR}} * 100)), 100,120
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
		        1,2
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
				                   	if (data != '') {
				                   		ctx.fillText(data+'%', bar._model.x, bar._model.y - 5);
				                   	}
				               	});
				           	}
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

		//issac detallado
		var ctx = document.getElementById("ChartIsagDetallado").getContext('2d');
		data = {
		    datasets: [
		     	{
	                label: "Porcentaje",
	                data: [
	                	@php
			        		foreach($IndividuosEGR as $cm){
			        			echo '"'.($cm->porcentaje_afectacion * 100).'",';
			        		}
			        	@endphp
	                ],
	                borderWidth: 1,
	                backgroundColor: 'rgba(75, 192, 192, .3)',
	                borderColor: 'rgba(75, 192, 192, 1)',
            	},
		    ],
	    	labels: [
		        @php
	        		foreach($IndividuosEGR as $cm){
	        			echo '"'.$cm->Variable->variable_nombre.'",';
	        		}
	        	@endphp
		    ],
		};

		var myBarChart = new Chart(ctx,{
		    type: 'horizontalBar',
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
			                   		ctx.fillText(data+'%', bar._model.x-25, bar._model.y+7);
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

		//issac detallado
		var ctx = document.getElementById("ChartDistribucion").getContext('2d');
		data = {
		    datasets: [
		     	{
	                label: "Distribución Tamaño Bolsas Fabricio",
	                data: [
	                	@php
			        		foreach($DistribucionTB as $cm){
			        			echo '"'.$cm->variable_valor.'",';
			        		}
			        	@endphp, 2
	                ],
	                borderWidth: 1,
	                backgroundColor: 'rgba(75, 192, 192, .3)',
	                borderColor: 'rgba(75, 192, 192, 1)',
            	},
		    ],
	    	labels: [
		        @php
	        		foreach($DistribucionTB as $cm){
	        			echo '"'.$cm->fk_individio_id.'",';
	        		}
	        	@endphp
		    ],
		};

		var myBarChart = new Chart(ctx,{
		    type: 'bar',
		    data: data,
		    options: {
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


	</script>
@endsection