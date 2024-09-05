<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Database\Eloquent\Builder;
use App\Models\Banner;
use App\Http\Controllers\BannerController;

// Route the menu via Inertia-react (No need to route by laravel)
Route::get('/', function(){
return Inertia::render('Home');
});

// Banner route
Route::get('/', [BannerController::class, 'home_banner']);

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/services', function () {
    return Inertia::render('Services');
});
Route::get('/service1', function () {
    return Inertia::render('Service1');
});
Route::get('/service2', function () {
    return Inertia::render('Service2');
});
Route::get('/service3', function () {
    return Inertia::render('Service3');
});
Route::get('/service4', function () {
    return Inertia::render('Service4');
});

Route::get('/portfolio', function () {
    return Inertia::render('Portfolio');
});

Route::get('/blog', function () {
    return Inertia::render('Blog');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

//Authenticated users route
Route::middleware('auth', 'verified')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/users', [DashboardController::class, 'userslist'])->name('users');
    //Route::get('/dashboard', fn() => Inertia::render('Dashboard')) -> name('dashboard');

});

require __DIR__.'/auth.php';
