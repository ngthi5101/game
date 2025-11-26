<?php

namespace App\Http\Controllers\Billing;

use App\Http\Controllers\Controller;

/**
 * Class FrontendController.
 */
class TransactionController extends Controller
{
    public function history(){
        return view("billing.history.index");
    }
}
