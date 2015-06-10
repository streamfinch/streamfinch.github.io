/* global particlesJS */
document.getElementById('email').setAttribute('href', atob('bWFpbHRvOmNvbnRhY3RAc3RyZWFtZmluY2guY29t'));
document.getElementById('phone').setAttribute('href', atob('dGVsOisxLTIyNC02MTktNDk4Mg=='));

var particles = null;
var bg = document.getElementById('fullbleed');

window.requestAnimationFrame(function animate(params) {
    var distanceTop  = document.body.scrollTop;
    var distanceBg   = bg.getBoundingClientRect().top;
    var windowHeight = document.body.getBoundingClientRect().height;

    bg.setAttribute('style', 'background-position: 0px ' + (distanceBg - windowHeight + -1300) / 5 + 'px');

    if (particles && distanceTop > windowHeight) {
        particles.fn.vendors.destroy();
        particles = null;
    }

    if (!particles && distanceTop < windowHeight && particlesJS) {
        particles = particlesJS('particles', config);
    }

    window.requestAnimationFrame(animate);
});

var config = {
    particles: {
        color: '#fff',
        color_random: false,
        shape: 'circle',
        opacity: {
            opacity: 1,
            anim: {
                enable: true,
                speed: 1.5,
                opacity_min: 0,
                sync: false
            }
        },
        size: 4,
        size_random: true,
        nb: (window.innerHeight * window.innerWidth) / 5000,
        line_linked: {
            enable_auto: true,
            distance: 100,
            color: '#fff',
            opacity: 1,
            width: 1,
            condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: true,
            speed: 1
        }
    },
    interactivity: {
        enable: true,
        mouse: {
            distance: 300
        },
        detect_on: 'canvas',
        mode: 'grab',
        line_linked: {
            opacity: .5
        },
        events: {
            onclick: {
                enable: true,
                mode: 'push',
                nb: 4
            },
            onresize: {
                enable: true,
                mode: 'out',
                density_auto: false,
                density_area: 800
            }
        }
    },
    retina_detect: true
};