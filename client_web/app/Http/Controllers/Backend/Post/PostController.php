<?php

namespace App\Http\Controllers\Backend\Post;

use App\Http\Requests\Backend\Access\Post\StorePostRequest;
use App\Models\Access\User\User;
use App\Http\Controllers\Controller;
use App\Models\Post\Post;
use App\Repositories\Backend\Access\Post\PostRepository;
use App\Repositories\Backend\Access\Role\RoleRepository;
use App\Repositories\Backend\Access\User\UserRepository;
use App\Http\Requests\Backend\Access\User\StoreUserRequest;
use App\Http\Requests\Backend\Access\User\ManageUserRequest;
use App\Http\Requests\Backend\Access\User\UpdateUserRequest;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\Request;

use Illuminate\Support\Facades\Storage;

/**
 * Class UserController.
 */
class PostController extends Controller
{
    /**
     * @var UserRepository
     */
    protected $users;

    /**
     * @var RoleRepository
     */
    protected $roles;
    protected $post;

    /**
     * @param UserRepository $users
     * @param RoleRepository $roles
     */
    public function __construct(UserRepository $users, RoleRepository $roles, PostRepository $post)
    {
        $this->users = $users;
        $this->roles = $roles;
        $this->post = $post;
    }

    /**
     * @param ManageUserRequest $request
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(ManageUserRequest $request)
    {
        return view('backend.post.index');
    }

    /**
     * @param ManageUserRequest $request
     *
     * @return mixed
     */
    public function create(ManageUserRequest $request)
    {
        return view('backend.post.create');
    }

    /**
     * @param StoreUserRequest $request
     *
     * @return mixed
     */
    public function store( StorePostRequest $request)
    {
        $filename = null;
        if ($request->hasFile('img_feature')) {
            $file = $request->file("img_feature");
            $extension = $file->getClientOriginalExtension();
            $filename = $file->getFilename().'.'.$extension;
            Storage::disk('local')->put($filename,  File::get($file));
        }
        $this->post->create($request->only(
            'title',
            'summary',
            'img_feature',
            'cate',
            'body'
        ), $filename);

        return redirect()->route('admin.post.index')->withFlashSuccess(trans('alerts.backend.users.created'));
    }
    /**
     * @param User              $user
     * @param ManageUserRequest $request
     *
     * @return mixed
     */
    public function edit(Post $post, ManageUserRequest $request)
    {
        return view('backend.post.edit')->withPost($post);
    }

    /**
     * @param User              $user
     * @param UpdateUserRequest $request
     *
     * @return mixed
     */
    public function update(Post $post, StorePostRequest $request)
    {
        $filename = null;
        if ($request->hasFile('img_feature')) {
            $file = $request->file("img_feature");
            $extension = $file->getClientOriginalExtension();
            $filename = $file->getFilename().'.'.$extension;
            Storage::disk('local')->put($filename,  File::get($file));
        }
        $this->post->update($post,$request->only(
            'title',
            'summary',
            'cate',
            'img_feature',
            'tinymce_box'
        ), $filename);

        return redirect()->route('admin.post.index')->withFlashSuccess(trans('alerts.backend.users.updated'));
    }

    public function destroy(Post $post, ManageUserRequest $request)
    {
        $this->post->delete($post);

        return redirect()->route('admin.post.index')->withFlashSuccess(trans('alerts.backend.users.deleted'));
    }

    public function deletes(){

        $checklists = Input::get('checklists');
        Log::info($checklists);
        if(isset($checklists) and is_array($checklists)){
            foreach ($checklists as $postId){
                Log::info("Delete postid " . $postId);
                $this->post->deleteById($postId);
            }
        }
        return "Ok";
    }
}
