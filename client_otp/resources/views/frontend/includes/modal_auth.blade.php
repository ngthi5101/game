<div id="dang_nhap_modal" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <a id="closePopup" href="javascript:" class="btn-close" aria-hidden="true" data-dismiss="modal"></a>
        <!-- Modal content-->
        <div class="modal-content modal_login modal_login_body form-popup">
            <!--   <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Modal Header</h4>
              </div> -->
            <div class="modal-body modal_login_body">
                <div class="girl_form_login"></div>
                <div class="modal_login_header"></div>
                {{ Form::open(['route' => 'frontend.auth.login.post', 'id' => 'form_login']) }}
                <div class="text-center">
                    <div class="form-group login_button">
                        <input type="text" class="form-control" id="username" placeholder="Tên đăng nhập" name="username">
                    </div>
                </div>
                <div class="text-center">
                    <div class="form-group login_button">
                        <input type="password" class="form-control" id="password" placeholder="Mật khẩu" name="password" >
                    </div>
                </div>
                <div class="text-center">
                    <div class="form-group login_button">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" value="" checked>
                                <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                Ghi nhớ thông tin đăng nhập
                            </label>
                        </div>
                    </div>
                </div>
                <div class="clear_fix"></div>
                </form>

                <div class="register_txt align-right"><a data-toggle="modal" data-target="#dang_ki_modal" href="#" id="txt_dk_tk">Đăng ký</a></div>
                <div class="alert warning" id="divalertWarning1" style="display: none"></div>
                <div class="text-center login_button_normal" id="login_but">
                    {{--                        {{ Form::submit(trans('labels.frontend.auth.login_button'), ['id' => 'login_but_input', 'class' => 'text-center login_button_normal', 'style' => 'margin-right:15px; display:none;']) }}--}}
                    <img src="/assets/images/login_icon.png">
                </div>
                <div class="text-center">Đăng nhập bằng</div>
                <div class="text-center login_button_social login_button_normal">
                    <div class="oauth-image-link" rel="nofollow" data-method="post" href="#" onclick="getInfoFB()">
                        <img src="/assets/images/facebook_login_icon.png">
                    </div>
                    {{--<img src="./assets/images/google_login_icon.png">--}}
                </div>

                <div class="forgot_pass_txt" style="text-align: right;"><a data-toggle="modal" data-target="#forgot_pass_modal" href="#">Quên mật khẩu ?</a></div>
            </div>
            <!--   <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div> -->
        </div>
    </div>
</div>
<!-- End Modal Đăng nhập -->

<!-- Modal Đăng kí tài khoản -->
<div id="dang_ki_modal" class="modal fade" role="dialog" style="">
    <div class="modal-dialog">
        <a id="closePopup" href="javascript:" class="btn-close" aria-hidden="true" data-dismiss="modal"></a>
        <!-- Modal content-->
        <div class="modal-content modal_login modal_login_body form-popup">
            <!--   <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Modal Header</h4>
              </div> -->
            <div class="modal-body modal_login_body">
                <div class="girl_form_login"></div>
                <div class="modal_register_header"></div>
                <form action="/action_page.php">
                    <div class="text-center">
                        <div class="form-group login_button">
                            <input type="text" class="form-control" id="reg_username" placeholder="Tên đăng nhập" onchange="this.value = this.value.toLowerCase();" name="reg_username">
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="form-group login_button">
                            <input type="text" class="form-control" id="reg_display_name" placeholder="Tên hiển thị" onchange="this.value = this.value.toLowerCase();" name="reg_display_name">
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="form-group login_button">
                            <input type="password" class="form-control" id="reg_password" placeholder="Mật khẩu" name="password">
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="form-group login_button">
                            <input type="text" class="form-control float-left" id="captcha_code" placeholder="Mã xác nhận" name="captcha_code" style="width:50%;=">
                            <!-- Image captcha -->
                            <img class="float-left margin-left-10" width="92px;" height="51px" id="img_captcha_code" src="/images/form_captcha.png">

                            <input type="hidden" id="session_id" placeholder="Session ID" name="session_id">
                            <!-- Img refresh -->
                            <img class="float-left margin-left-10" id="img_captcha_refresh" src="/assets/images/captcha_refresh.png">
                        </div>
                    </div>
                    <div class="clear_fix"></div>
                    <div class="text-center">
                        <div class="form-group login_button">
                            <div class="checkbox">
                                <label>
                                    <input id="dieu_khoan" name="dieu_khoan" type="checkbox" value="" checked>
                                    <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                    Đồng ý với <a href="/dieu-khoan" target="_blank">điều khoản</a> sử dụng
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="alert warning" id="divalertWarning2" style="display: none"></div>
                    <div class="clear_fix"></div>
                </form>
                <div class="text-center login_button_normal">
                    <img id="btt_dangki_taikhoan" src="/assets/images/register_icon.png">
                </div>
            </div>
            <!--   <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div> -->
        </div>
    </div>
