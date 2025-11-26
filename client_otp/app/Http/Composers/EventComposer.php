<?php

namespace App\Http\Composers;

use App\Models\Post\Post;
use App\Models\Slider\Slider;
use App\Models\SliderDown;
use Illuminate\Support\Facades\Log;
use Illuminate\View\View;

/**
 * Class GlobalComposer.
 */
class EventComposer
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
        $linkEvents = SliderDown::all();
        Log::info($linkEvents);
        $all = Post::getLatestAll();
        $news = Post::getLatestNews();
        $events = Post::getLatestEvent();
        $view->with('allNews', $all)->with('latestNews', $news)->with('latestEvent', $events)->with('sliderDown', $linkEvents);
    }
}
