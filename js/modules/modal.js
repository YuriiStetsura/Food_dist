function showModal(modalSelector , modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show', 'fade');
    modal.classList.remove('hide');

    console.log(modalTimerId);
    if (modalTimerId) {
        clearTimeout(modalTimerId);   
    }    
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show', 'fade');  

}

function modal(triggerSelector, modalSelector, modalTimerId) {
    //modal

    const btnsModal = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    function showScrollModal() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showScrollModal);
        }
    }

    btnsModal.forEach(btn => {
        btn.addEventListener('click', () => showModal(modalSelector , modalTimerId));
    });

    modal.addEventListener('click' , (event) => {
        if(event.target === modal || event.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    window.addEventListener('scroll', showScrollModal);
}

export default modal;
export {closeModal};
export {showModal};