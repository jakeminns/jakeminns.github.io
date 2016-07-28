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

                        $("project-overlay").toggleClass('project-link-clicked')

        });


                $('.project-link').click(function(){

            var id = $(this).data('project-number');
                $('.overlay-project-'+id).addClass('overlay-show');

                $('.overlay-exit-button').click(function(){
                $('.overlay-project-'+id).removeClass('overlay-show');

                });

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


        
};

$(document).ready(main);