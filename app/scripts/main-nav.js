    /*------------------------------------*\
        #Top Bar Slide in/out 
    \*------------------------------------*/

    // Checks to see if there is a '[data-action="toggle-top-bar"]' to hide/show
    // This prevents it from activating on small devices. 
    if($('[data-action="toggle-top-bar"]').length > 0) {

        (function($){

            var prevScroll = 0;
            var currentScroll; 
            var navBar = $('[data-action="toggle-top-bar"]');
            var navBarHeight = navBar.height(); 
            var didScroll = false; 
            var theWindow = $(window);
            var offSet = 200; 

            $(window).scroll(function() {
                didScroll = true;
            });
             
            setInterval(function() {
                if ( didScroll) {

                    didScroll = false;

                    currentScroll = theWindow.scrollTop();

                    if (currentScroll < navBarHeight) {

                        navBar.removeClass('is-alt'); 
                    }

                    //Shows Navigation Bar when user starts scrolling up 
                    if( currentScroll < prevScroll ) {
                        navBar.removeClass('is-hidden'); 
                        navBar.addClass('is-fixed');
                    }

                    if(currentScroll > prevScroll) {
                        navBar.removeClass('is-fixed'); 
                        navBar.addClass('is-hidden');
                    }

                    if(navBar.hasClass('is-fixed') && currentScroll > navBarHeight) {

                            navBar.addClass('is-alt');

                       
                    }

                   prevScroll = currentScroll;

                }

            }, 300);

        })(jQuery);
    }
    
 
 
 
 
 
 /*------------------------------------*\
     #Small Nav Functionality 
 \*------------------------------------*/
 
 
 function toggleMainNavSmall() {
 
     $('[data-ui-component="small-navigation"]').toggleClass('is-showing'); 
 }
 
 
 $('[data-action="toggle-main-nav"]').on('click', function() {
 	
     toggleMainNavSmall();
 
 });
 
 
 $('[data-ui-component="small-navigation"] a').on('click', function() {
 
     toggleMainNavSmall();
 
 });
 
 $('[data-ui-component="small-navigation"] button').on('click', function() {
 
     toggleMainNavSmall();
 
 });
 
 

