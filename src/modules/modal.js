const modal = () => {
    
    const overlay = document.querySelector('.overlay')

    //Модальное окно при клике на Заказать звонок

    const btnCall = document.querySelector('.col-sm-12 .button')
    const modalCall = document.querySelector('.header-modal')

    // console.log(btnCall);

    const viewModal = (btn, modal) => {
        btn.addEventListener('click', (e) => {
            modal.style.display = 'block'
            overlay.style.display = 'block'
        })

    }
    const closeModal = (modal) => {
        modal.addEventListener('click', (e) => {
            e.preventDefault()
            if(e.target.classList.contains('header-modal__close') || e.target.classList.contains('services-modal__close')) {
                modal.style.display = 'none'
                overlay.style.display = 'none'
            }
        })
    }

    viewModal(btnCall, modalCall)
    closeModal(modalCall)

    //Модальное окно в блоке наши услуги при клике на кнопку Вызвать замерщика

    const btnServices = document.querySelectorAll('.service-button')
    const modalServices = document.querySelector('.services-modal')

    btnServices.forEach(btn => btn.addEventListener('click', viewModal(btn, modalServices)))
    closeModal(modalServices)


}

export default modal