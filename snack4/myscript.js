/**
 * 
    Crea un array composto da 10 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà:
    marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati:
    nel primo array solo le auto a benzina, 
    nel secondo solo le auto a diesel, 
    nel terzo il resto delle auto.
    
    Infine stampa separatamente i 3 array.

 * 
 */


const carList = [
    {
        'marca' : 'Toyota',
        'modello' : 'Corolla',
        'alimentazione' : 'diesel',
    },
    {
        'marca' : 'Ferrari',
        'modello' : 'Spider',
        'alimentazione' : 'benzina',
    },
    {
        'marca' : 'Citroen',
        'modello' : 'C1',
        'alimentazione' : 'gpl',
    },
    {
        'marca' : 'Fiat',
        'modello' : 'Panda',
        'alimentazione' : 'Metano',
    },
    {
        'marca' : 'Jaguar',
        'modello' : 'Prototype',
        'alimentazione' : 'benzina',
    },
    {
        'marca' : 'Toyota',
        'modello' : 'Yaris',
        'alimentazione' : 'elettrica',
    },
    {
        'marca' : 'Toyota',
        'modello' : 'Corolla',
        'alimentazione' : 'diesel',
    },
    {
        'marca' : 'Ferrari',
        'modello' : 'Spider',
        'alimentazione' : 'benzina',
    },
    {
        'marca' : 'Citroen',
        'modello' : 'C1',
        'alimentazione' : 'gpl',
    },
    {
        'marca' : 'Fiat',
        'modello' : 'Panda',
        'alimentazione' : 'Metano',
    },
    {
        'marca' : 'Jaguar',
        'modello' : 'Prototype',
        'alimentazione' : 'benzina',
    },
    {
        'marca' : 'Toyota',
        'modello' : 'Yaris',
        'alimentazione' : 'elettrica',
    },
]

const benzinaArray = carList.filter((element) => {return element.alimentazione  === 'benzina';});
const dieselArray = carList.filter((element) => {return element.alimentazione  === 'diesel';})
const altreArray = carList.filter((element) => {
    if (element.alimentazione != 'benzina' && element.alimentazione != 'diesel'){
        return true;
    }
})

function arrayStamp (array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

arrayStamp(benzinaArray);
arrayStamp(dieselArray);
arrayStamp(altreArray);