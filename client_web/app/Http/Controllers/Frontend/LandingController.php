<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Post\Post;
use App\Models\Guide\Guide;
use App\Repositories\Backend\Access\User\UserRepository;
use DB;
use App\Http\Controllers\Api\Requests\ApiRequest;

class LandingController extends Controller
{
    public function __construct(UserRepository $user)
    {
        $this->user = $user;
    }


    public function slot88(ApiRequest $request){
        return view("frontend.landing.slot88-landing");
    }
}
