/* Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. */
var zucchine_list = [
    {
        tipo: "Genovese",
        peso: 12,
        lunghezza: 15,
    },
    {
        tipo: "Dolce",
        peso: 5,
        lunghezza: 11,
    },
    {
        tipo: "Romanesca",
        peso: 26,
        lunghezza: 17,
    },
    {
        tipo: "Ortolana",
        peso: 11,
        lunghezza: 5,
    },
    {
        tipo: "Fiorentine",
        peso: 16,
        lunghezza: 24,
    },
    {
        tipo: "Siciliane",
        peso: 35,
        lunghezza: 30,
    },
    {
        tipo: "Striate",
        peso: 23,
        lunghezza: 13,
    },
    {
        tipo: "Gialla",
        peso: 9,
        lunghezza: 18,
    },
    {
        tipo: "Straniera",
        peso: 12,
        lunghezza: 10,
    },
    {
        tipo: "Orientale",
        peso: 13,
        lunghezza: 11,
    }
]
var peso_totale = 0;

//Calcola quanto pesano tutte le zucchine.
for (var i = 0; i < zucchine_list.length; i++) {
    var zucchina = zucchine_list[i];
    peso_totale += zucchina.peso;
}
console.log(peso_totale);


//////////////////////////////////////////////////////////////////////////////////////
//Snack 2:
//Crea 10 oggetti che rappresentano una zucchina.
//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
var zucchine_xs = [];
var zucchine_xl = [];
for (var i = 0; i < zucchine_list.length; i++) {
    var zucchina = zucchine_list[i];
    if (zucchina.lunghezza >= 15) {
        zucchine_xl.push(zucchina);
    } else {
        zucchine_xs.push(zucchina);
    }
}

//Infine stampa separatamente quanto pesano i due gruppi di zucchine.
console.log(zucchine_xl);
console.log(zucchine_xs);

//////////////////////////////////////////////////////////////////////////////////////
//Snack 3:
//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata(es.Ciao -> oaiC)
function reverseWord(txt) {
    var result = [];
    for (var i = 0; i < txt.length; i++) {
        result = txt.split('').reverse().join('');
    }
    return result;
}
var word = prompt("Inserisci una parola");
console.log(reverseWord(word));


//////////////////////////////////////////////////////////////////////////////////////
/* Snack 4:
Scrivi una funzione che fonda due array(aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a, b, c], [1, 2, 3]→[a, 1, b, 2, c, 3]. */
var numeri = ["1", "2", "3", "4", "5"];
var lettere = ["a", "b", "c", "d", "e"]
var newArray = [];
function arrayFusion(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);
        console.log(arr2[i]);
        newArray.push(arr1[i], arr2[i]);
    }
}
arrayFusion(numeri, lettere);


//////////////////////////////////////////////////////////////////////////////////////s
/* Snack 5:
Scrivi una funzione che accetti tre argomenti:
un array e due numeri(“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */
function filterArray(list, min, max) {
    var newArray = list;
    newArray.splice(max, 1);
    newArray.splice(min, 1);
    return newArray;
}

var colori = ["Rosso", "Blu", "Viola", "Verde", "Giallo"];
var n1 = 0;
var n2 = 4;

filterArray(colori, n1, n2);
console.log(colori);