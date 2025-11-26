<?php

namespace App\Http\Controllers\Backend\Post;

use App\Http\Controllers\Controller;
use App\Repositories\Backend\Access\Post\PostRepository;
use Yajra\Datatables\Facades\Datatables;
use App\Repositories\Backend\Access\User\UserRepository;
use App\Http\Requests\Backend\Access\User\ManageUserRequest;
use App\Http\Requests\Request;

/**
 * Class UserController.
 */
class PostTableController extends Controller
{
    protected $users;
    protected $post;

    /**
     * @param UserRepository $users
     */
    public function __construct(UserRepository $users, PostRepository $post)
    {
        $this->users = $users;
        $this->post = $post;
    }

    /**
     * @param ManageUserRequest $request
     *
     * @return mixed
     */
    public function __invoke(ManageUserRequest $request)
    {
        return Datatables::of($this->post->getForDataTable($request->get('status'), $request->get('trashed')))
            ->escapeColumns(['id'])
            ->addColumn('deletes', function ($post){
                return '<input type="checkbox" name="deletes[]" value="'. $post->id .'" />';
            })->addColumn('actions', function ($post) {
                return $post->action_buttons;
            })
            ->make(true);
    }
}
