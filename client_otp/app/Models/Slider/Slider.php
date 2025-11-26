<?php

namespace App\Models\Slider;

use App\Models\Slider\Attribute\SliderAttribute;
use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    use SliderAttribute;
    protected $table = "slider";
    public $timestamps =false;
    protected $connection = 'cms';

}
