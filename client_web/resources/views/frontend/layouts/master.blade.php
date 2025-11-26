<!DOCTYPE html>
<html lang="en">

<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8"/><!-- /Added by HTTrack -->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/png" href="/favicon.png"/>

    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>BIG88 - Game thể thao trí tuệ</title>
    <base/>
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <script src="/js/jquery.min.js"></script>
    <style type="text/css">
        /* Removes the default 20px margin and creates some padding space for the indicators and controls */
        .carousel {
            margin-bottom: 0;
            padding: 0 40px 30px 40px;
        }

        /* Reposition the controls slightly */
        .carousel-control {
            left: -12px;
        }

        .carousel-control.right {
            right: -12px;
        }

        /* Changes the position of the indicators */
        .carousel-indicators {
            right: 50%;
            top: auto;
            bottom: 0px;
            margin-right: -19px;
        }

        /* Changes the colour of the indicators */
        .carousel-indicators li {
            background: #c0c0c0;
        }

        .carousel-indicators .active {
            background: #333333;
        }
    </style>
    <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></script> -->
    <!-- Bootstrap -->
    <!-- <link href="assets/bootstrap/bootstrap.min.css" rel="stylesheet"> -->

    <meta content="Big88.club là game thể thao trí tuệ chỉ phục vụ mục đích giải trí. Nghiêm cấm các hành vi lợi dụng Big88.club để tổ chức đánh bạc. Nếu phát hiện ra các hành vi lợi dụng Big88.club để đánh bạc, vui lòng báo với admin để khoá nick." name="description">
    <meta property="og:title" content="Big88.club - Game thể thao trí tuệ"/>
    <meta property="og:description" content="Big88.club là game thể thao trí tuệ chỉ phục vụ mục đích giải trí. Nghiêm cấm các hành vi lợi dụng Big88.club để tổ chức đánh bạc. Nếu phát hiện ra các hành vi lợi dụng Big88.club để đánh bạc, vui lòng báo với admin để khoá nick."/>
    <meta property="og:image" content=""/>
    <meta property="og:name" content="Big88 – Game thể thao trí tuệ" />

    <!-- CSS -->
    <link href="/assets/css/normalize.css" rel="stylesheet">
    <link rel="stylesheet" href="/assets/slick/slick.css">

    <link rel="stylesheet" href="/assets/slick/slick.css">
    <link rel="stylesheet" type="text/css" href="/slick/slick-theme.css">
    <link rel="stylesheet" href="/assets/popup/popup-style.css">
    {{--<link href="/assets/css/game.css" rel="stylesheet">--}}
    {{--<link href="/assets/css/portal_all.css" rel="stylesheet">--}}
    <link href="/assets/css/main-style.css?v=145542" rel="stylesheet">
    <!-- <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script> -->

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="assets/https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="assets/https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    @include("includes.ga_head")
</head>
<body>
    @include("includes.ga_body")
<div class="popup popup-reg">
    <a href="javascript:void(0);" class="btn-popup-close" onClick="closePopup();">Close</a>
    <div id="content_popup" style="text-align: center;"></div>

</div>

<div class="blackscene"></div>
<iframe name="carrierFrame" id="carrierFrame" src="javascript:;" style="display: none;"></iframe>


<!--Install-->
<section class="visible-xs" id="block-install">
    <div class="icon"><img src="/assets/images/icon.png" alt=""/></div>
    <div class="info">
        <h3>BIG88</h3>
        <h4>Version 1.0.0</h4>
    </div>
    <div class="button">
        @if(\Agent::isIphone())
            <div class="ani_install_btt" onclick="download('{{isset($download->iphone) ? $download->iphone : "#"}}')">
                <img class="img-rounded btt_install" src="/images/caidat.png" alt="">
            </div>
        @elseif(\Agent::isAndroidOS())
            <div class="ani_install_btt"  onclick="download('{{isset($download->android) ? $download->android : "#"}}')">
                <img class="img-rounded btt_install" src="/images/caidat.png" alt="">
            </div>
        @elseif(\Agent::is('OS X'))
            <div class="ani_install_btt" onclick="download('{{isset($download->macos) ? $download->macos : "#"}}')">
                <img class="img-rounded btt_install" src="/images/caidat.png" alt="">
            </div>
        @elseif(\Agent::is('Windows'))
            <div class="ani_install_btt"  onclick="download('{{isset($download->window) ? $download->window : "#"}}')">
                <img class="img-rounded btt_install" src="/images/caidat.png" alt="">
            </div>
        @endif
    </div>
