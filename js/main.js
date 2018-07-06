var config = {};

$(function() {

    var $body = $(document.body),
        $window = $(window);

    // Background
    var canvas = document.createElement('canvas');

    backgroundEnabled = canvas.getContext && canvas.getContext('2d') && $('#header').css('display') != 'none';

    if (backgroundEnabled) {
        config.background = {
            enabled: true,

            RENDER: {
                // Takes all the information in a Scene and renders it to a context.
                // A Scene sits at the very top of the stack. It simply manages arrays of Mesh & Light objects.
                renderer: 'canvas'
            },

            MESH: {
                ambient: '#555555', //
                diffuse: '#ffffff', //
                width: 1.2, // Triangle Width
                height: 1.2, // Triangle Height
                depth: 10, // Transparency of the triangles
                segments: 16, // Number of triangles to display in 1 row
                slices: 8, // Number of triangles to display in 1 column
                xRange: 0.8, // Wideness of the triangles in X Position
                yRange: 0.1, // Wideness of the triangles in Y Position
                zRange: 1.0, // Wideness of the triangles in Z Position
                speed: 0.002 // Speed of the moving traingles
            },

            LIGHT: {
                autopilot: false,
                ambient: '#000000',
                diffuse: '#414750',
                count: 2, // Contrast
                zOffset: 39,

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

$(function() {

    var $body = $(document.body),
        $window = $(window);

    // Background
    var canvas = document.createElement('canvas');

    backgroundEnabled = canvas.getContext && canvas.getContext('2d') && $('#workSt').css('display') != 'none';

    if (backgroundEnabled) {
        config.background = {
            enabled: true,

            RENDER: {
                // Takes all the information in a Scene and renders it to a context.
                // A Scene sits at the very top of the stack. It simply manages arrays of Mesh & Light objects.
                renderer: 'canvas'
            },

            MESH: {
                ambient: '#555555', //
                diffuse: '#ffffff', //
                width: 1.2, // Triangle Width
                height: 1.2, // Triangle Height
                depth: 10, // Transparency of the triangles
                segments: 16, // Number of triangles to display in 1 row
                slices: 8, // Number of triangles to display in 1 column
                xRange: 0.8, // Wideness of the triangles in X Position
                yRange: 0.1, // Wideness of the triangles in Y Position
                zRange: 1.0, // Wideness of the triangles in Z Position
                speed: 0.002 // Speed of the moving traingles
            },

            LIGHT: {
                autopilot: false,
                ambient: '#000000',
                diffuse: '#414750',
                count: 2, // Contrast
                zOffset: 39,

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

        initBackground2();
    }

})

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
})

$(function () {
    var all = $('.team-wrapper').find('.slick-track').find('.team-item').length/4;
    var allContainer = $('.team-slide-counter--all');
    allContainer.html(Math.ceil(all));
})