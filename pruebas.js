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


document.addEventListener('DOMContentLoaded', function () {
    const programaSelect = document.getElementById('programa');
    const actividadSelect = document.getElementById('actividad');
    const obraSelect = document.getElementById('obra');

    // Cargar programas
    Object.keys(data.programas).forEach(programa => {
        const option = document.createElement('option');
        option.value = programa;
        option.textContent = programa;
        programaSelect.appendChild(option);
    });

    // Manejar cambios en el programa
    programaSelect.addEventListener('change', function () {
        const selectedPrograma = this.value;
        actividadSelect.innerHTML = '<option value="">Selecciona una actividad</option>';
        obraSelect.innerHTML = '<option value="">Selecciona una obra</option>';

        if (selectedPrograma) {
            const actividades = data.programas[selectedPrograma].actividades;
            Object.keys(actividades).forEach(actividad => {
                const option = document.createElement('option');
                option.value = actividad;
                option.textContent = actividad;
                actividadSelect.appendChild(option);
            });
        }
    });

    // Manejar cambios en la actividad
    actividadSelect.addEventListener('change', function () {
        const selectedPrograma = programaSelect.value;
        const selectedActividad = this.value;
        obraSelect.innerHTML = '<option value="">Selecciona una obra</option>';

        if (selectedPrograma && selectedActividad) {
            const obras = data.programas[selectedPrograma].actividades[selectedActividad];
            obras.forEach(obra => {
                const option = document.createElement('option');
                option.value = obra;
                option.textContent = obra;
                obraSelect.appendChild(option);
            });
        }
    });
});

const data = {
    programas: {
        "Programa 1": {
            actividades: {
                "Actividad 1": ["Obra 1A", "Obra 1B"],
                "Actividad 2": ["Obra 2A", "Obra 2B"]
            }
        },
        "Programa 2": {
            actividades: {
                "Actividad 3": ["Obra 3A", "Obra 3B"],
                "Actividad 4": ["Obra 4A", "Obra 4B"]
            }
        }
    }
};