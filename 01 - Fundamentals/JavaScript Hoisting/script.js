console.log(hello);                                   
var hello = 'world';                                 


var hello;
console.log(hello);
hello = 'world';


console.log("-------------------------------------------");


var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

var needle;
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';


console.log("-------------------------------------------");

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);



var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);

console.log("-------------------------------------------");

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}



var food;
console.log(food);
eat();
function eat(){
    var food;
    food = 'gone';
    food = 'half-chicken';
    console.log(food);
    
}
food = 'chicken';

console.log("-------------------------------------------");

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// Error !!


console.log("-------------------------------------------");

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);



var genre ;
console.log(genre);
rewind();
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
genre = "disco";
console.log(genre);

console.log("-------------------------------------------");

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);



dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);