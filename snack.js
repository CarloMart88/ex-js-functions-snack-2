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