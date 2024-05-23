<?php
namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;
//use Illuminate\Pagination\LengthAwarePaginator;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard', [
        ]);
    }
    // users page
    public function userslist()
    {
        $users = User::all(); // Fetch all users
        return Inertia::render('UsersList', [
            'all_users' => $users,
        ]);
    }
}
