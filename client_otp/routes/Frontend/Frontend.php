<?php

/**
 * Frontend Controllers
 * All route names are prefixed with 'frontend.'.
 */
//Route::get('macros', 'FrontendController@macros')->name('macros');
//Route::get('contact', 'ContactController@index')->name('contact');
//Route::post('contact/send', 'ContactController@send')->name('contact.send');
//Route::get('game', 'FrontendController@index')->name('contact');
/*
 * These frontend controllers require the user to be logged in
 * All route names are prefixed with 'frontend.'
 */
Route::group(['middleware' => 'auth'], function () {

//    Route::get('/play', 'FrontendController@play')->name('play1');
//    Route::get('/play', 'FrontendController@game')->name('play1');

    Route::group(['namespace' => 'User', 'as' => 'user.'], function () {
        /*
         * User Dashboard Specific
         */
        Route::get('dashboard', 'DashboardController@index')->name('dashboard');

        /*
         * User Account Specific
         */
        Route::get('account', 'AccountController@index')->name('account');

        /*
         * User Profile Specific
         */
        Route::patch('profile/update', 'ProfileController@update')->name('profile.update');
    });
});




