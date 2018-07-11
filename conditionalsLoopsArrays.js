//aqib and manuel

console.log("Challenge #1:");
roster = ["Pikachu", "Mewtwo", "Onix", "Eevee"];
console.log(roster.length);

console.log("Challenge #2:");
roster.push(process.argv[2]);
console.log(roster);

console.log("Challenge #3:");
roster.pop;


console.log("Challenge #4:");
let catchChance = .25;
let catchAttempt = Math.random();
if(catchAttempt<catchChance){
    console.log("Caught it!");
}
else{
    console.log("Aargh! Almost had it!");
}

console.log("Challenge #5:");
if(roster.length<5){ 
    roster.push("");
    console.log(roster)
}

console.log("Challenge #6:");
const elements = ["plant","fire","water"];
const enemyAttackType = elements[Math.floor(Math.random()*elements.length)];
if(elements=="water"){
    if(enemyAttackType=="plant"){
        console.log("It's super effective!");
    }
    else if(enemyAttackType=="fire"){
        console.log("It's not very effective!");
    }
    else if(enemyAttackType=="water"){
        console.log("Nothing special happened!");
    }
    else{
        console.log("Error,this isn't supposed to be seen!")
    }
}

console.log("Challenge #7:");
// Console.log the first and last letter of each string in the
// "roster" array

// ==================================================================
console.log("Challenge #8:");
// Console.log the average length of strings in the "roster" array


// ==================================================================
console.log("Challenge #9:");
const attackDmg = Math.floor(Math.random()*20);
// You've been provided a variable named "attackDmg" that is a random
// number.
// Create a variable called "health" and set it equal to 100;
// While "health" is above 0, subtract "attackDmg" from it and 
// console.log(`Health is at: ${health}`);

// Hint: W3School While Loop : https://www.w3schools.com/jsref/jsref_while.asp

///////////
// BONUS //
///////////
console.log("Bonus #1:");
// Bonus #1:
// Console.log the sum of string lengths for all of the names in the
// "roster" array

// ==================================================================
console.log("Bonus #2:");
// Bonus #2:
// If the last string in the "roster" array is "Ditto",
// Console.log "console.log" ('cause it's Ditto...get it!?)
// else, console.log the last string in the "roster" array 

// ==================================================================
console.log("Bonus #3:");
// Bonus #3:
const enemyRoster = ["Bulbasaur","Raichu","Onix","Bob","",""];
// You've been provided an array of strings called "enemyRoster"
// Create a new empty array called "outcome"
// For each item in the "roster" array, if the length of the item is 
// greater or equal to the length of the corresponding indexed string
// in the "enemyRoster" array, then add "Win" to the "outcome" array.
// Otherwise, add "Loss" to the "outcome" array.

//Console.log the "outcome" array