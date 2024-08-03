<?php

namespace App\Http\Controllers;

use App\Models\Currency;
use App\Models\Post;
use Illuminate\Support\Facades\Http;

class HomeController extends Controller
{
    function home()
    {
        $posts = Post::orderBy('created_at', 'desc')->get();

        $currency = Currency::orderBy('id', 'desc')->first();

        return view('home', [
            'posts' => $posts,
            'currency' => $currency,
        ]);
    }
}
