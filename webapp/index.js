sap.ui.require([
    "sap/m/Text",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/BindingMode",
    "sap/ui/model/resource/ResourceModel"
], function (Text, JSONModel, XMLView, BindingMode, ResourceModel) {
    "use strict";
    // attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {


        var oProductModel = new JSONModel();
        oProductModel.loadData("./model/products.json");
        sap.ui.getCore().setModel(oProductModel, "products");



        // create a JSON model from an object literal

        var oModel = new JSONModel({
            firstName: "John",
            lastName: "Doe",
            enabled: true,
            address: {
                street: "123 Main Street",
                city: "Anytown",
                zip: "12345",
                country: "Croatia"
            },
            salesAmount: 12345.6789,
            priceThreshold: 20,
            currencyCode: "EUR",
            panel1HeaderText: "Data Binding Basics",
        });


        var oResourceModel = new ResourceModel({
            bundleName: "sap.ui.demo.db.i18n.i18n",
            supportedLocales: ["", "hr"],
            fallbackLocale: ""
        });

        sap.ui.getCore().setModel(oResourceModel, "i18n");


        // oModel.setDefaultBindingMode(BindingMode.OneWay);


        //assign the model object to the sapui5 core

        sap.ui.getCore().setModel(oModel);

        // display the XML view called "App"
        var oView = new XMLView({
            viewName: "sap.ui.demo.db.view.App"
        })

        // register the view the message manager
        sap.ui.getCore().getMessageManager().registerObject(oView, true);



        // display the XML view called "App"
        oView.placeAt("content");


    })
})