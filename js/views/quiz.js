/**
 * Created by alexbol on 1/8/2015.
 */
define(['models/appstage', 'collections/palabras', 'views/textbox'],
    function (appStage, palabrasCollection, Textbox) {
        var self;
        var stage;

        return Backbone.View.extend({
            //el: $("#main-container"),
            //
            //model: units,

            initialize: function () {
                self = this;
                stage = appStage.get("stage");

                stage.clear();

                $("#select-custom-1").on("change", this.categoryChanged, this);
                // this.refresh();
            },

            categoryChanged: function() {
                var category = $("#select-custom-1").val();
                this.palabrasCategory = palabrasCollection.where({category : category});
                this.refresh();
            },

            start: function() {
                var category = $("#select-custom-1").val();
                this.palabrasCategory = palabrasCollection.where({category : category});
                this.refresh();
            },

            refresh: function () {
                var palabras = this.getRandom();

                var y_position = 0;
                palabras.forEach(function(palabra) {
                    var spanish = new Textbox({ model:
                    {
                        id: palabra.cid,
                        leftside: true,
                        text: palabra.get("spanish"),
                        y: y_position
                    }
                    });

                    var russian = new Textbox({ model:
                    {
                        id: palabra.cid,
                        leftside: false,
                        text: palabra.get("russian"),
                        y: y_position
                    }
                    });

                    y_position += 50;
                });

                appStage.get("stage").update();
            },

            getRandom: function() {
                var palabras = [];
                var inds = [];
                var maxnum = 4;
                var i;

                if (this.palabrasCategory.length <= maxnum) {
                    this.palabrasCategory.forEach(function(p) {
                        palabras.push(p);
                    });
                    return palabras;
                }

                while (inds.length < maxnum) {
                    i = Math.floor((Math.random() * this.palabrasCategory.length) + 1);
                    if (inds.indexOf(i) == -1) {
                        inds.push(i);
                    }
                }

                inds.forEach(function(i) {
                    palabras.push(this.palabrasCategory[i]);
                }, this);
                return palabras;
            }
        });
    });

