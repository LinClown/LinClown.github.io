/**
 * Created by LRG on 2017/4/13.
 */
$(function(){
    my$("global_gp_reg").onmouseover = function () {
        this.style.backgroundColor = "#F5F5F5";
        this.style.borderBottom = "3px #BC2E2E solid"
    };

    my$("global_gp_reg").onmouseout = function () {
        this.style.backgroundColor = "";
        this.style.borderBottom = "";
    }
    my$("global_gp_card").onmouseover = function () {
        this.style.backgroundColor = "#F5F5F5";
        this.style.borderBottom = "3px #BC2E2E solid"
    };
    my$("global_gp_card").onmouseout = function () {
        this.style.backgroundColor = "";
        this.style.borderBottom = "";
    };

    my$("NIE-topBar-menu").children[0].onmouseover = function () {
        my$("NIE-table").style.display = "block";
        this.style.backgroundColor = "#F5F5F5";
    };
    my$("NIE-topBar-menu").children[0].onmouseout = function () {
        my$("NIE-table").style.display = "none";
        this.style.backgroundColor = "";

    };


    my$("fadeup").onmouseover = function () {
        this.style.backgroundColor = "#F5F5F5";
        this.style.borderBottom = "3px #BC2E2E solid"
    };
    my$("fadeup").onmouseout = function () {
        this.style.backgroundColor = "";
        this.style.borderBottom = "";
    };

    setInterval(function () {
        if (getInnerText(my$("fadeup")) == "安卓充值9.8折") {
            animate(my$("fadeup"),{opacity:"0.5",top:"0"});
            setInnerText(my$("fadeup"), "领取网易严选宝箱");
        }else{
            animate(my$("fadeup"),{opacity:"1",top:"0"});
            setInnerText(my$("fadeup"), "安卓充值9.8折");
        }
    }, 2000);






    $(".scroll-btn>a").click(function(){
        $(this).addClass("current").siblings("a").removeClass("current");
        var imgWidth=$(".scroll-cont").width();
        var index=$(this).index();
        $("#uu").animate({"left":-index*imgWidth},500);
    });


    $(".cont2-cont .btn1").click(function(){
        $(this).css("display","none").siblings().css("display","block");

        $(".exp1").css("display","block").siblings(".exp").css("display","none");
        $(".cont2-cont .btn2").animate({"left":"460px"},0);
        $(".cont2-cont .btn3").animate({"left":"589px"},0);
        $(".cont2-cont .btn4").animate({"left":"681px"},0);
        $(".cont2-cont .btn5").animate({"left":"790px"},0);
    });
    $(".cont2-cont .btn2").click(function(){
        $(this).css("display","none").siblings().css("display","block");
        $(".cont2-cont .btn1").css("display","block");
        $(".exp2").css("display","block").siblings(".exp").css("display","none");
        $(".cont2-cont .btn3").animate({"left":"589px"},0);
        $(".cont2-cont .btn4").animate({"left":"681px"},0);
        $(".cont2-cont .btn5").animate({"left":"790px"},0);
    });
    $(".cont2-cont .btn3").click(function(){
        $(this).css("display","none").siblings().css("display","block");
        $(".cont2-cont .btn2").css("display","block");
        $(".exp3").css("display","block").siblings(".exp").css("display","none");
        $(".cont2-cont .btn2").animate({"left":"60px"},0);
        $(".cont2-cont .btn4").animate({"left":"681px"},0);
        $(".cont2-cont .btn5").animate({"left":"790px"},0);
    });
    $(".cont2-cont .btn4").click(function(){
        $(this).css("display","none").siblings().css("display","block");
        $(".cont2-cont .btn2").css("display","block");
        $(".exp4").css("display","block").siblings(".exp").css("display","none");
        $(".cont2-cont .btn2").animate({"left":"60px"},0);
        $(".cont2-cont .btn3").animate({"left":"188px"},0);
        $(".cont2-cont .btn5").animate({"left":"790px"},0);
    });
    $(".cont2-cont .btn5").click(function(){
        $(this).css("display","none").siblings().css("display","block");
        $(".cont2-cont .btn2").css("display","block");
        $(".exp5").css("display","block").siblings(".exp").css("display","none");
        $(".cont2-cont .btn2").animate({"left":"60px"},0);
        $(".cont2-cont .btn3").animate({"left":"188px"},0);
        $(".cont2-cont .btn4").animate({"left":"279px"},0);
    });


    $(".Play").click(function(){
        $('<video src="flash/12.f4v" controls="controls" muted="false" ></video>').appendTo("#NIE-topBar");

        $("#main").css("opacity",0.4);
        $("#dvdv").css("display","block");
        $(".container").css("opacity",1);
    });
    $("#dvdv").click(function(){
        $("#dvdv").css("display","none");
        $("video").css("display","none");
        $("video").remove();
        $("#main").css("opacity",1);
    });

});