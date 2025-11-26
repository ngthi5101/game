<?php

namespace App\Http\Controllers\Api\Controllers;

use App\Helpers\ErrorCode;

use App\Http\Controllers\Api\Requests\ApiRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\Request;
use App\Repositories\Backend\Access\User\UserRepository;
use Illuminate\Support\Facades\Log;
use JWTException;
use Auth;
use Tymon\JWTAuth\JWTAuth;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Middleware\BaseMiddleware;

/**
 * Class ProfileController.
 */
class UserController extends Controller
{

    protected $user;
    protected $auth;

    public function __construct(UserRepository $user, JWTAuth $auth)
    {
        $this->user = $user;
        $this->auth = $auth;
    }

    public function loginByToken(ApiRequest $request){
        $token = $request->get('token');
        if (!$token) {
            return errorResponse(2201, 'token', 'token not provided');
        }
        try {
            $user = $this->auth->authenticate($token);
            Auth::login($user, true);
        } catch (TokenExpiredException $e) {
            return errorResponse(2202, 'token', 'token expired');
        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
            return errorResponse(2203, 'token', 'token invalid');
        }

        if (!$user) {
            return errorResponse(2204, 'token', 'user not found');
        }
        return response()->json([
            'status' => 'ok',
            'message' => 'Login successful'
        ]);
    }

    public function getUserInfo(){
        Log::info(\Auth::user());
    }


}
