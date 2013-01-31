//alert("JavaScript works!");
// Author: Luis Camacho Jr
// Created for: SDI 1301
// Project 4
// Function Library


/* Does a string follow a 123-456-7890 pattern like a phone number?
This problem asks you to create a function that can accept a string and then
determine if that string follows the pattern presented.  For example, if you pass
the string “123-45-67”, this would not match the pattern.  But, if you passed the
string “407-695-0100”, this would match the pattern.  The only value returned
from the function should be a Boolean; that is, true if the string matches the
pattern or false if it does not. */

var phoneNumberVerifier = function (patternTest) {
    if (patternTest.length === 12) {

        if (patternTest.indexOf("-") >= 2) {

            if (patternTest.substring(0, 3) && patternTest.charAt(3) === "-") {

                if (patternTest.substring(4, 7) && patternTest.charAt(7) === "-") {

                    if (patternTest.substring(8, 12)) {

                    }else{
                        return false;
                    }

                }else{
                    return false;
                }

            }else{
                return false;
            }

        }else{
            return false;
        }

        return true;
    }else{
        return false;
    }

};

/*Does a string follow an aaa@bbb.ccc pattern like an email address?
This problem is similar to the ﬁrst except that the submitted string must follow a
different pattern.  For example, if you passed the string “fsosupport@fullsail", this
would not match the pattern.  But, if you passed the string “llewis@fullsail.com",
this would match the pattern.  The only value returned from the function should
be a Boolean; that is, true if the string matches the pattern or false if it does not*/

var emailValidator = function (patternTest) {

    var atIdentifier=patternTest.indexOf("@");

    var dotIdentifier=patternTest.lastIndexOf(".");

    return !(atIdentifier < 1 || dotIdentifier < atIdentifier + 2 || dotIdentifier + 2 >= patternTest.length);
};

/*Is the string a URL (Does it start with http:// or https://)?
This task also involves looking at a submitted string to see if it includes the data
necessary to indicate it is a URL.  Thus, you should look for the http:// or https://.
You do not have to worry if the rest of the URL is valid at this time.  The only
value returned from the function should be a Boolean; that is, true if the string
matches the pattern or false if it does not.*/

var urlVerifier = function (urlTest){

    return urlTest.substring(0, 6) && urlTest.charAt(6) === "/";
};

/*Title-case a string (split into words, then uppercase the ﬁrst letter of each word).
This problem involves sending a string into the function, changing the ﬁrst letter
of each word to uppercase while making sure the rest of the word is lowercase,
and then returning the string from the function so it can be output.*/

var titleCaseString = function(titleCase){

    var splitWords = titleCase.split(" ");

    for(var i=0;i<splitWords.length;i++){

        splitWords[i] = splitWords[i].charAt(0).toUpperCase() + splitWords[i].slice(1);

    }//slice method http://www.w3schools.com/jsref/jsref_slice_array.asp

    return splitWords.join(" ");

};

/*Given a string that is a list of things separated by a given string, as well as another
string separator, return a string with the ﬁrst separator changed to the second:  “a,b,c” +
“,” + “/” --> “a/b/c”.
For this problem, you will need to send three arguments into your function.  The
ﬁrst is the string with items separated by a separator (such as a comma).  The
second is the separator that is being replaced.  The third parameter is the
separator you are going to use in place of the original.  Thus, if you send the
parameters (“a,b,c”, “,”, “/”), the function should return the string as “a/b/c”.*/

var stringSeparator = function (stringToSplit, separator, separatorReplacement) {

    var arrayOfStrings = stringToSplit.split(separator);

    return arrayOfStrings.join(separatorReplacement);

};

/*Format a number to use a speciﬁc number of decimal places as for money: 2.1 --> 2.10.
    This function will require two parameters.  The ﬁrst is the number you wish to
change, and the second is the number of decimal places you wish to use to
format the number.  For example, to format pi to three decimal places, you might
send the following argument parameters:  (3.14159, 3).  The function will then
return 3.142.*/

var moneyDecimal = function (numberChange,decimalPlaces){

    return numberChange.toFixed(decimalPlaces);

};

