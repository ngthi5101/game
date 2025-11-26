<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Download extends Model
{
    protected $table = "download_links";
    public $timestamps = false;
    protected $connection = 'cms';
    public static function getList(){
        return Download::select("ios as iphone", "android", "window", "macos")->first();
    }
}
