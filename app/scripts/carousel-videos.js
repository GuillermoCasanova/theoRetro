
 $('[data-ui-component="carousel-featured-news"]').slick({
    autoplay: false,
    arrows: true,
    draggable: false,  
    dots: false, 
    lazyLoad: 'progressive', 
    speed:  1000, 
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 1,
    responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

    ]
});

//Removes all text from slick's next and previous buttons
// $('[data-ui-component="carousel-featured-news"]').find('button').text("");

// Removes text fro slick-next and slick-rev classes
$('.slick-next').text('');

$('.slick-prev').text('');