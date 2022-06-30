/**
 * 
    Crea un array di almeno 10 oggetti che rappresentano degli animali.

    Ogni animale ha un nome, una famiglia e una classe.
    Es:

    [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    ]

    Crea un nuovo array con la lista dei mammiferi.

 * 
 */

const animalList = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'topolino', famiglia: 'topolidi', classe: 'mammiferi' },
    { nome: 'paperone', famiglia: 'paperolidi', classe: 'uccelli' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'serpente', famiglia: 'rettili', classe: 'ovovipari' },
    { nome: 'tartaruga', famiglia: 'rettili', classe: 'amphibi' },
    { nome: 'cavallo', famiglia: 'equidi', classe: 'mammiferi' },
    { nome: 'pecora', famiglia: 'equidi', classe: 'mammiferi' },
];

const mammiferi = animalList.filter((element) => element.classe === 'mammiferi');

console.log(mammiferi);