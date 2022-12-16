import { checkValidation } from "./checkValidation.js"

const sendForm = ({
    formId, 
    someElement = [] 
}) => {
    const form = document.querySelector(`form[name=${formId}]`)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка'
    const successText = 'Спасибо! Наш менеджер с вами свяжется!'

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 
                'Content-Type': 'application/json' 
            }
        }).then((response) => response.json())
    }
    
    const clearCalc = () => {
        
        const calcType = document.querySelector('#calc-type')
        const calcInput = document.querySelector('#calc-input')
        const calcTotal = document.querySelector('#calc-total')
        const calcMaterial = document.querySelector('#calc-type-material')
        if(calcType) {
            calcType.selectedIndex = '0'
            calcInput.value = ''
            calcTotal.value = ''
            calcMaterial.selectedIndex = '0'
        }
    }

    const getSomeElement = () => {
        const formElements = form.querySelectorAll('input')
        const formBody = {}
        const formData = new FormData(form)

        statusBlock.style.color = 'black'
        statusBlock.style.textAlign = 'center'
        form.append(statusBlock)

        formData.forEach((value, key) => {
            formBody[key] = value
        })

        someElement.forEach(elem => {
            const calcType = document.querySelector('#calc-type')
            const calcInput = document.querySelector('#calc-input')
            const calcTotal = document.querySelector('#calc-total')
            const calcMaterial = document.querySelector('#calc-type-material')
            if(calcType && elem.type === 'block' && calcTotal.value != '') {
                formBody['Тип объекта'] = calcType.options[calcType.selectedIndex].innerText
                formBody['Общая площадь'] = calcInput.value
                formBody['Стоимость'] = calcTotal.value
                formBody['Тип остекления'] = calcMaterial.options[calcMaterial.selectedIndex].innerText
            }
        })
        return { formBody, formElements }
    }

    const submitForm = () => {
        const {formBody, formElements} = getSomeElement()

        if(checkValidation(formElements)) {
            clearCalc()

            statusBlock.textContent = loadText

            sendData(formBody)
            .then(data => {
                statusBlock.textContent = successText
                
                formElements.forEach(input => {
                    if(input.value == 'Окна' || input.value == 'Балконы') {
                        return
                    }
                    input.value = ''
                    input.classList.remove('success')
                })
                console.log(data)
            })
            .catch(error => {
                statusBlock.textContent = errorText
            })
        }setTimeout(() => {
            statusBlock.textContent = '';
        }, 4000);
    }

    try {
        if(!form) {
            throw new Error('Верните форму на место')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            submitForm()

        })
    } catch(error) {
        console.error(error.message)
    }
}

export default sendForm