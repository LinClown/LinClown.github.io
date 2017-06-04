$(function () {
    $("#updown").css("top", window.screen.availHeight / 2+150+ "px");
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('#updown').fadeIn(300);
        } else {
            $('#updown').fadeOut(300);
        }
    });
    $('#updown .up').click(function () {
        $('html,body').animate({scrollTop: '0px'}, 500);
    });
    $('#updown .down').click(function () {
        $('html,body').animate({scrollTop: document.body.clientHeight + 'px'}, 500);
    });
    var d = "<div class='maple'><img src='images/fly1_d6570e7.png' width='50'/><div>";
    setInterval(function() {
        var f = $(document).width();
        var e = Math.random() * f - 300; // 枫叶的定位left值
        var o = 0.2 + Math.random(); // 枫叶的透明度
        var fon = 40 + Math.random() * 10; // 枫叶大小
        var l = e - 100 + 200 * Math.random(); // 枫叶的横向位移
        var k = 2000 + 5000 * Math.random();
        var deg = Math.random() * 360; // 枫叶的方向
        $(d).clone().appendTo(".maplebg").css({
            left: e + "px",
            opacity: o,
            transform: "rotate(" + deg + "deg)",
            "font-size": fon,
        }).animate({
            top: "1200px",
            left: l + "px",
            transform: "rotate(" + deg + "deg)",
            opacity: 0.3,
        }, k, "linear", function() {
            $(this).remove()
        })
    }, 1000);
    var z = "<div class='maple'><img src='images/fly2_8ec389e.png' width='40' /><div>";
    setInterval(function () {
        var f = $(document).width();
        var e = Math.random() * f; // 枫叶的定位left值
        var o = 0.2 + Math.random(); // 枫叶的透明度
        var fon = 40 + Math.random() * 20; // 枫叶大小
        var l = e - 100 + 200 * Math.random(); // 枫叶的横向位移
        var k = 2000 + 5000 * Math.random();
        var deg = Math.random() * 360; // 枫叶的方向
        $(z).clone().appendTo(".maplebg").css({
            left: e + "px",
            opacity: o,
            transform: "rotate(" + deg + "deg)",
            "font-size": fon,
        }).animate({
            top: "500px",
            left: l + "px",
            opacity: 0.1,
        }, k, "linear", function () {
            $(this).remove()
        });
    }, 1000);
    $(window).scroll(function () {
        t = $(document).scrollTop();
        if (t > 600) {
            $('.sideNav').show();

        } else {
            $('.sideNav').hide();
        }
    });

    $('.signBtn').click(function () {
        var sign = $('.sign');
        var signBox = sign.find('.signBox');
        signBox.hide()
        sign.fadeIn();
        signBox.eq(parseInt(Math.random() * signBox.size())).show()
    });
    $('.signClose').click(function () {
        $('.sign').fadeOut();
    });
    setInterval(function () {
        $(".signBtn").animate({"left": "-30px"}, 100, function () {
            $(".signBtn").animate({"left": "0px"}, 100, function () {
                $(".signBtn").animate({"left": "30px"}, 100, function () {
                    $(".signBtn").animate({"left": "0px"}, 100, function () {
                        $(".signBtn").animate({"left": "-30px"}, 100, function () {
                            $(".signBtn").animate({"left": "0px"}, 100, function () {

                            });
                        });
                    });

                });
            });
        });
    }, 740);
});/**
 * Created by pp on 2017/4/14.
 */
