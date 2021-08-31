//Snack 1
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
destructuring e template literal
*/
let lessWeight = bici[2];
for (let i = 0; i < bici.length; i++){
    if((bici[i].peso) < (bici[2].peso)){
        lessWeight = bici[i];
    }
}
console.log(lessWeight);

let{nome,peso} = bici[2];
console.log(nome,peso);
