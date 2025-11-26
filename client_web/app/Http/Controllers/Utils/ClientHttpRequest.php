<?php
/**
 * Created by IntelliJ IDEA.
 * User: hoangcong
 * Date: 9/17/17
 * Time: 3:01 PM
 */

namespace App\Http\Controllers\Utils;

use Illuminate\Support\Facades\Log;

class ClientHttpRequest
{
    //function POST
    public static function post($url, $data, $port = null)
    {
//        Log::info($url . '|' . $port . '|' . http_build_query($data));

        // open connection
        $ch = curl_init();
//        $data = json_encode($data);
        // set the url, number of POST vars, POST data
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 0);
        curl_setopt($ch, CURLOPT_TIMEOUT, 70);
        curl_setopt($ch, CURLOPT_URL, $url);
        $headers = array('Accept: application/x-www-form-urlencoded', 'Content-Type: application/x-www-form-urlencoded');
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        if (isset($_SERVER['HTTP_USER_AGENT'])) {
            curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        }
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        if (isset($port))
            curl_setopt($ch, CURLOPT_PORT, $port);

        // execute post
        $result = curl_exec($ch);

        if ($result === false) {
            Log::useDailyFiles(storage_path() . '/logs/errorjetty.log');
            Log::error($url . '|' . http_build_query($data));
        }

        // close connection
        curl_close($ch);
        return $result;
    }

    public static function postJson($url, $data, $port = null)
    {
//        Log::info($url . '|' . $port . '|' . $data);

        // open connection
        $ch = curl_init();
//        $data = json_encode($data);
        // set the url, number of POST vars, POST data
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 0);
        curl_setopt($ch, CURLOPT_TIMEOUT, 70);
        curl_setopt($ch, CURLOPT_URL, $url);
        $headers = array('Accept: application/json', 'Content-Type: application/json');
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        if (isset($port))
            curl_setopt($ch, CURLOPT_PORT, $port);

        // execute post
        $result = curl_exec($ch);

        if ($result === false) {
            Log::error(curl_error($ch));
        }

        // close connection
        curl_close($ch);
        return $result;
    }

    //function GET
    public static function get($url, $data, $port = null)
    {
        // open connection
        $ch = curl_init();
//        $data = json_encode($data);
        // set the url, number of POST vars, POST data
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 0);
        curl_setopt($ch, CURLOPT_TIMEOUT, 70);
        curl_setopt($ch, CURLOPT_URL, $url . http_build_query($data));
        $headers = array('Accept: application/x-www-form-urlencoded', 'Content-Type: application/x-www-form-urlencoded');
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        if (isset($port))
            curl_setopt($ch, CURLOPT_PORT, $port);

        // execute post
        $result = curl_exec($ch);

        if ($result === false) {
            Log::error('Curl error ClientHttpRequest::post: ' . curl_error($ch));
        }

        // close connection
        curl_close($ch);
        return $result;
    }

    public static function postRequest($url, $data, $headers = null)
    {
        // open connection
        $ch = curl_init();

        // set the url, number of POST vars, POST data
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 0);
        curl_setopt($ch, CURLOPT_TIMEOUT, 120);
        curl_setopt($ch, CURLOPT_URL, $url);
        if ($headers !== null)
//            Log::info($headers);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_USERAGENT, isset( $_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : 'big88');
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        // execute post
        $result = curl_exec($ch);

        if($result === false)
        {
            Log::error('Curl error ClientHttpRequest::post: ' . curl_error($ch));
        }

        // close connection
        curl_close($ch);
        return $result;
    }
}