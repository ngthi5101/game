<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostCategory extends Model
{
    protected $table = "post_category";
    public $timestamps = false;
    public function cate()
    {
        return $this->belongsTo('App\Models\Category', 'cate_id');
    }
    protected $connection = "cms";
}
