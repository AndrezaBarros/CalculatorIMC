import { Modal } from './modal.js'
import { calculateIMC, notANumber } from "./utils.js"
import { AlertError } from "./errorAlert.js"


let inputWeight = document.querySelector("#weigth")
let inputHeight = document.querySelector("#heigth")
const form = document.querySelector('form')

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notANumber(weight) || notANumber(height)

    if (showAlertError) {
        AlertError.open()
        return;
    } 

    AlertError.close()

    const result = calculateIMC(height, weight)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()
