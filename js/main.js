$(function(){
    "use strict";

    // Cover Slider 

    $('.slider , .carousel-item').height($(window).height());


    // Animate Control prev and next

    $('.slider').hover(function(){
        $('.slider .carousel-control-next').animate({
              'right': '4%'
        },200);

    });

    $('.slider').hover(function(){
        $('.slider .carousel-control-prev').animate({
              'left': '4%'
        },200);

    });

    $('.slider').mouseleave(function(){
        $('.slider .carousel-control-next').animate({
              'right': '1%'
        },200);

    });

    $('.slider').mouseleave(function(){
        $('.slider .carousel-control-prev').animate({
              'left': '1%'
        },200);

    });

    
      
     // Toggle Question

     $('.faq-question .question .head-question').on('click' , function () {

        $(this).next('.text-question').slideToggle();

        $(this).parent().siblings().find('.text-question').css('display' , 'none');


        $(this).css('borderRadius' ,'5px 5px 0 0');

        $(this).parent().siblings().find('.head-question').css('borderRadius' ,'5px');

        $(this).addClass('active').parent().siblings().find('.head-question').removeClass('active');

        $(this).find('i').toggleClass('fa-angle-right fa-angle-down').parents('.question').siblings().find('.head-question').find('i').addClass('fa-angle-right');

        


     });


     // Tabs Question

     $('.faq-question .tabs-question ul li').on('click' , function () {

        $(this).addClass('active').siblings('li').removeClass('active');

        $('.all-tabs div').hide();

        $($(this).data('class')).fadeIn();
     });
    

     // Trigger Mixitup
     $('#container').mixItUp();


     // Adjust Shuffle Links
 
     $('.shuffle li').click(function(){
         $(this).addClass('selected').siblings().removeClass('selected');
     });



     
   

    // Scroll To Top

    var scrollButton = $('#scroll-top');

    $(window).scroll(function () {

        $(this).scrollTop() >= 100 ? scrollButton.show() : scrollButton.hide();


        $(this).scrollTop() >= 350 ? $('.navbar').css('background' , '#000') : $('.navbar').css('background' , 'rgba(0, 0, 0, .6)');

    });

    scrollButton.click(function () {

        $('html,body').animate({scrollTop:0} , 600);
    });


     // Smooth Scroll To Div

     $('.navbar-nav li a').click(function(){

        $('html , body').animate({

       scrollTop: $($(this).data('value')).offset().top - 70
       
        },1000);



    });





     

    

    
});