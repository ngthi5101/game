<?php
/**
 * Created by PhpStorm.
 * User: NoName
 * Date: 10/2/2017
 * Time: 3:12 AM
 */

namespace App\Repositories;


use Illuminate\Support\Facades\Log;

class BillingUtils
{
    public static function getWalletInfo($user){
        $ch = curl_init();
        $url = env("WALLET_INFO")  . "?uid=" . $user->id;
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $server_output = curl_exec($ch);
        if ($server_output === false) {
            Log::error('Curl error ClientHttpRequest::post: ' . curl_error($ch));
        }
        curl_close($ch);
        return json_decode($server_output);
    }


    public static function chargeCard($telco, $code, $seri, $uid){
        $ch = curl_init();
        $url = env("SCRATCH_CARD_API");
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, 1);
        $data = "telco=" . $telco . "&code=" . $code . "&seri=" . $seri . "&uId=" . $uid;
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        $server_output = curl_exec($ch);
        curl_close($ch);
        return json_decode($server_output);
    }

    public static function executePostMethod($url, $data){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        $server_output = curl_exec($ch);
        curl_close($ch);
        return json_decode($server_output);
    }
}