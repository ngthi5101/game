<?php

namespace App\Http\Controllers\Api\Controllers;

use App\Http\Controllers\Api\Requests\ApiRequest;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Utils\ClientHttpRequest;
use App\Models\Access\User\User;
use DB;
use Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Request;

class FirebaseNotification extends Controller
{
    protected $topics = [

      "-1" => "/topics/iosX9Club",
      "6" => "/topics/andBigwinV1",
      "10" => "/topics/iosSlot88V1",
      "11" => "/topics/andBig52",
      "12" => "/topics/andBig88V4",
      "13" => "/topics/andBigwinV2",
      "15" => "/topics/andBig88V5",
      "16" => "/topics/andBig88V8",
      "17" => "/topics/andGoogle",
      "18" => "/topics/iosX9Club",
    ];
    function send_notification($topic, $title, $body)
    {
        #prep the bundle
        $msg = array
        (
            'body' 	=> $body,
            'title'	=> $title,
//            'subtitle'	=> 'This is a subtitle. subtitle',
            'tickerText'	=> '',
            'vibrate'	=> 1,
            'sound'		=> 1,
            'largeIcon'	=> 'large_icon',
            'smallIcon'	=> 'small_icon'

        );
        $fields = array
        (
            'to'		=> $topic,
            'notification'	=> $msg
        );


        $headers = array
        (
            'Authorization: key=' . env("FIREBASE_ACCESS_KEY"),
            'Content-Type: application/json'
        );
        #Send Reponse To FireBase Server
        $ch = curl_init();
        curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
        curl_setopt( $ch,CURLOPT_POST, true );
        curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
        curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
        curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
        curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields, JSON_UNESCAPED_SLASHES ));
        $result = curl_exec($ch );
        echo $result;
        curl_close( $ch );
    }

    public function pushNotification(ApiRequest $request)
    {
        $topic = $request->get('topic');
        $title = $request->get('title');
        $message = $request->get('body');
        $uid = $request->get("uid");
        $source = -1;
        if(isset($uid)){
            $user = User::where('id', $uid)->select('source')->first();
            if(isset($user)){
                if(isset($this->topics[$user->source])){
                    $source = $user->source;
                }
            }
        }
        if(!isset($topic)){
            $topic = $this->topics[$source];
        }
        $this->send_notification($topic, $title, $message);

    }

    public function pushNotificationByUid(ApiRequest $request)
    {

        $title = $request->get('title');
        $message = $request->get('body');
        $uid = $request->get("uid");
        if(isset($uid)){
            $user = \DB::table("auth_history")->where('user_id', $uid)->select('fcm_token')->first();
            if(isset($user)){
                Log::info("Push noti to fcmtoken " .$user->fcm_token);
                $this->send_notification($user->fcm_token, $title, $message);
            }

        }
    }

    public function subcribe(ApiRequest $request){
        $token = $request->get("tk");
        $topic = $request->get("tp");

        $headers = [
            "Authorization:key=AAAArn9B1MA:APA91bGy71HdAhqaorU805qSCOBL4gFAe3enGXBsoO_-7MMnAYvQ83VYXdnWF1soweEMV-QUYZgN-8mSDEAcgeJo_OVqRFId6Eo0gKfGFiHLPcbPr4Gk2YQmJWUWLosqtq6928cvfmWD",
            "Content-Type:application/json"
        ];
        $url = sprintf("https://iid.googleapis.com/iid/v1/%s/rel/topics/%s", $token, $topic);
        $result = ClientHttpRequest::postRequest($url,"", $headers);
        Log::info("Log noti subcribe " . $result);
    }
}
