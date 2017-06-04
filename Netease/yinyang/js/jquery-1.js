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
        var e = Math.random() * f - 300; // ��Ҷ�Ķ�λleftֵ
        var o = 0.2 + Math.random(); // ��Ҷ��͸����
        var fon = 40 + Math.random() * 10; // ��Ҷ��С
        var l = e - 100 + 200 * Math.random(); // ��Ҷ�ĺ���λ��
        var k = 2000 + 5000 * Math.random();
        var deg = Math.random() * 360; // ��Ҷ�ķ���
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
        var e = Math.random() * f; // ��Ҷ�Ķ�λleftֵ
        var o = 0.2 + Math.random(); // ��Ҷ��͸����
        var fon = 40 + Math.random() * 20; // ��Ҷ��С
        var l = e - 100 + 200 * Math.random(); // ��Ҷ�ĺ���λ��
        var k = 2000 + 5000 * Math.random();
        var deg = Math.random() * 360; // ��Ҷ�ķ���
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
