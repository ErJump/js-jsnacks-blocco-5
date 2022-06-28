/* 
 * Crea 10 oggetti che rappresentano un peperone, 
 * indicandone per ognuno varietà, peso e lunghezza. 
 * Calcola quanto pesano tutti i peperoni.
 */

const pepperList = [
    {
        'varietà' : 'rosso',
        'peso' : 10,
        'lunghezza' : 1,
    },
    {
        'varietà' : 'rosso',
        'peso' : 9,
        'lunghezza' : 2,
    },
    {
        'varietà' : 'rosso',
        'peso' : 9,
        'lunghezza' : 2,
    },
    {
        'varietà' : 'rosso',
        'peso' : 9,
        'lunghezza' : 2,
    },
    {
        'varietà' : 'rosso',
        'peso' : 9,
        'lunghezza' : 2,
    },
    {
        'varietà' : 'rosso',
        'peso' : 9,
        'lunghezza' : 2,
    },
    {
        'varietà' : 'rosso',
        'peso' : 9,
        'lunghezza' : 2,
    },
    {
        'varietà' : 'rosso',
        'peso' : 9,
        'lunghezza' : 2,
    },
    {
        'varietà' : 'rosso',
        'peso' : 9,
        'lunghezza' : 2,
    },
    {
        'varietà' : 'rosso',
        'peso' : 9,
        'lunghezza' : 2,
    },
]

let result = 0;

for (let i = 0; i < pepperList.length; i++){
    const currentPep = pepperList[i];
    result += currentPep.peso;
}

console.log(result);