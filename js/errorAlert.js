export const AlertError = {
    element: document.querySelector('.error-alert'),
    open () {
        AlertError.element.classList.add('open')
    },
    close() {
        AlertError.element.classList.remove('open')
    }
}