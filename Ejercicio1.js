let user = prompt(`Ingrese su usuario: `)
let pass = prompt(`Ingrese su contraseña: `)

if (user === "admin" && pass === "1234") {
    console.log(`Bienvenido`);
}else{
    console.log(`Acceso denegado`);
}
