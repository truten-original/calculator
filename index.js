let a = ''
let b = ''
let sign = ''
let finish = false
let textArea = document.querySelector('p')
function clearAll() {
    a = ''
    b = ''
    sign = ''
    finish = false
    textArea.textContent = 0

}

const numbers = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'
]
const signs = [
    'x', '-', '/', '%', '+/-', '-', '+'
]


const btns = Array.from(document.querySelectorAll('.btns > div'))
btns.forEach((btn) => btn.addEventListener('click', (event) => {
    textArea.textContent = ''
    if (event.target.textContent === 'ac') { clearAll() }


    if (numbers.includes(event.target.textContent)) {
        if (b === '' && sign === '') {
            a += event.target.textContent
            textArea.textContent = a
        }else if(a !== '' && b !== '' && finish){
           
            b = event.target.textContent
            finish = false
            textArea.textContent = b
            
        }
        else {
            b += event.target.textContent
            textArea.textContent = b

        }



    }

    if (signs.includes(event.target.textContent)) {
        sign = event.target.textContent
        textArea.textContent = sign


    }

    if (event.target.textContent === '=') {
        console.log(sign)
        if(b === '') {b = a}
        switch (sign) {
            case '+':
                a = (+a) + (+b)
            break
            case '-':
                a = (+a)-(+b)
            break
            case 'x':
                a = a*b
            break
            case '/':
                a = a/b
            break
            case '%':
                a = a * (b / 100)
            break
            case '+/-':
                a = (-a)
            break


        }
        console.log(a, b)
        textArea.textContent = a
        finish = true
    }









}))