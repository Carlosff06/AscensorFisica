

var piso = document.getElementById("piso1"),
 cabina = document.getElementById("cabina"),
 cable = document.getElementById("cable"),
 polea = document.getElementById("centropolea"),
 contador = 0;
 let cantidad=0;
document.getElementById('fuerza').value=0;
document.getElementById('aceleracion').value=0;
document.getElementById('masa').value=0;

document.getElementById('tension').value=0;
document.getElementById('peso').value=0;




 function Fuerza(){
    let tiempo = setInterval(() => {
    cantidad += 1
    var aceleracion = document.getElementById('aceleracion').value;
    var masa = parseInt(document.getElementById('masa').value);
    document.getElementById('fuerza').value=cantidad;
    if(aceleracion===0||masa===0){
        clearInterval(tiempo)
        clearInterval(cantidad)
        document.getElementById('fuerza').value=0;
    }
    if(cantidad>=masa*aceleracion){
        clearInterval(tiempo)
        document.getElementById('fuerza').value=masa*aceleracion;
        document.getElementById('tension').value = parseFloat(document.getElementById('fuerza').value) + parseFloat(document.getElementById('peso').value);
    }
},

    0.00000000001
);
}
function subirPiso(){
    if(document.getElementById('masa').value<600){
    document.getElementById('aceleracion').value=2;
    
    if(contador==0){
        
        cabina.classList.remove("down");
        cabina.classList.add("move");
        cabina.classList.add("up");
        cable.classList.add("movement");
        cable.classList.add("upper");
        cable.classList.remove("bajar");
        polea.classList.add("subir");
        polea.classList.remove("bajar");
        contador=1;
        
        document.getElementById('fuerza').value=Math.abs(parseFloat(document.getElementById('aceleracion').value))*parseFloat(document.getElementById('masa').value)
        document.getElementById('tension').value=parseFloat(document.getElementById('fuerza').value)+parseFloat(document.getElementById('peso').value)
        if (document.getElementById('aceleracion').value>=0){
            let tiempo1= setInterval(() => {
                document.getElementById('aceleracion').value = -4;
        let tiempo = setInterval(() => {
           
           
            
            document.getElementById('fuerza').value=Math.abs(parseFloat(document.getElementById('aceleracion').value))*parseFloat(document.getElementById('masa').value)
            document.getElementById('tension').value=parseFloat(document.getElementById('fuerza').value)+parseFloat(document.getElementById('peso').value)
            if (document.getElementById('aceleracion').value<=0){
                document.getElementById('aceleracion').value=0;
                
                document.getElementById('fuerza').value=0;
                document.getElementById('tension').value=document.getElementById('peso').value;
                clearInterval(tiempo);
                
                
           }
           

        },
        300);
    clearInterval(tiempo1);
    },
    2800);
    }
    
}
    else if(contador==1){
        
        cabina.classList.remove("move");
        cabina.classList.remove("up");
        cabina.classList.add("down");
        cable.classList.remove("movement");
        cable.classList.remove("upper");
        cable.classList.add("bajar");
        polea.classList.remove("subir");
        polea.classList.add("bajar");
        contador=0; 

        document.getElementById('fuerza').value=document.getElementById('masa').value*Math.abs(parseFloat(document.getElementById('aceleracion').value));
        document.getElementById('tension').value = parseFloat(document.getElementById('peso').value) - parseFloat(document.getElementById('fuerza').value);
        
        
        if (document.getElementById('aceleracion').value>=0){
            let tiempo1 = setInterval(() => {
                document.getElementById('aceleracion').value = -4;
            let tiempo = setInterval(() => {
                
                
                document.getElementById('fuerza').value=document.getElementById('masa').value*Math.abs(parseFloat(document.getElementById('aceleracion').value));
                document.getElementById('tension').value = parseFloat(document.getElementById('peso').value) - parseFloat(document.getElementById('fuerza').value);
                if (document.getElementById('aceleracion').value<=0){
                    document.getElementById('aceleracion').value=0;
                    document.getElementById('fuerza').value=0;
                    document.getElementById('tension').value=0;
                    
                    clearInterval(tiempo);
            
               }
               
    
            },
            100);
    clearInterval(tiempo1);
    },
    2500);
}
    
 
}
}

}

piso.addEventListener("click", subirPiso, true);



var masa = document.getElementById('masa');
var peso =document.getElementById('peso').value;
masa.addEventListener("change", (e) =>{
    document.getElementById('peso').value = e.target.value * 9.81;
})





   


function calcularAceleracion(){
    
    var fuerza = parseInt(document.getElementById('fuerza').value);
    var masa = parseInt(document.getElementById('masa').value);
    document.getElementById("aceleracion").value = fuerza / masa;


}
function calcularFuerza(){
    
    var aceleracion = parseInt(document.getElementById('aceleracion').value);
    var masa = parseInt(document.getElementById('masa').value);
    document.getElementById("fuerza").value = masa * aceleracion;


}
function calcularMasa(){
    
    var fuerza = parseInt(document.getElementById('fuerza').value);
    var aceleracion = parseInt(document.getElementById('aceleracion').value);
    document.getElementById("masa").value = fuerza / aceleracion;


}









document.getElementById('fuerza').addEventListener("change", (e) =>{
    document.getElementById('tension').value = parseInt(e.target.value) + parseInt(document.getElementById('peso').value);
})

