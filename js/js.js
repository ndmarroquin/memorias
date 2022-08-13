let root = document.querySelector("#root");

 //BASE DE DATOS
 let frutas = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎","🍒"];
 let frutas2 = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎","🍒"];
 
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
 
 
 //FUNCION DE SELECCIÓN
 let datos_del_don = document.querySelectorAll(".fruta");
 
 function activar(){
     this.classList.add("activar");
 }
 
 datos_del_don.forEach(function(elemento, indice){
     
     elemento.addEventListener('click', activar )
 });