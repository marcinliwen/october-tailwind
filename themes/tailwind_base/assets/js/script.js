document.addEventListener("DOMContentLoaded", function (){
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
                o.classList.add(r), document.querySelector('.submenu-container').classList.remove('open')) : s < n && o.classList.contains(r) && (o.classList.remove(r),
                    o.classList.add(a)),
                n = s
            //}
        }
        ))
    }
    headerEffect();

    })
