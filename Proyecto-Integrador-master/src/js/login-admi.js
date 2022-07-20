var conexion = require('../../../conectar');

function ingresar() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var passc= document.getElementById("passC").value;
    if (email != "" && pass != "" && passc!="") {
        if(pass==passc){
        $query = `SELECT * FROM administradores WHERE email = BINARY '${email}' AND password= BINARY '${pass}'`;
        var tablaR = document.getElementById('tabla');
        conexion.query($query, function (err, rows, fields) {
            if (err) {
                console.log("error en el query");
                console.log(err);
                return;
            } else {
                console.log("éxito", rows, fields);

                if (rows.length == 0) {
                    alert("Usuario o contraseña incorrectos");
                } else {
                    var cadena = '';
                    const long = rows.length;
                    for (let i = 0; i < long; i++) {
                        alert("Bienvenido " + rows[i].user);
                    window.location.assign("../../src/html/vista-admi.html");
                        cadena += element.user + " " + element.pass + "\n";

                        var newRow = tablaR.insertRow(-1);
                        var celdaId = newRow.insertCell(0);
                        var celdaUsuario = newRow.insertCell(1);

                        var textoId = document.createTextNode(rows[i].id_paciente);
                        var textoUsuario = document.createTextNode(rows[i].user);

                        celdaId.appendChild(textoId);
                        celdaUsuario.appendChild(textoUsuario);
                        console.log(cadena);
                    }
                }
            }
        });
    }
    else{
        alert("Las contraseñas no coinciden");
    }
}
    else {
        alert("Rellena los campos sugeridos");
    }


}