sap.ui.define([
	'sap/m/MessageBox',
	'sap/ui/core/mvc/Controller',
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (MessageBox, Controller, JSONModel, MessageToast) {
	"use strict";
	var LinkGroupController = Controller.extend("Workspace.ex1.webapp.controller.App", {
		handleLinkPress: function (evt) {
			var Places = {
				India: {
					Delhi: "TajMahal",
					Gujrat: "Ahmedabad"
				},
				USA: {
					Washington: "University",
					Columbus: "SL"
				}
			};
			var oModel = new JSONModel(Places);
			LinkGroupController.getView().setModel(oModel);
			var Data = LinkGroupController.getView().getModel().getProperty("/India/Delhi");

			MessageBox.alert(Data);
		}
	});
	return LinkGroupController;
});