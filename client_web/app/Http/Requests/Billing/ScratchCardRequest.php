<?php

namespace App\Http\Requests\Billing;

use App\Http\Requests\Request;

/**
 * Class UpdateUserRequest.
 */
class ScratchCardRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
//        return access()->hasRole(1);
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
            'serial' => 'required',
            'code'  => 'required',
            'session_id' => 'required',
            'captcha_code' => 'required|string|captcha_validate:' . $this->input('session_id'),
        ];
    }
}
