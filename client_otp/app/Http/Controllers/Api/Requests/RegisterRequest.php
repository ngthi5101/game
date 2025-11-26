<?php

namespace App\Http\Controllers\Api\Requests;

use Illuminate\Foundation\Http\FormRequest;
/**
 * Class Request.
 */
 class RegisterRequest extends ApiRequest
{

     public function getMessage($code, $field){
         if( $field == "username" && $code == "1042"){
             return "Vui lòng điền tên tài khoản";
         }else if( $field == "username" && $code == "1007"){
             return "Tên tài khoản chỉ chứa kí tự chữ và số";
         }else if( $field == "username" && $code == "2088"){
             return "Tên tài khoản chứa tối đa 14 ký tự.";
         }else if( $field == "username" && $code == "2083"){
             return "Tên tài khoản tối thiểu 6 ký tự.";
         }else if( $field == "username" && $code == "1052"){
             return "Tên tài khoản  dã tồn tại.";
         }else if($field == "password" && $code == "1042") {
             return "Mật khẩu không được để trống.";
         }else if($field == "password" && $code == "2083") {
             return "Mật khẩu tối thiểu 4 kí tự.";
         }else if( $field == "display_name" && $code == "1042"){
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
         }else if( $field == "captcha_code" && $code == "1042"){
             return "Mã Captcha không được để trống";
         }else if( $field == "captcha_code" && $code == "1055"){
            return "Mã captcha không đúng";
         }
         return "Đã có lỗi xảy ra";
     }
}
