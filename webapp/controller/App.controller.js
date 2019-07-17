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
				India: {
					delhi: "Agra"
				}
			};
			oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			sRecipient = this.getView().getModel().getProperty("/India/delhi");
		},
		onShowHello: function () {
			MessageToast.show(sRecipient);
		}
	});
});