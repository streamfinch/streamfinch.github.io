var particles = null;
var bg = document.getElementById('fullbleed');

window.requestAnimationFrame(function animate(params) {
    var distanceTop = bg.getBoundingClientRect().top;
    var windowHeight = document.body.getBoundingClientRect().height;
    var progress = distanceTop - windowHeight;

    bg.setAttribute('style', 'background-position: 0px ' + progress + 'px');

    if (particles && document.body.scrollTop > windowHeight) {
        particles.fn.vendors.destroy();
        particles = null;
    }

    if (!particles && document.body.scrollTop < windowHeight) {
        particles = particlesJS('particles', {
            particles: {
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
            },
            interactivity: {
                enable: true,
                mouse: {
                    distance: 300
                },
                detect_on: 'canvas', // "canvas" or "window"
                mode: 'grab', // "grab" or false
                line_linked: {
                    opacity: .5
                },
                events: {
                    onclick: {
                        enable: true,
                        mode: 'push',
                        nb: 1
                    }
                }
            },
            
            retina_detect: true
        });
        particlesActive = true;
    }

    window.requestAnimationFrame(animate);
});