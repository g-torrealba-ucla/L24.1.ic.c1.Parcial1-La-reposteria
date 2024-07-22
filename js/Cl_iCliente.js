export default class Cl_iCliente {
  leerNombre() {
    return prompt("Ingresa el nombre del cliente");
  }
  leerKgTorta() {
    return prompt("Ingresa la cantidad de Kgs de la Torta");
  }
  reportar(nombre, montoPagar, descuento) {
    return `El nombre del cliente: ${nombre}
            <br>El monto a pagar: $${montoPagar}
            <br>Descuento obtenido: $${descuento}`;
  }
}
