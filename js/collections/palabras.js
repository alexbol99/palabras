/**
 * Created by alexbol on 1/8/2015.
 */
define([],
function () {
    var palabras = new Backbone.Collection([
        { tag: "La casa", spanish: "la entrada", russian: "вход"},
        { tag: "La casa", spanish: "el salon", russian: "салон"},
        { tag: "La casa", spanish: "la cocina", russian: "кухня"},
        { tag: "La casa", spanish: "el comedor", russian: "столовая"},
        { tag: "La casa", spanish: "el pasillo", russian: "коридор"},
        { tag: "La casa", spanish: "el corredor", russian: "коридор"},
        { tag: "La casa", spanish: "la habitacion", russian: "комната"},
        { tag: "La casa", spanish: "el dormitorio", russian: "спальня"},
        { tag: "La casa", spanish: "la recamara", russian: "спальня"},
        { tag: "La casa", spanish: "el cuarto de baño", russian: "ванная комната"},
        { tag: "La casa", spanish: "el estudio", russian: "рабочая комната"},
        { tag: "La casa", spanish: "el balcon", russian: "балкон"},
        { tag: "La casa", spanish: "las escaleras", russian: "лестница"}
    ]);

    return palabras;
});

