<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Banner;

class BannersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Banner::create([
            'id' => '1',
            'image' => 'banner_1.jpg',
            'title' => 'First Banner',
            'description' => 'This is the first banner.'
        ]);

        Banner::create([
            'id' => '2',
            'image' => 'banner_2.jpg',
            'title' => 'Second Banner',
            'description' => 'This is the second banner.'
        ]);
    }
}
