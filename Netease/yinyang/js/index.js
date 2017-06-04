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
//��ȡ���
var slide = my$("slide");
//��ȡ���Ұ�ťdiv
var pagesDiv = slide.children[1];
//��ť
var left = pagesDiv.children[0];
//�Ұ�ť
var right = pagesDiv.children[1];
//��ȡ���Ŀ��
var imgWidth = slide.offsetWidth;
//��ȡul��ǩ
var ulObj = slide.children[0];
//��ȡul�����е�li
var list = ulObj.children;
var flag = true;
var pic = 0;
//��ȡ���е�li��ǩ ������ͼƬȫ��ɢ��
function assign() {
    for (var i = 0; i < list.length; i++) {
        animate(list[i], config[i], function () {
            flag = true;
        });
    }
}
assign();
//�Ұ�ť�������¼�
right.onmouseover = function () {
    this.style.opacity = "0.5";
};
//�Ұ�ť����Ƴ��¼�
right.onmouseout = function () {
    this.style.opacity = "1";
};
//��ť�������¼�
left.onmouseover = function () {
    this.style.opacity = "0.5";
};
//��ť����Ƴ��¼�
left.onmouseout = function () {
    this.style.opacity = "1";
};
//�Զ�����
var timeId = setInterval(rightClick, 1000);
//�������ҽ����div��ʾ������
slide.onmouseover = function () {
    animate(pagesDiv, {"opacity": 0.5});
    clearInterval(timeId);
};
slide.onmouseout = function () {
    animate(pagesDiv, {"opacity": 1});
    timeId = setInterval(rightClick, 1000);

};
//�ұ߰�ť����¼�
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
//��߰�ť����¼�
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

//��ȡҳ������a��ǩ Ϊa��ǩע����������뿪�¼�
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

