// <!-- © 2025 Firuza Poladzade Jafarli - bytelab.az
// All rights reserved.   -->


AOS.init({
            duration: 1000,  // default duration
            easing: 'ease-in-out',
            once: true,      // animate only once
            mirror: false    // do not animate when scrolling back
        });

        window.addEventListener('load', () => {
            AOS.refresh();  // ensures AOS recalculates positions
        });


        (function () {
            emailjs.init({
                publicKey: "35Z8XtGI0jqxLdatv",
            });

        })();
        const backToTopBtn = document.getElementById("backToTopBtn");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = "flex";
            } else {
                backToTopBtn.style.display = "none";
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

         document.querySelectorAll('.modal').forEach(modalEl => {
            modalEl.addEventListener('shown.bs.modal', () => {
                var carousels = modalEl.querySelectorAll('.carousel');
                carousels.forEach(carouselEl => {
                    bootstrap.Carousel.getOrCreateInstance(carouselEl, {
                        interval: 3000,
                        ride: 'carousel'
                    });
                });
            });
        });
        document.querySelectorAll('.carousel video').forEach(video => {
            video.addEventListener('click', e => e.stopPropagation());
        });