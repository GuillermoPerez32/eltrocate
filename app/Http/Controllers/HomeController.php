<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Facades\Http;

class HomeController extends Controller
{
    function home()
    {
        $posts = Post::orderBy('created_at', 'desc')->get();
        $cambiocuba_response = Http::get('https://api.cambiocuba.money/api/v2/x-rates?msg=false&x_cur=CUP&token=aCY78gC3kWRv1pR7VfgSlg');

        $currency_cambiocuba = $cambiocuba_response->json()['statistics'];

        $currency = [
            'USD' => round($currency_cambiocuba['USD.CUP']['avg']) - rand(18, 22),
            'MLC' => round($currency_cambiocuba['MLC.CUP']['avg']) - rand(18, 22),
            'ECU' => round($currency_cambiocuba['ECU.CUP']['avg']) - rand(18, 22),
        ];

        return view('home', [
            'posts' => $posts,
            'currency' => $currency,
        ]);
    }
}
