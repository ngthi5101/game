<?php

namespace App\Http\Controllers\Billing;

use App\Http\Controllers\Controller;
use App\Http\Requests\Billing\ScratchCardRequest;
use App\Http\Requests\Billing\TransferMoneyRequest;
use App\Repositories\Backend\Access\User\UserRepository;
use App\Repositories\BillingUtils;
use Illuminate\Support\Facades\Log;

/**
 * Class FrontendController.
 */
class BillingController extends Controller
{
    protected $users;

    public function __construct(UserRepository $users)
    {
        $this->users = $users;
    }

    public function card(){
        return view('billing.billing.card');
    }

    public function chargeCard(ScratchCardRequest $request){
        Log::info("Send info scratch card to billing telco" .  $request->get("telco") . " code" . $request->get("code") . " seri" .  $request->get("seri") . "uid" .  $request->get("uid"));
        $json = BillingUtils::chargeCard($request->get("telco"), $request->get("code"), $request->get("seri"), $request->get("uid"));
        Log::info("Result send request");
        Log::info($json);
        $data = json_decode($json);
        return view('user.billing.card',[
            "data" => $data
        ]);
    }

    public function buyGold(){
        $user = \Auth::user();
        $wallet = BillingUtils::getWalletInfo($user);
        Log::info("BUYGOLD get wallet info");
        Log::info( (array)$wallet);
        return view('billing.billing.buy_gold', [
            'wallet' => $wallet
        ]);
    }

    public function bank(){
        return view('billing.billing.bank');
    }

    public function transferMoney(){
        $user = \Auth::user();
        $wallet = BillingUtils::getWalletInfo($user);
        Log::info("BUYGOLD get wallet info");
        Log::info( (array)$wallet);
        return view('billing.billing.transfer_money',[
            'wallet' => $wallet
        ]);
    }

//    public function postTransferMoney(TransferMoneyRequest $request){
//        $display_name = $request->get('display_name');
//        $reason = $request->get("reason");
//        $amount = $request->get("amount");
//        $smsc = $request->get("smsc");
//        $uid = $this->users->getIdByDisplayName($display_name);
//        $token = $request->get("token");
//        // call transfer money from lobby
//        $result = $this->callApiTransferMoney($token, $smsc, $uid, $amount);
//        Log::info("User send money to " . $display_name . " amount " . $amount);
//        return view('user.billing.transfer_money', [
//            'result' => $result
//        ]);
//    }

    public function callApiTransferMoney($token, $smsCode, $urid, $amount)
    {

        $ch = curl_init();
        $url = env("TRANSFER_MONEY");
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, "token=" . $token . "&smsc=" . $smsCode . "&urid=" . $urid . "&amount=" . $amount);

        $server_output = curl_exec($ch);
        curl_close($ch);
        return json_decode($server_output);

    }


}
