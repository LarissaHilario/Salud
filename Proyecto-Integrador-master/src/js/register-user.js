var conexion = require('../../../conectar');

//import{Arbol, arrayDatos} from 'arbol/arbolito1.js';
const { off } = require('../../../conectar');
//let arbol=new Arbol();
const BotonSubir = document.getElementById("btnSubir");

BotonSubir.addEventListener("click", () => {
    registrar_cita();
});

var idUsuario;
function registrar() {
    var nombre = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var email = document.getElementById("email").value;
    if (user != "" && email != "" && pass != "") {
        $query = `INSERT INTO pacientes (id_paciente,usuario,email,pass) VALUES (0,'${nombre}','${email}','${pass}')`;
        conexion.query($query, function (err) {
            if (err) {
                console.log("error en el query");
                console.log(err);
                return;
            }
            else {
                alert("Registro exitoso")
                window.location.assign("../../src/html/inicioSesion.html");
            }
        })
    }
    else {
        alert("Rellena los campos sugeridos");
    }
};

function visualizar() {
    var tablaR = document.getElementById("tabla");
    $query = 'Select *from mytable1;';
    conexion.query($query, function (err, rows) {
        if (err) {

        }
        else {
            console.log("Ejecutado correctamente", rows);
            var long = rows.length;
            for (i = 0; i < long; i++) {
                var newRow = tablaR.insertRow(-1);
                var celdaId = newRow.insertCell(0);
                var celdaUsuario = newRow.insertCell(1);
                var textoId = document.createTextNode(rows[i].id);
                var textoUsuario = document.createTextNode(rows[i].name);
                celdaId.appendChild(textoId);
                celdaUsuario.appendChild(textoUsuario);
            }
        }
    })
}

function ingresar() {
    var userb = document.getElementById("user-gived").value;
    var passb = document.getElementById("pass-gived").value;
    if (userb != "" && passb != "") {
        $query = `SELECT * FROM pacientes WHERE usuario = BINARY '${userb}' AND pass= BINARY'${passb}'`;
        var tablaR = document.getElementById('tabla');
        conexion.query($query, function (err, rows, fields) {
            if (err) {
                console.log("error en el query");
                console.log(err);
                return;
            } else {
                console.log("éxito", rows, fields);

                if (rows.length == 0) {
                    alert("no encontrado");
                } else {
                    var cadena = '';
                    const long = rows.length;
                    for (let i = 0; i < long; i++) {
                        alert("Encontrado");
                        // idUsuario = document.createTextNode(rows[i].id_paciente);
                        localStorage.setItem("idUsuario", rows[i].id_paciente);
                        console.log(idUsuario);
                        window.location.assign("../../src/html/vista-usuario.html");
                        const element = rows[i];
                        cadena += element.usuario + " " + element.pass + "\n";
                        var newRow = tablaR.insertRow(-1);
                        var celdaId = newRow.insertCell(0);
                        var celdaUsuario = newRow.insertCell(1);


                        var textoUsuario = document.createTextNode(rows[i].usuario);
                        celdaId.appendChild(idUsuario);
                        celdaUsuario.appendChild(textoUsuario);

                    }
                }
            }
        });
    }
    else {
        alert("Rellena los campos sugeridos");
    }
}


function registrar_cita() {
    var OpcionClinica = document.getElementById("opcionClinica").value;
    var fechaDada = document.getElementById("fecha-dada").value;
    var horaCita = document.getElementById("horaCita").value;
    var nombreDado = document.getElementById("NombreDado").value;
    var ApellidoP = document.getElementById("ApellidoP").value;
    var ApellidoM = document.getElementById("ApellidoM").value;
    var options = document.querySelector('input[name="options"]:checked').value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var codigoPostal = document.getElementById("codigoPostal").value;
    var calleDireccion = document.getElementById("calleDireccion").value;
    var numeroDireccion = document.getElementById("numeroDireccion").value;
    var numeroTelefonico = document.getElementById("numeroTelefonico").value;
    var correoElectronico = document.getElementById("correoElectronico").value;
    let idUsuario = localStorage.getItem("idUsuario");
    const medico= document.getElementById("nombresDoctor").value;
    console.log(medico);
    const splitString = medico.split(" ");
    console.log(splitString)
    console.log(splitString [0])
    //let id_medico= document.getElementById(nombresDoctor).value;
    if (OpcionClinica != "") {  // añadir esto cuando resetees la base de datos ${fechaNacimiento}','${numeroTelefonico}','${correoElectronico}', 
        $query = `INSERT INTO  citasb VALUES (0,'${splitString[0]}','${nombreDado}','${ApellidoP}','${ApellidoM}','${options}','${horaCita}', '${fechaDada}')`;
        //resetear query //$query = `INSERT INTO  direccion VALUES ('${codigoPostal}','${calleDireccion}','${numeroDireccion}', 1)`;
        conexion.query($query, function (err) {
            if (err) {
                console.log("ERROR");
                console.log(err);
                return;
            }
            else {
                alert("Cita registrada")
                console.log(idUsuario)
                $query = `INSERT INTO  direccion VALUES ('${codigoPostal}','${calleDireccion}','${numeroDireccion}', '${idUsuario}')`;
                conexion.query($query, function (err) {
                    if (err) {
                        console.log("ERROR");
                        console.log(err);
                        return;
                    }
                    else {
                    }
                })
            }
        })
    }
    else {
        alert("Rellena los campos sugeridos");
    }

}


