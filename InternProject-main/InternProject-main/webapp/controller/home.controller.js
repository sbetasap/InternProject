sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("studentcomp.controller.home", {
            onInit: function () {

            },
            courseRoute: function() {



                location.href = "../view/Course.html"
            },
            
            pointsRoute: function () {
                location.href = "../view/points.html"
            }



        });
    });
