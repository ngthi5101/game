<?php

namespace App\Http\Controllers\Api\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
/**
 * Class Request.
 */
class SetDisplaynameRequest extends ApiRequest
{

     public function rules()
     {

         return [
            'display_name' => 'required|alpha_num|min:4|max:14|unique:users,display_name',
         ];

     }

}
