//clase nodo para el arbol binario
class nodo {
    //Constructor para añadir el dato a la raiz
    constructor(id,medico, nombre,apellidoP,apellidoM,sexo,fecha,hora) {
        this.nombre = nombre
        this.id = id
        this.apellidoP=apellidoP;
        this.apellidoM=apellidoM
        this.sexo=sexo;
        this.medico=medico,
        this.fecha=fecha
        this.hora=hora
    }
    setNDH(nodoDH) {
        this.nodohd = nodoDH
    }
    setNHI(nodoHI) {
        this.nodohi = nodoHI
    }
    getNombre() {
        return this.Nombre;
    }
    getid() {
        return this.id;
    }
}

class arbol {

    //construcor del arbol binario
    constructor(id, raiz) {

        this.Raiz = new nodo(id, raiz)
    }
    //añadir nuevo dato al arbol binario 
    anadir(id, medico, nombre,apellidoP,apellidoM,sexo,fecha,hora) {
        //Declarar nuevo nodo que sera añadido al arbol
        let nuevo = new nodo(id,medico, nombre,apellidoP,apellidoM,sexo,fecha,hora)
        //Declarar variables para recorrer el arbol binario
        let anterior = null, recorre = this.Raiz
        //Evaluar destino del nuevo nodo
        while (recorre != null) {
            anterior = recorre
            recorre = (id > recorre.id) ? recorre.nodohd : recorre.nodohi
        }
        if (id > anterior.id) {
            anterior.setNDH(nuevo)
        }
        else {
            anterior.setNHI(nuevo)
        }
    }
}
//imprimir arbol binario en orden
const inOrden = (raiz) => {
    if (raiz.nodohi != null) {
        inOrden(raiz.nodohi)
    }
    console.log(" | " + raiz.id)
    if (raiz.nodohd != null) {
        inOrden(raiz.nodohd)
    }
}

const preOrden = (raiz) => {
    console.log(" | " + raiz.id + "|" + raiz.nombre )//+" | "+ raiz.apellidos+" | "+ raiz.tel+" | "+ raiz.email+" | "+ raiz.direccion+" | "+ raiz.esp
    if (raiz.nodohi != null) {
        preOrden(raiz.nodohi)
    }
    if (raiz.nodohd != null) {
        preOrden(raiz.nodohd)
    }
}

const postOrden = (raiz) => {
    if (raiz.nodohi != null) {
        postOrden(raiz.nodohi)
    }
    if (raiz.nodohd != null) {
        postOrden(raiz.nodohd)
    }
    console.log(" | " + raiz.id + "|" + raiz.nombre )//+" | "+ raiz.apellidos+" | "+ raiz.tel+" | "+ raiz.email+" | "+ raiz.direccion+" | "+ raiz.esp
}





var id,medico, nombre,apellidoP,apellidoM,sexo,fecha,hora;
 let arbolito = new arbol(id,medico, nombre,apellidoP,apellidoM,sexo,fecha,hora)
const imprimir = () => {
    $query=`select *from productos where nombre ='${nombre}';`
    console.log(nombre)
    conexion.query($query, function (err, rows) {
        if (err) {
        console.log("error en el query");
        console.log(err);
        return;
        }
        else{
    //let formulario=document.getElementById("formulario");
    let nombre = document.getElementById("nombre").value;
    let id = parseInt( document.getElementById("id").value);
    let apellido_p= document.getElementById("apellidos").value;
    let tel=document.getElementById("tel").value;
    let direccion=document.getElementById("direccion").value;
    let email=document.getElementById("email").value;
    let esp=document.getElementById("esp").value;
    if (id != "") { //nombre != "" && && apellidos!=""&& email!=""&& tel!=""&& direccion!=""&&esp!=""
        arbolito.anadir(id,medico, nombre,apellidoP,apellidoM,sexo,fecha,hora)
        texto = "Registro exitoso";
        alert(texto);
    }

    else {
        texto = "Datos incompletos, vuelve a intentarlo";
        console.log(texto);
        alert(texto)
    }
}
    })
}


const visualizar =()=>{
    console.log("-------INORDEN-------")
    inOrden(arbolito.Raiz)
    console.log("-------PREORDEN------")
    preOrden(arbolito.Raiz)
    console.log("------POSTORDEN------")
    postOrden(arbolito.Raiz)
}

