
var conexion = require('../../../conectar');


function registro() {
    var nombre = document.getElementById("name").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var direccion = document.getElementById("direccion").value;
    var info = document.getElementById("info").value;
    var tel = document.getElementById("tel").value;
    var espi = document.getElementById("esp").value;
    var img = document.getElementById("img-doctor").value;
    if (nombre != "" && email != "" && apellidos != "" && direccion != "" && info != "" && tel != "" && espi != "") {
        $query = `INSERT INTO doctores (id_medico,nombre,apellidos,email,direccion,tel,esp,info,image) VALUES (0,'${nombre}','${apellidos}','${email}','${direccion}','${tel}', '${espi}','${info}', '${img}')`;
        conexion.query($query, function (err) {
            if (err) {
                console.log("ERROR");
                console.log(err);
                return;
            }
            else {
                alert("Médico registrado")
            }
        })
    }
    else {
        alert("Rellena los campos sugeridos");
    }
}

function visualizar() {
    var tablaR = document.getElementById("tabla");
    $query = 'Select *from doctores;';
    conexion.query($query, function (err, rows) {
        if (err) {
        }
        else {
            let IdCounter = 0;
            console.log("Ejecutado correctamente", rows);
            var long = rows.length;
            for (i = 0; i < long; i++) {
                IdCounter++;
                var width = window.innerWidth;
                var height = window.innerHeight;
                var x = Math.floor(Math.random() * width);
                var y = Math.floor(Math.random() * height);
                if (x > (width + 50)) x = width + 50;
                if (y > (height + 50)) y = height + 50;
                const originalString = rows[i].image;
                // Replace the first instance of "How" with "Where"
                const newImg = originalString.replace("C:fakepath", "");
                console.log(newImg);
                const newMed =
                    `
                    <br>
                    <br>
                    <div class="circulo1" id="${rows[i].id_medico}">
                    <b style="padding-left: 32%; padding-top: 20%;"> ${rows[i].nombre}</b>
                    <b id="ba">${rows[i].apellidos}</b>
                    <p  style="padding-left: 60%; padding-top: 5%;">Información acerca del doctor:
                    <br><br>    
                    ${rows[i].info}
                    </p>
                    <h5>${rows[i].esp}</h5>
                    <br>
                    <img src="../../src/images/${newImg}" style="position:flex; top:50%">
                    <button class="btn-gestionar"onClick="deletemed(${rows[i].id_medico})">Borrar</button>
                    <br>
                    <button class="btn-modificar"  onclick="modificar(${rows[i].id_medico})">Editar</button>
                    <br>
                    <br>
                    
                    </div>`;
                div.style.position = 'absolute';
                div.style.left = '25%';
                div.style.top = '80%';
                div.x = x;
                div.y = y;
                div.innerHTML += newMed;
                //return div;
            }
            
        }
    })
}

function deletemed(id, medicob) {
    $query = `set foreign_key_checks=0`;// 1 para habilitar 
    //var valorBuscado= document.getElementById("IdCounter");   
    console.log(id);
    console.log(medicob);
    //$query = `delete from doctores where id_medico='${id}'`;
    var tablaR = document.getElementById("Tabla2")
    conexion.query($query, function (err, rows) {
        if (err) {
            console.log("error en el query");
            console.log(err);
            return;
        }
        else {
            $query = `delete from doctores where id_medico='${id}'`;
            var tablaR = document.getElementById("Tabla2")
            conexion.query($query, function (err, rows) {
                if (err) {
                    console.log("error en el query");
                    console.log(err);
                    return;
                }
                else {
                    let medToDelete = document.getElementById(id);
                    div.removeChild(medToDelete);
                    var long = rows.length;
                    console.log("ejecutado correctamente", rows);
                    $query = `set foreign_key_checks=1`;
                    var tablaR = document.getElementById("Tabla2")
                    conexion.query($query, function (err, rows) {
                        if (err) {
                            console.log("error en el query");
                            console.log(err);
                            return;
                        }
                        else {
                            console.log("llaves activadas")
                        }
                    })
                }
            })
        }
    })}


        function modificar(id) {
            var nombre = document.getElementById("name").value;
            var apellidos = document.getElementById("apellidos").value;
            var email = document.getElementById("email").value;
            var direccion = document.getElementById("direccion").value;
            var info = document.getElementById("info").value;
            var tel = document.getElementById("tel").value;
            var espi = document.getElementById("esp").value;
            var img = document.getElementById("img-doctor").value;
            $query = `update doctores set nombre='${nombre}',apellidos='${apellidos}', email='${email}', direccion='${direccion}',tel='${tel}',esp='${espi}',info='${info}',
                 image='${img}'where id_medico='${id}'`;
            var tablaR = document.getElementById('tabla');
            conexion.query($query, function (err, rows, fields) {
                if (err) {
                    console.log("error en el query");
                    console.log(err);
                    return;
                } else {
                    console.log("éxito", rows, fields);
                    alert("cambios realizados")
                    visualizar();

                }
            })
        }
