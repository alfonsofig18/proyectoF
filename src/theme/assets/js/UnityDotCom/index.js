document.addEventListener('DOMContentLoaded', () => {

    $('#correo').hide();

    $('#btn_send_footer').on('click', () => {
        const email = $('#EmailFooter').val();
        if (email !== null && email !== '') {
            sessionStorage.setItem('email', email);
            setTimeout(() => {
                window.location.href = 'page-contact-us-1.html';
            }, 1000);
        } else {
            $('#EmailFooter').addClass('error');
            $('#correo').show();
        }
        $('#EmailFooter').focus(() => {
            $('#EmailFooter').removeClass('error');
            $('#correo').hide();
        });
    })
})


gsap.registerPlugin(ScrollTrigger);

gsap.to('#speedometer', {
    scrollTrigger: {
        trigger: "#speedometer",
        scrub: 2,
        start: '-50% 50%',
        end: '15% 50%',
        // markers: true,
    },
    background: 'rgb(217 252 255)'
})

gsap.to(".dosIcon", {
    scrollTrigger: {
        trigger: "#speedometer",
        scrub: 2,
        start: 'top 50%',
        end: '50% 50%',
        // markers: true,
    },
    opacity: 0.15,
    y: '-60%',
    x: '20%',
    // scale: 0.8,
    rotation: 9,
    stagger: 0.11
})

gsap.to(".unoIcon", {
    scrollTrigger: {
        trigger: "#speedometer",
        scrub: 2,
        start: 'top 50%',
        end: '50% 50%',
    },
    opacity: 0.15,
    y: '-60%',
    x: '-20%',
    // scale: 0.8,
    rotation: -9,
    stagger: 0.11
})

gsap.to("#and", {
    scrollTrigger: {
        trigger: "#speedometer",
        scrub: 1,
        start: 'top 50%',
        end: '50% 50%',
        // markers: true
    },
    // y: -90,
    scale: 1.5,
    opacity: 0.8,
    rotation: 6
})

const full_section = document.getElementById('full_section');
const title_excelente = document.getElementById('title_excelente');
const title_web_dev = document.getElementById('title_web_dev');
const img_dev1 = document.getElementById('img_dev1');
const img_dev2 = document.getElementById('img_dev2');
const img_dev3 = document.getElementById('img_dev3');
const card_webDelevop1 = document.getElementById('card_webDelevop1');
const card_webDelevop2 = document.getElementById('card_webDelevop2');
const card_webDelevop3 = document.getElementById('card_webDelevop3');
const card_webDelevop4 = document.getElementById('card_webDelevop4');
// const full_section = document.getElementById('full_section');

gsap.defaults({ duration: 1 })

gsap.to(img_dev1, {
    scrollTrigger: {
        trigger: ".contenedor_animacion0",
        start: '-5.5% 50%',
        end: '4.5% 50%',
        pin: true,
        scrub: 1,
        // markers: true,
    },
})

gsap.to(img_dev1, {
    scrollTrigger: {
        trigger: ".contenedor_animacion0",
        start: '-5.489% 50%',
        end: '-1% 50%',
        pin: true,
        scrub: 1,
        // markers: true,
    },
    top: '-18vh',
})

gsap.to(img_dev1, {
    scrollTrigger: {
        trigger: ".contenedor_animacion0",
        start: '-5.471% 50%',
        end: '-2.8% 50%',
        pin: true,
        scrub: 1,
        // markers: true,
    },
    scale: 1.21
})

gsap.to(img_dev1, {
    scrollTrigger: {
        trigger: ".contenedor_animacion0",
        start: '-5.45% 50%',
        end: '-2% 50%',
        pin: true,
        scrub: 1,
        // markers: true,
    },
    left: '45%'
})

gsap.to(img_dev1, {
    scrollTrigger: {
        trigger: ".contenedor_animacion0",
        start: '-5.43% 50%',
        end: '7% 50%',
        pin: true,
        scrub: 1,
        // markers: true,
    },
})

gsap.to(title_excelente, {
    scrollTrigger: {
        trigger: ".contenedor_animacion",
        start: 'top 50%',
        end: '1% 50%',
        pin: true,
        scrub: 1,
        // markers: true,
    },
    wordSpacing: '0.08em',
})