let odontos= [];
let psicos=[];
let neumos=[];
let neuros=[];
let otorrinos=[];
let cardis=[];
let nefres=[];
let dermas=[];
let nutris=[];

function visualizarDoctores() {
    psicologos();
    odonto();
    neumo();
    nefre();
    neuro();
    otorrino();
    cardi();
    derma();
    nutri();
    
    
}
function psicologos(){
    $query = `Select *from doctores where esp='Psicología'`;
    conexion.query($query, function (err, rows) {
        if (err) {
        }
        else {
            console.log("Ejecutado correctamente", rows);
            var long = rows.length;
            for (i = 0; i < long; i++) {
                psicos.push(rows[i].id_medico + " "+rows[i].nombre +" "+rows[i].apellidos)  
            }
        }
    })

}
function nutri(){
    $query = `Select *from doctores where esp='Nutriologo'`; 

    conexion.query($query, function (err, rows) {
        if (err) {
        }
        else {
            console.log("Ejecutado correctamente", rows);
            var long = rows.length;
            for (i = 0; i < long; i++) {
                nutris.push(rows[i].id_medico+" "+rows[i].nombre +" "+rows[i].apellidos)  
            }
        }
    })

}


function odonto(){
    $query = `Select *from doctores where esp='Odontología'`;
    conexion.query($query, function (err, rows) {
        if (err) {
        }
        else {
            console.log("Ejecutado correctamente", rows);
            var long = rows.length;
            for (i = 0; i < long; i++) {
                odontos.push(rows[i].id_medico+" "+rows[i].nombre +" "+rows[i].apellidos)  
            }
        }
    })
}
function neumo(){
    $query = `Select *from doctores where esp='Neumólogo'`;
    conexion.query($query, function (err, rows) {
        if (err) {
        }
        else {
            console.log("Ejecutado correctamente", rows);
            var long = rows.length;
            for (i = 0; i < long; i++) {
                neumos.push(rows[i].id_medico+" "+rows[i].nombre +" "+rows[i].apellidos)  
            }
        }
    })
}

function nefre(){
    $query = `Select *from doctores where esp='Nefrología'`;
    conexion.query($query, function (err, rows) {
        if (err) {
        }
        else {
            console.log("Ejecutado correctamente", rows);
            var long = rows.length;
            for (i = 0; i < long; i++) {
                nefres.push(rows[i].id_medico+" "+rows[i].nombre +" "+rows[i].apellidos)  
            }
        }
    })
}

function neuro(){
    $query = `Select *from doctores where esp='Neurocirujano'`;
    conexion.query($query, function (err, rows) {
        if (err) {
        }
        else {
            console.log("Ejecutado correctamente", rows);
            var long = rows.length;
            for (i = 0; i < long; i++) {
                neuros.push(rows[i].id_medico+" "+rows[i].nombre +" "+rows[i].apellidos)  
            }
        }
    })
}

function otorrino(){
    $query = `Select *from doctores where esp='Otorrinolaringología'`;
    conexion.query($query, function (err, rows) {
        if (err) {
        }
        else {
            console.log("Ejecutado correctamente", rows);
            var long = rows.length;
            for (i = 0; i < long; i++) {
                otorrinos.push(rows[i].id_medico+" "+rows[i].nombre +" "+rows[i].apellidos)  
            }
        }
    })
}
function cardi(){
    $query = `Select *from doctores where esp='Cardiología'`; 
    conexion.query($query, function (err, rows) {
        if (err) {
        }
        else {
            console.log("Ejecutado correctamente", rows);
            var long = rows.length;
            for (i = 0; i < long; i++) {
                cardis.push(rows[i].id_medico+" "+rows[i].nombre +" "+rows[i].apellidos)  
            }
        }
    })
}
function derma(){
    $query = `Select *from doctores where esp='Dematología'`;
    conexion.query($query, function (err, rows) {
        if (err) {
        }
        else {
            console.log("Ejecutado correctamente", rows);
            var long = rows.length;
            for (i = 0; i < long; i++) {
                dermas.push(rows[i].id_medico+" "+rows[i].nombre +" "+rows[i].apellidos)  
            }
        }
    })
}




