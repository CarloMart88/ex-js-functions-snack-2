/*🏆 Snack 1
Crea una funzione che somma due numeri.
Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.*/

function somma(x , y){
  return x + y
}

console.log(somma(1 , 2))
/*
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
*/

const plus = (x , y) => x + y

console.log(plus(1 , 2))

/*🏆 Snack 2
Crea una arrow function che calcola il quadrato di un numero.
Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga. */

const quadrato = (a) => a * a

console.log(quadrato(2))

/*🏆 Snack 3
Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri. */ 

function eseguiOperazione(a , b ,operatore){
  return operatore(a , b)
}

const add = (a , b) => a + b

console.log(eseguiOperazione(1 , 2 , add))


/*🏆 Snack 4
Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!". */

/*
function creaTimer(){

  setTimeout( () =>{
    console.log("time it's over")
  }, 1000)

}

creaTimer()


/*🏆 Snack 5
Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script. */ 
/*


function stampaOgniSecondo(){

  const id = setInterval(() => {

    console.log("conta")

  }, 1000)

  return id
}

const timerId = stampaOgniSecondo()

setTimeout(() =>{
  clearInterval(timerId)
  console.log("STOP")
}, 5000)

*/


/* 🏆 Snack 6
Crea un contatore automatico con setInterval
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo. */ 
/*
function creaContatoreAutomatico(intervallo){

let contatore = 0

  return function avviaContatore(){
    setInterval(()=>{
      contatore++
      console.log(`valore attuale del contatore ${contatore}`)
    },intervallo)

  }
}

const start = creaContatoreAutomatico(1000)
start()
*/
/*🏆 Snack 7
Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop. */

function eseguiEferma(messaggio , tempoAvvio , tempoStop){


   function avviaMessaggio(){
    const id = setInterval(() =>{
      console.log(messaggio)
    },tempoAvvio)

 
  
    setTimeout(()=>{
      clearInterval(id)
      console.log("stop!")
    },tempoStop)
    
 }
    return avviaMessaggio
  
}

const start = eseguiEferma("questo messaggio si stampa ogni secondo", 1000 , 5000)
start()