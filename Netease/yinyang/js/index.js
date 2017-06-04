/**
 * Created by pp on 2017/4/2.
 */
//window.onload = function () {
var config = [
    {
        width: 400,
        top: 60,
        left: 60,
        opacity: 0.3,
        zIndex: 2
    },//0
    {
        width: 600,
        top: 80,
        left: 135,
        opacity: 0.5,
        zIndex: 3
    },//1
    {
        width: 744,
        top: 40,
        left: 220,
        opacity: 1,
        zIndex: 4
    },//2
    {
        width: 600,
        top: 80,
        left: 460,
        opacity: 0.5,
        zIndex: 3
    },//3
    {
        width: 400,
        top: 60,
        left: 740,
        opacity: 0.3,
        zIndex: 2
    }//4

];
//获取相框
var slide = my$("slide");
//获取左右按钮div
var pagesDiv = slide.children[1];
//左按钮
var left = pagesDiv.children[0];
//右按钮
var right = pagesDiv.children[1];
//获取相框的宽度
var imgWidth = slide.offsetWidth;
//获取ul标签
var ulObj = slide.children[0];
//获取ul中所有的li
var list = ulObj.children;
var flag = true;
var pic = 0;
//获取所有的li标签 让所有图片全部散开
function assign() {
    for (var i = 0; i < list.length; i++) {
        animate(list[i], config[i], function () {
            flag = true;
        });
    }
}
assign();
//右按钮鼠标进入事件
right.onmouseover = function () {
    this.style.opacity = "0.5";
};
//右按钮鼠标移出事件
right.onmouseout = function () {
    this.style.opacity = "1";
};
//左按钮鼠标进入事件
left.onmouseover = function () {
    this.style.opacity = "0.5";
};
//左按钮鼠标移出事件
left.onmouseout = function () {
    this.style.opacity = "1";
};
//自动播放
var timeId = setInterval(rightClick, 1000);
//设置左右焦点的div显示和隐藏
slide.onmouseover = function () {
    animate(pagesDiv, {"opacity": 0.5});
    clearInterval(timeId);
};
slide.onmouseout = function () {
    animate(pagesDiv, {"opacity": 1});
    timeId = setInterval(rightClick, 1000);

};
//右边按钮点击事件
right.onclick = rightClick;
function rightClick() {
    if (flag) {
        flag = false;
        config.push(config.shift());
        assign();
    }
    if (pic == list.length - 1) {
        pic = 0;
        ulObj.style.left = -pic * imgWidth + "px";
    }
    pic++;
    animate(ulObj, {"left": -pic * imgWidth});

};
//左边按钮点击事件
left.onclick = function () {
    if (flag) {
        flag = false;
        config.unshift(config.pop());
        assign();
    }
    if (pic == 0) {
        pic = list.length - 1;
        ulObj.style.left = -pic * imgWidth + "px";
    }
    pic--;
    animate(ulObj, {"left": -pic * imgWidth});
};

//获取页面所有a标签 为a标签注册鼠标进入和离开事件
var aObj = document.getElementsByTagName("a");
for (var i = 0; i < aObj.length; i++) {
    aObj[i].style.cursor="pointer";
    aObj[i].onmouseover = function () {
        this.style.color = "deeppink";
    };
    aObj[i].onmouseout = function () {
        this.style.color = "";
    };

}

//};