</div>
<!-- End Modal Đăng kí tài khoản -->

<!-- Modal Quên mật khẩu -->
<div id="forgot_pass_modal" class="modal fade" role="dialog" style="">
    <div class="modal-dialog">
        <a id="closePopup" href="javascript:" class="btn-close" aria-hidden="true" data-dismiss="modal"></a>
        <!-- Modal content-->
        <div class="modal-content modal_login modal_login_body form-popup">
            <!--   <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Modal Header</h4>
              </div> -->
            <div class="modal-body modal_login_body">
                <div class="girl_form_login"></div>
                <div class="modal_forgot_header"></div>
                <form action="/action_page.php">
                    <div class="text-center">
                        {{--<div class="form-group login_button">--}}
                        {{--<input type="email" class="form-control" id="email" placeholder="Lấy lại tài khoản SMS" name="email" disabled>--}}
                        {{--</div>--}}
                        <div class="form-group login_button">
                            <select class="form-control" id="forgot_password_type" style="height: 51px;">
                                <option>Lấy lại tài khoản SMS</option>
                            </select>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="form-group login_button">
                            <input type="text" class="form-control" id="fg_username" placeholder="Tên đăng nhập" name="fg_username">
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="form-group login_button">
                            <input type="text" class="form-control" id="fg_otp" placeholder="Mã xác thực OTP" name="fg_otp">
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="form-group login_button">
                            <input type="password" class="form-control" id="fg_password" placeholder="Nhập mật khẩu mới" name="fg_password">
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="form-group login_button">
                            <input type="password" class="form-control" id="fg_password_confirm" placeholder="Nhập lại mật khẩu" name="fg_password_confirm">
                        </div>
                    </div>
                    <div class="regulation-txt"> Quy định</div>
                    <div class="clear_fix"></div>
                </form>
                <div class="alert warning" id="divalertWarning5" style="display: none"></div>
                <div class="clear_fix"></div>
                <div class="text-center login_button_normal" id="fg_btt" >
                    <img src="/assets/images/confirm_icon.png">
                </div>
                <div class="forgot_pass_guide" style="">
                    <p>- Người chơi muốn lấy lại tài khoản bằng SMS thì tài khoản phải kích hoạt SMS</p>
                    <p>- Soạn tin: {{env('FORM_SMS')}} tenhienthi gửi tới {{env('TONGDAI')}} để nhận mã xác thực </p>
                    <p>- Nhập thông tin và đổi sang mật khẩu mới để đăng nhập lại vào hệ thống</p>
                </div>
            </div>
            <!--   <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div> -->
        </div>
    </div>
</div>
<!-- End modal quên mật khẩu -->
<!--Modal set ten dang nhap-->

<div id="set_display_name_modal" class="modal fade" role="dialog" style="">
    <div class="modal-dialog">
        <a id="closePopup" href="javascript:" class="btn-close" aria-hidden="true" data-dismiss="modal"></a>
        <!-- Modal content-->
        <div class="modal-content modal_login modal_login_body form-popup">
            <!--   <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Modal Header</h4>
              </div> -->
            <div class="modal-body modal_login_body">
                {{--<div class="girl_form_login"></div>--}}
                <div class="modal_dpn"></div>
                {{--<form action="/action_page.php">--}}
                <div class="text-center">
                    <div class="form-group login_button">
                        <input type="text" class="form-control" id="fb_display_name" placeholder="Tên hiển thị" name="pwd">
                    </div>
                </div>
                <div class="alert warning" id="divalertWarning4" style="display: none"></div>
                <div class="clear_fix"></div>
                {{--</form>--}}
                <div class="text-center set_display_name_btt">
                    <img src="/assets/images/confirm_icon.png">
                </div>
            </div>
            <!--   <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div> -->
        </div>
    </div>
</div>