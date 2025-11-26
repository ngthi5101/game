<?php

namespace App\Http\Controllers\Api\Requests;

/**
 * Class Request.
 */
class ForgotPasswordRequest extends ApiRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    //'old_password' => 'require',
    //'password' => 'required|confirm|min:6',
    //'password_confirmation' => 'required|min:6'
    //'username' => 'required|alpha_num|max:14|min:6',
    //'password' => 'required|string|min:4',
    //'password_confirm' => 'required|same:password',
    //'otp' => 'required',
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
        }else if( $field == "old_password" && $code == "1042"){
            return "Vui lòng nhập mật khẩu";
        }else if( $field == "password" && $code == "1042"){
            return "Vui lòng nhập mật khẩu mới";
        }else if( $field == "old_password" && $code == "1042"){
            return "Vui lòng nhập nhập lại mật khẩu mới";
        }else if( $field == "confirmed" && $code == "1016"){
            return "Mật khẩu xác nhận không đúng";
        }else if( $field == "password" && $code == "2083"){
            return "Mật khẩu tối thiểu 6 ký tự.";
        }else if( $field == "otp" && $code == "1042"){
            return "Mã xác OTP không được để trống";
        }
        return "Đã có lỗi xảy ra";
    }
}
