var conexion = require('../../../conectar');
const { off } = require('../../../conectar');
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

    if (OpcionClinica != "") {
        $query = `INSERT INTO  citasb VALUES (0,6,'${nombreDado}','${ApellidoP}','${ApellidoM}','${options}','${horaCita}', '${fechaDada}')`;
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



function visualizarDoctores() {
    var tablaR = document.getElementById("tabla");
    let nombre = [];
    let apellido = [];
    $query = 'Select *from doctores;';
    conexion.query($query, function (err, rows) {
        if (err) {

        }
        else {
            console.log("Ejecutado correctamente", rows);
            var long = rows.length;
            for (i = 0; i < long; i++) {
                nombre[i] = rows[i].nombre;
                apellido[i] = rows[i].apellido;
                console.log(nombre);
                console.log(apell)
                // var newRow = tablaR.insertRow(-1);
                // var celdaId = newRow.insertCell(0);
                // var celdaUsuario = newRow.insertCell(1);
                // var textoId = document.createTextNode(rows[i].id);
                // var textoUsuario = document.createTextNode(rows[i].name);
                celdaId.appendChild(textoId);
                celdaUsuario.appendChild(textoUsuario);
            }
        }
    })
}




var especialidadDoctor = ["Odontólogo", "Psicólogo", "Neumólogo", "Neurocirujano", "Otorinolaringólogo", "Cardiólogo", "Nefrólogo", "Dermatólogo",];

var nombreDoctor = [
    "Vicentino Madero", "Javier Fernandez", "Genaro Cuesta", "Dolores Ballinas",
    "Maria Robles", "Alejandro Vazquez", "Valeria Muñoa", "Pedro Fernandez",
    "Roberto Guillén", "Ricardo Garza", "Diana Soto", "Gerardo Ruiz",
    "Franklin Smith", "Rosa González", "Samuel García", "Benedicta Cruz",
    "Angel Clemente", "Raymundo Cortés", "Jazmín Garibay", "Esther Posada",
    "Ana Robles", "Romeo Solis", "Salvador Reyes", "Antonio Figueroa",
    "Martin Estrada", "Celestino Martínez", "Roberto Meza", "Manuel Alegría",
    "Vanessa Clemente", "Alex Montiel", "Victor Herrera", "Fabiola Castillo",
    "",];

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

combobox1.addEventListener("change", (e) => {
    let dato = e.target.value;

    switch (dato) {
        case "Odontólogo":
            Recorrer(combobox2, nombreDoctor.slice(0, 4));
            break;
        case "Psicólogo":
            Recorrer(combobox2, nombreDoctor.slice(4, 8));
            break;
        case "Neumólogo":
            Recorrer(combobox2, nombreDoctor.slice(8, 12));
            break;
        case "Neurocirujano":
            Recorrer(combobox2, nombreDoctor.slice(12, 16));
            break;
        case "Otorinolaringólogo":
            Recorrer(combobox2, nombreDoctor.slice(16, 20));
            break;
        case "Cardiólogo":
            Recorrer(combobox2, nombreDoctor.slice(20, 24));
            break;
        case "Nefrólogo":
            Recorrer(combobox2, nombreDoctor.slice(24, 28));
            break;
        case "Dermatólogo":
            Recorrer(combobox2, nombreDoctor.slice(28, 32));
            break;
        case "Seleccione el doctor":
            Recorrer(combobox2, nombreDoctor.slice(33, 35));
            break;
    }
});








 /*function visualizarCitas(){
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
  }*/