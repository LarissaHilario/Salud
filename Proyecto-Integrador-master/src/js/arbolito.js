class cita{
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
    
    
}
class Nodo {
    constructor (key,dat) {
      this.key = key
      this.right = null
      this.left = null
      this.dat=dat
    }
  }
  
  class Tree {
    constructor () {
      this.raiz = null
    }
  
    isEmpty () {
      return this.raiz === null
    }
  
    agregar (key,dat) {
      // arbol no tiene elementos
      if (this.isEmpty()) {
        this.raiz = new Nodo(key,dat)
        return
      }
  
      var aux = this.raiz
  
      while (aux) {
        // vamos hacia la izquierda
        if (key < aux.key) {
          if (aux.left) {
            aux = aux.left
          } else {
            aux.left = new Nodo(key,dat)
            return
          }
        } else { // vamos hacia la derecha
          if (aux.right) {
            aux = aux.right
          } else {
            aux.right = new Nodo(key,dat)
            return
          }
        }
      }
    }   
  
    buscarMin(Nodo = this.raiz) {
      if (!this.isEmpty()) {
        
          // siempre a la izquierda de cualquier Nodo
          // estará el menor valor.
          // iteramos hasta el último menor.
          
        while (Nodo.left) {
          Nodo = Nodo.left
        }
        return Nodo
      }
    }
  
    borrar (key, Nodo = this.raiz) {
      if (!Nodo) {
        return null
      }
      if (Nodo.key === key) {
        // no tiene hijos
        if (!Nodo.left && !Nodo.right) {
          return null
        }
        // no tiene hijo izquierdo
        if (!Nodo.left) {
          return Nodo.right
        }
        // no tiene hijo derecho
        if (!Nodo.right) {
          return Nodo.left
        }
  
        //
        var temp = this.buscarMin(Nodo.right)
        // con ese valor reemplazamos el valor del Nodo que queremos eliminar.
        Nodo.key = temp.key;
        
        Nodo.right = this.borrar(temp.key, Nodo.right)
        return Nodo;
      }
      // buscamos a la derecha
      if (Nodo.key < key) {
        Nodo.right = this.borrar(key, Nodo.right)
        return Nodo
      }
      // buscamos a la izquierda
      if (Nodo.key > key) {
        Nodo.left = this.borrar(key, Nodo.left)
        return Nodo
      }
    }
   
    inOrder (Nodo = this.raiz) {
      if (!Nodo) {
        return
      }
      this.inOrder(Nodo.left)
      console.log('KEY: '+Nodo.key+'\n',Nodo.dat)
      datos.push(Nodo)
      id.push(Nodo.key) 
      nombre.push(Nodo.dat.nombre)
      apellido.push(Nodo.dat.apellidoP)
      this.inOrder(Nodo.right)
      
    }
    
    preOrder (Nodo = this.raiz) {
      if (!Nodo) {
        return
      }
      console.log('KEY: '+Nodo.key+'\n',Nodo.dat)
      this.preOrder(Nodo.left)
      this.preOrder(Nodo.right)
    }
    
    postOrder (Nodo = this.raiz) {
      if (!Nodo) {
        return
      }
      this.postOrder(Nodo.left)
      this.postOrder(Nodo.right)
      console.log('KEY: '+Nodo.key+'\n',Nodo.dat)
    }
    buscar (value) {
      if (this.isEmpty()) {
        return null
      }
  
      var aux = this.raiz
      if (aux.key === value) {
        return aux
      }
  
      while(aux) {
        // si encontramos el nodo con el valor
        // paramos de iterar.
        if (aux.key === value) {
          break
        }
        // seguimos buscando a la derecha
        if (aux.key< value) {
          aux = aux.right
        } else if (aux.key > value) {
          // seguimos buscando a la izquierda
          aux = aux.left
        }
      }
      // retornamos el nodo encontrado.
      // si no encontramos el nodo con el valor
      // aux, toma el valor null.
      return aux
    }
  }
  
  var t = new Tree()
  
  /*t.agregar('Pino',new producto('1001',44,22))
  t.agregar('Jabon ZOte',new producto('1002',44,1))
  t.agregar('Escobas',new producto('1003',44,12))
  t.agregar('Esponja',new producto('1004',44,7))
  t.agregar('Suabitel',new producto('1005',44,5))
  t.agregar('Ganchos',new producto('1006',44,3))
  t.agregar('Vel rosita',new producto('1007',44,89))
  t.agregar('Foca',new producto('1008',44,12))
  t.agregar('Cloro',new producto('1009',44,78))
  t.agregar('Fabuloso',new producto('1010',44,78))
  t.agregar('Trapeador',new producto('1011',44,9))
  t.agregar('Estropajo',new producto('1012',44,22))*/
