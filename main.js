/*
=======================================================
** Week 1 - Project 2 **
Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.
=======================================================
*/


// 1. Connect the main.js document to the HTML page.
//    Then Update the Text to Green by adding the .status-good class.



// When the JS is connected properly, the following code will update the status message.
document.getElementById("q1").innerHTML = "JS Page Connected Properly!";
document.getElementById("q1").classList.add("status-good");



// 2. Declare a new variable called 'feelings',
//    Then store a string with a word that describes
//    how well you feel about this course material.
//    Then display that string within the HTML page.
var feelings = "Frustrated";
var feelMessage = "How I feel about this course:";

document.getElementById("q2").innerHTML = feelMessage + feelings;







// 3. Declare a new variable called 'name',
//    store your name within it, and then
//    create a 'message' variable with a greeting,
//    concat the message and name variables
//    and then display it within the HTML page.
var name = "Makayla";
var message = "My name is, ";

document.getElementById("q3").innerHTML = message + name;






// 4. Declare two variables with number values.
//    Add, subtract, multiply and divide them.
//    Display the values of each within the HTML page.
//    Then label these values the best you can.
var num1 = 10;
var num2 = 7;

var add = num1 + num2;
var subtract = num1 - num2;
var multiply = num1 * num2;
var divide = num1 / num2;
document.getElementById("q4a").innerHTML = add;
document.getElementById("q4b").innerHTML = subtract;
document.getElementById("q4c").innerHTML = multiply;
document.getElementById("q4d").innerHTML = divide;







// 5. Declare two variables with string values.
//    Create a third variable that concatenates the two strings
//    that also places the appropriate space between the strings.
//    Display the value of the third variable within the HTML page.
var string1 = "Milk";
var string2 = "cookies";
var fullString = string1 + " and " + string2;

document.getElementById("q5").innerHTML = fullString;







// 6. Add, subract, multiply and divide the strings '5' and '3'.
//    Observe the results and brieftly explain the results within the HTML page.

var string1 = "5";
var string2 = "3";
var add = string1 + string2;
var subtract = string1 - string2;
var multiply = string1 * string2;
var divide = string1 / string2;

document.getElementById("q6a").innerHTML = ("Add: " + add);
document.getElementById("q6b").innerHTML = ("Subtract: " + subtract);
document.getElementById("q6c").innerHTML = ("Multiply: " + multiply);
document.getElementById("q6d").innerHTML = ("Divide: " + divide);
document.getElementById("q6note").innerHTML = ("You can only add (concatenate) two strings, otherwise (if possible) they are treated as numbers or NaN.");









// 7. When a button is clicked, add content into the ID "q7".

document.getElementById("getInfoFromJS").addEventListener("click", function () {
    document.getElementById("q7").innerHTML = "This is a message from JS!";
});





// 8. Collect a number value from the user and when a button is clicked,
//    then double user's answer and display that value into the HTML page.
document.getElementById("callDoubleNum").addEventListener("click", function () {
    var doubleNumValue = document.getElementById("doubleNum").value;
    document.getElementById("q8").innerHTML = doubleNumValue * 2;
});







// 9. Set the variable 'num1' to 5.
//    Set the variable 'num2' to 10.
//    Test to see if num1 is greater than num2.
//    If so, output to the HTML page: Yes, the value of num1 is greater than num2
//    If not, output to the HTML page: No, the value of num1 is not greater than num2
var num1 = 5;
var num2 = 10;

if (num1 > num2) {
    document.getElementById("q9").innerHTML = ("Yes, the value of " + num1 + " is greater than " + num2);
} else {
    document.getElementById("q9").innerHTML = ("No, the value of " + num1 + " is not greater than " + num2);
}







// 10. Set the variable 'score' to a number between 1-100.
//    Create the following conditions:
//    If the score is above 90, output to the HTML page "Great job".
//    If the score is between 60 and 89, output to the HTML page "Nice work, keep practicing".
//    If the score is below 59, output to the HTML page "Very bad: study more and retake the test".
//    Test to make sure each condition is met properly.
var score = 85;

if (score > 90) {
    document.getElementById("q10").innerHTML = "Great job!";
} else if (score > 60) {
    document.getElementById("q10").innerHTML = "Nice work, keep practicing.";
} else {
    document.getElementById("q10").innerHTML = "Very bad: Study more and retake the test.";
}






// ADVANCED TRACK

// A. Ask for a user's name, age and city using input fields.
//    In a single command, take the user's answers and display into the HTML page the sentence:
//   "My name is __. I'm __ years old, and I live in __."

document.getElementById("collectWebUserInfo").addEventListener("click", function () {
	var myname = document.getElementById("firstName").value;
    var myage = document.getElementById("age").value;
    var mycity = document.getElementById("city").value;
    var result = "My name is " + myname + " and I'm " + myage + " years old and I live in " + mycity + ".";
    document.getElementById("qa").innerHTML = result;
});





// B. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
//     Display the result in the HTML page.

var rectLength = 2;
var rectWidth = 3;
var area = rectLength * rectWidth;
document.getElementById("qb").innerHTML = area;





// C. Collect the use's length and width input to determine the area of a rectangle and display within the HTML page the result.
document.getElementById("callFindArea").addEventListener("click", function () {
    var rectLength = document.getElementById("findLength").value;
    var rectWidth = document.getElementById("findWidth").value;
    var area = rectLength * rectWidth;
    document.getElementById("qc").innerHTML = ("Area of " + rectLength + " & " + rectWidth + " = " + area + " square inches.");
});






// D. Have the user enter their name into a textfield. When they click a button, find the length (number of characters) of their name and display the result in the HTML page.
document.getElementById("findNameLength").addEventListener("click", function () {
    var username = document.getElementById("findName").value;
    var usernameLength = username.length;
    document.getElementById("qd").innerHTML = usernameLength;
});







// E. Create a textfield to request a test score between 0-100 from the user.
//    If the score is above 90, display in the HTML a message to tell the user "Great job!".
//    If the score is between 60 and 89, display a message of "Nice work, keep practicing.".
//    If the score is below 59, display a message of "Very bad: study more and retake the test.".
//    You can get fancy by adding CSS styles to each of these displays to change the color, too - Green=Good, Orange=OK, Red=Bad
document.getElementById("findScore").addEventListener("click", function () {
    document.getElementById("qe").classList.remove("status-good");
    document.getElementById("qe").classList.remove("status-ok");
    document.getElementById("qe").classList.remove("status-bad");

    var scoreValue = document.getElementById("userscore").value;

    if (scoreValue >= 90) {
        document.getElementById("qe").innerHTML = "Great job!";
        document.getElementById("qe").classList.add("status-good");
    } else if (scoreValue >= 60) {
        document.getElementById("qe").innerHTML = "Nice work, keep practicing.";
        document.getElementById("qe").classList.add("status-ok");
    } else {
        document.getElementById("qe").innerHTML = "Very bad: study more and retake the test.";
        document.getElementById("qe").classList.add("status-bad");
    }
});





/* SANDBOX TRACK
Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.
*/
