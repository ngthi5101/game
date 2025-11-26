<?php

namespace App\Http\Controllers\Billing;

use App\Http\Controllers\Controller;
use App\Http\Requests\Request;
use App\Repositories\Backend\Access\User\UserRepository;
use Jenssegers\Agent\Agent;

/**
 * Class FrontendController.
 */
class FrontendController extends Controller
{
    public function __construct(UserRepository $user)
    {
        $this->user = $user;
    }

    public function index()
    {

        $agent = new Agent();
        return view('frontend.index',[
        ]);
    }

    public function play()
    {

        return view('frontend.play.index', [
        ]);
    }

    public function game(){
        return view('game.index');
    }

    public function macros()
    {
        return view('frontend.macros');
    }

    public function download(Request $request){
                

    }
}
