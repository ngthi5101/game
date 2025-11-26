<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;

use App\Models\Post\Post;
use App\Models\Guide\Guide;
use App\Repositories\Backend\Access\User\UserRepository;
use DB;
use App\Http\Controllers\Api\Requests\ApiRequest;
use Illuminate\Support\Facades\Request;

/**
 * Class FrontendController.
 */
class NewsController extends Controller
{
    public function __construct(UserRepository $user)
    {
        $this->user = $user;
    }

    public function listNews(){
//        $posts = Post::where("cate_id", 1)->orderBy("created_at", 'desc')->paginate(6);
        $posts = Post::join("post_category as PC", "posts.id", "=", "PC.post_id")->where("PC.cate_id", 1)->where("PC.status", 1)->where("posts.status", 1)
            ->orderBy("posts.created_at", "desc")->select("posts.id", "posts.user_id",  "posts.img_feature", "posts.summary" ,"posts.created_at", "posts.title", "posts.slug", "PC.cate_id")->paginate(6);
        return view("frontend.news.list",[
            'name' => 'Tin Tức',
            'posts' => $posts
        ]);
    }

    public function detail($slug){
        $post = Post::where("slug", $slug)->where("status", 1)->first();
        return view("frontend.news.detail", [
            'post' => $post
        ]);
    }

    public function dieuKhoan(){
        return view("frontend.news.dieukhoan");
    }

    public function listEvents(){
        $posts = Post::join("post_category as PC", "posts.id", "=", "PC.post_id")->where("PC.cate_id", 2)->where("PC.status", 1)->where("posts.status", 1)
            ->orderBy("posts.created_at", "desc")->select("posts.id", "posts.user_id",  "posts.img_feature", "posts.summary" ,"posts.created_at", "posts.title", "posts.slug", "PC.cate_id")->paginate(6);
        return view("frontend.news.list",[
            'name' => 'Sự Kiện',
            'posts' => $posts
        ]);
    }

    public function guide(){
        $posts = Post::join("post_category as PC", "posts.id", "=", "PC.post_id")->where("PC.cate_id", 3)->where("PC.status", 1)->where("posts.status", 1)
            ->orderBy("posts.created_at", "desc")->select("posts.id", "posts.user_id",  "posts.img_feature", "posts.summary" ,"posts.created_at", "posts.title", "posts.slug", "PC.cate_id")->paginate(6);
        return view("frontend.news.list",[
            'name' => 'Hướng Dẫn',
            'posts' => $posts
        ]);
    }

    public function guideMobile(ApiRequest $request){
        $post = Guide::where("game_id", $request->get('gid'))->where("language", $request->get('lang'))->first();
        return view("frontend.news.mobile-detail", [
            'post' => $post
        ]);
    }
}
