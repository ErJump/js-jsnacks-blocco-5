/**
 * 
 * Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare,
in base all'età.
 * 
 */

const people = [
    { nome: 'Mario', cognome: 'Rossi', età: 30 },
    { nome: 'Paolo', cognome: 'Bianchi', età: 14 },
    { nome: 'Luigi', cognome: 'Verdi', età: 50 },
    { nome: 'Giorgio', cognome: 'Neri', età: 16 },
    { nome: 'Giacomo', cognome: 'Bianchi', età: 22 },
];

const newArray = [];

people.forEach(element => {
    const { nome, cognome, età } = element;
    let newMessage;
    if (età >= 18) {
        newMessage = `${nome} ${cognome} può guidare`;
    } else {
        newMessage = `${nome} ${cognome} non può guidare`;
    }
    newArray.push(newMessage);
});

console.log(newArray);
