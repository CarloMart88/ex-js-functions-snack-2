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

