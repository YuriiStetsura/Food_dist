import {closeModal, showModal} from './modal';

function forms (formSelector , modalTimerId) {
    //Server

    const forms = document.querySelectorAll(formSelector);
    
    const message = {
        loading : 'img/form/spinner.svg',
        success : 'Мы свяжемся с вами как можно быстрее!',
        failure : 'Failure'
    };

    async function postData(url, body) {
     const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: body,
       });

       return await res.json();
    }

    forms.forEach(form => {
        bindPostData(form);
    });

    function bindPostData(form) {
       form.addEventListener('submit', (event) => {
            event.preventDefault();

            const spinner = document.createElement('img');
            spinner.src = message.loading;
            spinner.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend' , spinner);

            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then(data => {
                //console.log(data);
                showThankModal(message.success);
                spinner.remove();
            })
            .catch(() => {
                showThankModal(message.failure);
                spinner.remove();
            })
            .finally(() => {
                form.reset();
            });
       });
       
    }

    function showThankModal(message) {
        const modalDialog = document.querySelector('.modal__dialog');

        modalDialog.classList.add('hide');

        showModal('.modal', modalTimerId);
        const modalThanks = document.createElement('div');
        modalThanks.classList.add('modal__dialog');
        modalThanks.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(modalThanks);

        setTimeout(() => {
            modalThanks.remove();
            modalDialog.classList.remove('hide');
            modalDialog.classList.add('show');
            closeModal('.modal');
        }, 3000);
    }
}

export default forms;