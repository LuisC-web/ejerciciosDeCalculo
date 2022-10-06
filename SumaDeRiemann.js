//Resolviendo integral por suma Riemann (3sen(t)+1)^1/2 entre 1
const CANTIDADDERECTANGULOS=document.querySelector("#cantidad-de-rectangulos"), MOSTRAR=document.querySelector("#mostrar")
,OBTENERLONGITUD=document.querySelector("#obtener-longitud")



function sumatoriaDeLaIntegral(evento){
   
if(evento.target.id==OBTENERLONGITUD.id){
    //Solución del ejercicio
    //Declaración de variables
    let suma=0,cantidadDeRectangulos=parseInt(CANTIDADDERECTANGULOS.value), incremento=(Math.PI/2)/cantidadDeRectangulos;
//Declaración de la función
    const sumatoriaDeLafuncion=(incremento, indice)=>{
    return Math.sqrt(3*Math.pow(Math.sin(incremento*indice),2)+1)*incremento
    }
 //Ciclo con sumatoria
for(let i=1;i<=cantidadDeRectangulos;i++){
suma+=sumatoriaDeLafuncion(incremento,i)

}
suma*=4;
//Mostrar en el input
MOSTRAR.value=suma
}

}

//Deteción de eventos
document.addEventListener("DOMContentLoaded",()=>{
document.addEventListener("click",(e)=>sumatoriaDeLaIntegral(e))

})