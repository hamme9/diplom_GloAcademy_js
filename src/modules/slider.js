const slider = () => {
    const swiperClients = new Swiper('.benefits-inner', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
      

        // Navigation arrows
        navigation: {
          nextEl: '.benefits__arrow--right',
          prevEl: '.benefits__arrow--left',
        },
        breakpoints: {
            320: {
                // loop: true,
                slidesPerView: 1,
                slidesPerGroup: 1
                // loopedSlides: 1,
                // spaceBetween: 25
              },
            576: {
                // loop: false,
                slidesPerView: 3,
                slidesPerGroup: 3
                // spaceBetween: 50
            }
        }
      
    });

    const swiperServices = new Swiper('.row-swiper', {
        // Optional parameters
        
        loop: true,
        allowTouchMove: false,
      

        // Navigation arrows
        navigation: {
          nextEl: '.services__arrow--right',
          prevEl: '.services__arrow--left',
        },
        breakpoints: {
            320: {
                // loop: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                direction: 'horizontal', 
                
                // loopedSlides: 1,
                // spaceBetween: 25
              },
            576: {
                // loop: false,
                slidesPerView: 2,
                slidesPerGroup: 2,
                direction: 'vertical',
                // spaceBetween: 50
            },
            1200: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                direction: 'horizontal', 
            }

        }
      
    });


}

export default slider