'use strict'


/* FUNÇÃO PARA MOSTRAR SENHA */
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const icon = document.getElementById('icon');
const iconConfirm = document.getElementById('iconConfirm');

function showHide(){

    console.log(password.type)

    if(password.type === 'password'){
        password.setAttribute('type', 'text');
        icon.classList.add('hide')
    }
    else{
        password.setAttribute('type', 'password');
        icon.classList.remove('hide')
    }

}

/* Função para confirmar senha */

function showHideConfirm(){

    console.log(passwordConfirm.type)

    if(passwordConfirm.type === 'password'){
        passwordConfirm.setAttribute('type', 'text');
        iconConfirm.classList.add('hide')
    }
    else{
        passwordConfirm.setAttribute('type', 'password');
        iconConfirm.classList.remove('hide')
    }
}

/* Função para colocar completar telefone */

function mascara(telefone){ 
    if(telefone.value.length == 0)
        telefone.value = '(' + telefone.value; 
    if(telefone.value.length == 3)
        telefone.value = telefone.value + ') '; 

    if(telefone.value.length == 8)
        telefone.value = telefone.value + '-'; 

}

/* Menu ladding page */
   
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})