let datos= [];
let id=[];
let nombre=[];
let apellido=[];

  /*function agregarPedidoCompra() {
    var nombre=document.getElementById("txt8").value;
    var cantidadDeCompra=document.getElementById("txt9").value;
    $query=`select *from productos where nombre ='${nombre}';`
    console.log(nombre)
    conexion.query($query, function (err, rows) {
        if (err) {
        console.log("error en el query");
        console.log(err);
        return;
        }
        else{
            if (Number(cantidadDeCompra)<0) {
                alert('No se acaptan cantidades negativas')
                
            }
            else{ 
                var totalCompra= Number(rows[0].precio_de_compra)*Number(cantidadDeCompra)
                t.agregar(rows[0].nombre,new producto(rows[0].id_producto,cantidadDeCompra,totalCompra))                        
            }
        }});  
  }*/
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
            
            celdaId.appendChild(textoId); 
            celdaDoctor.appendChild(textoDoctor);
            celdaNombre.appendChild(textoNombre);
            celdaApellidoP.appendChild(textoApellidoP);
            celdaApellidoM.appendChild(textoApellidoM);
            celdaSexo.appendChild(textoSexo);
            celdaFecha.appendChild(textoFecha);
            celdaHora.appendChild(textoHorario); 
            t.agregar(new cita(rows[0].id_cita,rows[1].cita_doctor,rows[2].nombre,rows[3].ap_p,rows[4].ap_m,
              rows[5].sexo,rows[6].fecha,rows[7].horario))  
           
        }
    }
  })
  }
  function refrescar(){
  location.reload();
  }
  function verTabla() {
    t.inOrder()
    let tablaR= document.getElementById("tabla");
    verArrays();
    //
    for(let i=0;i < datos.length;i++){
        const button = document.createElement('button'); 
        button.type = 'button'; 
        button.innerText = 'Eliminar';
        button.setAttribute('id',id[i]);
        button.setAttribute('name',cantidades[i]) 
        button.setAttribute('value',cuentaTotal[i])
        button.addEventListener('click',(event)=>{
        event.target.parentNode.parentNode.remove()
        t.borrar(event.target.id)
        let index1= datos.indexOf(t.buscar(event.target.id))
        datos.splice(index1,1)
        console.log("elemento: "+t.buscar(event.target.id));
        let index2= id.indexOf(event.target.id)
        id.splice(index2,1)
        let index3= cantidades.indexOf(event.target.name)
        cantidades.splice(index3,1)
        //let cantidad= document.getElementById(id[i]).value;
        //console.log("inicio del for");
        //let valor = event.target.value;
        
        console.log("Cantidad: "+index3);
        cuentaTotal.splice(index3,1)
        /*if (index4==-1) {
          cuentaTotal.splice(index4+1,1)
        }
        else{
          cuentaTotal.splice(index4,1)}*/
        /*for(i=0;i<cuentaTotal.length;i++){
           console.log("numero de i: "+i+" valir de la posicion: "+cuentaTotal[i]);
           if(event.target.value==cantidad){
            console.log(event.target.value+  " cantidad: "+cantidad);
           }
           console.log(event.target.value+  " cantidad: "+cantidad);
        }*/
       
        /*let index4= cuentaTotal.indexOf(cantidad)
        cuentaTotal.splice(index4-1,1)*/

        /*console.log(" NOMBRE: "+event.target.id+" CANTIDAD: "+event.target.name+" PRECIO: "+cantidad);
        console.log("lugar de total: "+index4)
*/
        verArrays();
        //console.log("aqui abajo"+event.target.id+" valor 1: "+event.target.name+" valor 2:  "+event.target.value)
         });
        var newRow= tablaR.insertRow(-1);
        var celdaProducto= newRow.insertCell(0);
        var celdaCantidad= newRow.insertCell(1);
        var celdaPrecio= newRow.insertCell(2);
        var celdaCheck = newRow.insertCell(3);
        var txtProducto=document.createTextNode(id[i])
        var txtCantidad=document.createTextNode(cantidades[i])
        var txtPrecio=document.createTextNode(cuentaTotal[i])
        celdaProducto.appendChild(txtProducto);
        celdaCantidad.appendChild(txtCantidad);
        celdaPrecio.appendChild(txtPrecio); 
        celdaCheck.appendChild(button);
    }  
  }
 
  function comprar() {
    let long= datos.length-1
    let nombre;
    let precio_de_Compra;
    let cantidad_comprada;
    let precio_total;
    let id_producto
    for (let i = 0; i <= long; i++) {
      nombre = id[i]
      $query=`select *from productos where nombre ='${id[i]}';`
      conexion.query($query, function (err, rows) {
      if (err) {
      console.log("error en el query");
      console.log(err);
      return;
      }
      else{
        nombre= rows[0].nombre
        precio_de_Compra=Number(rows[0].precio_de_compra);
        cantidad_comprada=Number(cantidades[i]);
        precio_total= Number(cuentaTotal[i]);
        id_producto= Number(rows[0].id_producto);
        console.log(cantidad_comprada,precio_total)
        $query=`INSERT INTO compra  (nombre,precio_de_compra,cantidad_comprada,precio_total,Compras_id_producto) 
        VALUES ('${nombre}','${precio_de_Compra}','${cantidad_comprada}','${precio_total}','${id_producto}')`;
        conexion.query($query, function (err) {
        if (err) {
        console.log("error en el query");
        console.log(err);
        return;
        }
        else { alert ("Datos guardados")
          //nombre=id[i]
          //comprar(nombre,cantidad_comprada)
          $query=`select *from productos where nombre ='${id[i]}';`
          let cantAnterior;
          let total;
          conexion.query($query, function (err, rows) {
            if (err) {
              console.log("error en el query");
              console.log(err);
            return;
            }
            else{
            cantAnterior=Number(rows[0].cantidad);
            total=cantAnterior+Number(cantidades[i]);
            $query=`UPDATE productos SET cantidad = '${total}'
            WHERE nombre ='${id[i]}';`
            conexion.query($query, function (err) {
            if (err) {
              console.log("error en el query");
              console.log(err);
            return;
              }
            else{
            console.log('actualizacion exitosa')
            }
        });}
              
          
        })
      }
      }
    )
    }
     })
      //document.getElementById("tabla").deleteRow(1); 
      //t.borrar(id[i])
    };
    //datos=[];
    //id=[];
    //cantidades=[];
    //cuentaTotal=[];
    setTimeout(recargarPagina=()=>{
      location.reload();
    },10000);
}

