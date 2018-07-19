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
//
// $(function() {
//
//     var $body = $(document.body),
//         $window = $(window);
//
//     // Background
//     var canvas = document.createElement('canvas');
//
//     backgroundEnabled = canvas.getContext && canvas.getContext('2d') && $('#workSt').css('display') != 'none';
//
//     if (backgroundEnabled) {
//         config.background = {
//             enabled: true,
//
//             RENDER: {
//                 // Takes all the information in a Scene and renders it to a context.
//                 // A Scene sits at the very top of the stack. It simply manages arrays of Mesh & Light objects.
//                 renderer: 'svg'
//             },
//
//             MESH: {
//                 ambient: '#555555', //
//                 diffuse: '#ffffff', //
//                 width: 1.2, // Triangle Width
//                 height: 1.2, // Triangle Height
//                 depth: 10, // Transparency of the triangles
//                 segments: 16, // Number of triangles to display in 1 row
//                 slices: 8, // Number of triangles to display in 1 column
//                 xRange: 0.8, // Wideness of the triangles in X Position
//                 yRange: 0.1, // Wideness of the triangles in Y Position
//                 zRange: 1.0, // Wideness of the triangles in Z Position
//                 speed: 0.002 // Speed of the moving traingles
//             },
//
//             LIGHT: {
//                 autopilot: false,
//                 ambient: '#000000',
//                 diffuse: '#414750',
//                 count: 2, // Contrast
//                 zOffset: 39,
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
//
//         initBackground2();
//     }
//
// })




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

function initFullPage() {
    if($(window).width() < 671) {
        return
    } else {
        $('#fullPage').fullpage({
            autoScrolling:true,
            scrollHorizontally: true
        });
    }
}

$(document).ready(initFullPage);
$(window).on('resize',initFullPage);

$(function () {
    var container = $('#bFromSel');

    container.select2({
        placeholder: 'Выбор услуг',
        closeOnSelect: false
    });

    var render = $('.select2-selection--multiple');


    container.on("select2:selecting", function(e) {
        // if(container.select2("val") =='ios') {
        //     alert('ios selected')
        // } else {
        //     alert('not ios selected')
        // }
        console.log(container.select2('val'))
    });
})

// var container = document.getElementById('header'),
//     renderer = new FSS.CanvasRenderer(),
//     scene = new FSS.Scene(),
//     light = new FSS.Light('#000000', '#414750'),
//     geometry = new FSS.Plane(container.offsetWidth, container.offsetHeight, 16, 8),
//     material = new FSS.Material('#555555', '#ffffff'),
//     mesh = new FSS.Mesh(geometry, material),
//     now, start = Date.now();
//
// function initialise() {
//     scene.add(mesh);
//     scene.add(light);
//     container.appendChild(renderer.element);
//     window.addEventListener('resize', resize);
// }
//
// function resize() {
//     var width = container.offsetWidth,
//         height = container.offsetHeight;
//     renderer.setSize(width, height);
//     scene.remove(mesh);
//     renderer.clear();
//     geometry = new FSS.Plane(width, height, 16, 8);
//     mesh = new FSS.Mesh(geometry, material);
//     scene.add(mesh); // Readd the mesh
// }
//
// function animate() {
//     now = Date.now() - start;
//     light.setPosition(300 * Math.sin(now * 0.001), 200 * Math.cos(now * 0.0005), 60);
//     renderer.render(scene);
//     requestAnimationFrame(animate);
// }
//
// initialise();
// resize();
// animate();

