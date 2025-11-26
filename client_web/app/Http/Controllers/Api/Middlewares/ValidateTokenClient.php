<?php

namespace App\Http\Controllers\Api\Middlewares;


use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Middleware\BaseMiddleware;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Routing\ResponseFactory;
use App\Extensions\JWTAuthClient;
use Auth;

class ValidateTokenClient extends BaseMiddleware
{
    public function __construct(ResponseFactory $response, Dispatcher $events, JWTAuthClient $auth)
    {
        parent::__construct($response, $events, $auth);
    }

    public function handle($request, \Closure $next)
    {
        if (!$token = $request->get('client_token')) {
//            return $this->respond('tymon.jwt.absent', 'token_not_provided', 400);
            return response()->json([
                'status' => 'error',
                'errors' => [
                    'token' => ['text' => 'client token not provided', 'code' => 2601]
                ]
            ]);
        }

        try {
            $client = $this->auth->authenticate($token);
        } catch (TokenExpiredException $e) {
//            return $this->respond('tymon.jwt.expired', 'token_expired', $e->getStatusCode(), [$e]);
            return response()->json([
                'status' => 'error',
                'errors' => [
                    'token' => ['text' => 'client token expired', 'code' => 2602]
                ]
            ]);
        } catch (JWTException $e) {
//            return $this->respond('tymon.jwt.invalid', 'token_invalid', $e->getStatusCode(), [$e]);
            return response()->json([
                'status' => 'error',
                'errors' => [
                    'token' => ['text' => 'client token invalid', 'code' => 2603]
                ]
            ]);
        }

        return $next($request);
    }
}
