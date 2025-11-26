<?php

namespace App\Http\Controllers\Api\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
/**
 * Class Request.
 */
 class ListUserInfoRequest extends ApiRequest
{

     public function rules()
     {

         return [
             'ids' => 'required|array'
         ];
     }


}
