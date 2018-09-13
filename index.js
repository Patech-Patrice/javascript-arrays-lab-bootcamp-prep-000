// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function appendKitten(name){
  
}
function prependKitten(name){
}
function removeLastKitten(){
  var newKittens = [...kittens];
  newKittens.pop();
  return newKittens;
  }
function removeFirstKitten(){
  var newKittens = [...kittens];
  newKittens.shift();
  return newKittens;
}

