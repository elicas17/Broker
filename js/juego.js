window.onload =()=>{
   
    // tiempo 
    m=0;
    s=0;
    document.getElementById("tiempo").innerHTML="00:00";
    document.getElementById("empezar").addEventListener("click",cronometrar,false);
    
    // accion
    accion=100.00;
    document.getElementById("accion").innerHTML=100.00;

    // capital
    capital=1000.00;
    cantidadAccion=0;
    document.getElementById("capital").innerHTML=1000.00;
    var comprar=document.getElementById("comprar");
    comprar.addEventListener('click',comprarAccion,false);
    var vender=document.getElementById("vender");
    vender.addEventListener('click',venderAccion,false);

    // funciones
    // cronometrar();
};
function cronometrar(){ 
    
    almacenarNombre();
    var nom=document.getElementById("nombre").value;
    if(nom.length>0){
        localStorage.setItem("nombre", document.getElementById("nombre").value);
        document.getElementById("empezar").disabled=true;
        escribir();
        id=setInterval(escribir,1000);
    }else{
        alert("Ingresa tu nombre para empezar");
    }
    
};
function almacenarNombre(){
     // localStorage NO ACABADOOOOOOOOOOOOOOOOOOO
     nom=document.getElementById("nombre").value;
     var misnombre={nombre:+nom}
     localStorage.getItem("nombre");
 
}
function comprarAccion(){

    capital=capital-accion;
    cantidadAccion++;
    document.getElementById("capital").innerHTML=capital;
    document.getElementById("nAccion").innerHTML=cantidadAccion;
}
function venderAccion(){
    capital=capital+accion;
    cantidadAccion--;
    document.getElementById("capital").innerHTML=capital;
    document.getElementById("nAccion").innerHTML=cantidadAccion;
}
function escribir(){ 
    if(capital>0){
        if(s<=10){
            var maux,saux;
            s++;
            if(s>59){
                m++;
                s=0;
            }
            if(s<10){ saux="0"+s; }else{ saux=s; }
            if(m<10){ maux="0"+m; }else{ maux=m; }
            document.getElementById("tiempo").innerHTML=maux+":"+saux;
            
            // acciones
            accionAnterior=accion;

            if(s%5==0){
                if(accion>0){
                    var minimo=(accion/2);
                    if(minimo<0){
                        minimo=0;
                    }
                    var maximo=(accion+minimo);
                    var nAle= Math.random()*((maximo)-(minimo)+1)+(minimo);
                    accion=nAle; 
                    
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
            clearInterval(id);
            document.getElementById("tiempo").innerHTML="00:00";
            document.getElementById("accion").innerHTML="100";
            document.getElementById("capital").innerHTML="1000.00";
        }
    }else{
        document.getElementById("mensajeFinal").innerHTML=document.getElementById("nombre").value+", te has quedado sin efectivo";
    }
};