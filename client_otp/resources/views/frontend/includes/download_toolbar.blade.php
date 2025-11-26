<div class="row download-block hidden-xs">
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 download-block-small">
        <a data-toggle="modal" data-target="#appstore_pop">
            <img src="/assets/images/download_ios.png" alt=""/>
        </a>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 download-block-small">
        <a data-toggle="modal" data-target="#playstore_pop">
            <img src="/assets/images/download_android.png" alt=""/>
        </a>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 download-block-small">
        <a href="{{isset($download->macos) ? $download->macos : "#"}}">
            <img src="/assets/images/download_mac.png" alt=""/>
        </a>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 download-block-small">
        <a href="{{isset($download->window) ? $download->window : "#"}}">
            <img src="/assets/images/download_window.png" alt=""/>
        </a>
    </div>
</div>
@include("frontend.includes.popup_appstore")
@include("frontend.includes.popup_playstore")