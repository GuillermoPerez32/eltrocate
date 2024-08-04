<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Currency;
use App\Models\Post;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();

        $posts = Post::factory(4)->create();
        $posts->each(function ($post) {
            Comment::factory(rand(0, 3))->create([
                'post_id' => $post->id,
                'user_id' => User::inRandomOrder()->first()->id,
            ]);
        });

        Currency::factory(40)->create();

        User::factory()->create([
            'name' => 'Test User',
            'password' => bcrypt('123'),
            'email' => 'test@example.com',
            'is_admin' => true,
        ]);
    }
}