gsap.to(title_excelente, {
    scrollTrigger: {
        trigger: ".contenedor_animacion",
        start: '0.0031% 50%',
        end: '4.5% 50%',
        pin: true,
        scrub: 1,
        // markers: true,
    },
    scale: 1.25,
})

gsap.to(title_web_dev, {
    scrollTrigger: {
        trigger: ".contenedor_animacion",
        start: '0.04% 50%',
        end: '1.5% 50%',
        pin: true,
        scrub: 1,
        // markers: true,
    },
    scale: 0.9,
    top: '0.8%',
})

const tl = gsap.timeline();

tl.to([card_webDelevop1, card_webDelevop2, card_webDelevop3], {
    scrollTrigger: {
        trigger: ".contenedor_animacion",
        start: '0.05% 50%',
        end: '1.5% 50%',
        pin: true,
        scrub: 1,
        // markers: true,
    },
    stagger: 0.11,
    top: '-3.3%'
}).to(card_webDelevop2, {
    scrollTrigger: {
        trigger: ".contenedor_animacion",
        start: '0.052% 50%',
        end: '1.5% 50%',
        pin: true,
        scrub: 1,
        // markers: true,
    },
    // top: '-3.3%',
    left: '-=10%'
}).to(card_webDelevop3, {
    scrollTrigger: {
        trigger: ".contenedor_animacion",
        start: '0.056% 50%',
        end: '1.5% 50%',
        pin: true,
        scrub: 1,
        // markers: true,
    },
    // top: '-3.3%',
    left: '+=10%'
}, 0)

// gsap.to(title_web_dev, {
//     scrollTrigger: {
//         trigger: ".contenedor_animacion",
//         start: '0.04% 50%',
//         end: '20% 50%',
//         pin: true,
//         scrub: 1,
//         markers: true,
//     }
// })



// const tl0 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".contenedor_animacion0",
//         start: '-5.5% 50%',
//         end: '20% 50%',
//         scrub: 1,
//         pin: true,
//         markers: true,
//     },
// })

// // const tl01 = gsap.timeline({
// //     scrollTrigger: {
// //         trigger: ".contenedor_animacion0",
// //         start: '-4% 50%',
// //         end: '11% 50%',
// //         scrub: 1,
// //         markers: true,
// //         pin: true
// //     },
// // })

// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".contenedor_animacion",
//         start: 'top 50%',
//         end: '9% 50%',
//         scrub: 1,
//         // markers: true,
//         // pin: true
//     },
// })

// const tl2 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".contenedor_animacion",
//         start: 'top 50%',
//         end: '1% 50%',
//         scrub: 1,
//         // markers: true,
//     },
// })

// const tl3 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".contenedor_animacion",
//         start: 'top 50%',
//         end: '20% 50%',
//         scrub: 1,
//         markers: true,
//         pin: true
//     },
// })

// tl2.to(title_excelente, {
//     wordSpacing: '0.08em',
//     duration: 1,
// })

// tl.to(title_excelente, {
//     scale: 1.25,
//     duration: 1,
// })
//     .to(title_web_dev, {
//         top: '1.1%',
//         scale: 1,
//         duration: 1,
//     }, "-=1")


// tl3.to(title_excelente, {
//     duration: 1,
// })


// tl3.to(title_web_dev, {
//     duration: 1,
// }, "-=1")

// tl0.to(img_dev1, {
//     duration: 2.5,
// },)

// tl0.to(img_dev1, {
//     top: '-15vh',
//     duration: 1,
// })

// tl0.to(img_dev1, {
//     scale: 1.3,
//     duration: 2,
// })

// tl0.to(img_dev1, {
//     duration: 1,
// })

// tl0.to(img_dev1, {
//     top: '15vh',
//     duration: 1,
//     // start: '15'
// },)

// tl0.to(img_dev1, {
//     top: '700vh',
//     duration: 0.01,
// },)

// // tl0.to(img_dev1, {
// //     // scale: 1.3,
// //     duration: 1,
// // })

// // tl01.to(img_dev1, {
// //     duration: 3,
// // })
