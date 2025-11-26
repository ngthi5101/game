<?php

namespace App\Http\Composers;

use App\Models\Slider\Slider;
use Illuminate\View\View;

/**
 * Class GlobalComposer.
 */
class SliderComposer
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
        $sliders = Slider::where("type", 1)->get();
        $view->with('slider', $sliders);
    }
}
