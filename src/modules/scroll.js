const scroll = () => {


    const goTopBtn = document.querySelector('.smooth-scroll');

    const trackScroll = () => {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;
    
        if (scrolled > coords) {
          goTopBtn.style.display = 'block';
        }
        if (scrolled < coords) {
            goTopBtn.style.display = 'none';
        }
      }
    
      const backToTop = () =>{
        if (window.pageYOffset > 0) {
          window.scrollBy(0, -30);
          setTimeout(backToTop, 0);
        }
      }
    

    
      window.addEventListener('scroll', trackScroll);
      goTopBtn.addEventListener('click', backToTop);
}

export default scroll
