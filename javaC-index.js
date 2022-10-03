document.getElementById("btn__menu").addEventListener("click", mostrar_menu);

document.getElementById("back-menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back-menu");

function mostrar_menu(){
    nav.style.right = "0px";
    background_menu.style.display = "block"
}

function ocultar_menu(){
    nav.style.right = "-250px";
    background_menu.style.display = "none"
}




var edad = prompt("¿Cuál es tu edad?");
if(Number(edad) == edad){
    if(edad >= 18){
        alert("Eres mayor de edad puedes acceder a la pagina")
    }
    else if(edad){
        alert('Eres menor de edad ingrese bajo sus propias responsabilidades');
    }
    
}



