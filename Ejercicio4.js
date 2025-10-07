let opcion = parseInt(prompt(`  1. Consultar saldo
    2. Retirar dinero
    3. Depositar dinero
    4. Salir`))

switch (opcion) {
    case 1:
        console.log(`Su saldo es 0 pesos`);
        break;
    case 2:
        console.log(`No posee saldo suficiente`);
        break;
    case 3:
        console.log(`Cuanto desea depositar`);
        break;
    case 4:
        console.log(`Saliendo`);

    default:
        console.log(`Adios`);
        
        break;
}