var count = 0;
var firstFont = 0;

function igpay() {
    var txt = document.getElementById("ta").value;
    var words = txt.split(" ");
    var consonats = new Array();
    var vowels = new Array();
    var vowels_letters = "aeoiu";

    for(var i=0;i<words.length;i++)
    {
        if(vowels_letters.indexOf(words[i].charAt(0))>-1)
        {
            vowels[vowels.length]= words[i] + "ay";
        }
        else
        {
            consonats[consonats.length]= "ay" + words[i];
        }
    }

    document.getElementById("ta").value= vowels +"\n"+consonats;
}

function Malko() {
    //
    var txt = document.getElementById("ta").value;
    var words = txt.split(" ");
    var result = new Array();

    for(var i=0;i<words.length;i++)
    {
        if((words[i].length)>=5)
        {
            result[result.length]= "Malkovitch";
        }
        else
        {
            result[result.length]= words[i];
        }
    }

    document.getElementById("ta").value= (result + "").replaceAll(","," ");
}
function bigger() {
    firstFont = getSize();
    setInterval(animatex,500);
}

function animatex() {
    
    if(count==10)
    {
        count = 0;
        document.getElementById("ta").style.fontSize=firstFont  + 'px';
    }
    else
    {
        var size = getSize();
        document.getElementById("ta").style.fontSize=(size+2) + 'px';
        count++;
    }
}

function getSize() {
    var computedFontSize = window.getComputedStyle(document.getElementById("ta")).fontSize;
    var size = parseInt(computedFontSize.replace('px',''));
    return size;
}

function cb_changed() {
    if(document.getElementById('cb').checked)
    {
        document.getElementById("ta").style.fontWeight='bold';
        document.getElementById("ta").style.color='green';
        document.getElementById("ta").style.textDecoration='underline';
        document.body.style.backgroundImage="url('100dollars.jpg')";
    }
    else
    {
        document.getElementById("ta").style.fontWeight='normal';
        document.getElementById("ta").style.color='black';
        document.getElementById("ta").style.textDecoration='none';
        document.body.style.backgroundImage=null;
    }
}