<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Banner;

class BannerController extends Controller
{
    public function home_banner()
    {
        $banner = Banner::latest()->first(); // Fetch the latest banner
        $banner->image = asset('images/' . $banner->image);
        //$mybanner = $banner->image;
        return Inertia::render('Home', [
            'banner' => $banner,
        ]);

    }
}
