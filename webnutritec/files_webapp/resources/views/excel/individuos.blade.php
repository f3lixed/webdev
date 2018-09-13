<html>
	<body>
		<style>
			td{
				border: 1px solid #1c1c1c !important;
				padding: 5px 10px !important;
			}
		</style>
		<table>
			<!--  include php -->
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
			<thead>
				<tr style="background: #F5B7B1"> 
					<td>Macro</td>
					<td>Granja</td>
					<td>Cliente</td>
					<td>Fecha</td>
					<td>Sistema Producción</td>
					<td>Galpón</td>
					<td>Tipo Ambiente</td>
					<td>Linea</td>
					<td>Edad Sem.</td>
					<td>Sexo</td>
					<td>Variables</td>
					<td>Min</td>
					<td>Max</td>
					@if(count($VarCM) > 0)
						@foreach($VarCM as $individuos)
							<td style="background: #FFF700">{{$individuos->fk_individio_id}}</td>
						@endforeach
					@endif
					<td>Resultado</td>
					<td>Maximo Esperado</td>
					<td>IR</td>
					<td>Nivel Afectación</td>
					<td>% Afectación</td>
					<td>Calificación Isag</td>
					<td>ISAG</td>
				</tr>
			</thead>
			<!-- media row -->
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				@if(count($VarCM) > 0)
					@foreach($VarCM as $individuos)
						<td></td>
					@endforeach
				@endif
				<td></td>
				<td style="background: #A9CCE3 !important">{{$SemanasAnimal->peso_max}}</td>
				<td></td>
				<td></td>
				<td></td>
				<td style="background: #A9CCE3 !important">{{number_format($PromEGR * 100 ,2,".","")}}%</td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				@if(count($VarCM) > 0)
					@foreach($VarCM as $individuos)
						<td></td>
					@endforeach
				@endif
				<td></td>
				<td style="background: #A9CCE3 !important">{{$SemanasAnimal->peso_min}}</td>
				<td></td>
				<td></td>
				<td></td>
				<td style="background: #A9CCE3 !important">100%</td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				@if(count($VarCM) > 0)
					@foreach($VarCM as $individuos)
						<td></td>
					@endforeach
				@endif
				<td></td>
				<td style="background: #D1F2EB !important">{{(($SemanasAnimal->peso_min + $SemanasAnimal->peso_max) / 2)}}</td>
				<td></td>
				<td></td>
				<td></td>
				<td style="background: #F5B7B1 !important">{{(100 -($PromEGR * 100))}}</td>
			</tr>
			<!-- info array -->
			@foreach($EstudioGalponResultado->get() as $estudio)
				<tr>
					<td>{{$estudio->Variable->variables_macro}}</td>
					<td>{{$estudio->granja->granja_nombre}}</td>
					<td>{{$estudio->empresa->nombre_empresa}}</td>
					<td>{{$estudio->estudio->fecha_estudio}}</td>
					<td>{{$estudio->galpon->sistema_produccion}}</td>
					<td>{{$estudio->galpon->galpon_nombre}}</td>
					<td>{{$estudio->galpon->tipo_ambiente}}</td>
					<td>{{$estudio->animalLinea->linea_nombre}}</td>
					<td>{{$estudio->estudioGalpon->individuos_semanas}}</td>
					<td>{{$estudio->estudioGalpon->individios_genero}}</td>

					<td>{{$estudio->Variable->variable_nombre}}</td>
					<td>{{$estudio->Variable->variable_min}}</td>
					<td>{{$estudio->Variable->variable_max}}</td>
					@php
						$VarCMNew = $IndividuoVariable->where('fk_variable_id', $estudio->Variable->variable_id);
					@endphp
					@if(count($VarCMNew) > 0)
						@foreach($VarCMNew as $individuos)
							<td>{{$individuos->variable_valor}}</td>
						@endforeach
					@endif

					<td>{{$estudio->resultado}}</td>

					<td>{{($estudio->Variable->variable_max * 6)}}</td>
					<td>
						@if($estudio->ir == 1)
							Verdadero
						@else
							Falso
						@endif
					</td>
					<td>{{$estudio->nivel_afeccion}}</td>
					<td>{{($estudio->porcentaje_afectacion * 100)}}</td>
					<td>{{$estudio->calificacion}}</td>
					<td>{{($estudio->isag * 100)}}</td>
				</tr>
			@endforeach
		</table>
	</body>
</html>