let header = document.getElementById("app-header");
let testimonials = document.querySelector('.app-testimonials')
let reviewVideo = document.querySelector(".app-testimonial-video");
let playingVideo = false;

// Scroll detector
window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        header.setAttribute("main", "")
        header.querySelector(".app-brand img").setAttribute("src", "./assets/img/Logo Negro cut.png")

    } else {
        header.removeAttribute("main")
        header.querySelector(".app-brand img").setAttribute("src", "./assets/img/Logo Blanco cut.png")
    }
})

// Carousels
$('#best-sellers .app-carousel-dishes').owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    loop:true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})


$('.app-testimonials').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        }
    }
})

$('.page-menu .app-carousel-dishes').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 4
        },
        1000: {
            items: 5
        }
    }
})

// Events
window.addEventListener('click', (e) => {
    let playVideo = e.target.closest('[data-target="#play-video"]');
    let modalVideo = !e.target.closest('#play-video .modal-content');

    if (playVideo) {
        if (playingVideo == false) {
            let video = playVideo.getAttribute("x-video")

            if (video != null) {
                reviewVideo.innerHTML = '<source src="./assets/video/testimonial-' + video + '.mp4" type="video/mp4"></source>';
                reviewVideo.load();

                reviewVideo.play();
                playingVideo = true;
            }
        }
    } else {
        if (playingVideo == true && modalVideo) {
            reviewVideo.currentTime = 0;
            reviewVideo.pause();
            playingVideo = false;

        }
    }
})
