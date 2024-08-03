<?php

namespace App\Http\Controllers;

use App\Models\Currency;
use App\Models\Post;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
    function home()
    {
        $posts = Post::orderBy('created_at', 'desc')->get()->take(8);

        $currency = Currency::orderBy('id', 'desc')->first();
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'posts' => $posts,
            'currency' => $currency,
        ]);
    }
}
