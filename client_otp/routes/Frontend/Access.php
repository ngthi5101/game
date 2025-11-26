<?php


//Route::get('tin-tuc', 'NewsController@listNews')->name('news_list');
//Route::get('su-kien', 'NewsController@listEvents')->name('event_list');
//Route::get('huong-dan', 'NewsController@guide')->name('guide');
Route::get('guide', 'NewsController@guideMobile')->name('guide-mobile');
//Route::get('dieu-khoan', 'NewsController@dieuKhoan')->name('dieukhoan');
//Route::get('tin-tuc/{title}', 'NewsController@detail')->name('news_detail');

Route::group(['namespace' => 'Auth', 'as' => 'auth.'], function () {

    /*
     * These routes require the user to be logged in
     */
    Route::group(['middleware' => 'auth'], function () {
        Route::get('logout', 'LoginController@logout')->name('logout');

        //For when admin is logged in as user from backend
        Route::get('logout-as', 'LoginController@logoutAs')->name('logout-as');

        // Change Password Routes
        Route::patch('password/change', 'ChangePasswordController@changePassword')->name('password.change');
    });

    /*
     * These routes require no user to be logged in
     */
    Route::group(['middleware' => 'guest'], function () {
        // News

        // Authentication Routes
        Route::get('login', 'LoginController@showLoginForm')->name('login');
        Route::post('login', 'LoginController@login')->name('login.post');

        // Socialite Routes
        Route::get('login/{provider}', 'SocialLoginController@login')->name('social.login');

        // Registration Routes
        if (config('access.users.registration')) {
            Route::get('register', 'RegisterController@showRegistrationForm')->name('register');
            Route::post('register', 'RegisterController@register')->name('register.post');
        }

        // Confirm Account Routes
        Route::get('account/confirm/{token}', 'ConfirmAccountController@confirm')->name('account.confirm');
        Route::get('account/confirm/resend/{user}', 'ConfirmAccountController@sendConfirmationEmail')->name('account.confirm.resend');

        // Password Reset Routes
        Route::get('password/reset', 'ForgotPasswordController@showLinkRequestForm')->name('password.email');
        Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail')->name('password.email.post');

        Route::get('password/reset/{token}', 'ResetPasswordController@showResetForm')->name('password.reset.form');
        Route::post('password/reset', 'ResetPasswordController@reset')->name('password.reset');
    });
});
