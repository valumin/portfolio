$(document).ready(function () {
    $('#lazyloader').hide();
    
    // Load twentytwent slider
    $(function () {
        $("#twentytwenty").twentytwenty({
            no_overlay: true
        });
    });

    // Portfolio section
    $('#justified').animate({
        opacity: 0
    }, 500, function () {
        $("#justified").justifiedGallery({
            rowHeight: 230,
            maxRowHeight: 400,
            lastRow: 'nojustify',
            captions: false,
            margins: 30,
            border: 0,
            cssAnimation: false,
            imagesAnimationDuration: 000,
            filter: 'a.portfolio-item'
        })
    });

    $('#portfolio-filter > .filter-option').on('click', function (e) {
        $currect_category = $(this).data('category');
        if ($currect_category == "showall") {
            $('#justified').animate({
                opacity: 0
            }, 500, function () {
                $("#justified").justifiedGallery({
                    rowHeight: 230,
                    maxRowHeight: 400,
                    lastRow: 'nojustify',
                    captions: false,
                    margins: 30,
                    border: 0,
                    cssAnimation: false,
                    imagesAnimationDuration: 000,
                    filter: 'a.portfolio-item'
                })
            });
        } else {
            $('#justified').animate({
                opacity: 0
            }, 500, function () {
                $("#justified").justifiedGallery({
                    rowHeight: 230,
                    maxRowHeight: 400,
                    lastRow: 'nojustify',
                    captions: false,
                    margins: 30,
                    border: 0,
                    cssAnimation: false,
                    imagesAnimationDuration: 000,
                    filter: 'a[data-category="' + $currect_category + '"'
                })
            });
        }
    })

    $("#justified").justifiedGallery().on('jg.complete', function () {
        $('#justified').animate({
            opacity: 1
        }, 500);
    })


    // Navigation menu tracker
    $('#desktop-menu').singlePageNav({
        offset: $('#desktop-menu').outerHeight(),
        filter: ':not(.external)',
        updateHash: true,
        currentClass: 'active'
    });


    // Navigation menu background color change
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 120) {
            $('nav').css("background", "rgba(255,255,255,1)");
            $('nav > ul').css("padding", "25px 0px 25px 0px");
        } else {
            if ($(window).innerWidth() > 900) {
                $('nav').css("background", "rgba(0,0,0,0.0)");
                $('nav > ul').css("padding", "40px 0px 40px 0px");
            }
        }
        
    })
    
    // Hamburger menu
    $('#hamburger-menu').on('click', function(){
        $('#mobile-menu').toggleClass("hidden");
    })
    
    // Initiate WoW JS
    new WOW().init();


})