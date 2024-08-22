var textoEntrada = document.querySelector(".texto-entrada");
var textoSalida = document.querySelector(".texto-salida");
var instruccionMensaje = document.querySelector(".instruccion-mensaje");
var resultadoMensaje = document.querySelector(".resultado-mensaje");

//Validar acentos, números y mayúsculas

function validarEntrada(e) {
    var codigoTecla = e.keyCode || e.which;
    var teclaPresionada = String.fromCharCode(codigoTecla).toString();
    var caracteresPermitidos = " abcdefghijklmnñopqrstuvwxyz";
    var teclaEnter = 13;
    var teclaEspecial = false;

    if(codigoTecla == teclaEnter) {
        teclaEspecial = true;
    }
      
    if(caracteresPermitidos.indexOf(teclaPresionada) == -1 && !teclaEspecial) {
        alert ("Ingresa solo letras minúsculas. No se aceptan acentos, caracteres especiales y números");
        return false;
    }
}

//Encriptación
function resultadoEncriptacion() {
    var textoEncriptado = encriptarTexto(textoEntrada.value);

    if(textoEntrada.value.length == 0) {
        instruccionMensaje.style.display = "inline-flex"; //Muestra la instrucción 
        resultadoMensaje.style.display = "none"; //Oculta el resultado
        textoEntrada.focus();
    } else {
        textoSalida.value = textoEncriptado; //Muestra el resultado del texto ya encriptado
        textoEntrada.value = ""; //Vaciar textarea del bloque izquierdo
        instruccionMensaje.style.display = "none"; //Oculta la instrucción 
        resultadoMensaje.style.display = "inline-flex"; //Muestra el resultado
        textoSalida.focus();
    }
}

function encriptarTexto(textoAEncriptar) {
    let clavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    textoAEncriptar = textoAEncriptar.toLowerCase(); //Convierte el resultado todo en minúsculas

    //Encriptación
    for(i = 0; i < clavesEncriptacion.length; i++) {
        if(textoAEncriptar.includes(clavesEncriptacion[i][0])) {
            textoAEncriptar = textoAEncriptar.replaceAll(clavesEncriptacion[i][0], clavesEncriptacion[i][1]);
        }
    }
    
    return textoAEncriptar; //Resultado
}

//Copiar texto del textarea izquierdo
function copiarTexto() {
    textoSalida.select(); 
    textoSalida.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoSalida.value);
}

//Desencriptación
function resultadoDesencriptacion() {
    var textoDesencriptado = desencriptarTexto(textoEntrada.value);

    if(textoEntrada.value.length == 0) {
        instruccionMensaje.style.display = "inline-flex"; //Muestra la instrucción 
        resultadoMensaje.style.display = "none"; //Oculta el resultado
        textoEntrada.focus();
    } else {
        textoSalida.value = textoDesencriptado; //Muestra el resultado del texto ya desencriptado
        textoEntrada.value = ""; //Vaciar textarea del bloque izquierdo 
        instruccionMensaje.style.display = "none"; //Oculta la instrucción
        resultadoMensaje.style.display = "inline-flex"; //Muestra el resultado
        textoSalida.focus();
    }
} 

function desencriptarTexto(textoADesencriptar) {
    let clavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    textoADesencriptar = textoADesencriptar.toLowerCase(); //Convierte el resultado todo en minúsculas

    //Desencriptación
    for(i=0; i < clavesEncriptacion.length; i++) {
        if(textoADesencriptar.includes(clavesEncriptacion[i][1])) {
            textoADesencriptar = textoADesencriptar.replaceAll(clavesEncriptacion[i][1], clavesEncriptacion[i][0]);
        }
    }
    return textoADesencriptar; //Resultado
}