/**
 * Created by Administrator on 2017/6/7 0007.
 */
$(function() {
    var slideBox = $('.slideBox');
    var slide=$('.slide');
    var slides = $('.slide0');
    var onewidth = slides.eq(0).width();
    var index = 0;
    var dots = $('.dots span');
    var timer;
    var back=$('.back');
    var pre=$('.pre');
//设置定时器
    var setTimer = function () {
            timer = setInterval(function () {
            index+=1;
            if (index >= slides.length) {
                index = 0;
            }
            slideImg();
        }, 3000)
    };
    setTimer();
    slide.on('mouseover',function () {
     clearInterval(timer);
     })
     slide.on('mouseout',function () {
     setTimer();
     })
//图像滑动，小圆点改变
   function slideImg(){
        slideBox.animate({'left': -onewidth*index});
       /*ul.animate({'left': -onewidth*index});*/
        for (var i = 0; i <= slides.length; i++) {
            dots.eq(i).removeAttr('class', 'active');
        }
        dots.eq(index).attr('class', 'active');
    }
    console.log(onewidth)
    //小圆点点击事件
    dots.on('click',function(){
        index=$(this).index();
        slideImg();
    })
    //前景/后退按钮点击
    back.on('click',function () {
        index-=1;
        if(index<0){
            index=slides.length-1;
        }
        slideImg();
    })
    pre.on('click',function () {
        index+=1;
        if(index>=slides.length){
            index=0;
        }
        slideImg();
    })
   back.hover(function () {
     back.attr('id','color');
     },function () {
     back.removeAttr('id','color');//class不起作用
     })
    pre.hover(function () {
        pre.attr('id','color');
    },function () {
        pre.removeAttr('id','color');
    })


    var li=$('.f1 .f1Nav .f1Nav0 li');
   var arrow=$('.f1 .arrow');
    var f1Cloth=$('.f1 .f1Cloth');
    var manCloth=$('.f1 .manCloth');
    li.hover(changeCloth);
    var li2=$('.f2 .f1Nav .f1Nav0 li');
    var arrow2=$('.f2 .arrow');
    var f2Cloth=$('.f2 .f2Cloth');
    var manCloth2=$('.f2 .manCloth');
    li2.hover(function(){
        for(var i=0;i<li.length;i++){
            li2.eq(i).css({'color':'darkgray'});
            arrow2.css({'display':'none'});
            f2Cloth.css({'display':'none'});
        }
        var index=$(this).index();
        li2.eq(index).css({'color':'red'});
        arrow2.css({'display':'block','right':index*50+25+"px",'bottom':'0px'});
        f2Cloth.eq(index).css({'display':'block'});
    });

    var li3=$('.f3 .f1Nav .f1Nav0 li');
    var arrow3=$('.f3 .arrow');
    var f3Cloth=$('.f3 .f3Cloth');
    var manCloth3=$('.f3 .manCloth');
    li3.hover(function(){
        for(var i=0;i<li.length;i++){
            li3.eq(i).css({'color':'darkgray'});
            arrow3.css({'display':'none'});
            f3Cloth.css({'display':'none'});
        }
        var index=$(this).index();
        li3.eq(index).css({'color':'red'});
        arrow3.css({'display':'block','right':index*50+25+"px",'bottom':'0px'});
        f3Cloth.eq(index).css({'display':'block'});
    });

   function changeCloth(){
       for(var i=0;i<li.length;i++){
           li.eq(i).css({'color':'darkgray'});
           arrow.css({'display':'none'});
           f1Cloth.css({'display':'none'});
       }
       var index=$(this).index();
       li.eq(index).css({'color':'red'});
       arrow.css({'display':'block','right':index*50+25+"px",'bottom':'0px'});
       f1Cloth.eq(index).css({'display':'block'});
   }

var loginLink=$('.loginLink');
   var rege=$('.rege');
   var layerMask=$('.layer-mask')
    var layerPop=$('.layer-pop')
   var layerClose=$('.layer-close');
    var content=$('.layer-pop .content');
    var login=$('.login');
    var register=$('.register');
    loginLink.click(function(){
          var html=login.html();
          show(html,300);
          layerClose.click(function(){
              hide();
          })
    })
    layerClose.hover(function(){
        $(this).css({'border':'3px solid lightgrey','background':'white','color':'lightgrey'});
    },function(){
        $(this).css({'border':'3px solid white','background':'lightgrey','color':'black'});
    })
    rege.click(function(){
        var html=register.html();
        show(html,400);
        layerClose.click(function(){
            hide();
        })
    })



    function show(html,height){
        layerMask.show();
        layerPop.show();
        content.html(html);
        layerPop.css({height:height})
    }
        function hide(){
            layerMask.hide();
            layerPop.hide();
        }

        var phone=$('.phone');
        phone.hover(function () {
        $('.phone div').css({'display':'block'})
        },function () {
            $('.phone div').css({'display': 'none'})
        })

    var mine=$('.firstRight .mine');
    var mineList=$('.firstRight .mine li');
    var save=$('.firstRight .save');
    var saveList=$('.firstRight .save li');
    var center=$('.firstRight .center');
    var centerList=$('.firstRight .center li');
    var service=$('.firstRight .service');
    var serviceList=$('.firstRight .service li');
        mine.hover(function(){
            mineList.css({'display':'block'})
        },function(){
            mineList.css({'display':'none'})
        })
    save.hover(function(){
        saveList.css({'display':'block'})
    },function(){
        saveList.css({'display':'none'})
    })
    center.hover(function(){
        centerList.css({'display':'block'})
    },function(){
        centerList.css({'display':'none'})
    })
    service.hover(function(){
       serviceList.css({'display':'block'})
    },function(){
        serviceList.css({'display':'none'})
    })

    var leftUl=$('.banner .bannerLeft ul');
    var leftList=$('.banner .bannerLeft ul .list');
    console.log(leftUl);
    leftUl.mouseover(function(){leftList.css({'display':'block','z-index':9,'position':'absolute'})})
        leftUl.mouseout(function(){leftList.css({'display':'none'})})
    leftList.mouseover(function(){$(this).css({'display':'block','z-index':9,'position':'absolute'})})

    /*购物车显示*/
    var shop=$('.search .rightLogo');
    shop.mouseover(function () {
        $('.search .rightLogo .wrap').show();
    })
    shop.mouseout(function () {
        $('.search .rightLogo .wrap').hide();
    })
})