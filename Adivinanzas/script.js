//Establecemos un Array de objetos con las preguntas y sus respuestas (correcta e incorrecta).
const questions = [

    {
        questio: "Quin païs té més població?",
        respostaCorrecta: "La Xina",
        respostaIncorrecta: "L'India",
    },

    {
        questio: "El rpimer astronauta en trepitjar la Terra?",
        respostaCorrecta: "Neil Amstrong",
        respostaIncorrecta: "Louis Amstrong",
    }
];



//Generamos tres variables que nos harán falta.
//Variable para saber en que posición de la array te encuentras (en que pregunta).
let indexQuestioActual = 0;
let respostesCorrectes = 0;
let respostesIncorrectes = 0;



//Capturando los elementos HTML a partir de sus id. Seremos capaces de utilizarlos.
const questioProposada = document.getElementById("questioProposada");
const btnEsquerra = document.getElementById("btnEsquerra");
const btnDret = document.getElementById("btnDret");
const missatge = document.getElementById("missatge");
const btnReiniciar = document.getElementById("reiniciar");



//Función que colocará las preguntas y botones de forma aleatoria.
function barrejaRespostes(correcta, incorrecta) {

    const respostes = [correcta, incorrecta];

    respostes.sort(() => Math.random() - 0.5);

    return respostes;
}



//Función que nos permitirá mostrar nuestras preguntas de manera aleatoria
function mostraQuestio() {

    if(indexQuestioActual < questions.length) {

        btnReiniciar.style.display = "none";
        
        const questioActual = questions[indexQuestioActual];

        questioProposada.textContent = questioActual.questio;

        const [barrejatCorrecte, barrejatInCorrecte] = barrejaRespostes(questioActual.respostaCorrecta, questioActual.respostaIncorrecta);
        
        btnEsquerra.textContent = barrejatCorrecte;
        btnDret.textContent = barrejatInCorrecte;
        console.log(btnEsquerra.textContent);
    } else {

        //El juego acabó.
        if(respostesCorrectes === questions.length) {

            missatge.textContent = "Has ganado! Has respondido a las preguntas correctamente."
        } else {

            missatge.textContent = `El juego acabó. Respuestas correctas: ${respostesCorrectes}' + 'Respuestas incorrectas: ${respostesIncorrectes}`;
        }

        btnEsquerra.style.display = "none";
        btnDret.style.display = "none";
        btnReiniciar.style.display = "block";
    }
}



//Función para verificar las respuestas.
function comprovaResposta(respostaSeleccionada) {

    const questioActual = questions[indexQuestioActual];

    if(respostaSeleccionada === questioActual.respostaCorrecta) {

        respostesCorrectes++;
    } else {

        respostesIncorrectes++;
    }

    indexQuestioActual++;
    
    mostraQuestio();
}


//addEvenListener está pendiente de los eventos que ocurran en el botón. En los parentesis ("") pondrdíamos los eventos.
btnEsquerra.addEventListener("click", () => comprovaResposta(btnEsquerra.textContent));
btnDret.addEventListener("click", () => comprovaResposta(btnDret.textContent));
btnReiniciar.addEventListener("click", () => {

    indexQuestioActual = 0;
    respostesCorrectes = 0;
    respostesIncorrectes = 0;
    missatge.textContent = "";
    btnEsquerra.style.display = "inline-block";
    btnDret.style.display = "inline-block";
    btnReiniciar.style.display = "none";

    mostraQuestio();
});



//Comenzar el juego. Si no lo hiciéramos, el juego nunca se iniciaría.
mostraQuestio();