sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";
	var oData;
	var oModel;
	var sRecipient;
	return Controller.extend("Workspace.ex1.webapp.controller.App", {
		onInit: function () {
			// set data model on view
			oData = {
				"coord": {
					"lon": 174.77,
					"lat": -36.87
				},
				"sys": {
					"type": 1,
					"id": 8276,
					"message": 0.0568,
					"country": "GB",
					"sunrise": 1407093366,
					"sunset": 1407130678
				},
				"weather": [{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d"
				}],
				"base": "cmc stations",
				"main": {
					"temp": 287.15,
					"pressure": 1017,
					"humidity": 76,
					"temp_min": 287.15,
					"temp_max": 287.15
				},
				"wind": {
					"speed": 3.6,
					"deg": 210
				},
				"clouds": {
					"all": 76
				},
				"rain": {
					"3h": 1
				},
				"dt": 1407115800,
				"id": 2193733,
				"name": "London",
				"cod": 200
			};
			oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			sRecipient = this.getView().getModel().getProperty("/base");
		},
		onShowHello: function () {
			MessageToast.show(sRecipient);
		}
	});
});