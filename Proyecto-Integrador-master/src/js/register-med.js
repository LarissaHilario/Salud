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
                alert("Médico registrado");
                visualizar();
                /*let IdCounter=0;
                IdCounter++;
                    const newMed = `
                    <div class="circulo1" id="${IdCounter}">
                    <b> ${nombre}</b> <br>
                    <b>${apellidos}</b>
                    <p>Información acerca del doctor:
                    <br><br>    
                    ${info}
                    </p>
                    <h5>${espi}</h5>
                    <img ${img}>
                    <button class="btn-gestionar" onClick="deleteMed(${IdCounter})">Borrar</button>
                    </div>`;
                    div.innerHTML += newMed;
                    updateStats();*/
            }
        })
    }
    else {
        alert("Rellena los campos sugeridos");
    }
}


/*
var crear = function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var x = Math.floor(Math.random() * width);
    var y = Math.floor(Math.random() * height);
    if (x > (width - 50)) x = width - 50;
    if (y > (height - 50)) y = height - 50;

    // set div attributes

    var div = document.createElement('div');
    const newMed = `
                    <div class="circulo1" id="${IdCounter}">
                    <b> ${nombre}</b> <br>
                    <b>${apellidos}</b>
                    <p>Información acerca del doctor:
                    <br><br>    
                    ${info}
                    </p>
                    <h5>${espi}</h5>
                    <img ${img}>
                    <button class="btn-gestionar" onClick="deleteMed(${IdCounter})">Borrar</button>
                    </div>`;
    div.id = 'ball';
    div.style.zIndex = '1';
    div.style.position = 'absolute';
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.borderRadius = '50%';
    div.style.background = color;
    // Then append the whole thing onto the body
    document.getElementsByTagName('body')[0].appendChild(div);

    // default start position
    div.x = x;
    div.y = y;
    return div;
}
var mover = function (div, x, y) {

    // add x coordinate
    div.x = div.x + x;
    div.style.left = div.x + 'px';

    // add y coordinate
    div.y = div.y + y;
    div.style.top = div.y + 'px';
}

var repetirMover = function (div, x, y, limite) {
    var counter = 0;

    var timerMove = function (div, x, y) {
        if (counter >= limite) return;
        counter += 1;

        setTimeout(function () {
            mover(div, x, y);
            timerMove(div, x, y);
        }, 1000);
    }
    timerMove(div, x, y);
}
*/
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
                if (x > (width - 50)) x = width - 50;
                if (y > (height - 50)) y = height - 50;
                const newMed =
                    `
                    <br>
                    <br>
                    <div class="circulo1" id="${rows[i].id_medico}">
                    <b> ${rows[i].nombre}</b> <br>
                    <b>${rows[i].apellidos}</b>
                    <p>Información acerca del doctor:
                    <br><br>    
                    ${rows[i].info}
                    </p>
                    <h5>${rows[i].esp}</h5>
                    <img ${rows[i].image}>
                    <button class="btn-gestionar" onClick="deletemed(${rows[i].id_medico})">Borrar</button>
                    <br> <br>
                    <button class="btn-gestionar"  onclick="modificar(${rows[i].id_medico})">Editar</button>
                    <br>
                    <br>
                    </div>`;
                div.style.position = 'absolute';
                div.style.left = '10%';
                div.style.top = '75%';
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

                }
            })
        }


//$query =`DELETE FROM doctores WHERE id_medico = '${medicob}'`;

// ; let medToDelete = document.getElementById(id);
// div.removeChild(medToDelete);

