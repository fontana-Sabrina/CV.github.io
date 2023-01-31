document.getElementById('boton_datos').addEventListener('click', function(){     //habilita el cuadro de los datos personales y deshabilita el resto de cuadros
    document.getElementById('datos').style.display= "block";
    document.getElementById('laboral').style.display= "none";
    document.getElementById('educacion').style.display= "none";
    document.getElementById('conocimientos').style.display= "none";
})
document.getElementById('boton_datos').addEventListener('mouseover', function(){    //cuando el mouse posa sobre el boton le cambia el estilo 
    document.getElementById('boton_datos').className = 'seleccionado' ;
})
document.getElementById('boton_datos').addEventListener('mouseout', function(){     //cuando el mouse no esta sobre el boton tiene el estilo predeterminado 
    document.getElementById('boton_datos').className =  'none';
})


document.getElementById('boton_laboral').addEventListener('click', function(){
    document.getElementById('datos').style.display= "none";
    document.getElementById('laboral').style.display= "block";
    document.getElementById('educacion').style.display= "none";
    document.getElementById('conocimientos').style.display= "none";
})
document.getElementById('boton_laboral').addEventListener('mouseover', function(){
    document.getElementById('boton_laboral').className = 'seleccionado' ;
})
document.getElementById('boton_laboral').addEventListener('mouseout', function(){
    document.getElementById('boton_laboral').className =  'no_seleccionado';
})


document.getElementById('boton_educacion').addEventListener('click', function(){
    document.getElementById('datos').style.display= "none";
    document.getElementById('laboral').style.display= "none";
    document.getElementById('educacion').style.display= "block";
    document.getElementById('conocimientos').style.display= "none";
})
document.getElementById('boton_educacion').addEventListener('mouseover', function(){
    document.getElementById('boton_educacion').className = 'seleccionado' ;
})
document.getElementById('boton_educacion').addEventListener('mouseout', function(){
    document.getElementById('boton_educacion').className =  'no_seleccionado';
})


document.getElementById('boton_conocimientos').addEventListener('click', function(){
    document.getElementById('datos').style.display= "none";
    document.getElementById('laboral').style.display= "none";
    document.getElementById('educacion').style.display= "none";
    document.getElementById('conocimientos').style.display= "block";
})
document.getElementById('boton_conocimientos').addEventListener('mouseover', function(){
    document.getElementById('boton_conocimientos').className = 'seleccionado' ;
})
document.getElementById('boton_conocimientos').addEventListener('mouseout', function(){
    document.getElementById('boton_conocimientos').className =  'no_seleccionado';
})



function porcentaje_barra (porsentaje){ // calcula cuanto se tiene que mover la barra segun el porcentaje que se desea ocupar
    let resultado =(255 - (255 * porsentaje) / 100);
    return resultado;
}

document.getElementById("espanol").style.strokeDashoffset = porcentaje_barra(100);
document.getElementById("ingles").style.strokeDashoffset = porcentaje_barra(80);
document.getElementById("frances").style.strokeDashoffset = porcentaje_barra(40);

document.getElementById("bd").style.strokeDashoffset = porcentaje_barra (80);
document.getElementById("html").style.strokeDashoffset = porcentaje_barra(80);
document.getElementById("arquitectura").style.strokeDashoffset = porcentaje_barra(60);
document.getElementById("edicion").style.strokeDashoffset = porcentaje_barra(40);
document.getElementById("comunicacion").style.strokeDashoffset = porcentaje_barra(80);
document.getElementById("equipo").style.strokeDashoffset = porcentaje_barra(60);