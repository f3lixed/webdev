'use strict'
$(".preloader").fakeLoader({
    timeToHide: 1500, //Time in milliseconds for fakeLoader disappear
    zIndex:"2147483647",//Default zIndex
    spinner:"spinner6",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
    bgColor:"#333", //Hex, RGB or RGBA colors
});
/* Background parallax for header and blocks*/
function backgroundParallax() {
    var backgroundParallaxCollection = $('.background-parallax-item')
    var backgroundParallax = $('.background-parallax')
    $('.background-parallax-item').each(function() {
        var element = $(this);
        var valueArray = [];
        var valueArrayBase = $(element).map(function(i, el) {
            var newValue = $(this).attr('data-src');
            valueArray.push(newValue);
        });
        for(var i = 0; i < valueArray.length; i++) {
            element.eq(i).attr('style', 'display: none').parent(backgroundParallax).eq(i).attr('style', 'background-image: url("' + valueArray[i] + '")')
        }
    })
}
// Navigation toggle 
function navigationToggle() {
    $('.main-header-navigation-toggle').on('click', function(e) {
        $(this).toggleClass('active')
        $('.modal-wrapper').toggleClass('open')
    })
}
// Navigation Dropdown open 
function navigationDropdownOpen() {
    var dropdownLink = $('.nav-link.nav-link-toggle')
    var dropdownToggle = $('.nav-item-dropdown')
    dropdownLink.on('click', function(e) {
        e.preventDefault() 
        $(this).closest(dropdownToggle).toggleClass('active').siblings(dropdownToggle).removeClass('active');
    })
}
function contentMapMasonry() {
    $('.content-map').masonry({
        percentPosition: true,
        itemSelector: '.content-map-item'
    });
}
function discographyMasonry() {
    // Masonry
    var discographyGrid = $('.grid')
    var discographyFilterLink = $('.discography-sorting-panel-sorting > a, .gallery-sorting-panel-sorting > a')
    var discographyFilterInput = $('.discography-sorting-panel-search > input, .gallery-sorting-panel-search > input')
    var qsRegex;
    if ($('div').is(discographyGrid)) {
        var buttonFilter;
        var isotopeGrid = discographyGrid.isotope({
            percentPosition: true,
            filter: function() {
                var self = $(this);
                var buttonResult = buttonFilter ? self.is(buttonFilter) : true;
                var searchResult = qsRegex ? self.text().match( qsRegex ) : true;;
                return buttonResult && searchResult;
            },
            masonry: {
                itemSelector: '.grid-item',
            }
        })
        var discographyGridMasonry = discographyGrid.masonry({
            itemSelector: '.grid-item',
        })
        var discographyGridFilterLink = discographyFilterLink.on('click', function(e) {
            e.preventDefault()
            buttonFilter = $(this).attr('data-filter')
            isotopeGrid.isotope()
        })
        function debounce(fn, threshold) {
            var timeout;
            return function debounced() {
                if ( timeout ) {
                clearTimeout( timeout );
                }
                function delayed() {
                fn();
                timeout = null;
                }
                setTimeout( delayed, threshold || 100 );
            };
        }
        var discographyGridFilterSearch = discographyFilterInput.keyup(debounce(function() {
            qsRegex = new RegExp(discographyGridFilterSearch.val(), 'gi');
            isotopeGrid.isotope()
        }));
        var discographyGridFilterEach = discographyFilterLink.each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', function() {
                $(this).addClass('active').siblings('.active').removeClass('active');
            });
        });
    }
}
function customJplayerSC() {
    var playlist = []; // Empty playlist
    // Playlist Add
    var myPlaylist = new jPlayerPlaylist({
        jPlayer: ".jp-player",
        cssSelectorAncestor: ".jp-player-container"
    }, playlist, {
        playlistOptions: {
            enableRemoveControls: true
        },
        swfPath: "/js",
        supplied: "ogv, m4v, oga, mp3",
        smoothPlayBar: true,
        keyEnabled: true,
    });
    $('.playlist-item').each(function() {
        var title = $(this).attr('data-title');
        var artist = $(this).attr('data-artist');
        var mp3 = $(this).attr('data-mp3');
        var sc = $(this).attr('data-sc');
        myPlaylist.add({
            title: title,
            artist: artist,
            mp3: mp3,
            sc: sc, 
        });
    });
    $('.jp-player').jPlayer();
    $('.playlist').addClass('hidden'); 
}
function priceRangeSlider() {
    if ($('div').is('.sidebar-price')) {
        var priceSliderCounter = $('.sidebar-item-form-range > span');
        var priceSliderInput = $('.sidebar-item-form-range > input');
        priceSliderInput.slider({
            range: true,
            min: 0,
            max: 1500,
            values: [ 0, 1500 ],
            tooltip: 'hide',
        }).on('slide', function(price) {
            priceSliderCounter.text('$' + price.value[0] + ' - ' + '$' + price.value[1])
        }).on('slideStop', function(price) {
            priceSliderCounter.text('$' + price.value[0] + ' - ' + '$' + price.value[1])
        })
        priceSliderCounter.text('$' + priceSliderInput.slider('getValue')[0] + ' - ' + '$' + priceSliderInput.slider('getValue')[1]) 
    }
};
function googleMapsInit() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 17,
        scaleControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(54.857917, 83.111232), // Change This position and see down 

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('google-map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it (see down)
    var marker = new google.maps.Marker({
        icon: 'images/map-icon.svg',
        position: new google.maps.LatLng(54.857917, 83.111232), // And change this position
        map: map,
        title: 'My Wokring Center',
    });
}
// Shop Item Links 
function shopItem() {
    var shopItemLinkList = $('.shop-item-block-content-option > li > a');
    shopItemLinkList.on('click', function(e) {
        e.preventDefault();
        $(this).parent('li').addClass('active').siblings('.active').removeClass('active');
    })
}
// Shop Item Slider
function shopItemSlider() {
    var shopSlider = new Swiper('.shop-item-block-image-slider', {
        nextButton: '.shop-item-block-image-slider .swiper-button-next',
        prevButton: '.shop-item-block-image-slider .swiper-button-prev',
        slidesPerView: 2,
    });
    var shopSliderItem = $('.shop-item-block-image-slider-item');
    var shopSlider = $('.shop-item-block-image-slider');
    function shopItemimageHeading() {
        var shopItemBlockImageImg = $('.shop-item-block-image > img')
        var imgSrc = $('.shop-item-block-image-slider-item.active > img').attr('src');
        shopItemBlockImageImg.attr('src', imgSrc);
    }
    shopItemimageHeading();
    shopSliderItem.on('click', function(e) {
        $(this).closest(shopSlider).find('.shop-item-block-image-slider-item.active').removeClass('active');
        $(this).addClass('active');
        shopItemimageHeading();
    });
}
// Blog Grid
function blogGrid() {
    var blogBlockContainer = $('.blog-block-masonry')
    blogBlockContainer.masonry({
        itemSelector: '.blog-item-container',
        percentPosition: true,
    });
}
// Contact Validation 
function contactFormValidation() {
    var contactForm = $('.contact-block form')
    var contactFormButton = $('.contact-block form button')
    contactForm.validate({
        rules: {
            conemail: {
                required: true,
                email: true,
            },
            conname: {
                required: true,
            },
            context: {
                required: true,
            },
            consubject: {
                required: true,
            },
        },
        messages: {
            conemail: {
                required: 'Please enter your Email.',
                email: 'This Email is not valid', 
            },
            conname: {
                required: 'Please enter your Name.',
            },
            context: {
                required: 'Please enter your Message.',
            },
            consubject: {
                required: 'Please enter Subject of this message.',
            },
        },
        submitHandler: function(form) {
            $.ajax({
                url: 'php/contact-sending.php',
                type: 'POST',
                data: $(form).serialize(),
                success: function(response) {
                    if(response != 'success') {
                        contactFormButton.addClass('error').text('Error')
                        setTimeout(function() {
                            contactFormButton.removeClass('error').text('Send')
                        }, 3000)
                    }
                    else {
                        contactFormButton.addClass('valid').text('Success')
                        setTimeout(function() {
                            contactFormButton.removeClass('valid').text('Send')
                        }, 3000)
                    }
                },
                error: function(response) {
                    contactFormButton.addClass('error').text('Error')
                    setTimeout(function() {
                        contactFormButton.removeClass('error').text('Send')
                    }, 3000)
                }         
            });
        }
    })
}
// Comment Validation 
function commentFormValidation() {
    var commentForm = $('.comment-form');
    var commentFormButton = $('.comment-block form button')
    commentForm.validate({
        rules: {
            Commail: {
                required: true,
                email: true,
            },
            Comname: {
                required: true,
            },
            Comtext: {
                required: true,
            },
        },
        messages: {
            Commail: {
                required: 'Please enter your Email.',
                email: 'This Email is not valid', 
            },
            Comname: {
                required: 'Please enter your Name.',
            },
            Comtext: {
                required: 'Please enter your Message.',
            },
        },
        submitHandler: function(form) {
            $.ajax({
                url: '/rest/',
                type: 'POST',
                data: $(form).serialize(),
                success: function(response) {
                    if(response != 'success') {
                        commentFormButton.addClass('error').text('Error')
                        setTimeout(function() {
                            commentFormButton.removeClass('error').text('Send')
                        }, 3000)
                    }
                    else {
                        commentFormButton.addClass('valid').text('Success')
                        setTimeout(function() {
                            commentFormButton.removeClass('valid').text('Send')
                        }, 3000)
                    }
                },
                error: function(response) {
                    commentFormButton.addClass('error').text('Error')
                    setTimeout(function() {
                        commentFormButton.removeClass('error').text('Send')
                    }, 3000)
                }         
            });
        }
    })
}

