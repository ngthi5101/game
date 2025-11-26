<?php

Route::group(['middleware' => 'auth'], function () {
    Route::get('/play', 'FrontendController@play')->name('play');
    Route::get('/account-info', 'AccountController@info');
    Route::get('/security', 'AccountController@security')->name('security');

    Route::get('/billing-card', 'BillingController@card');
    Route::post('/billing-card', 'BillingController@chargeCard')->name("scratch_card");
//    Route::get('/billing-buy-gold', 'BillingController@buyGold');
    Route::get('/billing-bank', 'BillingController@bank');
    Route::get('/transfer-money', 'BillingController@transferMoney');
    Route::post('/transfer-money', 'BillingController@postTransferMoney')->name('transfer_money');

    Route::get('/change-award', 'ChangeAwardController@changeAward');
    Route::get('/transaction-history', 'TransactionController@history');
});