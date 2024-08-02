<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Models\Post;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'home'])->name('home');

Route::resource('noticias', PostController::class)
    ->names('posts');

Route::post('/post/{post}/comment', [PostController::class, 'comment'])
    ->name('posts.comment');

Route::get('/sobre-nosotros', function () {
    return view('about');
})->name('about');