function vender() {
  let long= datos.length-1
  let nombre;
  let precio_de_Venta;
  let cantidad_vendida;
  let precio_total;
  let id_producto
  for (let i = 0; i <= long; i++) {
    nombre = id[i]
    $query=`select *from productos where nombre ='${id[i]}';`
    conexion.query($query, function (err, rows) {
    if (err) {
    console.log("error en el query");
    console.log(err);
    return;
    }
    else{
      nombre= rows[0].nombre;
      precio_de_Venta=Number(rows[0].precio_de_venta);
      cantidad_vendida=Number(cantidades[i]);
      precio_total= Number(cuentaTotal[i]);
      id_producto= Number(rows[0].id_producto);
      $query=`INSERT INTO venta  (nombre,precio_de_venta,cantidad_vendida,precio_total,productos_id_producto) 
      VALUES ('${nombre}','${precio_de_Venta}','${cantidad_vendida}','${precio_total}','${id_producto}')`;
      conexion.query($query, function (err) {
      if (err) {
      console.log("error en el query");
      console.log(err);
      return;
      }
      else { alert ("Datos guardados")
        //nombre=id[i]
        //comprar(nombre,cantidad_comprada)
        console.log(id[i])
        $query=`select *from productos where nombre ='${id[i]}';`
        let cantAnterior;
        let total;
        conexion.query($query, function (err, rows) {
          if (err) {
            console.log("error en el query");
            console.log(err);
          return;
          }
          else{
          cantAnterior=Number(rows[0].cantidad)
          total=cantAnterior-Number(cantidades[i]);
          $query=`UPDATE productos SET cantidad = '${total}'
          WHERE nombre ='${id[i]}';`
          conexion.query($query, function (err) {
          if (err) {
            console.log("error en el query");
            console.log(err);
          return;
            }
          else{
          console.log('actualizacion exitosa: ')
          console.log(cantAnterior+' '+total)
          }
      });}
            
        
      })
    }
    }
  )
  }
  })
 
  };
 
  setTimeout(recargarPagina=()=>{
    location.reload();
  },10000);
}

// function recargarPagina(){
//   location.reload();
// }
function verArrays() {
  console.log(datos)
  console.log(id)
  console.log(cantidades)
  console.log(cuentaTotal)
}



      

  

  
  /*console.log('\nVista PreOrden: \n')
  t.preOrder()
  console.log('\nVista InOrden: \n')
 t.inOrder()
 t.agregar('Jabon ZOte',new producto('1002',44,1))
 var x=t.buscar('Jabon ZOte')
 console.log(x.dat.Id)*/
  