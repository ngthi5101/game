<?php

namespace App\Http\Requests\Billing;

use App\Http\Requests\Request;

/**
 * Class UpdateUserRequest.
 */
class TransferMoneyRequest extends Request
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
            'display_name' => 'required|exists:users,display_name',
            'display_name_confirm'  => 'required|same:display_name',
            'amount_big' => 'required',
            'reason' => 'required',
            'smsc' => 'required',
        ];
    }
}
