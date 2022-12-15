const modal = () => {
    
    const overlay = document.querySelector('.overlay')

    //Модальное окно при клике на Заказать звонок

    const btnCall = document.querySelector('.col-sm-12 .button')
    const modalCall = document.querySelector('.header-modal')
    const modalCallClose = document.querySelector('.header-modal__close')


    // console.log(btnCall);

    const viewModal = (btn, modal) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            modal.style.display = 'block'
            overlay.style.display = 'block'
        })

    }
    const closeModal = (modal, close) => {
        close.addEventListener('click', (e) => {
                modal.style.display = 'none'
                overlay.style.display = 'none'
        })
    }

    viewModal(btnCall, modalCall)
    closeModal(modalCall, modalCallClose)

    //Модальное окно в блоке наши услуги при клике на кнопку Вызвать замерщика

    const btnServices = document.querySelectorAll('.service-button')
    const modalServices = document.querySelector('.services-modal')
    const modalServicesClose = document.querySelector('.services-modal__close')

    btnServices.forEach(btn => btn.addEventListener('click', viewModal(btn, modalServices)))
    closeModal(modalServices, modalServicesClose)


}

export default modal