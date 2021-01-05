window.onload = function(){
    $(".sub").hide();

    //tabContent 안에 div fadeIn 되면서 보여줌
    $(".tabContent > div").eq(0).fadeIn();

    $("#tabMenu > li").on("click", function(){
        let index = $(this).
        $(".tabContent > div").hide();
        $(".tabContent > div").eq(idx).fadeIn();

        $("#tabMenu > li").removeClass("on");
        $("#tabMenu > li").eq(idx).addClass("on");
    });


//    $("#main > li").hover(함수1,함수2)
//                        1:호버가 됐을때, 2:호버 빠져나올떄 
     $("#main > li").hover(function(){
         //this 쓸때 화살표 쓰면 안됨
         //children : 자식 찾기 
         $(this).children("ul").stop().slideDown();
     }, function(){
         $(this).children("ul").stop().slideUp();
     });

     $(".slider > img").css({"left":"100%"});
     $(".slider > img").eq(0).css({"left":0});

     let idx = 0;
     setInterval(function(){
         let next = (idx + 1) % 3;
        $(".slider > img").eq(next).css({"left":"100%"}).stop().animate({"left":0},800);
        $(".slider > img").eq(idx).stop().animate({"left":"-100%"},800);   
        idx = (idx + 1) % 3;
     },1000);
    }