function loader() {
    var loader = $('#loader');
    var content = $('#content');

    function displayContent() {
        loader.removeClass('visible');
        content.addClass('ready');
    }

    displayContent()
}

// var config = {};
//
// $(function() {
//     // Background
//     var WEBGL = 'webgl';
//     var CANVAS = 'canvas';
//     var SVG = 'svg';
//
//     var canvas = document.createElement('canvas');
//
//     backgroundEnabled = canvas.getContext && canvas.getContext('2d') && $('#header').css('display') != 'none';
//
//     if (backgroundEnabled) {
//         config.background = {
//             enabled: true,
//
//             RENDER: {
//                 // Takes all the information in a Scene and renders it to a context.
//                 // A Scene sits at the very top of the stack. It simply manages arrays of Mesh & Light objects.
//                 renderer: WEBGL
//             },
//
//             MESH: {
//                 ambient: '#555555', //
//                 diffuse: '#ffffff', //
//                 width: 1.2, // Triangle Width
//                 height: 1.2, // Triangle Height
//                 depth: 5, // Transparency of the triangles
//                 segments: 16, // Number of triangles to display in 1 row
//                 slices: 8, // Number of triangles to display in 1 column
//                 xRange: 0.8, // Wideness of the triangles in X Position
//                 yRange: 0.1, // Wideness of the triangles in Y Position
//                 zRange: 1.0, // Wideness of the triangles in Z Position
//                 speed: 0.001 // Speed of the moving traingles
//             },
//
//             LIGHT: {
//                 autopilot: true,
//                 ambient: '#0b1220',
//                 diffuse: '#131c2c',
//                 count: 2, // Contrast
//                 zOffset: 100,
//
//                 xyScalar: 1,
//                 speed: 0.001,
//                 gravity: 1200,
//                 dampening: 0.15,
//                 minLimit: 8,
//                 maxLimit: null,
//                 minDistance: 20,
//                 maxDistance: 400,
//                 draw: false
//             }
//         }
//         initBackground();
//     }
// });


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

function mainForm() {
    $.magnificPopup.open({
        items: {
            src: $('#toMainForm').html()
        },
        type: 'inline',
        preloader: false,
        modal: true,
        removalDelay: 300,
        mainClass: 'mfp-no-margins mfp-with-zoom'
    })
}

// $('.btn').click(function () {
//     mainForm();
//     isPhone('#tel4');
//
//
//     var forms = document.getElementsByTagName('form');
//     for(var i = 0; i < forms.length; i++){
//         forms[i].addEventListener('submit', validator);
//     }
//
//     var rules = {
//         required: function(el){
//             if(el.value != ''){
//                 return true;
//             }
//             return false;
//         },
//         email: function(el){
//             var reg = /^\w{1,}@\w{1,}\.\w{1,}$/;
//             return reg.test(el.value);
//         },
//         phone: function (el) {
//             if(el.value.length < 18) {
//                 return false
//             } else {
//                 return true
//             }
//         },
//         nonrequired: function (el) {
//             if(el.value == '') {
//                 return true
//             }
//         }
//
//     };
// })

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

// new fullpage('#content', {
//     autoScrolling:true,
//     scrollHorizontally: true,
//     css3: true,
//     scrollingSpeed: 600,
//     onLeave: function(){
//         $('.nav-item').each(function () {
//             $(this).removeClass('current');
//         })
//
//     },
//     afterLoad: function(anchor, index){
//         $('.nav-item').each(function () {
//             // console.log($(this)[0].hash);
//             if($(this)[0].hash === '#' +index.anchor) {
//                 console.log('you are here');
//             }
//         })
//         console.log(index.anchor);
//     }
// });

function galleryInit() {
    $('.gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
}
$(document).ready(function () {
    galleryInit();
})

function reinitGallery() {
    $('.gallery').slick('unslick');
    $('.gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
}

$('.arrow').click(function () {
    if($(this).hasClass('to-right')) {
        jobToRight()
    } else {
        jobToLeft()
    }
})

function jobToRight() {
    var target = $('.current');
    var newTarget = target.next();

    if(newTarget[0] === undefined) {
        target.removeClass('current');
        target = $('.job-wrap').first();
        target.addClass('current')
    } else {
        target.removeClass('current');
        newTarget.addClass('current');
    }
    reinitGallery();
}

function jobToLeft() {
    var target = $('.current');
    var newTarget = target.prev();

    if(newTarget[0] === undefined) {
        target.removeClass('current');
        target = $('.job-wrap').last();
        target.addClass('current')
    } else {
        target.removeClass('current');
        newTarget.addClass('current');
    }
    reinitGallery();
}


$('.jobs-pop').click(function () {
    $('#jobsPopup').fadeIn(200);
    $('.popup-fade').fadeIn(200);
})

$('.popup-close').click(function () {
    $('#jobsPopup').fadeOut(200);
    $('.popup-fade').fadeOut(200);
})