/*Fuzzy-match a number:  is the number above or below a number within a certain
percent?
This function confuses students the most, so please ask if you have questions.
You will send three numbers as parameters for the function.  You will then
compare the ﬁrst number to the second number to see if the ﬁrst number is
greater than or less than the second number, and then you will use the third
number to see if the ﬁrst number is within that percentage of the second number.
    So, if you were to send (5, 10, 50), the function would ﬁrst determine if 5 is
greater than or less than 10. It would then determine if 5 is within 50% of 10.  The
function should then return the results.*/

var numberEvaluation = function(firstNumber,secondNumber,thirdNumber){

    var a = Math.max(firstNumber,secondNumber);

    var b = Math.min(firstNumber,secondNumber);

    var c = (thirdNumber*2);

    return b/a*c + "%";

};





/*F ind the number of hours or days difference between two dates.
    This function requires you to send three parameters.  The ﬁrst two will be dates
that you want to compare, and the third will be a string to determine if the
    function returns hours or days.  The function will then perform the math
necessary to ﬁnd the difference between the two dates and return the choice of
hours or days.*/

/*Given a string version of a number, such as “42”, return the value as an actual Number
data type, such as 42.
As you have learned, there is a difference between a number as a string data
type and a number as a Number data type.  For this task, you will simply need to
send a string into the function and return it as a Number.  If you want to get
creative, you also can add a conditional to determine if the string sent into the
function is a number before you do the conversion.*/

// Array Functions

/*Find the smallest value in an array than is greater than a given number.
    You will need to send two items into the function.  The ﬁrst is an array of numbers
and the second will be a number you’ll compare to numbers within the array.  You
will then return the number in the array that is the next highest number to the one
you’re using in the comparison.  So, if you send the array [1,4,7,9,10,14,15] and
the number 12 into the function, it should return 14 as the next highest number.*/

/*    Find the total value of just the numbers in an array, even if some of the items are not
numbers.
    This one can be tricky if your array includes a string that is a number.  You will
send an array into the function and have it add together the numbers in the array.
    For example, if you send the array [1, “pickles”, 3, “onions”, 5, “10”, 6, “SDI”], the
function should return 15.  Therefore, it should be able to recognize “10” as a
string and ignore it from the total.*/

/*    Given an array of objects and the name of a key, return the array sorted by the value of
that key in each of the objects:  “a” + [{a:2},{a:3},{a:1}]  -->  [{a:1},{a:2},{a:3}].
    This function also requires you to send two argument parameters.  The ﬁrst one
is an array of objects and the second one is a key.  The function will then sort the
array of objects by the key you send.  In this case, you might send an array of
objects [{a:2},{b:3}.{a:1},{a:4}] and the key “a” which will then be sorted by the
function using the key “a” and returned as [{a:1},{a:2},{a:3},{a:4},{b:3}].*/





// Main Code
var phoneTest1 = phoneNumberVerifier("6-504-12-12");
var phoneTest2 = phoneNumberVerifier("63-234-12-12");
var phoneTest3 = phoneNumberVerifier("845-561-7289");
var phoneTest4 = phoneNumberVerifier("34-312-7855");
var emailTest1 = emailValidator("jack@sparrow.com");
var emailTest2 = emailValidator("jack.sparrow@com");
var urlTest1 = urlVerifier("htt://www.fullsail.edu");
var urlTest2 = urlVerifier("https://developer.mozilla.org");
var titleCaseResults = titleCaseString("i'm half way done with project 4.");
var stringSeparatorResults = stringSeparator("a,b,c",",","/");
var moneyDecimalResults = moneyDecimal(3.14159,2);
var numberEvaluationResults = numberEvaluation(5,10,50);
// Returned Boolean Values
console.log(phoneTest1); //test result false length 11
console.log(phoneTest2); //test result false length 12
console.log(phoneTest3); //test result true  length 12
//console.log(phoneTest4); //test result false length 11
console.log(emailTest1); //test result true
console.log(emailTest2); //test result false
//console.log(urlTest1);   //test result false
//console.log(urlTest2);   //test result true
console.log(titleCaseResults);
console.log(stringSeparatorResults);
console.log(moneyDecimalResults);
console.log(numberEvaluationResults);









