//alert("JavaScript works!");
// Author: Luis Camacho Jr
// Created for: SDI 1301
// Project 4
// Function Library

    var myLibrary = function(){

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

    var emailValidator = function (patternTest) {

        var atIdentifier=patternTest.indexOf("@");

        var dotIdentifier=patternTest.lastIndexOf(".");

        return !(atIdentifier < 1 || dotIdentifier < atIdentifier + 2 || dotIdentifier + 2 >= patternTest.length);
    };

    var urlVerifier = function (urlTest){

        return urlTest.substring(0, 6) && urlTest.charAt(6) === "/";
    };

    var titleCaseString = function(titleCase){

        var splitWords = titleCase.split(" ");

        for(var i=0;i<splitWords.length;i++){

            splitWords[i] = splitWords[i].charAt(0).toUpperCase() + splitWords[i].slice(1);

        }

        return splitWords.join(" ");

    };

    var stringSeparator = function (stringToSplit, separator, separatorReplacement) {

        var arrayOfStrings = stringToSplit.split(separator);

        return arrayOfStrings.join(separatorReplacement);

    };

    var moneyDecimal = function (numberChange,decimalPlaces){

        return numberChange.toFixed(decimalPlaces);

    };

    var numberEvaluation = function(firstNumber,secondNumber,thirdNumber){

        var a = Math.max(firstNumber,secondNumber);

        var b = Math.min(firstNumber,secondNumber);

        var c = (100);

        var d = (thirdNumber/c); // convert into percent

        var e = (d*c + "%");

        var f = (b/a*c); // solved equation

        if(f<=thirdNumber){

            return ("Is "+ b + " within "+ e +" of " + a + "? Yes, value is " + f + "% of the whole.");

        }else{

            return ("Is "+ b + " within "+ e +" of " + a + "? No, value is " + f + "% of the whole.");
        }

    };

    /*var dateCheck = function(date1, date2)  {

        var ONE_DAY = 1000 * 60 * 60 * 24; // The number of milliseconds in one day

        var date1_ms = date1.getTime();

        var date2_ms = date2.getTime();

        var difference_ms = Math.abs(date1_ms - date2_ms);

        return Math.round(difference_ms/ONE_DAY);

    };*/ //not functional at this time continue to work on

    var stringToNumber = function(stringManipulation){

        if(typeof(stringManipulation) == "number"){

            parseInt(stringManipulation);

            if(typeof(stringManipulation) == "string"){

            }return stringManipulation;

        }else{

            return stringManipulation;

        }


    };


    return {
    "phoneNumberVerifier": phoneNumberVerifier,
    "emailValidator": emailValidator,
    "urlVerifier": urlVerifier,
    "titleCaseString": titleCaseString,
    "stringSeparator": stringSeparator,
    "moneyDecimal": moneyDecimal,
    "numberEvaluation": numberEvaluation,
    "stringToNumber": stringToNumber

    }

};

// Main Code
var newLib = new myLibrary();


// Returned Value Outputs

console.log(newLib.phoneNumberVerifier("6-504-12-12")); //test result false length 11
console.log(newLib.phoneNumberVerifier("63-234-12-12")); //test result false length 12
console.log(newLib.phoneNumberVerifier("845-561-7289")); //test result true  length 12
console.log(newLib.phoneNumberVerifier("34-312-7855")); //test result false length 11
console.log(newLib.emailValidator("jack@sparrow.com")); //test result true
console.log(newLib.emailValidator("jack.sparrow@com")); //test result false
console.log(newLib.urlVerifier("htt://www.fullsail.edu"));   //test result false
console.log(newLib.urlVerifier("https://developer.mozilla.org"));   //test result true
console.log(newLib.titleCaseString("i'm half way done with project 4."));
console.log(newLib.stringSeparator("a,b,c",",","/"));
console.log(newLib.moneyDecimal(3.14159,2));
console.log(newLib.numberEvaluation(6,10,50));
console.log(newLib.stringToNumber("74"));
console.log(newLib.stringToNumber("Test" + ", is not a number. String conversion will not be performed."));
//console.log(newLib.dateCheck(12/12/2011,1/12/2012))







