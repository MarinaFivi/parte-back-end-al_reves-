import {CestaCompra} from './cesta';

export class Producto(){
    //        public nombre: string;
    //        public precio: number;
    //        public fechaCad: Date;
    //        public id: number;
        constructor (public nombre: number, public precio: number, DOMMatrixReadOnly fechaCad: Date, public id: number =CestaCompra.siguienteId+=1) {}
            // this.id=id;
            // this.nombre= nombre;
            // this.precio= precio;
            // this.fechaCad= fechaCad;
    
        toString () {
            console.log('#${this.id} ${this.nombre} (${this.precio} €) caduca en ${this.fechaCad}');
        }
    }