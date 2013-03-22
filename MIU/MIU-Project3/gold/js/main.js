/**
 * Created with JetBrains WebStorm.
 * User: Project31312
 * Date: 3/21/13
 * Time: 8:49 AM
 * To change this template use File | Settings | File Templates.
 */
/*   Author: Luis Camacho Jr.
     Full Sail University
     Course: MIU
     Term: 1302
     Project 2 Gold: Feature, Search & Browse
     Implementation of jQuery Mobile
*/


/*$('#pageOne').on('pageinit', function(){
    //code needed for home page goes here

});
*/
/*var clientManagerStoredData = function(data){
    console.log(data);
    clientManagerStoredData(data)
};*/

$('#addItem').on('pageinit', function(){
    var myForm = $('#clientManagerForm');
    var clientManagerErrors = $('#clientManagerErrors');

    myForm.validate({
        invalidHandler: function(form, validator) {
// As per video this is the code to create dialog for errors continue working on for project 4
/*            clientManagerErrors.click();
            var html = '';
            for(var key in validator.submitted){
                var label = $('label[for^="'+ key +'"]').not('[generated]');
                var legend = label.closest('fieldset').find('.ui-controlgroup-label');
                var fieldName = legend.length ? legend.text() : label.text();
                html += '<li>'+ fieldName +'</li>';
            };
            $("#errorDialog ul").html(html);*/
        },
        submitHandler: function() {
            var data = myForm.serializeArray();
            storeData(this.key);
        }
    });

    //any other code needed for addItem page goes here
    //getElement by ID Function
    function g(e) {
        var theElement;
        theElement = document.getElementById(e);
        return theElement;
    }

    //Find value of selected radio button.
    function radioSelection() {
        //noinspection JSUnresolvedVariable
        var clientStatus = document.getElementById("clientManagerForm").client;
        for(var i = 0; i < clientStatus.length; i++){
            if(clientStatus[i].checked){
                status = clientStatus[i].value;
            }
        }
    }

    function checkSelection() {
        //noinspection JSUnresolvedVariable
        var checkBoxes = document.getElementById("clientManagerForm").caseType;
        var checkedBox = [];
        for(var i = 0; i < checkBoxes.length; i++){
            if(checkBoxes[i].checked){
                checkedBox.push(checkBoxes[i].value);
                selectedBox = checkedBox;
            }
        }
        console.log(checkedBox);
    }

    //Accessing and storing Declared Variables
    //localStorage is a Key Value pair.
    function storeData(key) {
        //key creation only if new item, then generate key.
        if(!key){
            var id = Math.floor(Math.random()*10000002);
            //retrieve all data form fields value and store in an object.
            //Object properties contain array with the form label and input value.
        }else{
            //Keep the same key value for editing contact item.
            //Key has been utilized throughout process. Key is from editSubmit event handler.
            //to validator function and then to function storeData.
            id = key;
        }
        radioSelection();
        checkSelection();
        var item         = {};
        item.fname   = ["First Name:", g('firstName').value];
        item.lname   = ["Last Name:", g('lastName').value];
        item.ename   = ["E-Mail Address:", g('email').value];
        item.pnumber = ["Phone Number:", g('phoneNumber').value];
        item.status  = ["Client Status:", status];
        //item.type    = ["Case Type:", selectedBox];
        item.date    = ["Consultation Date:", g('firstConsult').value];
        item.payment = ["Method of Payment:", g('payment').value];
        item.notes   = ["Client Comments:", g('clientFeedback').value];
        //item.app     = ["Rate App:", g('ratingApp').value];
        //Save data to Local Storage: Use Stringify to convert our object to a string.
        //localStorage is a Key Value pair.
        //noinspection JSValidateTypes
        localStorage.setItem(id, JSON.stringify(item));
        alert("Saving Data! Select Display Data Link Above To View Or Edit Data!");
        //console.log(selectedBox);
    }



});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

/*var autofillData = function (){

};

var getData = function(){

};

var storeData = function(data){

};

var	deleteItem = function (){

};

var clearLocal = function(){

};
*/

