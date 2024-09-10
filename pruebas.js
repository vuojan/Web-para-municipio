const message = 'Hello world'; // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message;

button = document.getElementById('button')
text = document.getElementById('cont')
counter = document.getElementById("counter")

let isVisible=true;
let clickCounter = 0;

function showbuttoncont(){

if(clickCounter >= 20) {

    console.log("se supero la cantidad de clicks")
    clickCounter = 0
    return 
    
}    

if(isVisible){

 button.textContent = 'Mostrar'
 text.classList.remove('displayblock')
 text.classList.add('displaynone')
 clickCounter ++;
 console.log(clickCounter);
 counter.value = clickCounter


}else{

 button.textContent = 'Ocultar'
 text.classList.remove('displaynone')
 text.classList.add('displayblock')
 clickCounter ++;
 console.log(clickCounter);
 counter.value = clickCounter

}

isVisible = !isVisible

}

function incre(){
    
    clickCounter++
    counter.value = clickCounter
    counterNumber = Number(counter.value)
    console.log(counterNumber)

    if(clickCounter % 2 === 0){

        console.log("es par")

    }

    createInput()

}

function decre(){

    if(clickCounter <= 0){

        console.log("ya es negativo")
        return
    }

    clickCounter--
    counter.value = clickCounter
    counterNumber = Number(counter.value)
    console.log(counterNumber)

 if(clickCounter % 2 == 0){

    console.log("es par")

}

createInput()

}

function createInput (){

    if (clickCounter > 0 && clickCounter % 5 === 0){

        const newInput = document.createElement('input')
        newInput.type = 'number'
        newInput.value = clickCounter

        document.body.appendChild(newInput)

    }

}




document.addEventListener('DOMContentLoaded', ()=>{
    showbuttoncont();
})

// Log to console
console.log(message);
console.log(clickCounter);