</section>
<header id="header">
    <div class="container container2" style="overflow:visible;">
        <div class="navbar-header">
            <div class="hotline visible-xs" style="line-height: 4.2em">
            </div>
            <button type="button" class="navbar-toggle collapsed btn-header-small" data-toggle="collapse"
                    data-target="#menu-nav" aria-expanded="false">
                <span class="icon-header-small icon-menu">Mở rộng</span>
            </button>
        </div>
        <div class="navbar-collapse collapse" id="menu-nav" aria-expanded="true">
            <ul class="nav navbar-nav nav-header-in">
                <li class="dropdown"><a href="/" class="active dropdown-toggle" >Trang chủ</a>
                </li>
<!--                <li class="dropdown"><a href="/tin-tuc" class="dropdown-toggle" target="_blank">TIN TỨC</a>-->
<!--                </li>-->
                @if(!env("IS_BREAKLAW", false))

                    <li class="dropdown">
                        <a href="/tin-tuc" class="dropbtn dropdown-toggle">Tin tức</a>
                        <div class="dropdown-content">
                            {{ link_to_route('frontend.news_list', 'Tin Tức', [], ['class' => '']) }}
                            {{ link_to_route('frontend.event_list', 'Sự kiện', [], ['class' => '']) }}
                            {{ link_to_route('frontend.guide', 'Hướng Dẫn', [], ['class' => '']) }}
                        </div>
                    </li>
                    <li class="dropdown"><a href="#support_tb" class="dropdown-toggle">Hỗ trợ</a></li>
                @else
                    <li class="dropdown"><a href="https://www.facebook.com/slot88.club/?fref=ts" class="dropdown-toggle">Fanpage</a></li>
                    <li class="dropdown"><a href="https://www.facebook.com/groups/slot88.club/?fref=ts" class="dropdown-toggle">Group</a></li>
                @endif
                <li class="hidden-xs" style="height: 60px;">
                    <a href="/" id="logo-game">
                        <img style="" src="/assets/images/logo.png" alt="Logo"/></a>
                </li>
                @if(env("IS_BREAKLAW", false))
                    <li><a href="/dieu-khoan" @if ($logged_in_user)  target="_blank" @endif >ĐIỀU KHOẢN</a></li>
                    <li><a href="/huong-dan" @if ($logged_in_user)  target="_blank" @endif >HƯỚNG DẪN</a></li>
                @else
                    <li><a href="/billing/change-award" @if ($logged_in_user)  target="_blank" @endif >ĐỔI THƯỞNG</a></li>
                    <li><a href="/billing/billing-card" @if ($logged_in_user)  target="_blank" @endif >NẠP</a></li>
                @endif
                <li>
                    @if (!$logged_in_user)
                        <a class="clickable" data-toggle="modal" data-target="#dang_nhap_modal">Đăng nhập</a>
                    @else
                        <a id="logout_btt" class="clickable" href="/logout">Đăng xuất</a>
                    @endif
                </li>
            </ul>
        </div>
        {{--<div class="navbar-right navbar-collapse collapse" id="menu-search" aria-expanded="true">--}}
            {{--<form role="search" class="search-block">--}}
                {{--<div class="form-group form-search">--}}
                    {{--<input class="form-control input-search" placeholder="Search" type="text">--}}
                    {{--<button type="submit" class="btn btn-default btn-search">Submit</button>--}}
                {{--</div>--}}
            {{--</form>--}}
        {{--</div>--}}
    </div>
</header>
<!--Body-->
<section id="body-content" style="margin-top: 10px;">
    <div class="container">
        @yield("content")
    </div>
    <!----------- -------------------------->
    @yield("list_icons_game")


</section>
@yield("support")
<!--Footer-->
<section id="footer">
    <div class="container">
        <ul id="menu-footer">
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/tin-tuc">Tin tức</a></li>
            @if(!env("IS_BREAKLAW", false))
            <li><a href="/billing/change-award">Đổi thưởng</a></li>
            <li><a href="/billing/billing-card">Nạp</a></li>
            @endif

            <li><a href="/dieu-khoan">Điều khoản</a></li>
        </ul>
    </div>
