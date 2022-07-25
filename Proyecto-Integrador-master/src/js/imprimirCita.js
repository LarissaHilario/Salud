function imprimirCita(){
    var fechaDada = document.getElementById("fecha-dada").value;
    var horaCita = document.getElementById("horaCita").value;
    var nombreDado = document.getElementById("NombreDado").value;
    var ApellidoP = document.getElementById("ApellidoP").value;
    var ApellidoM = document.getElementById("ApellidoM").value;
    var Apellidos = ApellidoP + " " + ApellidoM;
    var citaGenerada =[{fecha:fechaDada,horario:horaCita, nombre:nombreDado, apellidos: Apellidos}]
    localStorage.setItem("cita", JSON.stringify(citaGenerada));
    // OJO NOTA IMPORTANTE, AUN NO GUARDO EN MI LOCALSTORAGE EL NOMBRE DEL DOCTOR Y LA ESPECIALIDAD PARA
    // POSTERIORMENTE IMPRIMIRLOS EN EL HTML Y MOSTRARLOS EN EL PDF, SOLO ESO FALTARÍA.

}