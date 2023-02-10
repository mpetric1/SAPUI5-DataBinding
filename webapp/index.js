sap.ui.require([
    "sap/m/Text"
], function (Text) {
    "use strict";
    // attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {
        //create a text ui element that displays hardcoded text string
        new Text({
            text: "Hi. My name is ... John"
        }).placeAt("content");

    })
})