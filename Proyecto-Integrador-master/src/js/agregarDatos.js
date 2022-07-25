import swal from 'sweetalert';

var conexion = require('../../../conectar');

function registrar(){
var nombre=document.getElementById("nombre").value;
var apellidoP=document.getElementById("apellidoP").value;
var apellidoM=document.getElementById("apellidoM").value;
var Telefono=document.getElementById("telefono").value;
var Direccion=document.getElementById("direccion").value;
var Estado=document.getElementById("estado").value;
var Correo=document.getElementById("correo").value;

 if (nombre!=""){
    $query = `INSERT INTO mytable1 VALUES (0,'${nombre}','${apellidoP}','${apellidoM}','${Telefono}'
    ,'${Direccion}','${Estado}','${Correo}')`;
    conexion.query($query,function(err){
        if (err){
            console.log("error en el query");
            console.log(err);
            return;
        }
        else{
            swal ("Registro exitoso")
        }
    })}
    location.reload();
};

     window.onload = function visualizar(){
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
                var celdaNombre=newRow.insertCell(1);
                var celdaApellidoP=newRow.insertCell(2);
                var celdaApellidoM=newRow.insertCell(3);
                var celdaTelefono=newRow.insertCell(4);
                var celdaDireccion=newRow.insertCell(5);
                //var celdaEstado=newRow.insertCell(6);
                var celdaCorreo=newRow.insertCell(6);
                var textoId=document.createTextNode(rows[i].id_cita);
                var textoNombre= document.createTextNode(rows[i].nombre);
                var textoApellidoP= document.createTextNode(rows[i].ap_p);
                var textoApellidoM= document.createTextNode(rows[i].ap_m);
                var textoTelefono= document.createTextNode(rows[i].sexo);
                var textoDireccion= document.createTextNode(rows[i].direccion);
                var textoEstado= document.createTextNode(rows[i].estado);
                var textoCorreo= document.createTextNode(rows[i].correo);
                celdaId.appendChild(textoId);
                celdaNombre.appendChild(textoNombre);
                celdaApellidoP.appendChild(textoApellidoP);
                celdaApellidoM.appendChild(textoApellidoM);
                celdaTelefono.appendChild(textoTelefono);
                celdaDireccion.appendChild(textoDireccion);
                celdaEstado.appendChild(textoEstado);
                celdaCorreo.appendChild(textoCorreo);
            }
        }
    })
}
function refrescar(){
    location.reload();
}

 function buscarDatos(){
    var Busqueda= document.getElementById("buscar").value;
    $query =`SELECT * FROM mytable1 WHERE id = '${Busqueda}'`;
    alert("Dato encontrado");
    var tablaR = document.getElementById('tabla2');
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
                const long = rows.length;
                for(let i=0;i<long;i++){
                    var newRow=tablaR.insertRow(-1);
                    var celdaId=newRow.insertCell(0);
                    var celdaNombre=newRow.insertCell(1);
                    var celdaApellidoP=newRow.insertCell(2);
                    var celdaApellidoM=newRow.insertCell(3);
                    var celdaTelefono=newRow.insertCell(4);
                    var celdaDireccion=newRow.insertCell(5);
                    var celdaEstado=newRow.insertCell(6);
                    var celdaCorreo=newRow.insertCell(7);
                    var textoId=document.createTextNode(rows[i].id);
                    var textoNombre= document.createTextNode(rows[i].nombre);
                    var textoApellidoP= document.createTextNode(rows[i].apellidoP);
                    var textoApellidoM= document.createTextNode(rows[i].apellidoM);
                    var textoTelefono= document.createTextNode(rows[i].telefono);
                    var textoDireccion= document.createTextNode(rows[i].direccion);
                    var textoEstado= document.createTextNode(rows[i].estado);
                    var textoCorreo= document.createTextNode(rows[i].correo);
                    celdaId.appendChild(textoId);
                    celdaNombre.appendChild(textoNombre);
                    celdaApellidoP.appendChild(textoApellidoP);
                    celdaApellidoM.appendChild(textoApellidoM);
                    celdaTelefono.appendChild(textoTelefono);
                    celdaDireccion.appendChild(textoDireccion);
                    celdaEstado.appendChild(textoEstado);
                    celdaCorreo.appendChild(textoCorreo);
                }
            }	
        }
    });
} 

