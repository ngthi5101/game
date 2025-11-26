<?php

namespace App\Http\Composers;

use App\Models\Download;
use Illuminate\Support\Facades\Log;
use Illuminate\View\View;
use Jenssegers\Agent\Agent;

/**
 * Class GlobalComposer.
 */
class DownloadComposer
{
    /**
     * Bind data to the view.
     *
     * @param View $view
     *
     * @return void
     */
    public function compose(View $view)
    {
        $download = Download::getList();
        $view->with('download', $download);
    }
}
