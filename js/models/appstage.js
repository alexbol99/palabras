/**
 * Created by alexbol on 1/8/2015.
 */
define([],
    function () {
        var AppStage = Backbone.Model.extend({
            defaults: {

            },
            initialize: function () {
                var stage = new createjs.Stage("canvas");
                this.set( "stage", stage);

                createjs.Touch.enable(stage);    // enable touch events
                stage.enableMouseOver(10);       // enabled mouse over / out events
                stage.mouseMoveOutside = true;   // keep tracking the mouse even when it leaves the canvas

                this.resize();                   // resize canvas
            },
            resize: function() {
                // Change canvas resolution on changing window size
                var canvas = this.get("stage").canvas;
                var parent = $(canvas).parent();
                canvas.width = parent.width();
                canvas.height = parent.height();
            }
        });
        return new AppStage();
    });