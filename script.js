// // Your JS goes here

for(var i = 0; i < 81; i++){

    var tile = document.createElement('div');
    tile.style.width = '11.1%';
    tile.style.paddingBottom = '11.1%';
    tile.style.float = 'left';

    i % 2 === 0 ? tile.style.background = 'black': tile.style.background = 'red';
    // tile.style.background = getColor();

    document.body.append(tile);
}

// function getColor(){

//     const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
//     const r = randomBetween(0, 255);
//     const g = randomBetween(0, 255);
//     const b = randomBetween(0, 255);

//     var color = 'rgb('+r+','+g+','+b+')'

//     return color;
// }