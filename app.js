var main = function() {

        $('#Carousel-General').carousel({
                interval: 4000
        });

 $('.button-0').addClass('active-button-0');

         $('#Carousel-General').on('slide.bs.carousel', function (e) {
                 
                 var id = $('.item.active').data('slide-number');
                $('.button-'+id).removeClass('active-button-'+id);


        });

        $('#Carousel-General').on('slid.bs.carousel', function (e) {
                 
                 var id = $('.item.active').data('slide-number');
                $('.button-'+id).addClass('active-button-'+id);


        });




$('.project-link').click(function(){

                    var id = $(this).data('project-number');

                    for(var i = 0; i<= 4;i++){
                        if(i != id){
                             $('.projects-'+i).parent().toggleClass("float-right");
                        }
                    }

                    if(id == $('.selected-proj-text').parent().data('project-number')){

                    $('.selected-proj-button').toggleClass('col-md-3');
                    $('.selected-proj-button').toggleClass('col-md-6');
                    $('.selected-proj-button').removeClass('selected-proj-button');

                    $('.selected-proj-text').toggleClass('proj-classification-hide')
                    $('.selected-proj-text').removeClass('selected-proj-text');
                    

                    } else {

                    $('.selected-proj-button').toggleClass('col-md-3');
                    $('.selected-proj-button').toggleClass('col-md-6');
                    $('.selected-proj-button').removeClass('selected-proj-button');

                    $('.selected-proj-text').toggleClass('proj-classification-hide')
                    $('.selected-proj-text').removeClass('selected-proj-text');


                    $('.project-'+id).parent().toggleClass('selected-proj-button');
                    $('.project-'+id).parent().toggleClass('col-md-3');
                    $('.project-'+id).parent().toggleClass('col-md-6');
                   
                    $('.proj-text-'+id).toggleClass('proj-classification-hide');
                    $('.proj-text-'+id).toggleClass('selected-proj-text');
                    
                    }


});


$(window).load( function(){

    /* Check the location of each desired element */
    $('.scroll-up').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){

                                $(this).addClass('animated fadeInUp');

        }

    }); 

});


$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.scroll-up').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){

                                $(this).addClass('animated fadeInUp');

        }

    }); 

});

$('.soft-proj-dropdown').click(function(){

         $(".classification-hide").toggleClass('proj-classification-hide');

});

$('.foundation-year-button').click(function(){

         $(".foundation-year").toggleClass('proj-classification-hide');

});

$('.first-year-button').click(function(){

         $(".first-year").toggleClass('proj-classification-hide');

});

$('.second-year-button').click(function(){

         $(".second-year").toggleClass('proj-classification-hide');

});

$('.third-year-button').click(function(){

         $(".third-year").toggleClass('proj-classification-hide');

});
$('.forth-year-button').click(function(){

         $(".forth-year").toggleClass('proj-classification-hide');

});




        
};

$(document).ready(main);