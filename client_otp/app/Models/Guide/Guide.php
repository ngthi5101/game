<?php

namespace App\Models\Guide;

use App\Models\Guide\Attribute\GuideAttribute;
use Illuminate\Database\Eloquent\Model;

class Guide extends Model
{
    use GuideAttribute;
    protected $table = "guide";
    protected $connection = "cms";
}
