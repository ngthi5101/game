<?php

namespace App\Http\Controllers\Backend\Slider;

use App\Http\Controllers\Controller;
use App\Models\Slider\Slider;
use App\Repositories\Backend\Access\Slider\SliderRepository;
use Yajra\Datatables\Facades\Datatables;
use App\Repositories\Backend\Access\User\UserRepository;
use App\Http\Requests\Backend\Access\User\ManageUserRequest;
use App\Http\Requests\Request;

/**
 * Class UserController.
 */
class SliderTableController extends Controller
{
    protected $users;
    protected $slider;

    /**
     * @param UserRepository $users
     */
    public function __construct(UserRepository $users, SliderRepository $slider)
    {
        $this->users = $users;
        $this->slider = $slider;
    }

    /**
     * @param ManageUserRequest $request
     *
     * @return mixed
     */
    public function __invoke(ManageUserRequest $request)
    {
        return Datatables::of($this->slider->getForDataTable($request->get('status'), $request->get('trashed')))
            ->addColumn('actions', function ($post) {
                return $post->action_buttons;
            })
            ->make(true);
    }
}
