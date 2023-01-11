"use strict";

// 1. 1. Days of the Week

// a. Create a variable called dayOfWeek and assign it a value of the string ‘Monday’.
let dayOfWeek ='Monday';

// b. Log this variable to the console

console.log(dayOfWeek)
// c. On the following line, change the value of dayOfWeek so that it has the value ‘Friday’.

// d. Log the statement ‘I can’t wait for Friday!” using the dayOfWeek variable
console.log(`I can't wait for ${dayOfWeek}`);

// e. Put down a breakpoint on the first line of your code in the browser and run your code with the debugger. 
// Use the Step Into button to go from line to line. Hover your mouse over the dayOfWeek variable every place it 
// is used to see its current value change from Monday to Friday before it is printed.


// 2. 2. User Input

// The JavaScript prompt() function is similar to input() in that its purpose is to capture user input from the browser: It will display a message popup with an input field inside the browser window. When called, the prompt() function will return whatever is typed in the terminal after the message is displayed, and save it to a variable.

// a. Create a variable called animalInput and set it equal to the prompt function call with the phrase ‘What is your favorite animal?’
let animalInput = prompt(`What is your favorite animal?`); 

// b. Create another variable called colorInput and set it equal to the prompt function call with the phrase ‘What is your favorite color?’
let colorInput = prompt(`What is your favorite color`);
// c. Combine these two variables within a string so you can print the phrase “I’ve never seen a <color> <animal>!”
console.log(`I've never seen a ${colorInput} ${animalInput}`)
// One of the most important things when creating a new variable is to think of a descriptive name that explains exactly what this variable represents in your code. If someone with no knowledge of your code were to jump in, they should be able to figure out what your variable represents.

// Try not to abbreviate when creating variable names. The few keystrokes you save will not be worth the potential for confusion!

// Conditionals

// Before starting the next section, think of your favorite breakfast, your favorite lunch, and your favorite dinner. Write these three things in some comments in your code. Remember to start a line with // to designate it as a comment (hotkey shortcut: CTRL + / in Windows, CMD + / in Mac).

// 1. Meals

// a. Create a variable called timeOfDay and give it the value 1300
let timeOfDay = 1300;
// b. Below that variable, create another and this time you choose the name. This variable will end up holding the value of one of the meals you have previously chosen, but right now, you don’t know which it will hold!
let mealsEaten = ''
// i. (What would be a good name to use for a variable that might end up with any of those three values?)
// c. Now create a conditional with three parts:

// i. if timeOfDay has a value of less than 1200, assign your own variable the value of the breakfast you chose.

// ii. If timeOfDay is between 1200 and 1700, assign your variable the value of the lunch you chose.

// iii. If timeOfDay is greater than 1700, assign your variable the value of the dinner you chose
if (timeOfDay < 1200) {
    alert("You're eating breakfast")
} if (timeOfDay >=1200 && timeOfDay <= 1700){
    alert("You're eating lunch")
} if (timeOfDay > 1700) {
    alert("You're eating dinner") 
} 
// d. After these conditionals, print your variable to the console. What value do you expect it to show?

// e. Go back to the line where you created timeOfDay and change its value twice so that you are able to see the other two meals print when you run the code.

// f. Now try to ‘break’ this section of code by giving timeOfDay a value that will cause an error. Think about how the variable is being used and what types of values would not make sense to be used that way. Run the code again to see the error get thrown.

// g. After you have successfully caused this section of code to throw an error, place a breakpoint on the first line of code in the file and debug the program. Watch how it will run all previous code until it encounters the line where the error occurs.

// 2. Random Number

// a. Declare a variable to store a random number between 0 and 10. You will need to do some research to determine how to generate a random number in JavaScript.

// a. A good search term to use: “random number JavaScript”

// b. If the number is between 0 and 2, print to the console “Beatles”

// c. If the number is between 3 and 5, print to the console “Stones”

// d. If the number is between 6 and 8, print to the console “Floyd”

// e. If the number is equal to 9 or 10, print to the console “Hendrix”
let randomNumber = Math.floor(Math.random() *11)
if (randomNumber >= 0 && randomNumber <= 2) {
    alert('Beatles')
} if (randomNumber >= 3 && randomNumber <= 5) {
    alert('Stones')
} if (randomNumber >= 6 && randomNumber <= 8) {
    alert('Floyd')
} if (randomNumber >= 9 && randomNumber <= 10) {
    alert('Hendrix')
}
// Loops

// In JavaScript, loops are an important tool that allow developers to execute a block of code over and over as long as a condition holds true. This worksheet will allow you to practice a for loop and while loop.

// For Loop

// A for loop is ideal in a situation where you know exactly how many times you want the loop to run.

// A for loop consists of three parts:

// - Start – initial value for the iterator

// o i.e., let i = 0;

// - Condition – the condition that exists to determine when the loop should continue iterating (as long as condition is true) and when the loop should complete (when the condition becomes false)

// o i.e., i < 5;

// - Iteration – determines how much the iterator increases or decreases each iteration

// o i.e., i++

