const usuario = {
    nombre: "Maria",
    apellido: "Gomez",
    edad: 39,

    direccion: {
        calle: "calle 9",
        ciudad: "Bogota",
        pais: "Colombia"
    },
    presentarse(){
        return ` Hola, soy ${this.nombre}$ {this.apellido}, tengo ${this.edad} años y vivo en ${this.direccion.ciudad}, ${this.pais}.`;
    }
};

const {
    direccion: {ciudad,pais}
}= usuario;

console.log(ciudad);
console.log(pais);

console.log(usuario.presentarse)