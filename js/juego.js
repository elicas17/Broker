window.onload =()=>{

    a=0;
    b=0;
    c=0;
    d=0;
    e=0;
    f=0;
    g=0;
    h=0;
    i=0;
    j=0;
    k=0;
    l=0;
    m=0;
    n=0;
    o=0;


    // localStsrage
     if(localStorage.datosUsu==undefined){
         localStorage.setItem("datosUsu",JSON.stringify([]));
     }

     ar=JSON.parse(localStorage.getItem("datosUsu"));
     puntos=0;
    for (x of ar) {
        if(x.puntos>=puntos){
            puntos=x.puntos; 
            document.getElementById("localNom").innerHTML=x.nombre;
        }
        }
    

    // tiempo 
    m=0;
    s=0;
    document.getElementById("tiempo").innerHTML="00:00";
    document.getElementById("empezar").addEventListener("click",cronometrar,false);
    
    // accion
    accion=100.00;
    document.getElementById("accion").innerHTML=100.00;

    //numero acciones
    document.getElementById("nAccion").innerHTML=0;
    naccion=document.getElementById("nAccion").innerHTML;
    

    // capital
    capital=1000.00;
    cantidadAccion=0;
    document.getElementById("capital").innerHTML=1000.00;
    var comprar=document.getElementById("comprar");
    comprar.addEventListener('click',comprarAccion,false);
    var vender=document.getElementById("vender");
    vender.addEventListener('click',venderAccion,false);
    
    //total
   document.getElementById("total").innerHTML="0";
   total=document.getElementById("total").innerHTML;

    // funciones

};
function cronometrar(){ 
    // activar contenido CSS
    document.getElementById("cuerpo").style.setProperty("display", "block");
    document.getElementById("principal").style.setProperty("display", "none");
    

    if(document.getElementById("nombre").value.length>0){ 
        almacenarNombre();
        document.getElementById("empezar").disabled=true;
        escribir();
        id=setInterval(escribir,1000);
    }else{
        alert("Ingresa tu nombre para empezar");
    }
    
};
function comprarAccion(){

    if(capital>0){
        document.getElementById("comprar").disabled=false;
        capital=capital-accion;
        cantidadAccion++;
        document.getElementById("capital").innerHTML=capital;
        document.getElementById("nAccion").innerHTML=cantidadAccion;
    }else{
        document.getElementById("comprar").disabled=true;
    }
   
}
function venderAccion(){

    if(cantidadAccion>0){
       
        capital=capital+accion;
        cantidadAccion--;
        document.getElementById("capital").innerHTML=capital;
        document.getElementById("nAccion").innerHTML=cantidadAccion;
        document.getElementById("vender").disabled=false;
    }else{
      
        document.getElementById("vender").disabled=true;
    }


}
function almacenarNombre(){
    
    arrayViejo=JSON.parse(localStorage.getItem("datosUsu"));

    // compruebo si existe usuario
    existeUsuario=false;
    for (x of arrayViejo) {
        if(x.nombre==document.getElementById("nombre").value){
            existeUsuario=true; 
        }
    }
    if(!existeUsuario){
          // Añadir nuevo usuario
        var usu=JSON.stringify({nombre:document.getElementById("nombre").value, puntos:0});
        arrayNuevo=JSON.parse(localStorage.getItem("datosUsu"));
        arrayNuevo.push(JSON.parse(usu) ); 
        localStorage.setItem("datosUsu",JSON.stringify(arrayNuevo));    
    }
}

// ESCRIBIR Y SUS FUNCIONES ////////////////////////////////////////////////
function escribir(){ 
    if(capital>0){
        if(s<=31){
            contador();
            document.getElementById("total").innerHTML=capital-1000;
            // comparacion de accion anterio para saber si ha subido o bajado
            if(s%2==0){
                accionAnterior=accion;
                if(accion>0){
                    aleatorioAccion();
                    graficaLineal();
                }else{
                console.log("accion no puede se nunca negativo, problema!!!!")
                }
                accionPosterior=accion;
                colorAccion = document.getElementById("accion");
                if(accionPosterior>accionAnterior){   
                    colorAccion.style.setProperty("background-color", "#6ab150");     
                }else{
                    colorAccion.style.setProperty("background-color", "red");
                }
                document.getElementById("accion").innerHTML=accion;
            } 
        }else{
            // puntoInicial();
        }
    }
};
function contador(){
    var maux,saux;
    s++;

    if(s>59){
        m++;
        s=0;
    }
    if(s<10){ saux="0"+s; }else{ saux=s; }
    if(m<10){ maux="0"+m; }else{ maux=m; }
    document.getElementById("tiempo").innerHTML=maux+":"+saux;

}
function aleatorioAccion(){
    var minimo=(accion/2);
    if(minimo<0){
        minimo=0;
    }
    var maximo=(accion+minimo);
    var nAle= Math.random()*((maximo)-(minimo)+1)+(minimo);
    accion=nAle;                 
}
function graficaLineal(){
   
    if(s==2){ a=accion};
    if(s==4){ b=accion};
    if(s==6){ c=accion};
    if(s==8){ d=accion};
    if(s==10){ e=accion};
    if(s==12){ f=accion};
    if(s==14){ g=accion}; 
    if(s==16){ h=accion};
    if(s==18){ i=accion};
    if(s==20){ j=accion};
    if(s==22){ k=accion};  
    if(s==24){ l=accion};
    if(s==26){ m=accion};
    if(s==28){ n=accion};
    if(s==30){ o=accion};
    
     
    var ctx = document.getElementById("myChart").getContext("2d");
  
    var myChart=new Chart(ctx,{
        type:"line",
        data:{
            labels:['seg2','seg4','seg6','seg8','seg10','seg12','seg14','seg16','seg18','seg20','seg22','seg24','seg26','seg28','seg30'],
            datasets:[{
                label:'num datos',
                data:[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o],
                // backgroundColor:[
                //     'rgb(115, 139, 189 )'
                // ]
            }]
        },
        options:{
            scales:{
                YAxes:[{
                    // marcas
                    ticks:{
                        beginAtZero:true
                    }
                }]
            }
        }
    });

}
function puntoInicial(){
    // tadavia no
    document.getElementById("final").style.setProperty("display", "block");
    document.getElementById("cuerpo").style.setProperty("display", "none");
    document.getElementById("mensajeFinal").innerHTML="Se acabo el tiempo"

    clearInterval(id);
    document.getElementById("tiempo").innerHTML="00:00";
    document.getElementById("accion").innerHTML="100";
    document.getElementById("capital").innerHTML="1000.00";
    document.getElementById("nAccion").innerHTML="0";
    document.getElementById("total").innerHTML="0";
    document.getElementById("vender").disabled=false;
    document.getElementById("comprar").disabled=false;
}