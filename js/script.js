
const userDistance = parseFloat(prompt('Scrivi la distanza in km'));
const userAge = parseInt(prompt('Scrivi la tua età'));

let price = userDistance * 0.21;

const userTeen = userAge < 18;
const userElder = userAge >= 60;

if (userTeen < userAge ){
    price = price * 0.8;
} else if (userElder >= userAge ){
    price = price * 0.6;
}

document.getElementById('output').innerHTML = `
    Il prezzo totale è: ${price.toFixed(2)}
`;