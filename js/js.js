let root = document.querySelector("#root");

 //BASE DE DATOS
 let frutas = ["π", "π", "π", "π", "π", "π", "π", "π₯­", "π","π"];
 let frutas2 = ["π", "π", "π", "π", "π", "π", "π", "π₯­", "π","π"];
 
 let todas_las_frutas = frutas.concat(frutas2);
 
 //FUNCION TARJETAS ALEATORIAS
 todas_las_frutas.sort(function(){
     return 0.5 - Math.random()
 })
 
 //FUNCION AGREGAR AL DOM
 function agregar_datos_al_DOM(){
     
     todas_las_frutas.forEach(function (elemento, indice){
 
     let contenedor = document.createElement("div");
 
     contenedor.innerHTML = 
     '<div class="fruta">' + 
     elemento + 
     '</div>';
 
 
     root.appendChild(contenedor); 
         
     });
 
 }
 
 agregar_datos_al_DOM();
 
 
 //FUNCION DE SELECCIΓN
 let datos_del_don = document.querySelectorAll(".fruta");
 
 function activar(){
     this.classList.add("activar");
 }
 
 datos_del_don.forEach(function(elemento, indice){
     
     elemento.addEventListener('click', activar )
 });