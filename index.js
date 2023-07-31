// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
   
    cats.push(name);
  
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}


function destructivelyRemoveLastCat() {
    cats.pop();

}

function destructivelyRemoveFirstCat() {
    cats.shift();

}

function appendCat(name) {

    const newCatsArray = cats.concat(name);
    return newCatsArray;
}

function prependCat(name) {

    const newCatsArray = [name].concat(cats);
    return newCatsArray;

}

function removeLastCat() {

    const newCatsArray =  cats.slice(0, cats.length - 1);
    return newCatsArray
}

function removeFirstCat() {
    const newCatsArray = cats.slice(1);
    return newCatsArray


}

destructivelyAppendCat("Ralph");
console.log(cats);

//destructivelyPrependCat("Bob");
//console.log(cats);

destructivelyRemoveLastCat();
console.log(cats);

console.log(appendCat(Broom));

console.log(removeFirstCat());

console.log(removeLastCat());