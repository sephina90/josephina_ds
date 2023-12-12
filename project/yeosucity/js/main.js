

$(document).ready(function(){

    //gnb===================================
    let depth01 = $('.depth01 > li > a');
    depth01.on({
        mouseenter:function(){
            $(this).css({
                color:'#1A2D68'
            })
            $('.gnbGroup').hide();
            $(this).next().show();

        },
        mouseleave:function(){
            $(this).css({
                color:'#222'
            })
        }

    })

    let gnbGroup = $('.depth01 > li > .gnbGroup');
    
    gnbGroup.on({
        mouseenter:function(){$(this).show();},
        mouseleave:function(){$(this).hide();}
    })

    let depth03 =$('.depth02 > li');
    let colors = [
        [163, 129, 189],  // bgColor_0
        [127, 116, 203],  // bgColor_1
        [122, 139, 228],  // bgColor_2
        [139, 133, 232],  // bgColor_3
        [183, 183, 237]   // bgColor_4
    ];
    
    
    depth03.on({
        mouseenter:function(){

            let colorIndex = $(this).parent().parent().parent().index();
            let selectedColor = colors[colorIndex];
            let colorValue = selectedColor.join(',');
            let changeColor = 'rgb('+colorValue+')';
    
           $(this).children('.changeColor').css({backgroundColor : changeColor})
           $(this).children('span').children('a').css({ color: '#fff'})
           
        },
        mouseleave:function(){
            $(this).children('.changeColor').css({backgroundColor: '#fff'})
            $(this).children('span').children('a').css({ color: '#222'})
        }
    })

    //배너1===================================

    let num = 1;
    let st = setInterval(set,2800)

    $('.bannerGroup > ul > li:gt(0)').hide();

    $('.bnControl > a.prev').on('click',function(e){ 
        e.preventDefault
        num--;
        if(num < 1){
            num = 3
        }
        $('.bnCount > .currentNum').text(num)
        $('.bannerGroup > ul > li').hide();
        $('.bannerGroup > ul > li:eq('+(num-1)+')').show();
    })

    $('.bnControl > a.next').on('click',function(e){ 
        e.preventDefault
        num++;
        if(num > 3){
            num = 1
        }
        $('.bnCount > .currentNum').text(num)
        $('.bannerGroup > ul > li').hide();
        $('.bannerGroup > ul > li:eq('+(num-1)+')').show();
    })

    $('.bnControl > a.stop').on('click',function(e){ 
        e.preventDefault;
        if($(this).hasClass('stop')==true){
            clearInterval(st)
            $(this).removeClass('stop');
            $(this).addClass('play')
        }else{
            st = setInterval(set,2800)
            $(this).removeClass('play');
            $(this).addClass('stop')
        }
       
    })
    
    function set(){
        $('.bnControl > a.next').trigger('click')
    }

       
 //배너2===================================
         //시정소식
         var at1;
         function auto1(){ //자동롤링
             $('.info').animate({
                 top:'-30px'
             },2300,function(){
                 $('.info').append($('.info li:first'))
                 $('.info').css('top','0px')
             })
         }
         $('.ifControl > a.prev').on('click',function(){
             $('.info').append($('.info li:first'))
         })
        
         $('.ifControl > a.stop').on('click',function(){
             if($(this).hasClass('stop')==true){
                 clearInterval(at1);
                 $(this).removeClass('stop');
                 $(this).addClass('play')
             }else{
                 at1=setInterval(auto1,2300)
                 $(this).removeClass('play');
                 $(this).addClass('stop')
             }
         })
         $('.ifControl > a.next').on('click',function(){
             $('.info').prepend($('.info li:last'))
         })
         at1 = setInterval(auto1,2300)
 
         
         // 온라인접수
         var at2;
         function auto2(){ //	자동롤링
             $('.receipt').animate({
                 top:'-30px'
             },2300,function(){
                 $('.receipt').append($('.receipt li:first'))
                 $('.receipt').css('top','0px')
             })
         }
         $('.rcControl > a.prev').on('click',function(){
             $('.receipt').append($('.receipt li:first'))
         })
         $('.rcControl > a.stop').on('click',function(){
             if($(this).hasClass('stop')==true){
                 clearInterval(at2);
                 $(this).removeClass('stop');
                 $(this).addClass('play')
             }else{
                 at=setInterval(auto2,2300)
                 $(this).removeClass('play');
                 $(this).addClass('stop')
             }
         })
         $('.rcControl > a.next').on('click',function(){
             $('.receipt').append($('.receipt li:last'))
         })
         at2 = setInterval(auto2,2300)
           
         // =========
       

})





