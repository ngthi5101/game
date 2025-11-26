<?php

namespace App\Http\Controllers\Api\Middlewares;


use Illuminate\Support\Facades\Log;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Middleware\BaseMiddleware;
use Auth;

class GetUserFromTokenApi extends BaseMiddleware
{

    public function handle($request, \Closure $next)
    {
        $token = $request->get('token');
        if (!$token) {
            return errorResponse(2201, 'token', 'token not provided');
        }

        try {
            $user = $this->auth->authenticate($token);
            Log::info($user);
        } catch (TokenExpiredException $e) {
            return errorResponse(2202, 'token', 'token expired');
        } catch (JWTException $e) {
            return errorResponse(2203, 'token', 'token invalid');
        }

        if (!$user) {
            return errorResponse(2204, 'token', 'user not found');
        }
//        \Auth::login($user, true);
//        $this->events->fire('tymon.jwt.valid', $user);
        return $next($request);
    }
}