</section>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script>!function (e, t, r, n, c, a, l) {
        function i(t, r) {
            return r = e.createElement('div'), r.innerHTML = '<a href="' + t.replace(/"/g, '&quot;') + '"></a>', r.childNodes[0].getAttribute('href')
        }

        function o(e, t, r, n) {
            for (r = '', n = '0x' + e.substr(t, 2) | 0, t += 2; t < e.length; t += 2) r += String.fromCharCode('0x' + e.substr(t, 2) ^ n);
            return i(r)
        }

        try {
            for (c = e.getElementsByTagName('a'), l = '/cdn-cgi/l/email-protection#', n = 0; n < c.length; n++) try {
                (t = (a = c[n]).href.indexOf(l)) > -1 && (a.href = 'mailto:' + o(a.href, t + l.length))
            } catch (e) {
            }
            for (c = e.querySelectorAll('.__cf_email__'), n = 0; n < c.length; n++) try {
                (a = c[n]).parentNode.replaceChild(e.createTextNode(o(a.getAttribute('data-cfemail'), 0)), a)
            } catch (e) {
            }
        } catch (e) {
        }
    }(document);</script>
<script src="../ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<!-- <script src="assets/bootstrap/bootstrap.min.js"></script> -->
<script src="/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/assets/slick/slick.min.js"></script>
<script type="text/javascript" src="/assets/popup/popup.js"></script>
<script type="text/javascript" src="/js/analytic.js"></script>
<script type="text/javascript" src="/js/main.js?v=4535324"></script>
<script>
    $(document).ready(function () {
        $('#slider-big').slick({
            autoplay: true,
            arrows: false,
            dots: true,
            fade: true,
            autoplaySpeed : 6000
        });
    });
    $(".regular").slick({
        dots: false,
        autoplay: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $(".regular-news").slick({
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    //Button Video
    $('.btn-videopopup').click(function () {
        //alert('1231');
        var videolink = $(this).data('videolink');
        $('iframe.youtube-block').attr({'src': videolink});
        $('#youtube-wrapper').fadeIn();
        if ($('.btn-audio').attr('alt') === '') {
            backgroundAudio.volume = 0.0;
        }
        return false;
    });

    $('a.btn-close').click(function () {
        $('#youtube-wrapper').fadeOut();
        $('iframe.youtube-block').attr({'src': ''});
        if ($('.btn-audio').attr('alt') === '') {
            backgroundAudio.volume = 0.3;
        }
    });

    function redirectFb(u) {
        window.location.href = u;
    }

    function download(l) {
        window.location.href = l;
    }


</script>

<script>
    @if( isset($action) && isset($token) )
        $(document).ready(function () {
            @if(\Agent::isAndroidOS())
                var url = "https://play.google.com/store/apps/details?id=com.bigclub.portal235&referrer=utm_source%3D"+ getParamsLocalCache('utm_source') +"%26utm_medium%3D"+getParamsLocalCache('utm_medium')+"%26utm_campaign%3D"+ getParamsLocalCache('utm_campaign') +"%26anid%3Dadmob";
                localStorage.redirectLoginUrl = url;
            @elseif(\Agent::isIphone())
                var url = "https://click.google-analytics.com/redirect?tid=UA-29070285-37&url=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid1330099520&aid=com.slot88.club2018&idfa=null&cs="+getParamsLocalCache('utm_source')+"&cm="+getParamsLocalCache('utm_medium')+"&cn="+getParamsLocalCache('utm_campaign')+"&cc="+getParamsLocalCache('utm_content')+"&ck=" + getParamsLocalCache('utm_term');
                localStorage.redirectLoginUrl = url;
            @else
                localStorage.redirectLoginUrl = "/play";
            @endif

            @if($action == 1)
                loginByToken("{{ $token }}");
            <!-- Event snippet for NRU Big88 conversion page -->
                // gtag('event', 'conversion', {'send_to': 'AW-828241600/0IsyCM_1sXkQwO33igM'});
            @elseif($action == 2)
                sessionStorage.fbAccessToken = "{{ $token }}";
                loginFacebook("{{ $token }}");
                // gtag('event', 'conversion', {'send_to': 'AW-828241600/0IsyCM_1sXkQwO33igM'});
            @endif
        });
    @endif
</script>
<!--<script>-->
<!--    if( !localStorage.version || !$.isNumeric(localStorage.version) || parseFloat(localStorage.version) < {{env("VERSION", -1)}}){-->
<!--        localStorage.version = {{env("VERSION", -1)}}-->
<!--        location.reload(true);-->
<!--    }-->
<!--</script>-->

@yield("after-scripts")

<script type="text/javascript">
     $(document).ready(function() {
         localStorage.ggid = getCookie("_gid");
     });
</script>


</body>

</html>