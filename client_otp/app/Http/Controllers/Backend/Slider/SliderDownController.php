<?php

namespace App\Http\Controllers\Backend\Slider;

use App\Http\Requests\Backend\Access\Post\StorePostRequest;
use App\Http\Controllers\Controller;
use App\Models\Slider\Slider;
use App\Repositories\Backend\Access\Role\RoleRepository;
use App\Repositories\Backend\Access\Slider\SliderRepository;
use App\Repositories\Backend\Access\User\UserRepository;
use App\Http\Requests\Backend\Access\User\ManageUserRequest;
use Illuminate\Support\Facades\File;

use Illuminate\Support\Facades\Storage;

/**
 * Class UserController.
 */
class SliderDownController extends Controller
{
    /**
     * @var UserRepository
     */

    /**
     * @var RoleRepository
     */
    protected $roles;
    protected $slider;

    /**
     * @param UserRepository $users
     * @param RoleRepository $roles
     */
    public function __construct( RoleRepository $roles, SliderRepository $slider)
    {
        $this->roles = $roles;
        $this->slider = $slider;
    }

    public function index(ManageUserRequest $request)
    {
        return view('backend.slider.index');
    }

    public function create(ManageUserRequest $request)
    {
        return view('backend.post.create');
    }

    public function edit(Slider $slider, ManageUserRequest $request)
    {
        return view('backend.slider.edit')->withSlider($slider);
    }

    public function update(Slider $post, StorePostRequest $request)
    {
        $filename = null;
        if ($request->hasFile('img_feature')) {
            $file = $request->file("img_feature");
            $extension = $file->getClientOriginalExtension();
            $filename = $file->getFilename().'.'.$extension;
            Storage::disk('local')->put($filename,  File::get($file));
        }
        $id = $request->get("id");
        $slider = Slider::where("id", $id)->first();
        if(isset($slider)){
            $this->slider->update($slider, $request->only('img_feature'), $filename);
        }
        return redirect()->route('admin.slider.index')->withFlashSuccess(trans('alerts.backend.users.updated'));
    }

    public function destroy( ManageUserRequest $request, $id)
    {
        print_r($id);
        $slider = Slider::where("id", $id)->first();
        $this->slider->delete($slider);
        return redirect()->route('admin.slider.index')->withFlashSuccess(trans('alerts.backend.users.deleted'));
    }
}
