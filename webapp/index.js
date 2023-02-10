sap.ui.require([
    "sap/m/Text",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView"
], function (Text, JSONModel, XMLView) {
    "use strict";
    // attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {


        // create a JSON model from an object literal

        var oModel = new JSONModel({
            firstName: "John",
            lastName: "Doe",
            enabled: true,
            panelHeaderText: "Data Binding Basics",
        });

        //assign the model object to the sapui5 core

        sap.ui.getCore().setModel(oModel);

        // display the XML view called "App"
        new XMLView({
            viewName: "sap.ui.demo.db.view.App"
        }).placeAt("content");


    })
})