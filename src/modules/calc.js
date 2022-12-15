const calc = () => {
    const calcType = document.querySelector('#calc-type')
    const calcInput = document.querySelector('#calc-input')
    const calcTotal = document.querySelector('#calc-total')
    const calcMaterial = document.querySelector('#calc-type-material')
    const calcBlock = document.querySelector('#calc')


    if(calcBlock) {
        calcBlock.addEventListener('input', (e) => {
        
            if(e.target === calcType || e.target === calcInput || 
                e.target === calcMaterial) {

    
                calcTotal.value = ((+calcType.value * +calcInput.value * +calcMaterial.value).toFixed(1))
            }
        })
    }


}

export default calc