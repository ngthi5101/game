<?php

namespace App\Http\Controllers\Api\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

/**
 * Class Request.
 */
 class LoginRequest extends ApiRequest
{

     public function getMessage($code, $field){
         if( $field == "username" && $code == "1042"){
             return "Tên đăng nhập không được để trống.";
         }else if($field == "password" && $code == "1042"){
             return "Mật khẩu không được để trống.";
         }
         return "Sai tên đăng nhập hoặc mật khẩu.";
     }
}
