<?php
/**
 * Created by IntelliJ IDEA.
 * User: NoName
 * Date: 11/22/2017
 * Time: 4:02 PM
 */

namespace App\Repositories;
use DB;

class Utils
{
    public static function isInBanList($uid){
        return DB::table("banlist")->where("uid", $uid)->count() > 0;
    }
}