/**
 * Created by Administrator on 2017/3/21.
 */

function getDates(dt) {
    var str = "";//�洢ʱ����ַ���
    //��ȡ��
    var year = dt.getFullYear();
    //��ȡ��
    var month = dt.getMonth() + 1;
    //��ȡ��
    var day = dt.getDate();
    //��ȡСʱ
    var hour = dt.getHours();
    //��ȡ����
    var min = dt.getMinutes();
    //��ȡ��
    var sec = dt.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    str = year + "��" + month + "��" + day + "�� " + hour + ":" + min + ":" + sec;
    return str;
}



function my$(id){
    return document.getElementById(id);
}

//innerText��textContent������
function setInnerText(element,text){
    if(typeof (element.textContent)=="undefined"){
        element.innerText=text;
    }else{
        element.textContent=text;
    }
}
function getInnerText(element){
    if(typeof (element.textContent)=="undefined"){
        return element.innerText;
    }else{
        return element.textContent;
    }
}




//��ȡĳ��Ԫ���еĵ�һ����Ԫ��
function getFirstElement(element){
    if(element.firstElementChild){
        //��������֧��������ԣ��ͷ��ص�һ���Ӽ�Ԫ��
        return element.firstElementChild;
    }else{
        //����������֧�����firstElementChild���ԣ��ֻ�ȡ��������ĸ���Ԫ���еĵ�һ���ӽڵ�
        var node=element.firstChild;//�Ȼ�ȡ����ڵ�
        while(node&&node.nodeType!=1){//�жϽڵ���ڲ��Ҳ��Ǳ�ǩ
            node=node.nextSibling;//�����ҵ�ǰ�ڵ����һ���ڵ�
        }
        return node;
    }
}


//��ȡĳ��Ԫ���е����һ����Ԫ��
function getLastElement(element){
    if(element.lastElementChild){
        return element.lastElementChild;
    }else{
        var node=element.lastChild;
        while(node&&node.nodeType!=1){
            node=node.previousSibling;
        }
        return node;
    }
}


//��ȡĳ��Ԫ�ص�ǰһ���ֵ�Ԫ��
function getPreviousElement(element) {
    if(element.previousElementSibling){
        return element.previousElementSibling
    }else{
        var node=element.previousSibling;
        while (node&&node.nodeType!=1){
            node=node.previousSibling;
        }
        return node;
    }
}

//��ȡĳ��Ԫ�صĺ�һ���ֵ�Ԫ��
function getNextElement(element) {
    if(element.nextElementSibling){
        return element.nextElementSibling
    }else{
        var node=element.nextSibling;
        while (node&&node.nodeType!=1){
            node=node.nextSibling;
        }
        return node;
    }
}

//��ȡĳ��Ԫ�ص������ֵ�Ԫ��
function getSiblings(element) {
    if (!element)return;
    var elements = [];
    var ele = element.previousSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);
        }
        ele = ele.previousSibling;
    }
    ele = element.nextSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);

        }
        ele = ele.nextSibling;
    }
    return elements;
}


//���ص�ǰ�������ʲô���͵������
function userBrowser(){
    var browserName=navigator.userAgent.toLowerCase();
    if(/msie/i.test(browserName) && !/opera/.test(browserName)){
        console.log("IE");
    }else if(/firefox/i.test(browserName)){
        console.log("Firefox");
    }else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)){
        console.log("Chrome");
    }else if(/opera/i.test(browserName)){
        console.log("Opera");
    }else if(/webkit/i.test(browserName) &&!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))){
        console.log("Safari");
    }else{
        console.log("��֪��ʲô��!");
    }
}