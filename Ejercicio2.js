let edad = parseInt(prompt(`Ingrese su edad: `))
let estudiante = parseInt(prompt(`Es estudiente: si:1 no:0`))
const descuento = 0.20
const niño = 5000
const adolecente = 8000
const adulto = 10000



switch (estudiante) {
    case 1:
        if (edad < 12) {
            console.log(`el precio de la entrada es ${niño - (niño * descuento)} pesos`);
        }else if (edad <= 18){
            console.log(`El precio de la entrada es ${adolecente - (adolecente * descuento)}`);
        }else{
            console.log(`El precio de la entrada es ${adulto - (adulto * descuento)}`);
        }
        break;
    case 0:
        if (edad < 12) {
            console.log(`el precio de la entrada es ${niño} pesos`);
        }else if (edad <= 18){
            console.log(`El precio de la entrada es ${adolecente} pesos`);
        }else{
            console.log(`El precio de la entrada es ${adulto} pesos`);
        }
        break;
    default:
        break;
}