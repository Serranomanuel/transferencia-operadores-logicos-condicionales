let notaFinal = parseFloat(prompt(`Ingrese su nota final: `))
let asistencias = parseFloat(prompt(`Ingrese el porcentaje de asistencias de 0 a 100%: `))

if (asistencias >= 80 && notaFinal >= 60){
    console.log(`Aprobado`);
    
}else{
    console.log(`Reprobado`);
}