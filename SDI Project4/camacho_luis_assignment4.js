//alert("JavaScript works!");
// Author: Luis Camacho Jr
// Created for: SDI 1301
// Project 4 Stub Functions to Functioning Functions
// library: 12 Functions to reuse for future assignments



/* Does a string follow a 123-456-7890 pattern like a phone number?
This problem asks you to create a function that can accept a string and then
determine if that string follows the pattern presented.  For example, if you pass
the string “123-45-67”, this would not match the pattern.  But, if you passed the
string “407-695-0100”, this would match the pattern.  The only value returned
from the function should be a Boolean; that is, true if the string matches the
pattern or false if it does not. */

var phoneNumberVerifier = function (patternTest) {
    /*var end=patternTest.indexOf("-");
     var start=PatternTest.indexOf("-")+1;
     var endLast=PatternTest.lastIndexOf("-");
     var startLast =patternTest.lastIndexOf("-") + 1;*/

    if (patternTest.length === 12){

    }else{
        return false;}
            if(patternTest.indexOf("-") >= 2){


        //for (var i = 0; verifiedPattern.length < 0; i++) {
            if (patternTest.substring(0,3)&&patternTest.charAt(3)==="-") {


                if(patternTest.substring(4,7)&&patternTest.charAt(7)==="-"){

                    if(patternTest.substring(8,12)){
                        return true
                    }else{
                        return false;

                    }
                }
            }


                }else{
                    return false;
                    }




};
var phoneTest1 = phoneNumberVerifier("6-504-12-12");
var phoneTest2 = phoneNumberVerifier("452-561-7290");
var phoneTest3 = phoneNumberVerifier("85-561-7289");
var phoneTest4 = phoneNumberVerifier("34-312-7855");
console.log(phoneTest1); //test result false
console.log(phoneTest2); //test result true
console.log(phoneTest3); //test result false
console.log(phoneTest4); //test result false