/*
div.addEventListener('click', (event)=>{ 
    event.preventDefault();
    if(event.srcElement.nodeName == 'BUTTON'){
        deleteMed(event.srcElement.parentNode.id);
    }
});

let updateStats = ()=>{
    let element = div.querySelectorAll('div');
    stats.innerHTML = `Tareas pendientes: ${element.length} Completadas: ${checkbox.length}`;
};
let deleteMed = (id) => {
    console.log(id);
    let medToDelete = document.getElementById(id);
    div.removeChild(medToDelete);
};
/*

let addMed = ()=>{
    IdCounter++;
    //Agregar tarea
    const newMed = `
    <div class="circulo1" id="${IdCounter}">
    <b>${nombre,apellidos}</b>
    <p>Información acerca del doctor:
      <br><br>
      ${info}
    </p>
    <h5>${espi}</h5>
    <img ${img}>
    <button class="btn-gestionar"><a href="/gestionarDoctor.html">Gestionar</a></button>
  </div>`;
    div.innerHTML += newMed;
    nombre.value = '';
}
*/
/*
function Busqueda(id, IdCounter) {
    var Busqueda = document.getElementById("id");
    console.log(id);
    $query = `select* from doctores where id_medico = '${Busqueda}'`;
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
                    const element = rows[i];
                    cadena += element.nombre + " " + element.apellidos + "\n";
                    borrar += element.id_medico;
                    var newRow = tablaR.insertRow(-1);
                    var celdaId = newRow.insertCell(0);
                    var celdaUsuario = newRow.insertCell(1);

                    var textoId = document.createTextNode(rows[i].id_medico);
                    var textoUsuario = document.createTextNode(rows[i].nombre);
                    let medToDelete = document.getElementById(id);
                    div.removeChild(medToDelete);
                    celdaId.appendChild(textoId);
                    celdaUsuario.appendChild(textoUsuario);
                    console.log(cadena);
                    $query = `DELETE FROM doctores WHERE id_medico='${borrar}'`;
                }
            }
        }
    });
}
/*

var conexion= require ('./conectar');

function registro(){
var nombre=document.getElementById("RUser").value;
var pass=document.getElementById("RPass").value;
var rcpass=document.getElementById("RCPass").value;
 if (pass==rcpass){

    $query= `INSERT INTO mytable1 (id,name,password) VALUES (0,'${nombre}','${pass}')`;
    conexion.query($query,function(err){
        if (err){
            console.log("error en el query");
            console.log(err);
            return;
        }
        else{
            alert ("datos guardados")
        }
    })}
};

    function visualizar(){
    var tablaR=document.getElementById("tabla");
    $query='Select *from mytable1;';
    conexion.query($query,function(err,rows){
        if(err){

        }
        else{
            console.log("Ejecutado correctamente",rows);
            var long =rows.length;
            for(i=0; i<long; i++){
                var newRow=tablaR.insertRow(-1);
                var celdaId=newRow.insertCell(0);
                var celdaUsuario=newRow.insertCell(1);
                var textoId=document.createTextNode(rows[i].id);
                var textoUsuario= document.createTextNode(rows[i].name);
                celdaId.appendChild(textoId);
                celdaUsuario.appendChild(textoUsuario);
            }
        }
    })
}

function modificar(){
    var Busqueda= document.getElementById("buscar").value;
    $query =`SELECT * FROM mytable1 WHERE name = '${Busqueda}'`;
    var tablaR = document.getElementById('tabla');
    conexion.query($query, function(err,rows,fields){
        if(err){
            console.log("error en el query");
            console.log(err);
        return;
        }else{
            console.log("éxito",rows,fields);
            
            if(rows.length == 0){
                alert("no encontrado");
            }else{
                var cadena='';
                const long = rows.length;
                for(let i=0;i<long;i++){
                    alert("Encontrado");
                    const element = rows[i];
                    cadena +=element.name+" "+element.password+"\n";

                var newRow = tablaR.insertRow(-1);
                var celdaId = newRow.insertCell(0);
                var celdaUsuario = newRow.insertCell(1);

                var textoId = document.createTextNode(rows[i].id_persona);
                var textoUsuario = document.createTextNode(rows[i].nombre);

                celdaId.appendChild(textoId);
                celdaUsuario.appendChild(textoUsuario);
                console.log(cadena);
                }
            }	
        }
    });
}
*/