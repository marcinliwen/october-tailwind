document.addEventListener("DOMContentLoaded", function (){

    // Create your instance
const gradient = new Gradient()

// Call `initGradient` with the selector to your canvas
gradient.initGradient('#gradient-canvas')


    console.log('is loaded')
     /**
       * body overflow if mobile menu is open
       */
     const openMenu = document.getElementById("open-menu");
     const closeMenu = document.getElementById("close-menu");
     const menu = document.querySelector(".main-menu");
     if (openMenu) {
         openMenu.addEventListener("click", () => {
            console.log('open')
             menu.classList.add("is-open");
             document.body.classList.add("overflow-hidden");
         });
     }
     if (closeMenu) {
         closeMenu.addEventListener("click", () => {
             menu.classList.remove("is-open");
             document.body.classList.remove("overflow-hidden");
         });
     }


     function headerEffect() {
        const e = document.querySelector(".header");
        if(!e) return;
        let t = e.offsetHeight;
        // const s = document.querySelector(".top-bar-padd")
        const i = document.querySelector(".mobile-content");
        //s.style.paddingTop = t + "px",
        /* window.addEventListener("resize", (() => {
            t = e.offsetHeight,
                console.log(t),
                s.style.paddingTop = t + "px"
        }
        )) */
        console.log(t);
        const o = document.body
            , a = "scroll-up"
            , r = "scroll-down";
        let n = 0;
        window.addEventListener("scroll", (() => {
            //if (!i.classList.contains("mobile-content--active")) {
            if (t < window.scrollY) { e.classList.add("st-bg") }
            else {
                e.classList.remove("st-bg");

            };
            const s = window.scrollY;
            if (s <= 0)
                return void o.classList.remove(a);
            s > n && !o.classList.contains(r) ? (o.classList.remove(a),
                o.classList.add(r)
                /* document.querySelector('.submenu-container').classList.remove('open') */) : s < n && o.classList.contains(r) && (o.classList.remove(r),
                    o.classList.add(a)),
                n = s
            //}
        }
        ))
    }
    //headerEffect();

    if (typeof Swiper !== 'undefined') {
        var swiperOpinions = new Swiper('.swiper_opinions', {
            slidesPerView: 1,
            spaceBetween: 24,
            navigation: {
                nextEl: '.swiper-opinions-next',
                prevEl: '.swiper-opinions-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3
                }
            }

        })
        var swiperBlog = new Swiper('.swiper_blog', {
            slidesPerView: 1,
            spaceBetween: 24,
            navigation: {
                nextEl: '.swiper-blog-next',
                prevEl: '.swiper-blog-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4
                }
            }

        })
    }
    })

    //stack
        const margin = {
            1200: [0, 110, 110, 110],
            960: [0, 120, 120, 120],
            640: [0, 90, 90, 90],
            480: [0, 115, 115, 115],
            320: [0, 115, 115, 115],
        }
        const isOne = true;

        document.addEventListener('DOMContentLoaded', () => {
            const zeroSlides = document.querySelectorAll('.uc-slide');
            const accordionWrapper = document.querySelector('.zeroAccordion');
            let autoscale = 1;
            let gridWidth = 0;
            let accumulatedMargin = 0;

            innerWidth >= 1200 ? gridWidth = 1200 : '';
            innerWidth < 1200 ? gridWidth = 960 : '';
            innerWidth < 960 ? gridWidth = 640 : '';
            innerWidth < 640 ? gridWidth = 480 : '';
            innerWidth < 480 ? gridWidth = 320 : '';

            autoscale = Number((document.documentElement.clientWidth / gridWidth).toFixed(3));

            zeroSlides.forEach( (zeroSlide, index) => {
                accordionWrapper.append(zeroSlide);

                zeroSlide.setAttribute('data-number', index);

                accumulatedMargin += margin[gridWidth][index];

                zeroSlide.style.marginTop = `${Math.floor(accumulatedMargin * autoscale)}px`;
                zeroSlide.style.zIndex = index + 1;

                index < (zeroSlides.length - 1) ? zeroSlide.addEventListener('click', slideExpanding) : '';
            }
            );

            function slideExpanding(event) {
                if (event.target.tagName === 'A') {
                    return;
                }

                let currentSlideNumber = this.getAttribute('data-number');
                let currentSlideHeight = zeroSlides[currentSlideNumber].offsetHeight;
                let marginTopValue = 0;
                accumulatedMargin = 0;

                if (isOne) {
                    zeroSlides.forEach( (zeroSlide, index) => {
                        accumulatedMargin += margin[gridWidth][index];

                        if (!this.classList.contains('expended')) {
                            index <= currentSlideNumber ? marginTopValue = Math.floor(accumulatedMargin * autoscale) : marginTopValue = Math.floor((accumulatedMargin - margin[gridWidth][Number(currentSlideNumber) + 1]) * autoscale + currentSlideHeight);

                            zeroSlide.style.marginTop = `${marginTopValue}px`;
                            zeroSlide.classList.remove('expended');
                        } else {
                            marginTopValue = Math.floor(accumulatedMargin * autoscale);

                            zeroSlide.style.marginTop = `${marginTopValue}px`;
                        }
                    }
                    );
                } else {
                    while (currentSlideNumber < zeroSlides.length - 1) {
                        ++currentSlideNumber;

                        let currentTopPosition = Number(zeroSlides[currentSlideNumber].style.marginTop.replace(/[^0-9]/g, ''));

                        if (!this.classList.contains('expended')) {
                            marginTopValue = (currentTopPosition - margin + currentSlideHeight) * autoscale;

                            zeroSlides[currentSlideNumber].style.marginTop = `${marginTopValue}px`;
                        } else {
                            marginTopValue = (currentTopPosition + margin - currentSlideHeight) * autoscale

                            zeroSlides[currentSlideNumber].style.marginTop = `${marginTopValue}px`;
                        }
                    }
                }

                this.classList.toggle('expended');
                updateAccordionWrapperHeight();
            }

            function updateAccordionWrapperHeight() {
                let lastZeroSlide = zeroSlides[zeroSlides.length - 1];
                let lastZeroSlideHeight = lastZeroSlide.offsetHeight;
                let lastZeroSlideMarginTop = Number(lastZeroSlide.style.marginTop.replace(/[^0-9]/g, ''));

                accordionWrapper.style.height = `${Math.floor(lastZeroSlideHeight + lastZeroSlideMarginTop)}px`;
            }

            updateAccordionWrapperHeight();
        }
        );

