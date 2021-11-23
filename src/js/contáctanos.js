function validar1(){
    //validaciones nombre
    let input_nombre = document.getElementById("nombre").value;
    let posibleTexto=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if(!posibleTexto.exec(input_nombre.value)){
        alert("El nombre solo puede contener letras y espacios");
        return true;
    }
}

function validar2(){
    let input_correo = document.getElementById("mail").value;
    let posibleTexto=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let posibleCorreo=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
     //validación correo
     if(input_correo.length>40||input_correo.length<10){
         alert("Error, el tamaño del correo no es correcto");
        return true;
    }
    if(!posibleCorreo.exec(input_correo)){
        alert("El correo no tiene el formato esperado");
        return true;
    }
}

function validar3() {
    let posibleNumero=/^[0-9]+$/;
    let input_telefono = document.getElementById("teléfono").value;
    //validaciones teléfono
    if(input_telefono.length > 10||input_telefono.length<8){
        alert("Error, el tamaño del teléfono no es correcto");
        return true;
    }
    if(!input_telefono.match(posibleNumero)){
        alert("El teléfono solo puede contener numeros");
        return true;
    }
}

function validar4(){
    //validaciones asunto
    let posibleTexto=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let input_asunto = document.getElementById("asunto1").value;
    if(input_asunto.length > 30 || input_asunto.length<0){
        alert("Error, el tamaño del asunto no es correcto");
        return true;
    }
    if(!posibleTexto.exec(input_asunto.value)){
        alert("El asunto solo puede contener letras y espacios");
        return true;
    }
}


function validar5(){
    let posibleTexto=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let input_mensaje = document.getElementById("texto").value;
    //validaciones mensaje
    if(input_mensaje.length > 100 ||input_mensaje.length<0){
        alert("Error, el tamaño del mensaje no es correcto");
        return true;
    }
    if(!posibleTexto.exec(input_mensaje.value)){
        alert("El asunto solo puede contener letras y espacios");
        return true;
    }
}

function crearlink(){
    if (validar1()==true || validar2() ==true || validar3() ==true || validar4()==true || validar5() ==true) {
        alert(" Acompleta los campos");
    }
    else {
        let input_correo = document.getElementById("mail").value;
        let input_nombre = document.getElementById("nombre").value;
        let texto1 =document.getElementById("texto").value;
        let asunto3 = document.getElementById("asunto1").value;
        let anclacorreo=document.getElementById("correo");
        anclacorreo.href =`mailto:ketzalcafeteria@gmail.com?&subject=${asunto3}&body=De parte ${input_nombre}
         con direccion de email:${input_correo}
         nos dice que-${texto1} `;
    }
}