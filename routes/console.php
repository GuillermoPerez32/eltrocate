<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Schedule;


Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

Schedule::call(function () {
    $cambiocuba_response = Http::get('https://api.cambiocuba.money/api/v2/x-rates?msg=false&x_cur=CUP&token=aCY78gC3kWRv1pR7VfgSlg');

    $currency_cambiocuba = $cambiocuba_response->json()['statistics'];

    DB::table('currencies')->insert([
        'usd' => $currency_cambiocuba['USD.CUP']['avg'] * .95,
        'mlc' => $currency_cambiocuba['MLC.CUP']['avg'] * .95,
        'ecu' => $currency_cambiocuba['ECU.CUP']['avg'] * .95,
        'mxn' => $currency_cambiocuba['MXN.CUP']['avg'] * .95,
    ]);
})->everyMinute()->name('update-currency');
