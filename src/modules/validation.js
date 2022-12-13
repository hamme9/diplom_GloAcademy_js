import { checkValidation } from "./checkValidation.js" 

const validation = () => {
    // const inputsCalc = document.querySelectorAll('.calc-block input')
    const inputsText = document.querySelectorAll('input[name=fio]')
    const inputsPhone = document.querySelectorAll('input[name=phone]')

    

    // const validationCalc = () => {
    //     inputsCalc.forEach((item) => {
    //         item.addEventListener('input', (e) => {
    //             e.target.value = e.target.value.replace(/\D+/,"")
    //         });
    //     });
    // };

    const validationName = () => {
        inputsText.forEach((item) => {
            item.removeAttribute('required') //удаление валидации которая прописана в строке
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^а-яёa-z\-\s]+/gi, "")

                if (item.classList.contains('error') || item.classList.contains('success')) { 
                    checkValidation([e.target])
                }
            });
        });
    };

    const validationPhone = () => {
        inputsPhone.forEach((item) => {
            item.removeAttribute('required') //удаление валидации которая прописана в строке
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^0-9-()]+/,"")

                if (item.classList.contains('error') || item.classList.contains('success')) { 
                    checkValidation([e.target])
                }
            });
        });
    };


    // validationCalc();
    validationPhone();
    validationName();


}

export default validation