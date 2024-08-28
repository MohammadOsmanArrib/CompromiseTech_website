<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function home_banner()
    {
        $banner = Banner::first(); // Assuming you have only one banner

        return Inertia::render('BannerPage', [
            'banner' => $banner
        ]);
    }
}
