/**
 * Created by alexbol on 1/8/2015.
 */
define([],
    function () {
        var Palabra = Backbone.Model.extend({
            defaults: {
                tag: "",
                spanish: "",
                russian: ""
            },
            initialize: function () {

            }
        });
        return new Palabra();
    });
