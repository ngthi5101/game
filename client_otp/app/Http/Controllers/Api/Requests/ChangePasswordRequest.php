<?php

namespace App\Http\Controllers\Api\Requests;

/**
 * Class Request.
 */
class ChangePasswordRequest extends ApiRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    //'old_password' => 'require',
    //'password' => 'required|confirm|min:6',
    //'password_confirmation' => 'required|min:6'
    public function getMessage($code, $field){
        if( $field == "old_password" && $code == "1042"){
            return "Vui lòng nhập mật khẩu";
        }else if( $field == "password" && $code == "1042"){
            return "Vui lòng nhập mật khẩu mới";
        }else if( $field == "old_password" && $code == "1042"){
            return "Vui lòng nhập nhập lại mật khẩu mới";
        }else if( $field == "confirmed" && $code == "1016"){
            return "Mật khẩu xác nhận không đúng";
        }else if( $field == "password" && $code == "2083"){
            return "Mật khẩu tối thiểu 6 ký tự.";
        }
        return "Đã có lỗi xảy ra";
    }
}
