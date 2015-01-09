/**
 * Created by alexbol on 1/8/2015.
 */
define(['models/appstage', 'models/palabra', 'collections/palabras', 'views/textbox'],
    function (appStage, Palabra, palabrasCollection, Textbox) {
        var self;
        var stage;

        return Backbone.View.extend({

            initialize: function () {
                self = this;
                stage = appStage.get("stage");
                this.maxNum = (window.orientation == undefined || window.orientation == 0) ? 8 : 4;
                $("#select-custom-1").on("change", this.categoryChanged);
                appStage.on("match", this.match, this);
            },

            categoryChanged: function() {
                var category = $("#select-custom-1").val();
                self.palabrasCategory = palabrasCollection.where({category : category});
                this.curNum = this.maxNum;
                self.refresh();
            },

            start: function() {
                var category = $("#select-custom-1").val();
                this.palabrasCategory = palabrasCollection.where({category : category});
                this.curNum = this.maxNum;
                this.refresh();
            },

            refresh: function () {
                stage.removeAllChildren ();
                stage.clear();

                this.palabras = this.getRandom();

                this.curNum = this.palabras.length;

                var y_position = 0;
                this.palabras.forEach(function(palabra) {
                    if (palabra) {
                        var model = new Palabra(
                            {
                                id: palabra.cid,
                                leftside: true,
                                text: palabra.get("spanish"),
                                y: y_position
                            });

                        model.on("match", this.match, this);

                        var spanish = new Textbox({ model: model });

                        y_position += 50;
                    }
                }, this);

                this.shuffle(this.palabras);

                var y_position = 0;
                this.palabras.forEach(function(palabra) {
                    if (palabra) {
                        var model = new Palabra(
                            {
                                id: palabra.cid,
                                leftside: false,
                                text: palabra.get("russian"),
                                y: y_position
                            });

                        model.on("match", this.match, this);

                        var russian = new Textbox({ model: model } );

                        y_position += 50;
                    }
                });

                stage.update();
            },

            match: function() {
                this.curNum--;
                console.log(this.curNum);
                if (this.curNum == 0) {
                    this.refresh();
                }
            },

            getRandom: function() {
                var palabras = [];
                var inds = [];
                var maxnum = this.maxNum;
                var i;

                if (this.palabrasCategory.length <= maxnum) {
                    this.palabrasCategory.forEach(function(p) {
                        palabras.push(p);
                    });
                    return palabras;
                }

                while (inds.length < maxnum) {
                    i = Math.floor((Math.random() * (this.palabrasCategory.length-1)) + 1);
                    if (inds.indexOf(i) == -1) {
                        inds.push(i);
                    }
                }

                inds.forEach(function(i) {
                    palabras.push(this.palabrasCategory[i]);
                }, this);
                return palabras;
            },

            // http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
            shuffle: function(array) {
                var counter = array.length, temp, index;

                // While there are elements in the array
                while (counter > 0) {
                    // Pick a random index
                    index = Math.floor(Math.random() * counter);

                    // Decrease counter by 1
                    counter--;

                    // And swap the last element with it
                    temp = array[counter];
                    array[counter] = array[index];
                    array[index] = temp;
                }

                return array;
            }
        });
    });

