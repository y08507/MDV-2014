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

    if (patternTest.indexOf("@")>1 || patternTest.lastIndexOf(".")>1){

        if(patternTest.lastIndexOf(".")+2==patternTest.length){

            if(patternTest.endsWith(".com")+2<patternTest.indexOf("@")){

            }else{

                return true;
            }

        }else{

            return false;
        }

        return false;

    }else{

        return true;
    }

};

// Main Code
var phoneTest1 = phoneNumberVerifier("6-504-12-12");
var phoneTest2 = phoneNumberVerifier("63-234-12-12");
var phoneTest3 = phoneNumberVerifier("805-561-7289");
var phoneTest4 = phoneNumberVerifier("34-312-7855");
var emailTest1 = emailValidator("jack@sparrow.com");
var emailTest2 = emailValidator("jack.sparrow@com");

// Returned Boolean Values
console.log(phoneTest1); //test result false length 11
console.log(phoneTest2); //test result false length 12
console.log(phoneTest3); //test result true  length 12
console.log(phoneTest4); //test result false length 11
console.log(emailTest1); //test result true
console.log(emailTest2); //test result false











