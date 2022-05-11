const rel = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar');
const pausar =  document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let timer =  new Date(0,0,0,0,0,0);
//let timer = new date(segundos *1000);
console.log(timer.toLocaleTimeString())
let i=1;
let guarda;


function mostrarTimer(timer){
    timer.setMinutes(0);
    timer.setHours(0);
    timer.setSeconds(i++);
    return timer.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function iniciaTimer(){

    guarda = setInterval(function() {
        rel.innerHTML = mostrarTimer(timer);
    }, 1000);

}

iniciar.addEventListener('click', function(event){
    rel.classList.remove('pausado');
    clearInterval(guarda);
    iniciaTimer();
})


pausar.addEventListener('click', function(event){
    clearInterval(guarda);
    rel.classList.add('pausado');
    setTimeout(function(){
        clearInterval(guarda);
    })
})

zerar.addEventListener('click', function(event){
    rel.classList.remove('pausado');
    rel.innerHTML = '00:00:00';
    clearInterval(guarda);
    i=1;
    /*timer.setMinutes(0);
    timer.setHours(0);
    timer.setSeconds(0);
    rel.innerHTML = timer.toLocaleTimeString('pt-BR', {
        hour12: false
    });

    i=1;
    setTimeout(function(){
        clearInterval(guarda);
    })*/
})

document.addEventListener('click', function(e){
    const aux = e.target;
    console.log(aux);

    if(aux.classList.contains('iniciar')){
        rel.classList.remove('pausado');
        clearInterval(guarda);
        iniciaTimer();
    }//etc
})