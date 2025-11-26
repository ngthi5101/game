<?php

namespace App\Http\Controllers\Backend\Download;

use App\Http\Requests\Backend\Access\Download\StoreDownloadRequest;
use App\Models\Access\User\User;
use App\Http\Controllers\Controller;
use App\Models\Download;
use App\Repositories\Backend\Access\Download\DownloadRepository;
use App\Repositories\Backend\Access\Role\RoleRepository;
use App\Repositories\Backend\Access\User\UserRepository;
use App\Http\Requests\Backend\Access\User\ManageUserRequest;
use App\Http\Requests\Backend\Access\User\UpdateUserRequest;
use Illuminate\Support\Facades\Log;

/**
 * Class UserController.
 */
class DownloadController extends Controller
{
    /**
     * @var UserRepository
     */

    /**
     * @var RoleRepository
     */
    protected $download;

    /**
     * @param UserRepository $users
     * @param RoleRepository $roles
     */
    public function __construct( DownloadRepository $download)
    {
        $this->download = $download;
    }

    /**
     * @param ManageUserRequest $request
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(ManageUserRequest $request)
    {
        $links = Download::getList();
        return view('backend.download.edit',[
            'links' => $links
        ]);
    }


    /**
     * @param User              $user
     * @param ManageUserRequest $request
     *
     * @return mixed
     */
    public function edit(Download $download)
    {
        $links = Download::getList();
        return view('backend.download.edit',[
            'links' => $links
        ]);
    }

    /**
     * @param User              $user
     * @param UpdateUserRequest $request
     *
     * @return mixed
     */
    public function store(StoreDownloadRequest $request)
    {

        $download = Download::find(1);
        if(isset($download)){
            $this->download->update($download, $request->only(
                'ios',
                'android',
                'macos',
                'window'
            ));
        }
        return redirect()->route('admin.download.edit', 1)->withFlashSuccess(trans('alerts.backend.users.updated'));
    }

}
