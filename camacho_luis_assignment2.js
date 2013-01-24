//alert("JavaScript works!");
// Author: Luis Camacho Jr
// Created for: SDI 1301
// Project 2 Refactoring to Project 3
// Flowchart and Objects

// Global Variables
//var offensiveLoadOutConfiguration = 5;
var ordinanceRequest = ["Rail Gun","Photon Canon","Plasma Grenades","Marksman Rifle","C87 Rocket Launcher"];
var configurations = 5;
var alienSpecies =  "Promethean Knight";
var allies = "Spartan";


// Objects

// Method Procedure SDI Project 3
// Procedure Function SDI Project 2
var codeName;
codeName = { enterCode:function (spartanName) {
    if (spartanName === "GoldenArm") {
        console.log("Greetings " + spartanName + ".. Welcome to Planet Requiem, your mission is to provide vital Intel on your offensive strategy utilized to defeat a Promthean Knight.");
    } else {
        spartanName = spartanName + " Access Denied..Access Denied..Incorrect Codename..Re-enter Codename..";
        console.log(spartanName);

    }
    //return spartanName;
    return codeName; //  Return String and Return Object
}
};

//
// Boolean Function SDI Project 2
var inventoryAssessment;
    inventoryAssessment = {reload: function (ammo, grenades) {
    return ammo + grenades <= 0;
    } // Return Boolean
};


  
// Number Function
var weaponConfiguration = function(loadOut){
	while (loadOut > 0) {
		console.log(loadOut + " Countdown..");
		loadOut = loadOut - 1;
	}
	return loadOut; // Return Number
};


// Method Function SDI Project 3
// Array Function SDI Project 2
var weaponsConfiguration = {
    ordinanceRequest:[
        "Rail Gun",
        "Photon Canon",
        "Plasma Grenades",
        "Marksman Rifle",
        "C87 Rocket Launcher"], // Property Array
    loadOutSelection:function (ordinanceDelivered, intelUploaded) {
        //noinspection JSDuplicatedDeclaration,JSDuplicatedDeclaration
        for (var i = 0; i < ordinanceDelivered.length; i++) {
            console.log(ordinanceDelivered[i])
        }//For Loop
        //noinspection JSDuplicatedDeclaration
            for (var i = 0; i < intelUploaded; i++) {
                console.log(i + " Standby Intel being uploaded..");
        }//Nested Loop
    ordinanceRequest.push("ammo", "grenades"); // Method Mutator
    return ordinanceDelivered.join(", "); // Return Array Method Accessor
    }
};

// String Function
var heatSignature;
    heatSignature = { standBy: function (speciesIdentification, speciesIndent) {
    verify = speciesIdentification + " and " + speciesIndent;
    return verify;
}
};


// Main Code
var codeAccess = codeName.enterCode("GoldenArm");
var codeFunction = codeName;
    console.log("Code " + codeAccess + " approved.. Acquiring DataLink.." );
    console.log("Current equipment being assessed to determine need for additional supplies");
var additionalSupplies = inventoryAssessment.reload(0,0);
    console.log("Inventory Assessment complete.. Supplies requested at this time? " + additionalSupplies );
    console.log("Weapon Configurations requested.. Total of 5 weapon loadout configurations will be delivered");
var loadOutComplete = weaponConfiguration(10);
    console.log(loadOutComplete + " Countdown Complete..Weapon Configurations being delivered");
var ordinanceDelivered;
ordinanceDelivered = weaponsConfiguration.loadOutSelection(ordinanceRequest, configurations); //Argument Array


    console.log("Intel uploaded of Weapons Inventory listed: " + ordinanceDelivered);
var verify = heatSignature.standBy(alienSpecies, allies);
    console.log(verify + " detected on radar, proceed with caution.");

// Returned Values
    console.log("RETURNED VALUES:");
    console.log(codeFunction," Return Object");
    console.log(loadOutComplete + " Return Number");
    console.log(verify + " Return String");






