const Pelota = {tipo:"elastico",
                color:"rojo",
          MostrarPropiedas: function() {
            return this.tipo + " " + this.color
          }
}

var Animales = ["perro","gato","caballo"]
var Colores = ["rojo","verde","azul"]

var Union = Animales.concat(Colores);

Animales.push("cerdo")
Animales.indexOf("perro")

const MostrarProps = Object.keys(Pelota)
const MostrarValor = Object.values(Pelota)

for (var i = 0; i<MostrarValor.length; i++){
    console.log(MostrarProps[i],MostrarValor[i])
}


