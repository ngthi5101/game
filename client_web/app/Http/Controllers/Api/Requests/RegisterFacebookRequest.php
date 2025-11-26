<?php

namespace App\Http\Controllers\Api\Requests;

use Illuminate\Foundation\Http\FormRequest;
/**
 * Class Request.
 */
 class RegisterFacebookRequest extends ApiRequest
{

     public function getMessage($code, $field){
         if( $field == "display_name" && $code == "1042"){
             return "Tên hiển thị không được để trống";
         }else if( $field == "display_name" && $code == "1007"){
             return "Tên hiển chỉ chứa kí tự chữ và số";
         }else if( $field == "display_name" && $code == "2088"){
             return "Tên hiển thị chứa tối đa 14 ký tự.";
         }else if( $field == "display_name" && $code == "2083"){
             return "Tên hiển thị tối thiểu 4 ký tự.";
         }else if( $field == "display_name" && $code == "1052"){
             return "Tên hiển thị dã tồn tại.";
         }else if( $field == "display_name" && $code == "1019"){
             return "Tên hiển thị không được trùng với tên tài khoản.";
         }
         return "Đã có lỗi xảy ra";
     }
}
