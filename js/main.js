//SNACK 1
/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti 
proprietà: nome e peso.
*/

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


//SNACK2

/*Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.*/

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
/*Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono 
solo nomi e falli subiti e stampiamo tutto in console.
*/
for (let i = 0; i < footballTeam.length; i++){
    let{nome, falliSubiti} = footballTeam[i];
    console.log(nome,falliSubiti);
    
}




//FUNZIONI
function rdnNumber(min,max){
    return Math.floor(Math.random()* (max-min) + min);
}