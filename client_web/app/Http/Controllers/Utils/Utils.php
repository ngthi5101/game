<?php
/**
 * Created by IntelliJ IDEA.
 * User: NoName
 * Date: 11/23/2017
 * Time: 9:39 AM
 */

namespace App\Http\Controllers\Utils;

use DB;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class Utils
{

    public static function isMaintain(){
        return Cache::get('bigplay_maintain_status') == 1 || Cache::get('bigplay_maintain_status_ip') == 1;
    }

    public static function getMaintainMessage(){
        $message = Cache::get('bigplay_maintain_message');
        if(!isset($message)){
            $message = "Hệ thống đang nâng cấp";
        }
        return $message;
    }
}