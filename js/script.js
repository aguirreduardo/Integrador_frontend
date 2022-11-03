let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');
let categoria = document.getElementById('select-categoria');
// let categValue = categoria.value;
let validacion = [];
let totalAPagar;

function cleanUp(){
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    cantidad.value ="";
    categoria.value = "elegir categoria";
    document.getElementById('completar-nombre').innerHTML = '';
    document.getElementById('completar-apellido').innerHTML = '';
    document.getElementById('completar-email').innerHTML = '';
    document.getElementById('completar-cantidad').innerHTML = '';
    document.getElementById('completar-categoria').innerHTML = '';
    document.getElementById('total-pagar').innerHTML = 'Total a pagar = $';
}

function dataInput(){

    validateDate();
    if (validateDate()){
        calcular ();
    }

}

function validateDate(){
    categoria = document.getElementById('select-categoria');
    categValue = categoria.value; // Esto los utilizo para la validacion de la categoria. Por que solo me pide estas dos dentro de la funcion?
    if (nombre.value == ''){
        document.getElementById('completar-nombre').innerHTML = '*Completar nombre'
    }else{
        document.getElementById('completar-nombre').innerHTML = '';
        validacion[0] = true
    }

    if (apellido.value == ''){
        document.getElementById('completar-apellido').innerHTML = '*Completar apellido';
    }else{
        document.getElementById('completar-apellido').innerHTML = '';
        validacion[1] = true;
    }

    if (email.value == ''){
        document.getElementById('completar-email').innerHTML = '*Completar correo';
    }else{
        document.getElementById('completar-email').innerHTML = '';
        validacion[2] = true;
    }

    if (cantidad.value < 1) {
        document.getElementById('completar-cantidad').innerHTML = '*La cantidad debe ser un numero entero mayor que 0 (cero)';
    }else {
        document.getElementById('completar-cantidad').innerHTML = '';
        validacion[3] = true
    }

    
    if (categoria.value == "elegir categoria") {
        document.getElementById('completar-categoria').innerHTML = '*Elegir categoria';
    }else {
        document.getElementById('completar-categoria').innerHTML = '';
        validacion[4] = true;
    }
    
    if (validacion[0] == true & validacion[1] == true & validacion[2] == true & validacion[3] == true & validacion[4] == true){
        return true
    }
}

function calcular (){
    switch (categoria.value){
        case 'estudiante':
            document.getElementById('total-pagar').innerHTML = 'Total a pagar = $' + 200*0.2*cantidad.value;
            break
        case 'trainee':
            document.getElementById('total-pagar').innerHTML = 'Total a pagar = $' + 200*0.5*cantidad.value;
            break
        case 'junior':
            document.getElementById('total-pagar').innerHTML = 'Total a pagar = $' + 200*0.85*cantidad.value;
            break
        case 'publico':
            document.getElementById('total-pagar').innerHTML = 'Total a pagar = $' + 200*cantidad.value;
            break
    }
}