<?php

namespace Database\Seeders;
use Hash;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
            'name' => 'MD Kabir Khan',
            'email' => 'test@test.com',
            'password'=> Hash::make('password')
        ]);
    }
}
