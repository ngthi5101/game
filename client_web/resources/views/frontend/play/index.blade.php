@extends("frontend.layouts.master")
@section("content")
    @include("frontend.includes.modal_maintain")
    <div class="container slick-initialized slick-slider" id="screen-game-area">
        @if(!$maintainStatus)
            <iframe class="frame_game_lbb"  src="/game?acc_token=big88"></iframe>
        @else
            <div class="frame_game_lbb"></div>
        @endif
    </div>
    <div class="container" style="margin-top: 45px;">
        @include("frontend.includes.download_toolbar")
    </div>
    <div class="container">
        <div style="color: #FFFFFF; text-align: center;font-size: 20px;margin: 20px auto;">
        </div>
    </div>
@endsection
@section('after-scripts')
    <script>
//        validateLogin();
        $(document).ready(function () {
            $(document).scrollTop($("#body-content").position().top);
        });
        @if($maintainStatus)
            $('#maintain_modal').modal('show');
        @endif


    </script>
@endsection