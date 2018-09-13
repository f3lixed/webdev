<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Apimodel;
use App\User;

class ApiController extends Controller {

    public function login(Request $request) {

        // var_dump($request->input('data'));   
        $response = new Apimodel();

        $data = $request->input('data');
        $email = (!is_null($data) && isset($data['email'])) ? $data['email'] : null;
        $password = (!is_null($data) && isset($data['password'])) ? $data['password'] : null;


        if ($email && $password) {

            $user = User::select('password')->where('email', $email)->first();
            return $response->login($email, $user->password);
        } else {

            return $response->error();
        }
    }

    public function getEstudiosIdUser($id) {

        $response = new Apimodel();

        if (is_numeric($id)) {

            return $response->getUserId($id);
        }
    }

}