// The above line of code creates a scope where any included code would be repeated 5 times. Additionally, the variable i that is created will increment from 0 to 4 with each loop.

// 1. Write your own for loop that will display the message “JavaScript is cool!” 7 times.
for(let i = 0; i < 8; i++){
    console.log('JavaScript is Cool!') 
}
// 2. Write your own for loop that will display the numbers 0-10, one number per loop. You will need to utilize a variable for this!
let printedNumber = 0;
for(let i = 0; i < 11; i++){
    console.log(printedNumber) 
}
// 3. Write a for loop that will print the following sequence:
for(let i = 0; i < 5; i++){
    console.log('Hello\ngoodbye') 
}
// While Loops

// A while loop is ideal in a situation where you do not know how many times you want the loop to run. Instead, the loop will continue to iterate as long as the condition remains to be true. Once the condition becomes false then the loop completes.

// HINT: if isInstructorAwesome is set equal to true, make sure to have a way to set isInstructorAwesome equal to false somewhere inside the while loop to prevent an infinite loop from occurring

// If you get caught in an infinite loop, you can close the browser window to stop the process.

// Functions

// 1. Favorite Movie (void functions)

// a. Create an appropriately named variable and assign it the value of the name of your favorite movie.
function printFavoriteMovie(){
    let favoritMovie = 'avatar';
    return console.log(`Your favorite movie is ${favoritMovie}`)
}
printFavoriteMovie()
// b. On the next line, print this variable to the console. Run your code to test it out.

// c. Now, move the previous two lines of code you wrote into a function named ‘printMovieName’

// d. Run your code again (be sure to invoke your function!!)

// 2. Favorite Band (return functions)

// a. Write a function that asks a user to enter their favorite band

// b. On the next line, the function should return the user’s response

// c. When you call the function, save the returned result as a new variable.

// d. After the function is called, print the returned result.
function printfavoriteBand(){
    let favoriteBand = prompt('What is your favorite band?')
    return console.log(`Your favorite band is ${favoriteBand}`)

}
printfavoriteBand()

// 3. Concert (parameters)

// a. Create a new function called concertDisplay. This function should have one parameter called musicalAct
function concertDisplay(musicalAct){
    let myStreet = prompt("where do you live?")
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}! `)
}
concertDisplay(favoriteBand)
// b. Inside the function, ask the user to enter the street they live on and save it as a variable called myStreet.

// c. Print a string that combines the variable that holds the user’s response along with the musicalAct parameter. The message should end up saying “It would be great if <musicalAct> played a show on <myStreet>!”

// d. Now when you call the concertDisplay function, pass in the variable that was returned from the Favorite Band section.

// Arrays

// 1. Desktop Items

// a. Create a new variable called desktopItems. Establish this variable as an array by setting it equal to a pair of square brackets [].
const desktopItems = ['lamp', 'desktop', 'keyboard']
// b. When creating an array literal like this, we can insert some initial values at the same time it is created:

// i. Between the brackets, add a few strings to describe three items you see around you (‘desk’, ‘lamp’, etc.) Make sure to separate the items with commas OUTSIDE the quote marks.

// c. What index values do these 3 items have?

// d. Print to the console the item that resides at index 1.
console.log(desktopItems[0])
// e. On a new line, use the JavaScript array method that allows you to add new things to an existing array to add the string ‘Infinity Gauntlet’ to your desktopItems array.
desktopItems.push('Infinity Gauntlet');
// f. Now, utilize a for loop to iterate over your array and print out each item one at a time.
for (let i = 0; i < desktopItems.length; i++) {
    console.log(desktopItems[i]);
}

// Magic Number

// This exercise will bring together all the pieces you have learned about so far!

// 1. Create a variable called magicNumber and give it an initial value of 50

// 4. If the number guessed is lower than the magic number, it should print “Too low!”

// 5. If the number guessed is higher than the magic number, it should print “Too high!”

// 6. If the number is within 10 of the magic number in either direction, it should print the appropriate message and additionally print “Getting warmer!”

// 7. If the number is correctly guessed, instead of “Getting warmer!”, print the magic number along with a congratulations message and break the loop.

// 8. Once you have tested and determined it works, go back to the beginning and change magicNumber to be assigned a random number between 0 and 100 instead of the hardcoded value.

// 9. Play your new guessing game a few times! Try to beat your own score

// 10. After playing a few times, put down a breakpoint at the start of the while loop and run it with the debugger. Hover over the magicNumber variable to see how much easier it is to determine the value of your variables by d
let magicNumber = Math.floor(Math.random() * 100);

while (true){ 

    let guess = parseInt(prompt("Guess the magic number"));
    let lessThanTen = magicNumber - 10;
    let greaterThanTen = magicNumber +10;
    if (guess <= lessThanTen && guess >= lessThanTen) {
        alert('Getting warmer')
    } else if (guess <= lessThanTen && guess >= lessThanTen) {
        alert('Getting warmer')
    } else if(guess < magicNumber) {
        alert('Too low')
    } else if (guess > magicNumber) {
        alert('Too high')
    } else if (guess = magicNumber){
        alert("you guessed it right")
        break
    }
}
