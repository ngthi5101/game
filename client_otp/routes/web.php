<?php


Route::get('lang/{lang}', 'LanguageController@swap');

Route::group(['namespace' => 'Frontend', 'as' => 'frontend.'], function () {
    Route::get('/', 'FrontendController@game')->name('index');
    Route::get('/dieu-khoan', 'FrontendController@dieukhoan')->name('dieukhoan');
});
