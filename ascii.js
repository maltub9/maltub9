var nodes = new Array();
var count = 0;
var isPlaying = false;
var speed = 1000;
var myInterval = null;

function animatex() {
    isPlaying = true;
    nodes = ANIMATIONS[document.getElementById("animation").value].split("=====");
    myInterval = setInterval(actionx,speed);
    
}

function actionx()
{
    if(isPlaying)
    {
        document.getElementById("mytextarea").value = nodes[count++];
        if(count==nodes.length)count =0;
    }
}

function changeFont() {
    var size = document.getElementById("sizeBox").value;
    document.getElementById("mytextarea").style.fontSize=size;
}

function play() {
    isPlaying=true;
}

function stop() {
    isPlaying=false;
}

function turbo() {
    if(document.getElementById('turboCheck').checked)
    {
        speed=250;
    }
    else
    {
        speed=1000;
    }
    
    clearInterval(myInterval);
    myInterval = setInterval(actionx,speed);
}