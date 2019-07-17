sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "Workspace.ex1.webapp.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});
});