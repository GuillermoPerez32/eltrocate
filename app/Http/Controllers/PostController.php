<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Currency;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {

        $post = Post::where('slug', $slug)->with([
            'comments' => [
                'user' => function ($query) {
                    $query->select('id', 'name');
                }
            ]
        ])->orderBy('id', 'desc')->first();
        $currency = Currency::orderBy('id', 'desc')->first();

        return Inertia::render('Posts/ShowPost', [
            'post' => $post,
            'currency' => $currency,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }

    public function comment(Post $post, Request $request)
    {

        $request->validate([
            'content' => 'required|string|min:3',
        ]);

        $user = $request->user();

        if (!$user) {
            return to_route('login');
        }

        $comment = Comment::where('user_id', $user->id)
            ->where('post_id', $post->id)
            ->first();

        if ($comment) {
            $comment->update([
                'content' => $request->content,
            ]);
            $comment->refresh();
        } else {
            Comment::create([
                'user_id' => $user->id,
                'post_id' => $post->id,
                'content' => $request->content,
            ]);
        }

        return to_route('posts.show', $post->slug);
    }
}
