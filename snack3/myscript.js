const legendaryLords= [
    {
        nome : 'Tyrion',
        razza : 'Elfi',
        arma : 'spada',
        'punti-vita': 8000,
        leader : true,
    },
    {
        nome : 'Mario',
        razza : 'Romano',
        arma : 'ciavatta',
        'punti-vita': 2,
        leader : true,
    },
    {
        nome : 'Ciro',
        razza : 'Napoletano',
        arma : 'mandolino solare',
        'punti-vita': 500,
        leader : false,
    },
    {
        nome : 'Alvisa',
        razza : 'Veneta',
        arma : 'spritz',
        'punti-vita': 3333,
        leader : true,
    },
    {
        nome : 'Dovakina',
        razza : 'Bethesda',
        arma : 'FUS RO DAH',
        'punti-vita': 9999,
        leader : null,
    },
];
const container = document.getElementById('container');

console.log(legendaryLords);

//voglio mostrare tutte le chiavi e i relativi valori
/* for (let key in legendaryLord){
    console.log(`${key} : ${legendaryLord[key]}`)
} */

for (let i = 0; i < legendaryLords.length; i++){
    let currentLegendaryLord = legendaryLords[i];
    container.innerHTML += `<br> ${currentLegendaryLord.nome} : ${currentLegendaryLord.arma}`;
}