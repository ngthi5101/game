<?php

namespace App\Models\Post;

use App\Models\Post\Attribute\PostAttribute;
use Illuminate\Database\Eloquent\Model;
use DB;
class Post extends Model
{
    use PostAttribute;
    protected $table = "posts";

    protected $connection = "cms";

    public  static function getLatestAll($limit = 4){
        return Post::select("id", "created_at", "title", "slug", "cate_id")->where("status", 1)->orderBy("created_at", "desc")->take($limit)->get();
    }

    public  static function getLatestNews($limit = 4){
//        return Post::select("id", "created_at", "title", "slug", "cate_id")->orderBy("created_at", "desc")->where("cate_id", 1)->take($limit)->get();
        return DB::table("posts as P")->join("post_category as PC", "P.id", "=", "PC.post_id")->where("PC.cate_id", 1)->where("PC.status", 1)->where("P.status", 1)
            ->orderBy("P.created_at", "desc")->select("P.id", "P.created_at", "P.title", "P.slug", "PC.cate_id")->take($limit)->get();
    }

    public  static function getLatestEvent($limit = 4){
//        return Post::select("id", "created_at", "title", "slug", "cate_id")->orderBy("created_at", "desc")->where("cate_id", 2)->take($limit)->get();
        return DB::table("posts as P")->join("post_category as PC", "P.id", "=", "PC.post_id")->where("PC.cate_id", 2)->where("PC.status", 1)->where("P.status", 1)
            ->orderBy("P.created_at", "desc")->select("P.id", "P.created_at", "P.title", "P.slug", "PC.cate_id")->take($limit)->get();
    }

    public  static function getLatestGuide($limit = 4){
//        return Post::select("id", "created_at", "title", "slug", "cate_id")->orderBy("created_at", "desc")->where("cate_id", 2)->take($limit)->get();
        return DB::table("posts as P")->join("post_category as PC", "P.id", "=", "PC.post_id")->where("PC.cate_id", 3)->where("PC.status", 1)->where("P.status", 1)
            ->orderBy("P.created_at", "desc")->select("P.id", "P.created_at", "P.title", "P.slug", "PC.cate_id")->take($limit)->get();
    }
    public function post()
    {
        return $this->belongsTo('App\Post');
    }

    public function postcategories()
    {
        return $this->hasMany('App\Models\PostCategory', 'post_id');
    }
}