// //------------------------------
// // Mesh Properties
// //------------------------------
// var MESH = {
//     width: 1.2,
//     height: 1.2,
//     depth: 10,
//     segments: 16,
//     slices: 8,
//     xRange: 0.8,
//     yRange: 0.1,
//     zRange: 1.0,
//     ambient: '#555555',
//     diffuse: '#FFFFFF',
//     speed: 0.002
// };
//
// //------------------------------
// // Light Properties
// //------------------------------
// var LIGHT = {
//     count: 2,
//     xyScalar: 1,
//     zOffset: 100,
//     ambient: '#880066',
//     diffuse: '#FF8800',
//     speed: 0.001,
//     gravity: 1200,
//     dampening: 0.95,
//     minLimit: 10,
//     maxLimit: null,
//     minDistance: 20,
//     maxDistance: 400,
//     autopilot: false,
//     draw: true,
//     bounds: FSS.Vector3.create(),
//     step: FSS.Vector3.create(
//         Math.randomInRange(0.2, 1.0),
//         Math.randomInRange(0.2, 1.0),
//         Math.randomInRange(0.2, 1.0)
//     )
// };
//
// //------------------------------
// // Render Properties
// //------------------------------
// var SVG = 'svg';
// var CANVAS = 'canvas';
// var RENDER = {
//     renderer: CANVAS
// };
//
// //------------------------------
// // Export Properties
// //------------------------------
// var EXPORT = {
//     width: 2000,
//     height: 1000,
//     drawLights: false,
//     minLightX: 0.4,
//     maxLightX: 0.6,
//     minLightY: 0.2,
//     maxLightY: 0.4,
//     "export": function() {
//         var l, x, y, light,
//             depth = MESH.depth,
//             zOffset = LIGHT.zOffset,
//             autopilot = LIGHT.autopilot,
//             scalar = this.width / renderer.width;
//
//         LIGHT.autopilot = true;
//         LIGHT.draw = this.drawLights;
//         LIGHT.zOffset *= scalar;
//         MESH.depth *= scalar;
//
//         resize(this.width, this.height);
//
//         for (l = scene.lights.length - 1; l >= 0; l--) {
//             light = scene.lights[l];
//             x = Math.randomInRange(this.width*this.minLightX, this.width*this.maxLightX);
//             y = Math.randomInRange(this.height*this.minLightY, this.height*this.maxLightY);
//             FSS.Vector3.set(light.position, x, this.height-y, this.lightZ);
//             FSS.Vector3.subtract(light.position, center);
//         }
//
//         update();
//         render();
//
//         switch(RENDER.renderer) {
//             case CANVAS:
//                 window.open(canvasRenderer.element.toDataURL(), '_blank');
//                 break;
//             case SVG:
//                 var data = encodeURIComponent(output.innerHTML);
//                 var url = "data:image/svg+xml," + data;
//                 window.open(url, '_blank');
//                 break;
//         }
//
//         LIGHT.draw = true;
//         LIGHT.autopilot = autopilot;
//         LIGHT.zOffset = zOffset;
//         MESH.depth = depth;
//
//         resize(container.offsetWidth, container.offsetHeight);
//     }
// };
//
// // //------------------------------
// // // UI Properties
// // //------------------------------
// // var UI = {
// //     show: true
// // };
// //
// //
// // //------------------------------
// // // Global Properties
// // //------------------------------
// // var now, start = Date.now();
// // var center = FSS.Vector3.create();
// // var attractor = FSS.Vector3.create();
// // var renderer, scene, mesh, geometry, material;
// // var canvasRenderer, svgRenderer;
// // var gui, autopilotController;
// //
// // var container = d3.select("#header").node();
// // var output = d3.select("#header").node();
// // var noise = d3.select("#header").node();
// //
// // //------------------------------
// // // Methods
// // //------------------------------
// //
// // // tributary.run = function(g,t) {
// // //     now = Date.now() - start;
// // //     update();
// // //     render();
// // // }
// //
// // function initialise() {
// //     createRenderer();
// //     createScene();
// //     createMesh();
// //     createLights();
// //     //addEventListeners();
// //     //addControls();
// //     resize(container.offsetWidth, container.offsetHeight);
// //     //animate();
// // }
// //
// // function createRenderer() {
// //     svgRenderer = new FSS.SVGRenderer();
// //     canvasRenderer = new FSS.CanvasRenderer();
// //     setRenderer(RENDER.renderer);
// // }
// //
// // function setRenderer(index) {
// //     if (renderer) {
// //         output.removeChild(renderer.element);
// //     }
// //     switch(index) {
// //         case CANVAS:
// //             renderer = canvasRenderer;
// //             break;
// //         case SVG:
// //             renderer = svgRenderer;
// //             break;
// //     }
// //     renderer.setSize(container.offsetWidth, container.offsetHeight);
// //     output.appendChild(renderer.element);
// // }
// //
// // function createScene() {
// //     scene = new FSS.Scene();
// // }
// //
// // function createMesh() {
// //     scene.remove(mesh);
// //     renderer.clear();
// //     geometry = new FSS.Plane(MESH.width * renderer.width, MESH.height * renderer.height, MESH.segments, MESH.slices);
// //     material = new FSS.Material(MESH.ambient, MESH.diffuse);
// //     mesh = new FSS.Mesh(geometry, material);
// //     scene.add(mesh);
// //
// //     // Augment vertices for animation
// //     var v, vertex;
// //     for (v = geometry.vertices.length - 1; v >= 0; v--) {
// //         vertex = geometry.vertices[v];
// //         vertex.anchor = FSS.Vector3.clone(vertex.position);
// //         vertex.step = FSS.Vector3.create(
// //             Math.randomInRange(0.2, 1.0),
// //             Math.randomInRange(0.2, 1.0),
// //             Math.randomInRange(0.2, 1.0)
// //         );
// //         vertex.time = Math.randomInRange(0, Math.PIM2);
// //     }
// // }
// //
// // function createLights() {
// //     var l, light;
// //     for (l = scene.lights.length - 1; l >= 0; l--) {
// //         light = scene.lights[l];
// //         scene.remove(light);
// //     }
// //     renderer.clear();
// //     for (l = 0; l < LIGHT.count; l++) {
// //         light = new FSS.Light(LIGHT.ambient, LIGHT.diffuse);
// //         light.ambientHex = light.ambient.format();
// //         light.diffuseHex = light.diffuse.format();
// //         scene.add(light);
// //
// //         // Augment light for animation
// //         light.mass = Math.randomInRange(0.5, 1);
// //         light.velocity = FSS.Vector3.create();
// //         light.acceleration = FSS.Vector3.create();
// //         light.force = FSS.Vector3.create();
// //
// //         // Ring SVG Circle
// //         light.ring = document.createElementNS(FSS.SVGNS, 'circle');
// //         light.ring.setAttributeNS(null, 'stroke', light.ambientHex);
// //         light.ring.setAttributeNS(null, 'stroke-width', '0.5');
// //         light.ring.setAttributeNS(null, 'fill', 'none');
// //         light.ring.setAttributeNS(null, 'r', '10');
// //
// //         // Core SVG Circle
// //         light.core = document.createElementNS(FSS.SVGNS, 'circle');
// //         light.core.setAttributeNS(null, 'fill', light.diffuseHex);
// //         light.core.setAttributeNS(null, 'r', '4');
// //     }
// // }
// //
// // function resize(width, height) {
// //     renderer.setSize(width, height);
// //     FSS.Vector3.set(center, renderer.halfWidth, renderer.halfHeight);
// //     createMesh();
// // }
// //
// //
// //
// //
// // function update() {
// //     var ox, oy, oz, l, light, v, vertex, offset = MESH.depth/2;
// //
// //     // Update Bounds
// //     FSS.Vector3.copy(LIGHT.bounds, center);
// //     FSS.Vector3.multiplyScalar(LIGHT.bounds, LIGHT.xyScalar);
// //
// //     // Update Attractor
// //     FSS.Vector3.setZ(attractor, LIGHT.zOffset);
// //
// //     // Overwrite the Attractor position
// //     if (LIGHT.autopilot) {
// //         ox = Math.sin(LIGHT.step[0] * now * LIGHT.speed);
// //         oy = Math.cos(LIGHT.step[1] * now * LIGHT.speed);
// //         FSS.Vector3.set(attractor,
// //             LIGHT.bounds[0]*ox,
// //             LIGHT.bounds[1]*oy,
// //             LIGHT.zOffset);
// //     }
// //
// //     // Animate Lights
// //     for (l = scene.lights.length - 1; l >= 0; l--) {
// //         light = scene.lights[l];
// //
// //         // Reset the z position of the light
// //         FSS.Vector3.setZ(light.position, LIGHT.zOffset);
// //
// //         // Calculate the force Luke!
// //         var D = Math.clamp(FSS.Vector3.distanceSquared(light.position, attractor), LIGHT.minDistance, LIGHT.maxDistance);
// //         var F = LIGHT.gravity * light.mass / D;
// //         FSS.Vector3.subtractVectors(light.force, attractor, light.position);
// //         FSS.Vector3.normalise(light.force);
// //         FSS.Vector3.multiplyScalar(light.force, F);
// //
// //         // Update the light position
// //         FSS.Vector3.set(light.acceleration);
// //         FSS.Vector3.add(light.acceleration, light.force);
// //         FSS.Vector3.add(light.velocity, light.acceleration);
// //         FSS.Vector3.multiplyScalar(light.velocity, LIGHT.dampening);
// //         FSS.Vector3.limit(light.velocity, LIGHT.minLimit, LIGHT.maxLimit);
// //         FSS.Vector3.add(light.position, light.velocity);
// //     }
// //
// //     // Animate Vertices
// //     for (v = geometry.vertices.length - 1; v >= 0; v--) {
// //         vertex = geometry.vertices[v];
// //         ox = Math.sin(vertex.time + vertex.step[0] * now * MESH.speed);
// //         oy = Math.cos(vertex.time + vertex.step[1] * now * MESH.speed);
// //         oz = Math.sin(vertex.time + vertex.step[2] * now * MESH.speed);
// //         FSS.Vector3.set(vertex.position,
// //             MESH.xRange*geometry.segmentWidth*ox,
// //             MESH.yRange*geometry.sliceHeight*oy,
// //             MESH.zRange*offset*oz - offset);
// //         FSS.Vector3.add(vertex.position, vertex.anchor);
// //     }
// //
// //     // Set the Geometry to dirty
// //     geometry.dirty = true;
// // }
// //
// // function render() {
// //     renderer.render(scene);
// //
// //     // Draw Lights
// //     if (LIGHT.draw) {
// //         var l, lx, ly, light;
// //         for (l = scene.lights.length - 1; l >= 0; l--) {
// //             light = scene.lights[l];
// //             lx = light.position[0];
// //             ly = light.position[1];
// //             switch(RENDER.renderer) {
// //                 case CANVAS:
// //                     renderer.context.lineWidth = 0.5;
// //                     renderer.context.beginPath();
// //                     renderer.context.arc(lx, ly, 10, 0, Math.PIM2);
// //                     renderer.context.strokeStyle = light.ambientHex;
// //                     renderer.context.stroke();
// //                     renderer.context.beginPath();
// //                     renderer.context.arc(lx, ly, 4, 0, Math.PIM2);
// //                     renderer.context.fillStyle = light.diffuseHex;
// //                     renderer.context.fill();
// //                     break;
// //                 case SVG:
// //                     lx += renderer.halfWidth;
// //                     ly = renderer.halfHeight - ly;
// //                     light.core.setAttributeNS(null, 'cx', lx);
// //                     light.core.setAttributeNS(null, 'cy', ly);
// //                     renderer.element.appendChild(light.core);
// //                     light.ring.setAttributeNS(null, 'cx', lx);
// //                     light.ring.setAttributeNS(null, 'cy', ly);
// //                     renderer.element.appendChild(light.ring);
// //                     break;
// //             }
// //         }
// //     }
// // }
// //
// // //------------------------------
// // // Callbacks
// // //------------------------------
// // d3.select("#display").on("click", onMouseClick);
// // function onMouseClick() {
// //     FSS.Vector3.set(attractor, d3.event.x, renderer.height - d3.event.y);
// //     FSS.Vector3.subtract(attractor, center);
// //     LIGHT.autopilot = !LIGHT.autopilot;
// //     autopilotController.updateDisplay();
// // }
// //
// // d3.select("#display").on("mousemove", onMouseMove);
// // function onMouseMove() {
// //     FSS.Vector3.set(attractor, d3.event.x, renderer.height - d3.event.y);
// //     FSS.Vector3.subtract(attractor, center);
// // }
// //
// //
// // // Let there be light!
// // initialise();

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