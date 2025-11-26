<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Utils\Utils;
use App\Repositories\Backend\Access\User\UserRepository;
use Hamcrest\Util;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
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
        $action = Input::get("action");
        $accessToken = Input::get("access_token");
        return view('frontend.index',[
            "action" =>$action,
            "token" => $accessToken
        ]);
    }

    public function play()
    {
        $maintainStatus = Utils::isMaintain();
        $maintainMessage = Utils::getMaintainMessage();
        return view('frontend.play.index', [
            'maintainStatus' => $maintainStatus,
            'maintainMessage' => $maintainMessage
        ]);
    }

    public function game(){
        return Redirect::to("/index.html");
    }


    public function download(Request $request){
        $agent = new Agent();
        $url = Request::root();
        return view('game.download',[
            'agent' => $agent,
            'domain' => $url
        ]);
    }

    public function dieukhoan(){
        return view('frontend.dieu-khoan');
    }

}
