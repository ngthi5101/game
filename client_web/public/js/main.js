$(document).ready(function() {
    var swiper = new Swiper('[data-plugin="swiper"]', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true
    });

    var swiper_huongdan = new Swiper('[data-plugin="swiper-huongdan"]', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        observer: true,
        observeParents: true
    });

    if ($('.click-show-modal').length) {
        $(window).on('click', function (e) {
            e.preventDefault();
            $('#modal-reg').modal('show')
        });
    }

    // animation
    function animateCSS(element, animationName, callback) {
        const node = document.querySelector(element);
        node.classList.add('animated', animationName);

        function handleAnimationEnd() {
            node.classList.remove('animated', animationName);
            node.removeEventListener('animationend', handleAnimationEnd);

            if (typeof callback === 'function') callback()
        }

        node.addEventListener('animationend', handleAnimationEnd)
    }

    // page 1
    if ($('#page-1').length) {
        animateCSS('#layer-chemhuaqua', 'zoomIn', function() {
            $('#layer-chemhuaqua').addClass('animated infinite pulse');
        });

        animateCSS('#layer-girl', 'fadeInLeft', function() {
            $('#layer-girl').addClass('animated infinite pulse');
        });

        animateCSS('#layer-text', 'fadeInRight', function() {
            $('#layer-text').addClass('animated infinite pulse');
        });

        animateCSS('#layer-bt', 'fadeInRight', function() {
            $('#layer-bt').addClass('animated infinite tada-custom');
        });

        animateCSS('#layer-as-btn', 'zoomIn', function() {
            $('#layer-as-btn').addClass('animated infinite pulse');
        });

        animateCSS('#layer-as-bg', 'zoomIn', function() {
            $('#layer-as-bg').addClass('animated infinite pulse');
        });

        animateCSS('#layer-coin', 'zoomIn', function() {
            $('#layer-coin').addClass('animated infinite pulse');
        });
    }


    // page 2
    if ($('#page-2').length) {
        animateCSS('#layer-text', 'zoomIn', function() {
            $('#layer-text').addClass('animated infinite pulse');
        });

        animateCSS('#layer-btn-choingay', 'zoomIn', function() {
            $('#layer-btn-choingay').addClass('animated infinite tada-custom');
        });

        animateCSS('#layer-icon-small', 'zoomIn', function() {
            $('#layer-icon-small').addClass('animated infinite pulse');
        });

        animateCSS('#layer-icon-big', 'zoomIn', function() {
            $('#layer-icon-big').addClass('animated infinite pulse');
        });

        animateCSS('#layer-star-1', 'zoomIn', function() {
            $('#layer-star-1').addClass('animated infinite pulse');
        });

        animateCSS('#layer-star-2', 'zoomIn', function() {
            $('#layer-star-2').addClass('animated infinite pulse');
        });

        animateCSS('#layer-star-3', 'zoomIn', function() {
            $('#layer-star-3').addClass('animated infinite pulse');
        });

        animateCSS('#layer-star-4', 'zoomIn', function() {
            $('#layer-star-4').addClass('animated infinite pulse');
        });

        animateCSS('#layer-star-5', 'zoomIn', function() {
            $('#layer-star-5').addClass('animated infinite pulse');
        });
    }


    // page 3
    if ($('#page-3').length) {
        animateCSS('#layer-taixiu', 'bounceIn', function() {
            $('#layer-taixiu').addClass('animated infinite pulse');
        });

        animateCSS('#layer-sankhau', 'bounceIn', function() {
            $('#layer-sankhau').addClass('animated infinite pulse');
        });

        animateCSS('#layer-car', 'bounceInDown', function() {
            $('#layer-car').addClass('animated infinite pulse');
        });

        animateCSS('#layer-btn-choingay', 'zoomIn', function() {
            $('#layer-btn-choingay').addClass('animated infinite tada-custom');
        });

        animateCSS('#layer-text1', 'fadeInRight', function() {
            $('#layer-text1').addClass('animated infinite pulse');
        });

        animateCSS('#layer-text2', 'fadeInLeft', function() {
            $('#layer-text2').addClass('animated infinite pulse');
        });

        animateCSS('#layer-motor1', 'fadeInRight', function() {
            $('#layer-motor1').addClass('animated infinite pulse');
        });

        animateCSS('#layer-motor2', 'fadeInLeft', function() {
            $('#layer-motor2').addClass('animated infinite pulse');
        });
    }


    // success
    if ($('#success').length) {
        animateCSS('#layer-chucmung', 'fadeInUp', function() {
            $('#layer-chucmung').addClass('animated infinite pulse');
        });

        animateCSS('#layer-dangky', 'fadeInUp', function() {
            $('#layer-dangky').addClass('animated infinite pulse');
        });

        animateCSS('#layer-thanhcong', 'fadeInUp', function() {
            $('#layer-thanhcong').addClass('animated infinite pulse');
        });
    }

    var timeleft = 5;
    // var downloadTimer = setInterval(function(){
    //     document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    //     timeleft -= 1;
    //     if(timeleft <= 0){
    //         clearInterval(downloadTimer);
    //         document.getElementById("countdown").innerHTML = "Finished"
    //     }
    // }, 1000);
});