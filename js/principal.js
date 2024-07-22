/**
 * Una repostería vende tortas decoradas para eventos especiales, por encargo.
 * El precio base de la torta dependerá de la cantidad de kilos que tendrá el pastel,
 * sabiendo que cada kilo cuesta 10$. Por otra parte, si la cantidad de kilos es 
 * superior a 4 Kg, el cliente disfrutará de un descuento de 10% en su compra. 
 * Realice un programa que solicite el nombre del cliente y la cantidad de Kg de la 
 * torta que llevará, y reporte el nombre del cliente, el monto a pagar y el monto 
 * del descuento obtenido.
 * Ejemplos:
 * KgTorta=2, entonces el descuento es $0 y el monto a pagar es $20
 * KgTorta=5, entonces el descuento es $5 y el monto a pagar es $45
 */
import Cl_cliente from "./Cl_cliente.js";
import Cl_iCliente from "./Cl_iCliente.js";

let cliente = new Cl_cliente(),
  iCliente = new Cl_iCliente(),
  n = iCliente.leerNombre(),
  mto = iCliente.leerKgTorta(),
  salida = document.getElementById("salida");

cliente = new Cl_cliente(n, mto);

salida.innerHTML = iCliente.reportar(
  cliente.nombre,
  cliente.montoPagar(),
  cliente.descuento()
);
