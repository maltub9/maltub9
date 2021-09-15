$(document).ready(function () {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
    
    var randoms=new Array();
    var squareSelected = false;
    var emptySquarePos={x:300,y:300};
    var selectedSquare = null;

    // initialize each piece
    for (var i=0; i< divs.length; i++) {
        var div = divs[i];
        
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("background.jpg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        
        // store x and y for later
        div.x = x;
        div.y = y; 
    }

    function createRandoms() {
        randoms=new Array();
        var cursor = 0;

        while(randoms.length!=15)
        {
            var x = Math.floor((Math.random() * 15) + 1);
            if(randoms.indexOf(x)==-1)
            {
                randoms[cursor]=x;
                cursor++;
            }
        }
    }

    $("#shufflebutton").click(function () {
        createRandoms();
        var x2,y2;

        for (var i=0; i< divs.length; i++) {
            var div = divs[randoms[i]-1];
            
            // calculate x and y for this piece
            var x = ((i % 4) * 100) ;
            var y = (Math.floor(i / 4) * 100) ;

            x2 = (((randoms[i]-1) % 4) * 100) ;
            y2 = (Math.floor((randoms[i]-1) / 4) * 100) ;
    
            // set basic style and background
            div.className = "puzzlepiece";
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            div.style.backgroundImage = 'url("background.jpg")';
            div.style.backgroundPosition = -x2 + 'px ' + (-y2) + 'px';
            
            // store x and y for later
            div.x = x;
            div.y = y; 
        }
    });
    

    $("#puzzlearea > div").click(function(e) {
        var ele=$(this);
        var sqr = $(this)[0];
        var left = sqr.x;
        var top = sqr.y;
        sqr.x=emptySquarePos.x;
        sqr.y=emptySquarePos.y;
        
        //move the square into the empty position
        var yp = "-="+ (top-emptySquarePos.y) +"px";//current: 200,300,empty:300,300
        var xp = "-="+ (left-emptySquarePos.x)+"px";

        $(this).animate({'marginLeft' : xp,'marginTop' : yp});
        emptySquarePos.x=left;
        emptySquarePos.y=top;
        
      });




});