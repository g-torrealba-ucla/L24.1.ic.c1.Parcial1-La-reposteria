export default class Cl_cliente {
  constructor(nombre, kgTorta) {
    this.nombre = nombre;
    this.kgTorta = kgTorta;
  }
  set nombre(n) {
    this._nombre = n;
  }
  get nombre() {
    return this._nombre;
  }
  set kgTorta(k) {
    this._kgTorta = +k;
  }
  get kgTorta() {
    return this._kgTorta;
  }
  descuento() {
    if (this.kgTorta > 4) return this.precioBase() * 0.1;
    else return 0;
  }
  precioBase() {
    return this.kgTorta * 10;
  }
  montoPagar() {
    return this.precioBase() - this.descuento();
  }
}
