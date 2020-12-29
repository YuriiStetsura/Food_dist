function slider() {
    //slider

    const slides = document.querySelectorAll('.offer__slide'),
          slider = document.querySelector('.offer__slider'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesField = document.querySelector('.offer__slider-inner'),
          next = document.querySelector('.offer__slider-next'),
          prev = document.querySelector('.offer__slider-prev'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current'),
          width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1,
        offset = 0;

    total.textContent = addZero(slides.length);
    current.textContent =addZero(slideIndex);

    function addZero(num) {
        if(num < 10 && num > 0) {
            return '0' + num;
        } else {
            return num;
        }
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '1.0s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';
    const indicators = document.createElement('ol'),
          dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        dots.push(dot);
        indicators.append(dot);
    }

    function setNavigationActiveForSlider (slideIndex) {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex -1].style.opacity = 1;
    }
    setNavigationActiveForSlider(slideIndex);

    function toNumber (string) {
        return +string.match(/\d/g).join('');
    }

    next.addEventListener('click', () => {
        if (offset == toNumber(width) * (slides.length -1) && slideIndex == slides.length) {
            offset = 0;
            slideIndex = 1;
            current.textContent = addZero(slideIndex);
        } else {
            offset += toNumber(width); 
            slideIndex++;
            current.textContent = addZero(slideIndex);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
        
        setNavigationActiveForSlider(slideIndex);
        
    });

    prev.addEventListener('click', () => {
        if (offset == 0 && slideIndex == 1) {
            offset = toNumber(width) * (slides.length -1);
            slideIndex = slides.length;
            current.textContent = addZero(slideIndex);
        } else {
            offset -= toNumber(width);
            slideIndex--;
            current.textContent = addZero(slideIndex);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        setNavigationActiveForSlider(slideIndex);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            const slideTo = event.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            current.textContent = addZero(slideIndex);

            offset = toNumber(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            setNavigationActiveForSlider(slideIndex);

        });
    });
}

export default slider;