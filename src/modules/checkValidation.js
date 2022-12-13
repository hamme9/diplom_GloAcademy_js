const checkValidation = elems => {
    let status = true;
    elems.forEach(elem => {
        switch (elem.getAttribute('name')) {
            case 'fio':
                if(/^[а-яёa-z]{2,}/gi.test(elem.value)) {
                    elem.classList.add('success')
                    elem.classList.remove('error')
                } else {
                    elem.classList.add('error')
                    elem.classList.remove('success')
                }
                break;
            case 'phone':
                if(elem.value.length >= 17) {
                    elem.classList.add('success')
                    elem.classList.remove('error')
                } else {
                    elem.classList.add('error')
                    elem.classList.remove('success')
                }
                break;
            default: return;
        }
        
        elems.forEach(input => {
            if (input.classList.contains('error')) {
                status = false
            }
        })
    })
    return status
}

export { checkValidation }