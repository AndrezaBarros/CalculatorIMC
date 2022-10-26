export const Modal = {
    popUp: document.querySelector(".popup"),
    buttonClose: document.querySelector(".buttonClose"),
    message: document.querySelector('.popup h2'),

    open() {
        Modal.popUp.classList.add("open")
    },
    close() {
        Modal.popUp.classList.remove("open")
    } 
}

Modal.buttonClose.addEventListener("click", () => {
    Modal.close()
})

window.addEventListener("keydown", handleKeyDown)

function handleKeyDown (event) {
    if(event.key === 'Escape') {
        Modal.close()
    }
}