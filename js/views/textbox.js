/**
 * Created by alexbol on 1/8/2015.
 */
define(['models/appstage'],
    function (appStage) {
        var self;
        var stage;

        return Backbone.View.extend({
            initialize: function () {
                self = this;
                stage = appStage.get("stage");

                var text = this.model.get("text");
                this.textElement = new createjs.Text(text, "25px Arial", "#ff7700");
                this.textElement.id = this.model.get("id");    // augment element with id for matching

                this.render();
                this.setHitArea();

                this.textElement.on("mousedown", this.dragstart);
                this.textElement.on("pressmove", this.dragmove);
                this.textElement.on("pressup", this.dragstop);

            },

            render: function () {
                var x = this.model.get("leftside") ? 0 : stage.canvas.width/2;
                this.textElement.x = x;
                this.textElement.y = this.model.get("y");   // 0;
                this.textElement.textBaseline = "top";

                stage.addChild(this.textElement);
            },

            events: {
                //"click #unitsLabel": "toggle"
            },

            dragstart: function(event) {
                this.offset = {x:this.x-event.stageX, y:this.y-event.stageY};

                // keep original location
                this.origX = this.x;
                this.origY = this.y;

                this.dragStarted = true;
            },

            dragmove: function(event) {
                if (this.dragStarted) {
                    this.x = event.stageX + this.offset.x;
                    this.y = event.stageY + this.offset.y;
                    stage.update();
                }
            },

            dragstop: function(event) {
                var myTextElement = this;     // event.currentTarget;
                var center = self.getCenter(myTextElement);
                var objects = stage.getObjectsUnderPoint(center.x, center.y, 0);

                var otherTextElement = undefined;
                objects.forEach(function (object) {
                    if (object != myTextElement) {
                        otherTextElement = object;
                    }
                });

                if (otherTextElement) {
                    if (otherTextElement.id == myTextElement.id) {
                        otherTextElement.text = myTextElement.text + " - " + otherTextElement.text;   // "Hello World";
                        myTextElement.parent.removeChild(myTextElement);
                        // myTextElement.text = "";

                        createjs.Tween.get(otherTextElement, {loop: false})
                            .to({alpha: 0, y: -100}, 1500, createjs.Ease.getPowInOut(2));
                        /*
                         .to({x: 400}, 1000, createjs.Ease.getPowInOut(4))
                         .to({alpha: 0, y: 75}, 500, createjs.Ease.getPowInOut(2))
                         .to({alpha: 0, y: 125}, 100)
                         .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
                         .to({x: 100}, 800, createjs.Ease.getPowInOut(2));
                         */
                        createjs.Ticker.setFPS(60);
                        createjs.Ticker.addEventListener("tick", stage);

                        appStage.triggerMatch();
                    }
                    else {
                        this.x = this.origX;
                        this.y = this.origY;
                        stage.update();
                    }
                }

                this.dragStarted = false;
            },

            getCenter: function(text) {
                var textWidth = text.getMeasuredWidth();
                var textHeight = text.getMeasuredHeight();
                return {x: text.x + textWidth / 2, y: text.y + textHeight / 2};
            },


            setHitArea: function () {
                var hitArea = new createjs.Shape();
                var textWidth = this.textElement.getMeasuredWidth();
                var textHeight = this.textElement.getMeasuredHeight();
                hitArea.graphics.beginFill("#000").drawRect(0, 0, this.textElement.getMeasuredWidth(), this.textElement.getMeasuredHeight());
                hitArea.x = 0;
                hitArea.y = 0;
                this.textElement.hitArea = hitArea;
            }

        });
    });

