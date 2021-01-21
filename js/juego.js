

window.onload = load();



var fechaHora = new Date();
document.getElementById("tiempo").innerHTML = fechaHora;

function load(){
    

    var comprar=document.getElementById("comprar");
    var vender=document.getElementById("vender");
    var acciones=document.getElementById("capital").innerHTML;
    var capital=document.getElementById("capital").innerHTML;
    
    comprar.addEventListener('click',function(){
        capital=parseFloat(capital)+parseFloat(acciones);
        
        console.log(capital);
    })
    
    


};