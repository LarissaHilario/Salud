let datos= []; 
class cita{
    constructor(cita_doctor, nombre,ap_p,ap_m,sexo,fecha,horario){
        this.cita_doctor=cita_doctor
        this.nombre=nombre
        this.ap_p=ap_p
        this.ap_m=ap_m
        this.sexo=sexo
        this.fecha=fecha
        this.horario=horario
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
      //id.push(Nodo.key)
      //cantidades.push(Nodo.dat.cantidad)
      //cuentaTotal.push(Nodo.dat.precioTotal)
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
  function agregarCitas(){
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
          t.agregar(rows[i].id_cita,new cita(rows[i].cita_doctor,rows[i].nombre,rows[i].ap_p,rows[i].ap_m,rows[i].sexo,rows[i].fecha,rows[i].horario))   
          
        }
    }
    verTabla();
  })
  }

  function verTabla() {
    t.inOrder()
    console.log(t)
    console.log(datos);
    let tablaR= document.getElementById("Tabla");
    for(let i=0;i < datos.length;i++){
      const button = document.createElement('button'); 
        button.type = 'button'; 
        button.innerText = 'Eliminar';
        button.setAttribute('id',datos[i].key);
        button.addEventListener('click',(event)=>{
         
      
          event.target.parentNode.parentNode.remove()
          t.borrar(event.target.id)//let borrar= t.buscar(event.target.id)
         })
      var newRow=tablaR.insertRow(-1);
      var celdaId=newRow.insertCell(0);
      var celdaDoctor=newRow.insertCell(1);
      var celdaNombre=newRow.insertCell(2);
      var celdaApellidoP=newRow.insertCell(3);
      var celdaApellidoM=newRow.insertCell(4);
      var celdaSexo=newRow.insertCell(5); 
      var celdaFecha=newRow.insertCell(6);
      var celdaHora=newRow.insertCell(7);
      var celdaCheck = newRow.insertCell(8);
      var textoId=document.createTextNode(datos[i].key); 
      var textoDoctor=document.createTextNode(datos[i].dat.cita_doctor)
      var textoNombre= document.createTextNode(datos[i].dat.nombre);
      var textoApellidoP= document.createTextNode(datos[i].dat.ap_p);
      var textoApellidoM= document.createTextNode(datos[i].dat.ap_m);
      //var textoTelefono= document.createTextNode(rows[i].telefono);
      var textoSexo= document.createTextNode(datos[i].dat.sexo);
      var textoFecha= document.createTextNode(datos[i].dat.fecha);
      var textoHorario= document.createTextNode(datos[i].dat.horario);
      //arbol.add(rows[i].id_cita, rows[i]);
      celdaId.appendChild(textoId); 
      celdaDoctor.appendChild(textoDoctor);
      celdaNombre.appendChild(textoNombre);
      celdaApellidoP.appendChild(textoApellidoP);
      celdaApellidoM.appendChild(textoApellidoM);
      celdaSexo.appendChild(textoSexo);
      celdaFecha.appendChild(textoFecha);
      celdaHora.appendChild(textoHorario); 
      celdaCheck.appendChild(button);
    }  
  }