function cambiarDatos(){
    var Busqueda= document.getElementById("buscar").value;
    var cambiar = document.getElementById("cambiar").value;
    $query =`UPDATE mytable1 SET estado = '${cambiar}' WHERE id = '${Busqueda}'`;
    alert("Estado cambiado");
    var tablaR = document.getElementById('tabla2');
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
                const long = rows.length;
                for(let i=0;i<long;i++){
                    var newRow=tablaR.insertRow(-1);
                    var celdaId=newRow.insertCell(0);
                    var celdaNombre=newRow.insertCell(1);
                    var celdaApellidoP=newRow.insertCell(2);
                    var celdaApellidoM=newRow.insertCell(3);
                    var celdaTelefono=newRow.insertCell(4);
                    var celdaDireccion=newRow.insertCell(5);
                    var celdaEstado=newRow.insertCell(6);
                    var celdaCorreo=newRow.insertCell(7);
                    var textoId=document.createTextNode(rows[i].id);
                    var textoNombre= document.createTextNode(rows[i].nombre);
                    var textoApellidoP= document.createTextNode(rows[i].apellidoP);
                    var textoApellidoM= document.createTextNode(rows[i].apellidoM);
                    var textoTelefono= document.createTextNode(rows[i].telefono);
                    var textoDireccion= document.createTextNode(rows[i].direccion);
                    var textoEstado= document.createTextNode(rows[i].estado);
                    var textoCorreo= document.createTextNode(rows[i].correo);
                    celdaId.appendChild(textoId);
                    celdaNombre.appendChild(textoNombre);
                    celdaApellidoP.appendChild(textoApellidoP);
                    celdaApellidoM.appendChild(textoApellidoM);
                    celdaTelefono.appendChild(textoTelefono);
                    celdaDireccion.appendChild(textoDireccion);
                    celdaEstado.appendChild(textoEstado);
                    celdaCorreo.appendChild(textoCorreo);
                }
            }	
        }
    });
} 

function eliminarDatos(){
    var Busqueda= document.getElementById("buscar").value;
    $query =`DELETE FROM mytable1 WHERE id = '${Busqueda}'`;
    alert("Paciente eliminado");
    var tablaR = document.getElementById('tabla2');
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
                const long = rows.length;
                for(let i=0;i<long;i++){
                    var newRow=tablaR.insertRow(-1);
                    var celdaId=newRow.insertCell(0);
                    var celdaNombre=newRow.insertCell(1);
                    var celdaApellidoP=newRow.insertCell(2);
                    var celdaApellidoM=newRow.insertCell(3);
                    var celdaTelefono=newRow.insertCell(4);
                    var celdaDireccion=newRow.insertCell(5);
                    var celdaEstado=newRow.insertCell(6);
                    var celdaCorreo=newRow.insertCell(7);
                    var textoId=document.createTextNode(rows[i].id);
                    var textoNombre= document.createTextNode(rows[i].nombre);
                    var textoApellidoP= document.createTextNode(rows[i].apellidoP);
                    var textoApellidoM= document.createTextNode(rows[i].apellidoM);
                    var textoTelefono= document.createTextNode(rows[i].telefono);
                    var textoDireccion= document.createTextNode(rows[i].direccion);
                    var textoEstado= document.createTextNode(rows[i].estado);
                    var textoCorreo= document.createTextNode(rows[i].correo);
                    celdaId.appendChild(textoId);
                    celdaNombre.appendChild(textoNombre);
                    celdaApellidoP.appendChild(textoApellidoP);
                    celdaApellidoM.appendChild(textoApellidoM);
                    celdaTelefono.appendChild(textoTelefono);
                    celdaDireccion.appendChild(textoDireccion);
                    celdaEstado.appendChild(textoEstado);
                    celdaCorreo.appendChild(textoCorreo);
                }
            }	
        }
    });
    location.reload();
} 


