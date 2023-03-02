<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Muhammad Akbar Adityah',
            'username' => 'akbaradityah',
            'email' => 'akbaradityah444@gmaul.com',
        ]);

        User::factory()->count(3)->create();

        Category::create([
            'name' => 'Dark Jokes',
            'slug' => 'dark-jokes',
        ]);

        Category::create([
            'name' => 'Light Jokes',
            'slug' => 'light-jokes',
        ]);

        Post::factory()->count(20)->create();

        Comment::factory()->count(100)->create();
    }
}