// Gallery Item 
function galleryItem() {
    var galleryItem = $('.gallery-item-gallery-item')
    var galleryItemGallery = $('.gallery-item-gallery')
    var galleryItemContainer = $('.gallery-item-image')
    function galleryItemChange() {
        if (galleryItem.hasClass('active')) {
            galleryItemContainer.attr('style', 'background-image: url("' + $('.gallery-item-gallery-item.active > img').attr('data-src') + '"');
        } 
    }
    galleryItem.on( 'click', function() {
        galleryItemGallery.find('.gallery-item-gallery-item.active').removeClass('active');
        $(this).addClass('active');
        galleryItemChange();
    });
    galleryItemChange();
}

$(document).ready(function() {
    'use strict'
    // images PolyFill 
    objectFitImages();
    // Video Parallax 
    if ($('.content-header.content-header-home.content-header-home-video').length) {
        var pageContent = $('.content-header-content-home');
        var pageVideo = $('.content-header-home-video video');
        var pageVideoVol = $('.content-header-content-video-volume');
        var pageVideoVolIcon = $('.content-header-content-video-volume i');
        $(window).on('load scroll', function () {
            var scrolled = $(this).scrollTop();
            pageContent.css({
                'transform': 'translate3d(0, ' + -(scrolled * 0.4) + 'px, 0)', // parallax (20% scroll rate)
                'opacity': 1 - scrolled / 800 // fade out at 800px from top
            });
            pageVideo.css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
        });
        pageVideoVol.on('click', function (){
            if(pageVideo.prop('muted')) {
                pageVideo.prop('muted', false);
                pageVideoVolIcon.removeClass('pe-7s-mute').addClass('pe-7s-volume')
            } 
            else {
                pageVideo.prop('muted', true);
                pageVideoVolIcon.removeClass('pe-7s-volume').addClass('pe-7s-mute')
            }
        })
    }
    // Navigation
    navigationToggle();
    navigationDropdownOpen()
    // Content map 
    contentMapMasonry();
    // Discography
    discographyMasonry();
    // jPlayer 
    customJplayerSC();
    // Shop Range Slider 
    priceRangeSlider();
    // Shop Slider
    shopItemSlider();
    // Shop Item Links  
    shopItem();
    // Blog Grid 
    blogGrid();
    // Form Validation 
    contactFormValidation(); 
    commentFormValidation();
    // Gallery Item 
    galleryItem();
    // Smooth Scroll 
    $('html').easeScroll({
        frameRate: 60,
        animationTime: 1500,
        stepSize: 120,
        pulseAlgorithm: !0,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: !0,
        arrowScroll: 50
    });
    // Parallax Background 
    if ($('div').is('.background-parallax')) {
        $(window).stellar();
        backgroundParallax();
    }
    // MailChimp
// Newsletter
if ($('div').is('.main-footer-subscribe ')) {
    function mailChimpIntegration() {
        $('.main-footer-subscribe-form').formchimp();
    }
    mailChimpIntegration();
}
});
// Google Maps Init 
if ($('div').is($('#google-map'))) {
    google.maps.event.addDomListener(window, 'load', googleMapsInit);
}	
/* Particles JS */
if ($('div').is('.content-header-particles.content-header-particles-dark-background')) {
    particlesJS("particlesJS", {
            "particles": {
                "number": {
                    "value":80, "density": {
                        "enable": true, "value_area": 800
                    }
                }
                , "color": {
                    "value": "#ffffff"
                }
                , "shape": {
                    "type":"circle", "stroke": {
                        "width": 0, "color": "#000000"
                    }
                    , "polygon": {
                        "nb_sides": 5
                    }
                }
                , "opacity": {
                    "value":0.5, "random":false, "anim": {
                        "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
                    }
                }
                , "size": {
                    "value":3, "random":true, "anim": {
                        "enable": false, "speed": 40, "size_min": 0.1, "sync": false
                    }
                }
                , "line_linked": {
                    "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
                }
                , "move": {
                    "enable":true, "speed":6, "direction":"none", "random":false, "straight":false, "out_mode":"out", "bounce":false, "attract": {
                        "enable": false, "rotateX": 600, "rotateY": 1200
                    }
                }
            }
            , "interactivity": {
                "detect_on":"canvas", "events": {
                    "onhover": {
                        "enable": false, "mode": "repulse"
                    }
                    , "onclick": {
                        "enable": true, "mode": "remove"
                    }
                    , "resize":true
                }
                , "modes": {
                    "grab": {
                        "distance":400, "line_linked": {
                            "opacity": 1
                        }
                    }
                    , "bubble": {
                        "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
                    }
                    , "repulse": {
                        "distance": 200, "duration": 0.4
                    }
                    , "push": {
                        "particles_nb": 4
                    }
                    , "remove": {
                        "particles_nb": 2
                    }
                }
            }
            , "retina_detect":true
        }
    );
}
else if ($('div').is('.content-header-particles')) {
    particlesJS("particlesJS", {
        "particles": {
            "number": {
                "value":80, "density": {
                    "enable": true, "value_area": 800
                }
            }
            , "color": {
                "value": "#ffffff"
            }
            , "shape": {
                "type":"circle", "stroke": {
                    "width": 0, "color": "#000000"
                }
                , "polygon": {
                    "nb_sides": 5
                }
                , "image": {
                    "src": "img/github.svg", "width": 100, "height": 100
                }
            }
            , "opacity": {
                "value":0.5, "random":false, "anim": {
                    "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
                }
            }
            , "size": {
                "value":3, "random":true, "anim": {
                    "enable": false, "speed": 40, "size_min": 0.1, "sync": false
                }
            }
            , "line_linked": {
                "enable": true, "distance": 150, "color": "#000000", "opacity": 0.4, "width": 1
            }
            , "move": {
                "enable":true, "speed":6, "direction":"none", "random":false, "straight":false, "out_mode":"out", "bounce":false, "attract": {
                    "enable": false, "rotateX": 600, "rotateY": 1200
                }
            }
        }
        , "interactivity": {
            "detect_on":"canvas", "events": {
                "onhover": {
                    "enable": false, "mode": "repulse"
                }
                , "onclick": {
                    "enable": false, "mode": "push"
                }
                , "resize":true
            }
            , "modes": {
                "grab": {
                    "distance":400, "line_linked": {
                        "opacity": 1
                    }
                }
                , "bubble": {
                    "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
                }
                , "repulse": {
                    "distance": 200, "duration": 0.4
                }
                , "push": {
                    "particles_nb": 4
                }
                , "remove": {
                    "particles_nb": 2
                }
            }
        }
        , "retina_detect":true
        }
    )
}