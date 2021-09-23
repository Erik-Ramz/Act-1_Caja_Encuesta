function temasSeleccionado(){
    var x = window.document.getElementById("temas").value;
    //inializar inputs
    document.getElementById("cajita").innerHTML='¡Resultados!';

}
function encuesta(){
    var a = document.getElementsByName("gen");
    var b = document.getElementsByName("piz");
    var c = document.getElementsByName("awa");
    var d = document.getElementsByName("dis");
    var e = document.getElementsByName("red");  
    for(var i=0; i < a.length; i++){      
        if(a[i].checked){
            var a1 = a[i].value;       
        }
    }
    var datos ='';
    switch(a1){
        case 'a':
            datos+='Mujer';
        break;
        case 'b':
            datos+='Hombre';
        break;
        case 'c':
            datos+='Otro';
        break;
    }
    datos = 'Sexo: ' + datos + '<br>';
    for(var i=0; i < b.length; i++){      
        if(b[i].checked){
            var b1 = b[i].value;       
        }
    }
    datos = datos + 'Pizza preferida: ';
    switch(b1){
        case 'a':
            datos+='Hawaiana';
        break;
        case 'b':
            datos+='Salchicha';
        break;
        case 'c':
            datos+='Especial';
        break;
    }
    datos = datos+'<br>';
    for(var i=0; i < c.length; i++){      
        if(c[i].checked){
            var c1 = c[i].value;       
        }
    }
    datos = datos + 'Liquido preferido para tomar: ';
    switch(c1){
        case 'a':
            datos+='Agua pura/ de sabor';
        break;
        case 'b':
            datos+='Cervexa/ licor';
        break;
        case 'c':
            datos+='Refresco';
        break;
    }
    datos +='<br>';
    for(var i=0; i < d.length; i++){      
        if(d[i].checked){
            var d1 = d[i].value;       
        }
    }
    datos = datos + 'Distraído: ';
    switch(d1){
        case 'a':
            datos+='Mucho';
        break;
        case 'b':
            datos+='Algo';
        break;
        case 'c':
            datos+='Nada';
        break;
    }
    datos +='<br>';
    for(var i=0; i < e.length; i++){      
        if(e[i].checked){
            var e1 = e[i].value;       
        }
    }
    datos = datos + 'Red que usas más: ';
    switch(e1){
        case 'a':
            datos+='Twitter';
        break;
        case 'b':
            datos+='Facebook';
        break;
        case 'c':
            datos+='Instagram';
        break;
    }
    document.getElementById("resultado").innerHTML = datos;

}