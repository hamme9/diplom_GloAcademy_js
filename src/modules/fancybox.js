const fancybox = () => {

    const sertificate = document.querySelectorAll(".sertificate-document")
    const modal = document.querySelector(".img-modal")
    const closeModal = document.querySelector(".img-modal__close") 

    sertificate.forEach(item => {
        item.removeAttribute('href')
        item.classList.add('document-inner')
        item.addEventListener("click", () => {
            modal.style.display = 'block'
        })
    })
    closeModal.addEventListener("click", () => {
        modal.style.display = 'none'
    })

}

export default fancybox