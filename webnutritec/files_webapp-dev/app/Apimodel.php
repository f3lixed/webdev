<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



##### Models
use App\User;
use App\parametrizacion\empresa;
use App\parametrizacion\galpon;
use App\parametrizacion\granja;

###### update data para estudios
use App\Variable; ### tb variables
use App\EstudioGalponResultados; ###   tb estudio_galpon_resultados  
use App\Estudios\EstudioIndividuoVariable; ##  tb estudio_individio_variable
use App\Estudios\estudioGalponEndividuos; ##  tb estudio_galpon_individios
use App\Estudios\estudioGalpones; ### tb estudio_galpones
use App\Estudios\EstudioGrupoVariable; ###  tb estudios_grupo_variables
use App\Estudios\estudios; #### estudios

class Apimodel extends Model {

    public static function login($email, $password) {

        $user = User::select('id', 'name', 'email', 'cedula','rol','nombres','apellidos')->where('email', $email)->where('password', $password)->first();

        if ($user) {

            return Apimodel::statusSucces($user);
        } else {

            return Apimodel::error();
        }
    }

#### estudio y todas las demas tablas

    public function getUserId($id) {

        $estudio = estudios::where('fk_user_id', $id)->get();
        $estado = 0;
        if (isset($estudio)) {

            $empresa = empresa::all();
            $galpone = galpon::all();
            $granja = granja::all();
            $variables = Variable::all();
            $estudioGalponeResultado = EstudioGalponResultados::all();
            $estudioIndividuoVariables = EstudioIndividuoVariable::all();
            $estudioGalponeEndividueos = estudioGalponEndividuos::all();
            $estudioGalpone = estudioGalpones::select('estudio_galpon_id', 'fk_estudio_id', 'fk_empresa_id', 'fk_animal_id', 'fk_granja_id',
        'fk_linea_id', 'fk_galpone_id', 'individuos_semanas', 'individios_genero', 'estudio_galpon_lote')->get();
            $estudioGrupoVariables = EstudioGrupoVariable::all();


            $response = ["estudios" => $estudio, "empresas" => $empresa, "empresa_granja_galpones" => $galpone, "empresa_granjas" => $granja,
                "variables" => $variables, "estudio_galpon_resultados" => $estudioGalponeResultado,
                "estudio_individio_variable" => $estudioIndividuoVariables,
                "estudio_galpon_individios" => $estudioGalponeEndividueos, "estudio_galpones" => $estudioGalpone,
                "estudios_grupo_variables" => $estudioGrupoVariables];
            return $response;
        } else {

            return Apimodel::error();
        }
    }

    #######   succes y errores

    public static function statusSucces($data) {

        $response['status'] = 200;
        $response['message'] = "Conexión exitosa con el servidor";
        $response['data'] = $data;
        return $response;
    }

    public static function error() {

        $response['status'] = 404;
        $response['data'] = "peticion fallida";

        return $response;
    }

}
