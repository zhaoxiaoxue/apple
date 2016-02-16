$(function(){
    $(window).resize(function(){
        var clientW=$(window).width();
        if(clientW<730){
            $('.header1').css('display','none');
            $('.header2').css('display','block');
            $('.next1').css('display','none');
            $('.next2').css('display','block');
        }else{
            $('.header1').css('display','block');
            $('.header2').css('display','none');
            $('.next1').css('display','block');
            $('.next2').css('display','none');
        }
    });
    $(window).resize();
    $('.munebtn').click(function(){
        $('.munebtn .son').finish();
        $('.munebtn .son').slideToggle(200);
    });
    $('.next2>.row>div').each(function(){
        $('.next2>.row>div').click(function(){
            $(this).find('.son').finish();
            $(this).find('.son').slideToggle(200);
        });

    });
    //var index=0;
    //$($('.nav li')[index]).css('background','#fff');
    //var lunbo=function(){
    //    $('.banner a').hide();
    //    $($('.banner a ')[index]).show();
    //
    //    $('.nav li').css('background','#999');
    //    $($('.nav li')[index]).css('background','#fff');
    //
    //    index++;
    //    if(index==$('.banner .list').length){
    //        index=0;
    //    }
    //}
    //var timeId=setInterval(lunbo,4000);
    //$('.nav li').each(function(i){
    //    $(this).data('index',i);
    //})
    //$('.nav li').click(function(){
    //    clearInterval(timeId);
    //    var i=$(this).data('index');
    //
    //    $('.banner a').hide();
    //    $($('.banner a ')[i]).show();
    //
    //    $('.nav li').css('background','#999');
    //    $($('.nav li')[i]).css('background','#fff');
    //    index=i;
    //    timeId=setInterval(lunbo,1000);
    //});
    //
    var num=0;
    var move=function(){
        num++;
        if(num==$('.box .list').length-1){
            $('.banner .box').animate({marginLeft:-num*100+'%'},function(){
                $('.box').css({marginLeft:0});
                $('.nav li').css({border:'none', background:'#999'});
                $('.nav li').eq(0).css({border:'1px solid blue', background:'none'});
            });
            num=0;
        }else{
            $('.banner .box').animate({marginLeft:-num*100+'%'});
            $('.nav li').css({border:'none', background:'#999'});
            $($('.nav li')[num]).css({border:'1px solid blue', background:'none'});
        }
    }

    var time=setInterval(move,2000);
    $('.nav li').click(function(){
        var index=$(this).index('.nav li');
        num=index;
        $('.nav li').css({border:'none', background:'#999'});
        $($('.nav li')[index]).css({border:'1px solid blue', background:'none'});

        clearInterval(time);
        $('.banner .box').finish();
        $('.banner .box').animate({marginLeft:-num*100+'%'});
        //time=setInterval(move,2000);
    });

    $('.box').hover(function(){
        clearInterval(time);
    },function(){
        time=setInterval(move,2000);
    });




    $('a').click(function(){
        return false;
    });
    var margin;
    touch.on('.box','dragstart',function(){
        margin=$('.box')[0].offsetLeft;
    });
    touch.on('.box','drag',function(e){
        $('.box').css({marginLeft:margin+ e.x});
    });
    touch.on('.box','dragend',function(e){
        if(Math.abs(e.x)>300|| e.factor<5){
            if(e.direction=='left'){
                num++;
                if(num==$('.box .list').length-1){
                    $('.banner .box').animate({marginLeft:-num*100+'%'},function(){
                        $('.box').css({marginLeft:0});
                        $('.nav li').css({border:'none', background:'#999'});
                        $('.nav li').eq(0).css({border:'1px solid blue', background:'none'});
                    });
                    num=0;
                }else{
                    $('.banner .box').animate({marginLeft:-num*100+'%'});
                    $('.nav li').css({border:'none', background:'#999'});
                    $($('.nav li')[num]).css({border:'1px solid blue', background:'none'});
                }
            }else if(e.direction=='right'){
                num--;
                if(num==-1){
                    num=0;
                    $('.banner .box').animate({marginLeft:-num*100+'%'});
                    $('.nav li').css({border:'none', background:'#999'});
                    $($('.nav li')[num]).css({border:'1px solid blue', background:'none'});
                    return;
                }else{
                    $('.banner .box').animate({marginLeft:-num*100+'%'});
                    $('.nav li').css({border:'none', background:'#999'});
                    $($('.nav li')[num]).css({border:'1px solid blue', background:'none'});
                }
            }
        }else{
            $('.banner .box').animate({marginLeft:-num*100+'%'});
            $('.nav li').css({border:'none', background:'#999'});
            $($('.nav li')[num]).css({border:'1px solid blue', background:'none'});
        }
    });

    $('.box').mousedown(function(e){
        e.preventDefault();
    });

    var angle=0;
    touch.on('.rotate', 'touchstart', function(ev){
        ev.startRotate();
        ev.preventDefault();
    });
    touch.on('.rotate', 'rotate', function(ev){
        var totalAngle = angle + ev.rotation;
        if(ev.fingerStatus === 'end'){
            angle = angle + ev.rotation;
        }
        this.style.webkitTransform = 'rotate(' + totalAngle + 'deg)';
    });

    touch.on('.drag', 'touchstart', function(ev){
        ev.preventDefault();
    });

    var target = document.getElementById("target");
    var dx, dy;

    touch.on('.drag', 'drag', function(ev){
        dx = dx || 0;
        dy = dy || 0;
        var offx = dx + ev.x + "px";
        var offy = dy + ev.y + "px";
        this.style.webkitTransform = "translate3d(" + offx + "," + offy + ",0)";
    });

    touch.on('.drag', 'dragend', function(ev){
        dx += ev.x;
        dy += ev.y;
    });
})