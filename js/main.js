function loader() {
    var loader = $('#loader');
    var content = $('#content');

    function displayContent() {
        loader.removeClass('visible');
        content.addClass('ready');
    }

    displayContent()
}


$(window).load(function () {
    loader();
    $('#video').get(0).play();
});

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
    $('.select').select2({
        placeholder: 'Выбор услуг',
        closeOnSelect: false
    })
});


$(function () {
    var play = $('.fa-play-circle');
    var pause = $('.fa-pause-circle');
    var video = $('#video');
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
    var center = {lat: 50.433992, lng: 30.622570};
    var myLatLng = {lat: 50.433992, lng: 30.622570};
    var zoom = 14.5;
    // Styles a map in night mode.

    $(window).resize(function () {
        if($(window).width()<560) {
            center = {lat: 50.428697, lng: 30.528755};
            zoom = 14;
        } else {
            center = {lat: 50.439900, lng: 30.611170};
            zoom = 14.5;
        }

        var map = new google.maps.Map(document.getElementById('map'), {
            center: center,
            zoom: zoom,
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
    }).trigger('resize');
}


function anchorLinks(selector) {
    $(document).on('click', selector, function (event) {
        event.preventDefault();
        deselectAll()
        $(this).addClass('current');

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 80
        }, 500);
    });
}

function deselectAll() {
    $('.nav-item').each(function () {
        $(this).removeClass('current');
    })
}

anchorLinks('a[href^="#header"]');
anchorLinks('a[href^="#servicesAnchor"]');
anchorLinks('a[href^="#worksAnchor"]');
anchorLinks('a[href^="#priceAnchor"]');
anchorLinks('a[href^="#orderAnchor"]');

$(window).scroll(function () {
    if ($('.header').visible(true)) {
        deselectAll();
        $('a[href^="#header"]').addClass('current');
    }

    if ($('.services').visible(true)) {
        deselectAll();
        $('a[href^="#servicesAnchor"]').addClass('current');
    }

    if($('.works').visible(true)) {
        deselectAll();
        $('a[href^="#worksAnchor"]').addClass('current');
    }

    if($('.work-statistic').visible(true)) {
        deselectAll();
        $('a[href^="#priceAnchor"]').addClass('current');
    }

    if($('.b-form').visible(true)) {
        deselectAll();
        $('a[href^="#orderAnchor"]').addClass('current');
    }
})

//form validation

var forms = document.getElementsByTagName('form');
for(var i = 0; i < forms.length; i++){
    forms[i].addEventListener('submit', validator);
}

var rules = {
    required: function(el){
        if(el.value != ''){
            return true;
        }
        return false;
    },
    email: function(el){
        var reg = /^\w{1,}@\w{1,}\.\w{1,}$/;
        return reg.test(el.value);
    },
    phone: function (el) {
        if(el.value.length < 18) {
            return false
        } else {
           return true
        }
    },
    nonrequired: function (el) {
        if(el.value == '') {
            return true
        }
    }

};

function showErrors (arr) {
    console.log(arr);
}

function validator (e) {
    e.preventDefault();
    var errors = [];
    var inputs = [];
    var inputsAll = this.elements;

    //html collection to array
    for (var q = 0; q < inputsAll.length; q++) {
        inputs.push(inputsAll[q])
    }
    //remove select2 hidden input
    for (var a = 0; a < inputs.length; a++) {
        if (inputs[a].className == 'select2-search__field') {
            inputs.splice(3,4)
        }
    }

    for(var i = 0; i < inputs.length; i++) {
        if (inputs[i].tagName != 'BUTTON') {
            var rulesList = inputs[i].dataset.rule;
            rulesList = rulesList.split(' ');
            for(var j = 0; j < rulesList.length; j++){
                if (rulesList[j] in rules) {
                    if(!rules[rulesList[j]](inputs[i])){
                        errors.push({
                            name: inputs[i].name,
                            error: rulesList[j],
                            value: inputs[i].value
                        });
                        this[i].classList.add('error')
                    } else {
                        this[i].classList.remove('error')
                    }
                }
            }
        }
    }
    if (errors.length > 0) {
        e.preventDefault();
        showErrors(errors);
    } else {
        sendConfirm()
        $('form').each(function(){
            $(this).trigger('reset');
            $('.shell').removeClass('isActive')
        });

    }
}

function sendConfirm() {
    $.magnificPopup.open({
        items: {
            src: $('#sendConfirm').html()
        },
        type: 'inline',
        preloader: false,
        modal: true,
        removalDelay: 300,
        mainClass: 'mfp-no-margins mfp-with-zoom'
    })

}

function isPhone(selector) {
    $(document).on('input', selector, function () {
        $(this).parent().addClass('isActive');
    });

    $(selector).focusout(function () {
        if($(this).val().length <2) {
            $(this).val(' ').parent().removeClass('isActive');
        }
    });
}

isPhone('#tel1');
isPhone('#tel2');
isPhone('#tel3');
isPhone('#tel4');

$('#mainForm').magnificPopup({
    type: 'inline',
    preloader: false,
    modal: true,
    removalDelay: 300,
    mainClass: 'mfp-no-margins mfp-with-zoom'
});

$(document).on('click', '#popup-close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
});

//file adding

function addFile() {
    var input = document.getElementsByClassName('fileInput');
    for (var j = 0; j < input.length; j++) {
        input[j].addEventListener('change', function() {
            for (var i = 0; i < this.files.length; i ++) {
                // console.log(this.files[i]);
                this.previousElementSibling.innerText = this.files[i].name;
            }
        })
    }
}

addFile();

