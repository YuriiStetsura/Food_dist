function tabs () {
    //tabs 


    const tabContent = document.querySelectorAll('.tabcontent'),
        tabParent = document.querySelector('.tabheader__items'),
        tabs = document.querySelectorAll('.tabheader__item');


    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
        
    }

    function showTabContent(i=0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');

        tabs[i].classList.add('tabheader__item_active');
    }

    tabParent.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, i) => {
                if(tab == target) {
                    hideTabContent();
                    showTabContent(i);     
                }
            });
        }
    });


    hideTabContent();
    showTabContent();

}

export default tabs;