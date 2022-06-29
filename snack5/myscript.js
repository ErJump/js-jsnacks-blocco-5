/**
 * 
    A partire da un array di stringhe,
    crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

    Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
 */


const nameList = ['pippo', 'PLUTO', 'pApErIno', 'TOPOLINO'];

const mappedArray = nameList.map((element) => {
    /* let lowerCaseElement = element.toLowerCase();
    let capitalizeFirstLetterElement = lowerCaseElement.charAt(0).toUpperCase() + lowerCaseElement.slice(1);
    return capitalizeFirstLetterElement; */  
    return element.charAt(0).toUpperCase() + element.slice(1).toLocaleLowerCase(); 
});

console.log(mappedArray);