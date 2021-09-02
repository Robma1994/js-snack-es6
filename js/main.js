//SNACK 1
/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti 
proprietà: nome e peso.
*/
/*
let bici = 
[
    { 
        nome: "Joff",
        peso: 6
    },
    {
        nome: "Jeff",
        peso: 9
    },
    {
        nome: "Jiff",
        peso: 1
    },
    {
        nome: "Jpff",
        peso: 2
    }
]
*/
/*Stampare a schermo la bici con peso minore utilizzando 
destructuring
*/
/*
let lessWeight = bici[2];
for (let i = 0; i < bici.length; i++){
    if((bici[i].peso) < lessWeight.peso){
        lessWeight = bici[i];
    }
}

let{nome,peso} = lessWeight;
console.log(nome,peso);
*/


/*
//TEMPLATE LITERAL
let lessWeight = bici[2];
for (let i = 0; i < bici.length; i++){
    if((bici[i].peso) < lessWeight.peso){
        lessWeight = bici[i];
    }
}
let{nome,peso} = lessWeight;
console.log(
    `
    ${nome} e ${peso}

    `
)

*/
//SNACK2

/*Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.*/
/*
var footballTeam = 
[
    {
        nome: "Napoli",
        puntiFatti : "",
        falliSubiti: ""
    },
    {
        nome: "Juve",
        puntiFatti : "",
        falliSubiti: ""
    },
    {
        nome: "Milan",
        puntiFatti : "",
        falliSubiti: ""
    },
    {
        nome: "Inter",
        puntiFatti : "",
        falliSubiti: ""
    }
]
console.log(footballTeam);
//Generare numeri random al posto degli 0 nelle proprieta: Punti fatti e falli subiti.
for(let i = 0; i < footballTeam.length; i++){
    footballTeam[i].puntiFatti = (rdnNumber(1,10));
    footballTeam[i].falliSubiti = (rdnNumber(5,100));
}
console.log(footballTeam);
*/
/*Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono 
solo nomi e falli subiti e stampiamo tutto in console.
*/
/*
for (let i = 0; i < footballTeam.length; i++){
    let{nome, falliSubiti} = footballTeam[i];
    console.log(nome,falliSubiti);
}




//FUNZIONI
function rdnNumber(min,max){
    return Math.floor(Math.random()* (max-min) + min);
}
*/

//Snack 3 - Usiamo i nuovi metodi degli array foreach o filter.
/*Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione dovrà restituirmi un nuovo array. 

/ Cosa devo fare? Devo ciclare all'interno dell'array che ho ipotizzato ed estrapolare i valori 
che si trovano nelle posizioni comprese tra A e B e restituire un nuovo array con numeri nuovi. 
Se A = 4 e B = 6, devo ciclare l'array [1,2,3,4,5,6,7,8] ed estrapolare solo da 5 a 7 perchè 5,6,7 
sono i numeri che corrispondono alle posizioni da 4(A) a 6(B)*/

const numbers = [1,4,33,55,6,75,43];
let numUt1 = parseInt(prompt("inserisci numero 1"));
let numUt2 = parseInt(prompt("inserisci numero 2"));
let range = []
for (let i = numUt1; i < (numUt2 + 1); i++){
    range.push(i);
}

let newNumbers = numbers.filter((element,index,array) =>{
    if (range.includes(index)) {
        return element;
    }
});
console.log(newNumbers)
