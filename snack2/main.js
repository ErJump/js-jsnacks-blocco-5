/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const zucchineList = [
    {
        'varietà' : 'verde',
        'peso' : 5,
        'lunghezza' : 16,
    },
    {
        'varietà' : 'verde',
        'peso' : 9,
        'lunghezza' : 5,
    },
    {
        'varietà' : 'verde',
        'peso' : 3,
        'lunghezza' : 18,
    },
    {
        'varietà' : 'verde',
        'peso' : 9,
        'lunghezza' : 8,
    },
    {
        'varietà' : 'verde',
        'peso' : 9,
        'lunghezza' : 20,
    },
    {
        'varietà' : 'verde',
        'peso' : 9,
        'lunghezza' : 7,
    },
    {
        'varietà' : 'verde',
        'peso' : 15,
        'lunghezza' : 25,
    },
    {
        'varietà' : 'verde',
        'peso' : 20,
        'lunghezza' : 10,
    },
    {
        'varietà' : 'verde',
        'peso' : 9,
        'lunghezza' : 2,
    },
    {
        'varietà' : 'verde',
        'peso' : 9,
        'lunghezza' : 2,
    },
]

let result1 = 0;
let result2 = 0;

let arrayShort = [];
let arrayLong = [];

const somme = {
    pepCorti : 0,
    pepLunghi : 0,
};

for (let i = 0; i < zucchineList.length; i++){
    const currentZucchina = zucchineList[i];
    if (currentZucchina.lunghezza < 15){
        arrayShort.push(currentZucchina);
        somme.pepCorti += currentZucchina.peso;
    } else {
        arrayLong.push(currentZucchina);
        somme.pepLunghi += currentZucchina.peso;
    }
}
console.log(arrayShort);
console.log(arrayLong);

console.log(somme);

//ciclando i due array
/* function peso(result, array){
    for (let i = 0; i < array.length; i++){
        result += array[i].peso;
    }
    return result;
};

result1 = peso(result1, arrayLong);
result2 = peso(result2, arrayShort);

console.log(result1);
console.log(result2); */
