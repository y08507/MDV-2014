//alert("JavaScript works!");
// Author: Luis Camacho Jr
// Created for: SDI 1301
// Project 2
// Functions and Loops

// Variables
//var offensiveLoadOutConfiguration = 5;
var ordinanceRequest = ["Rail Gun","Photon Canon","Plasma Grenades","Marksman Rifle","C87 Rocket Launcher"];
var configurations = 5;
var alienSpecies =  "Promethean Knight";
var allies = "Spartan";

// Functions

// Procedure Function
var codeName = function(spartanName) {
	if (spartanName === "GoldenArm"){
		console.log("Greetings " + spartanName + ".. Welcome to Planet Requiem, your mission is to provide vital Intel on your offensive strategy utilized to defeat a Promthean Knight.");
	} else {
		spartanName = spartanName + " Access Denied..Access Denied..Incorrect Codename..Re-enter Codename..";
		console.log(spartanName);
	}
};

// Boolean Function
var inventoryAssessment;
inventoryAssessment = function (ammo, grenades) {
    return ammo + grenades <= 0;

};
  
// Number Function
var weaponConfiguration = function(loadOut){
	while (loadOut > 0) {
		console.log(loadOut + " Countdown..");
		loadOut = loadOut - 1;
	}
	return loadOut;
};


// Array Function
var loadOutSelection;
loadOutSelection = function (ordinanceDelivered, intelUploaded) {
    //noinspection JSDuplicatedDeclaration,JSDuplicatedDeclaration
    for (var i = 0; i < ordinanceDelivered.length; i++) {
        console.log(ordinanceDelivered[i])
    }
    //noinspection JSDuplicatedDeclaration
    for (var i = 0; i < intelUploaded; i++) {
        console.log(i + " Standby Intel being uploaded..");
    }
    return ordinanceDelivered;
};

// String Function
var heatSignature  = function(speciesIdentification, speciesIndent) {
	verify = speciesIdentification + " and " + speciesIndent;
	return verify;
};


// Main Code
codeName("GoldenArm"); 
console.log("Current equipment being assessed to determine need for additional supplies");
var additionalSupplies = inventoryAssessment(0,0);
console.log("Inventory Assessment complete.. Supplies requested at this time? " + additionalSupplies );
console.log("Weapon Configurations requested.. Total of 5 weapon loadout configurations will be delivered");
var loadOutComplete = weaponConfiguration(5);
console.log(loadOutComplete + " Countdown Complete..Weapon Configurations being delivered");
var ordinanceDelivered = loadOutSelection(ordinanceRequest, configurations);
console.log("Intel uploaded of Weapons Inventory listed: " + ordinanceDelivered);
var verify = heatSignature(alienSpecies, allies);
console.log(verify + " detected on radar, proceed with caution.");







