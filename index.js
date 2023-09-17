// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"];
//append a cat at the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
}
//prepend a cat at the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
//destructive removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
}
//removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
     cats.shift();
}
//appends a cat to the cats array and adds a new array leaving the cats arrays without changing 
function appendCat(name) {
    return[...cats, name];
}
//pretends a cat to the cats array and add a new array leavin the cats arrays without change
function prependCat(name) {
    return [name, ...cats];
}
//removes te last cat in the cats array and returns a new array, leaving the cats array the without change
function removeLastCat() {
    return cats.slice(0, -1);
}
//removes the firts cat from the cats array and places a new leaving the cats arrays without change
function removeFirstCat() {
    return cats.slice(1);
}






