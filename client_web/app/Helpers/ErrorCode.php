<?php
/**
 * Created by PhpStorm.
 * User: noname
 * Date: 30/06/2017
 * Time: 11:08
 */

namespace App\Helpers;


class ErrorCode
{
    static $SUCCESS = 0;
    static $FAIL = 1;
    static $CLIENT_ID_INVALID = 2501;
    static $USER_NOT_EXISTS = 2101;
    static $PROVIDER_NOT_EXISTS = 2001;
    static $GENERAL_EXCEPTION = 2002;
    static $CLIENT_EXCEPTION = 2005;
    static $UNKNOW_ERROR = 2003;
    static $USER_NOT_ACTIVE = 2004;
    static $PASSWORD_NOT_MATCH = 2701;
    static $DISPLAY_NAME_HAVE_SET = 2703;
    static $DISPLAY_MUST_HAVE_SET = 2704;
    static $MAINTAIN = 9;
    static $JSON_NOT_VALID = 90;
    static $INVALID_ACCESS_TOKEN = 89;
    static $TRANSACTION_NOT_SUCCESS = 91;
}