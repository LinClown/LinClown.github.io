/**
 * Created by zhangdl on 2017-04-03.
 */

window.onload = function () {
    //头部隐藏

    my$("disp-none").onclick = function (e) {
        if (my$("hide").style.display == "none") {
            my$("hide").style.display = "block";
        } else if (my$("hide").style.display == "block") {
            my$("hide").style.display = "none";
        }
        e=e||window.event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble=true;
        }
    };

        $(document).click(function(){
            $("#hide").hide();
        });


    //游戏隐藏
    my$("disp-youxi").onclick = function (e) {
        if (my$("dispnone").style.display == "none") {
            my$("dispnone").style.display = "block";
        } else if (my$("dispnone").style.display == "block") {
            my$("dispnone").style.display = "none";
        }
        e=e||window.event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble=true;
        }
    };
    $(document).click(function(){
        $("#hide").hide();
    });


    //右侧隐藏
    my$("li-none").onclick = function (e) {
        if (my$("login").style.display == "none") {
            my$("login").style.display = "block";
        } else if (my$("login").style.display == "block") {
            my$("login").style.display = "none";
        }
        e=e||window.event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble=true;
        }
    };
    $(document).click(function(){
        $("#login").hide();
    });

    //页面卷曲
    // 获得 页面向上卷曲出去的距离
    function getScrollTop (){
        return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
    }
    function getScrollLeft (){
        return window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0;
    }
    window.onscroll=function(){
        if(getScrollTop()>= my$("topPart").offsetHeight){

           my$("headerBar").className="header fixed",{"height":"0","zIndex":10};

            my$("fgBar").style.marginTop=my$("topPart").offsetHeight+"px";
        }else{
            my$("headerBar").className="header w";
            my$("fgBar").style.marginTop=0+"px";
        }
    };

    //$(function(){
    //    $(window).scroll(function(){
    //        if($(document).scrollTop()>$("#topPart").height()){
    //            $("#headerBar").css("position","fixed").css({"width":"100%","top":"0"});
    //            $("#fgBar").css("marginTop",$("#topPart").height());
    //        }else{
    //            $("#headerBar").css("position","static").css("width","1330px");
    //            $("#fgBar").css("marginTop",0);
    //        }
    //    });
    //});

      //获得人物信息的大div 里面所有的图片 的div
       var divImg=my$("candy-div").children;
    //获得显示右边文字的div
        var dvText=my$("candy-p").children;
    //console.log(dvText);
    //获得下面小人物的div
        var dvPer=my$("candy-li");
    //获得li标签 鼠标移入 上面图片进行变动
       var listLi=dvPer.children[0].children;
    //console.log(listLi);
    for(var i=0;i<listLi.length;i++){
        listLi[i].setAttribute("index",i);
            listLi[i].onmouseover=mouseoverHandle;
        }
    for(var i=0;i<dvText.length;i++){
        dvText[i].setAttribute("index",i);
        dvText[i].onmouseover=mouseoverHandle;
    }
        function mouseoverHandle(){
        for(var j=0;j<divImg.length;j++){
            divImg[j].setAttribute("ind",j+1);
           var index=this.getAttribute("index");
            var ind=this.getAttribute("ind");
            if (j!=index) {
                divImg[j].className = "hide";
            } else
                divImg[j].className = "show";
            }
            for(var k=0;k<dvText.length;k++){
                dvText[k].setAttribute("inx",k+1);
                index=this.getAttribute("index");
                var inx=this.getAttribute("inx");
                if(k!=index){
                    dvText[k].className="candy-person-right hide";
                }else{
                    dvText[k].className="candy-person-right show";
                }
            }
        }

       //点击播放按钮视频播放

   my$("a1").onclick=function(e){
       my$("vid").style.display="block";
       my$("close").style.display="block";
       //my$("video").autoplay=true;
       my$("video").play();
       e=e||window.event;
       if(e.stopPropagation){
           e.stopPropagation();
       }else{
           e.cancelBubble=true;
       }
   };
    //点击任何地方关闭视频
    $(document).click(function(){
            $("#vid").hide();
          $("#close").hide();
        });

  //点击按钮x隐藏
    $("#close").click(function(){
        $("#vid").hide();
    });

};