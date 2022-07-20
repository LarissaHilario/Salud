$('.fj-date').datepicker({
    format: "yyyy-mm-dd",
    language: "es"
});


function fechasValidar(){
    var fechaIngresada = document.getElementById("fecha-dada").value;
    let fechaConParametros= new Date(fechaIngresada);
    let f = new Date();
    var dia_cita = fechaConParametros.getDay();
    var año_cita= fechaConParametros.getFullYear();



    var mes_cita = (fechaConParametros.getMonth()+1).toString();
    if (mes_cita.length <= 1){
        mes_cita = "0" + mes_cita;
    }

    var fecha_cita = fechaConParametros.getDate().toString(); 
    if(fecha_cita.length <=1){
        fecha_cita = "0" + fecha_cita;
    }
    fecha_cita = año_cita+ "-" + mes_cita + "-" + fecha_cita;

   
    var mes =(f.getMonth()+1).toString();
    if (mes.length <= 1){
        mes = "0" + mes;
    }
    var dia = f.getDate().toString();

    if(dia.length <=1){
        dia = "0" + dia;
    }

    fecha_actual= f.getFullYear() + "-" + mes + "-" + dia;
    console.log(fecha_actual);
    console.log(fecha_cita);


    /* Validando que la fecha sea la correcta */

    if (fecha_cita > fecha_actual){
        console.log("fecha del input es mayor");
    }else if(fecha_actual == fecha_cita){
        console.log("Son iguales las fechas");
    }else if(fecha_cita < fecha_actual){
        console.log("fecha del input es menor");
    }
    
    /* Validando que la fecha no esté ocupada */






    /*
     ESTO ES PARA CONVERTIR EN STRING EL MES Y EL DÍA

    let diaSemana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sabado'];
    let mesAnyo = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre', 'Octubre','Noviembre','Diciembre',];

    var diaCitaString = diaSemana[dia_cita];
    var mesCitaString = mesAnyo[mes_cita];      */



    



}

