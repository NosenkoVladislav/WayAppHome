var config = {};

$(function() {
    // Background
    var WEBGL = 'webgl';
    var CANVAS = 'canvas';
    var SVG = 'svg';

    var canvas = document.createElement('canvas');

    backgroundEnabled = canvas.getContext && canvas.getContext('2d') && $('#header').css('display') != 'none';

    if (backgroundEnabled) {
        config.background = {
            enabled: true,

            RENDER: {
                // Takes all the information in a Scene and renders it to a context.
                // A Scene sits at the very top of the stack. It simply manages arrays of Mesh & Light objects.
                renderer: WEBGL
            },

            MESH: {
                ambient: '#555555', //
                diffuse: '#ffffff', //
                width: 1.2, // Triangle Width
                height: 1.2, // Triangle Height
                depth: 5, // Transparency of the triangles
                segments: 16, // Number of triangles to display in 1 row
                slices: 8, // Number of triangles to display in 1 column
                xRange: 0.8, // Wideness of the triangles in X Position
                yRange: 0.1, // Wideness of the triangles in Y Position
                zRange: 1.0, // Wideness of the triangles in Z Position
                speed: 0.001 // Speed of the moving traingles
            },

            LIGHT: {
                autopilot: true,
                ambient: '#0b1220',
                diffuse: '#131c2c',
                count: 2, // Contrast
                zOffset: 100,

                xyScalar: 1,
                speed: 0.001,
                gravity: 1200,
                dampening: 0.15,
                minLimit: 8,
                maxLimit: null,
                minDistance: 20,
                maxDistance: 400,
                draw: false
            }
        }
        initBackground();
    }
});


$(function () {
    $('.team-wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        infinite: false,
        appendArrows: '.team-control',
        prevArrow: '<div class="team-control-elem team-control-elem--prev"></div>',
        nextArrow: '<div class="team-control-elem team-control-elem--next"></div>'
    });
    $('.team-wrapper-mob').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        appendArrows: '.team-control',
        prevArrow: '<div class="team-control-elem team-control-elem--prev"></div>',
        nextArrow: '<div class="team-control-elem team-control-elem--next"></div>'
    });
})

$(window).resize(function () {
    if($(window).width() < 481) {
        $('.team-wrapper').fadeOut(0);
        $('.team-wrapper-mob').fadeIn(0);
    } else {
        $('.team-wrapper').fadeIn(0);
        $('.team-wrapper-mob').fadeOut(0);
    }
}).trigger('resize');

$(function () {
    var all = $('.team-wrapper').find('.slick-track').find('.team-item').length/4;
    var allContainer = $('.team-slide-counter--all');
    allContainer.html(Math.ceil(all));
})

$(function () {
    var container = $('#bFromSel');
    container.select2({
        placeholder: 'Выбор услуг',
        closeOnSelect: false
    });

    var render = $('.select2-selection--multiple');
    container.on("select2:selecting", function(e) {
        console.log(container.select2('val'))
    });
})


$(function () {
    var play = $('.fa-play-circle');
    var pause = $('.fa-pause-circle');
    var video = $('#video')
    $('.player-control').click(function (event) {
        var target = $(event.target)
        if(target.hasClass('fa-play-circle')) {
            video.trigger('play')
            play.fadeOut(400);
            pause.fadeIn(500);
        }
        if(target.hasClass('fa-pause-circle')) {
            video.trigger('pause')
            play.fadeIn(400);
            pause.fadeOut(500);
        }
    })
})


function initMap() {
    var myLatLng = {lat: 50.421926, lng: 30.533896};
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.428697, lng: 30.520755},
        zoom: 15,
        disableDefaultUI: true,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#181818"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1b1b1b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8a8a8a"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#373737"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3c3c3c"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4e4e4e"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3d3d3d"
                    }
                ]
            }
        ]
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: 'assets/images/map.png'
    });
}