const { off } = require('../../../conectar');
var conexion = require('../../../conectar');
const BotonSubir = document.getElementById("btnSubir");

BotonSubir.addEventListener("click", () => {
  registrar_cita();
});

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

  if (OpcionClinica != "") {
    $query = `INSERT INTO  citasb VALUES (0,6,'${nombreDado}','${ApellidoP}','${ApellidoM}','${options}','${horaCita}', '${fechaDada}')`;
    //$query = `INSERT INTO  direccion VALUES ('${codigoPostal}','${calleDireccion}','${numeroDireccion}', 1)`;
    conexion.query($query, function (err) {
      if (err) {
        console.log("ERROR");
        console.log(err);
        return;
      }
      else {
        alert("Cita registrada")
        $query = `INSERT INTO  direccion VALUES ('${codigoPostal}','${calleDireccion}','${numeroDireccion}', 1)`;
      }
    })
  }
  else {
    alert("Rellena los campos sugeridos");
  }

}


function seleccionar_doc(){


var especialidadDoctor = ["Odontólogo", "Psicólogo", "Neumólogo", "Neurocirujano", "Otorinolaringólogo", "Cardiólogo", "Nefrólogo", "Dermatólogo",];


var nombreDoctor = [
  "Vicentino Madero", "Javier Fernandez", "Genaro Cuesta", "Dolores Ballinas",
  "Maria Robles", "Alejandro Vazquez", "Valeria Muñoa", "Pedro Fernandez",
  "Roberto Guillén", "Ricardo Garza", "Diana Soto", "Gerado Ruiz",
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
}