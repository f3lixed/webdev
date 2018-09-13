<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class empresaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'fk_departamento_id'=>'sometimes|required',
            'fk_municipio_id'=>'sometimes|required',
            'nit'=>'required|min:6|unique:empresas',
            'razon_social'=>'required'
        ];
    }
}
