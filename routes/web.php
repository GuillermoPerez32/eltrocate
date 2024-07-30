<?php

use App\Http\Controllers\PostController;
use App\Models\Post;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $posts = Post::orderBy('created_at', 'desc')->get();
    return view('home', [
        'posts' => $posts,
    ]);
})->name('home');

Route::resource('noticias', PostController::class)
    ->names('posts');

Route::post('/post/{post}/comment', [PostController::class, 'comment'])
    ->name('posts.comment');

Route::get('/sobre-nosotros', function () {
    return view('about');
})->name('about');
