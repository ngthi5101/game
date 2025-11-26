<?php

namespace App\Http\Controllers\Api\Middlewares;


use App\Helpers\ErrorCode;
use Tymon\JWTAuth\Middleware\BaseMiddleware;
use Auth;

class GuardPass extends BaseMiddleware
{

    public function handle($request, \Closure $next)
    {
        if (strcmp($request->get("pass"), 'bananhcong') !== 0 ) {
            return redirect('https://slot88.club');
        }

        return $next($request);
    }
}
