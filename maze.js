$(document).ready(function () {
    var started = false;
    var failed = false;

    $(".boundary").hover(function () {
        if(started)
        {
            $(".boundary").css("background-color","red");
            $("#message").html("You Lose!");
            failed=true;
        }
    });

    $("#start").click(function () {
        started=!started;
        if(!started)
        {
            $(".boundary").css("background-color","#eeeeee");
            $("#message").html("");
            failed=false;
            started = true;
        }
    });

    $("#end").hover(function () {
        if(started&&!failed)
        {
            started=false;
            failed=false;
            alert("You Win!!");
        }
    });
});