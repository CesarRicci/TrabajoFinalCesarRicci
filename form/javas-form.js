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


var bPreguntar = true;
     
        window.onbeforeunload = preguntarAntesDeSalir;
     
        function preguntarAntesDeSalir () {
            var respuesta;
     
            if ( bPreguntar ) {
                respuesta = confirm ( '¿Seguro que quieres salir?' );
     
                if ( respuesta ) {
                    window.onunload = function () {
                        return true;
                    }
                } else {
                    return false;
                }
            }
            
        }