var especialidadDoctor = ["Odontólogo", "Nutriólogo", "Psicólogo", "Neumólogo", "Neurocirujano", "Otorinolaringólogo", "Cardiólogo", "Nefrólogo", "Dermatólogo",];

/*var nombreDoctor = [
    "Vicentino Madero", "Javier Fernandez", "Genaro Cuesta", "Dolores Ballinas",
    "Maria Robles", "Alejandro Vazquez", "Valeria Muñoa", "Pedro Fernandez",
    "Roberto Guillén", "Ricardo Garza", "Diana Soto", "Gerardo Ruiz",
    "Franklin Smith", "Rosa González", "Samuel García", "Benedicta Cruz",
    "Angel Clemente", "Raymundo Cortés", "Jazmín Garibay", "Esther Posada",
    "Ana Robles", "Romeo Solis", "Salvador Reyes", "Antonio Figueroa",
    "Martin Estrada", "Celestino Martínez", "Roberto Meza", "Manuel Alegría",
    "Vanessa Clemente", "Alex Montiel", "Victor Herrera", "Fabiola Castillo",
    "",];*/

let combobox1 = document.getElementById("especiDoctor");
let combobox2 = document.getElementById("nombresDoctor");

function Recorrer(combobox, valores) {
    combobox2.innerHTML = "";
    for (let index of valores) {
        combobox.innerHTML += `<option>${index}</option>`;
    }
}

function llenarDepar() {
    Recorrer(combobox1, especialidadDoctor);
}
llenarDepar();

var seleccion;
combobox1.addEventListener("change", (e) => {
    let dato = e.target.value;

    switch (dato) {
        case "Odontólogo":
            Recorrer(combobox2,odontos );
            break;
        case "Nutriólogo":
            Recorrer(combobox2,nutris );
            break;
        case "Psicólogo":
            Recorrer(combobox2,psicos);
            break;
        case "Neumólogo":
            Recorrer(combobox2, neumos);
            break;
        case "Neurocirujano":
            Recorrer(combobox2, neuros);
            break;
        case "Otorinolaringólogo":
            Recorrer(combobox2, otorrinos);
            break;
        case "Cardiólogo":
            Recorrer(combobox2, cardis);
            break;
        case "Nefrólogo":
            Recorrer(combobox2, nefres);
            break;
        case "Dermatólogo":
            Recorrer(combobox2, dermas);
            break;
        case "Seleccione la especialidad":
            Recorrer(combobox2,"");
            break;
    }
});





 function visualizarCitas(){
    $query=`Select *from citasb;`;
    var tablaR=document.getElementById("Tabla");
    conexion.query($query,function(err,rows){
    if(err){
        console.log('Error en el query');
        console.log(err);
        return;
    }
    else{
        var long =rows.length;
        for(i=0; i<long; i++){
            var newRow=tablaR.insertRow(-1);
            var celdaId=newRow.insertCell(0);
            var celdaDoctor=newRow.insertCell(1);
            var celdaNombre=newRow.insertCell(2);
            var celdaApellidoP=newRow.insertCell(3);
            var celdaApellidoM=newRow.insertCell(4);
            var celdaSexo=newRow.insertCell(5); 
            var celdaFecha=newRow.insertCell(6);
            var celdaHora=newRow.insertCell(7);
            var textoId=document.createTextNode(rows[i].id_cita);
            var textoNombre= document.createTextNode(rows[i].nombre);
            var textoDoctor=document.createTextNode(rows[i].cita_doctor)
            var textoApellidoP= document.createTextNode(rows[i].ap_p);
            var textoApellidoM= document.createTextNode(rows[i].ap_m);
            //var textoTelefono= document.createTextNode(rows[i].telefono);
            var textoSexo= document.createTextNode(rows[i].sexo);
            var textoFecha= document.createTextNode(rows[i].fecha);
            var textoHorario= document.createTextNode(rows[i].horario);
            //arbol.add(rows[i].id_cita, rows[i]);
            celdaId.appendChild(textoId); 
            celdaDoctor.appendChild(textoDoctor);
            celdaNombre.appendChild(textoNombre);
            celdaApellidoP.appendChild(textoApellidoP);
            celdaApellidoM.appendChild(textoApellidoM);
            celdaSexo.appendChild(textoSexo);
            celdaFecha.appendChild(textoFecha);
            celdaHora.appendChild(textoHorario); 
           
        }
    }
  })
  }
  function refrescar(){
  location.reload();

  }  
  visualizarCitas(); 