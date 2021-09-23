function temasSeleccionado(){
    var x = window.document.getElementById("temas").value;
    //inializar inputs
    document.getElementById("cajita").innerHTML='¡Resultados!';

}

function caja(){
    
    var num = parseInt(document.getElementById("n1").value);
    
    datos='';
    for(cont=1; cont<=num;cont++){
        
    /* datos += document.getElementById("cajita").classList.add('res'); */
    datos += '<p class="res"></p>';
    }
    document.getElementById("cajita").innerHTML=datos;
}