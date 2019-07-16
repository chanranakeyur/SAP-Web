sap.ui.define(['sap/ui/core/UIComponent'],
	function (UIComponent) {
		"use strict";

		var Component = UIComponent.extend("Workspace.ex1.webapp.Component", {

			metadata: {
				rootView: "Workspace.ex1.webapp.view.App",
				dependencies: {
					libs: [
						"sap.m",
						"sap.ui.layout"
					]
				},
				config: {
					sample: {
						files: [
							"App.view.xml",
							"App.controller.js"
						]
					}
				}
			}
		});

		return Component;

	});