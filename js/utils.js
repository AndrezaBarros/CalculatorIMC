 export const calculateIMC = (height,weight) => {
    return ((height **2) / weight).toFixed(2)
}

export function notANumber (value) {
    return isNaN(value) || value == ""
}