function tabs (contentSelector, parentSelector, tabsSelecor, activeClassSelector) {
    //tabs 


    const tabContent = document.querySelectorAll(contentSelector),
        tabParent = document.querySelector(parentSelector),
        tabs = document.querySelectorAll(tabsSelecor);


    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(tab => {
            tab.classList.remove(activeClassSelector);
        });
        
    }

    function showTabContent(i=0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');

        tabs[i].classList.add(activeClassSelector);
    }

    tabParent.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        if(target && target.classList.contains(tabsSelecor.slice(1))) {
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