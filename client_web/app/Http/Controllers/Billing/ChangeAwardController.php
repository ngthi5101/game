<?php

namespace App\Http\Controllers\Billing;

use App\Http\Controllers\Controller;

/**
 * Class FrontendController.
 */
class ChangeAwardController extends Controller
{
    public function changeAward(){
        return view("billing.change_award.card");
    }
}
