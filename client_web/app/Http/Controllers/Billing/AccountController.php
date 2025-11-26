<?php

namespace App\Http\Controllers\Billing;

use App\Http\Controllers\Controller;
use App\Repositories\BillingUtils;
use Auth;
use Illuminate\Support\Facades\Log;

/**
 * Class FrontendController.
 */
class AccountController extends Controller
{
    /**
     * @return \Illuminate\View\View
     */
    public function info()
    {
        $user = Auth::user();
        $wallet = BillingUtils::getWalletInfo($user);
        Log::info((array)$wallet);
        return view('billing.account.info', [
            'user' => $user,
            'wallet' => $wallet
        ]);
    }

    public function security(){
        $user = Auth::user();
        return view('billing.account.secure', [
            'user' => $user
        ]);
    }

}
