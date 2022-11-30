let videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

// var ultimoItem = videoGames.pop();

// videoGames.push('3DS');

for(let item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item])
    if(videoGames[item] === 'PS4') {
        break
    }
}



let frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva']

frutas.forEach(function(item, index, array){
    // frutas.pop()
    console.log(item, index, array)
})

// retorna de 0 a 10 no console
for (let numero = 0; numero <= 10; numero++) {
    console.log(numero);
}

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

