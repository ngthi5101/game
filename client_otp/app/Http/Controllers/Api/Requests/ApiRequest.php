<?php

namespace App\Http\Controllers\Api\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

/**
 * Class Request.
 */
 class ApiRequest extends FormRequest
{
     public $rules = [];

     /**
     * @var string
     */


     protected $error = '';

     public function authorize()
     {
         return true;
     }

     public function response(array $errors)
     {
//         Log::info($errors);
         $code = null;
         $field = null;
         $message = '';
         foreach ($errors as $k => $er){
             $code = $er[0];
             $field = $k;
             $message = $this->getMessage($code, $field);
             break;
         }
         $response = [
             'status' => 'error',
             'error_code' => is_numeric($code) ? (int)$code : $code,
             'field' => $field,
             'message' => $message
         ];
         return new JsonResponse($response, 200);
     }

     /**
      * Get the validation rules that apply to the request.
      *
      * @return array
      */
     public function rules()
     {
         return $this->rules;
     }

     public function validated($rules)
     {
         $this->rules = $rules;
         $this->validate();
     }

     public function getMessage($code, $field){
         return '';
     }

}
