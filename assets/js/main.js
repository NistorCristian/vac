jQuery(document).ready(function ($) {
    
    var swyperFeatures = new Swiper ('.features', {
        simulateTouch: false,
        pagination: {
            el: '.features .swiper-pagination',
            type: 'bullets',
        },
    })

    var swiperTable = new Swiper ('.table-holder', {
        simulateTouch: false,
        pagination: {
            el: '.table-holder .swiper-pagination',
            type: 'bullets',
        },
    })

});