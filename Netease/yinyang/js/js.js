/**
 * Created by syt on 2017/4/2.
 */
window.onload = function () {
    var trun = 0;

    function tranImg() {
        trun += 1;
        var bigFlower = my$("bigFlower");
        if (trun == 360) {
            trun = 0;
        }
        bigFlower.style.transform = "rotate(" + trun + "deg)";
    }

    setInterval(tranImg, 40);

    var listObj = my$("peo").children[2].getElementsByTagName("li");
    var lists = my$("peo").children[1].getElementsByTagName("li");
    var index;
    for (var i = 0; i < listObj.length; i++) {
        listObj[i].setAttribute("index", i);
        listObj[i].onmouseover = mouseoverHandle;
        listObj[i].onmouseout = mouseoutHandle;
    }
    function mouseoverHandle() {
        for (var j = 0; j < lists.length; j++) {
            lists[this.getAttribute("index")].style.display = "block";
            animate(lists[this.getAttribute("index")], {opacity: 1});
        }
    }

    function mouseoutHandle() {
        for (var i = 0; i < lists.length; i++) {
            animate(lists[i], {opacity: 0});
            //lists[i].style.display="none";
        }
    }


    function getStyle(element, attr) {
        return element.currentStyle ? element.currentStyle[attr] : window.getComputedStyle(element, null)[attr];
    }

    var line = my$("ewm").children[0];
    var current = parseInt(getStyle(line, "top"));
    var target = 130;
    var timeId = setInterval(function () {
        var step = parseInt(target / 100);
        current += step;
        line.style.top = current + "px";
        if (current == target) {
            current = 0;
        }
    }, 10);


    var aObjs = my$("per7").getElementsByTagName("a");
    for (var i = 0; i < aObjs.length; i++) {
        aObjs[i].onmouseover = mouseoverHandle1;
        aObjs[i].onmouseout = mouseoutHandle1;
    }
    function mouseoverHandle1() {
        //this.style.top=-15+"px"
        //animate("this",{top:-15});
        //console.log(parseInt(getStyle(this,"top")));
        animate(this, {"top": "-15"})
    }

    function mouseoutHandle1() {
        animate(this, {"top": 0})
    }


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
    }, 2000)


    my$("video1").onclick= function (e) {
        my$("videocool").style.display="block";
        my$("videocool").children[0].autoplay=true;
        setTimeout(function () {
            my$("videocool").style.display="none";
            my$("videocool").children[0].autoplay=false;
        },39000);
        e=e||window.event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble=true;
        }
    };
    document.onclick= function () {
        my$("videocool").style.display="none";
        my$("videocool").children[0].autoplay=false;
    }

    $(window).scroll(function () {
        if($(window).scrollTop()>=953){
            console.log(1);
            $(".topcon").css({"position":"fixed","top":"-800px","left":"75px"});
            $(".wrap1").css("marginTop","820px");
        }
        if($(window).scrollTop()<=953){
            $(".topcon").css({"position":"relative","top":"","left":0});
            $(".wrap1").css("marginTop","");
        }
    });
};



