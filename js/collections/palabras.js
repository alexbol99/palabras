/**
 * Created by alexbol on 1/8/2015.
 */
define([],
function () {
    var palabras = new Backbone.Collection([
        { category: "La casa", spanish: "la entrada", russian: "вход"},
        { category: "La casa", spanish: "el salon", russian: "салон"},
        { category: "La casa", spanish: "la cocina", russian: "кухня"},
        { category: "La casa", spanish: "el comedor", russian: "столовая"},
        { category: "La casa", spanish: "el pasillo", russian: "коридор"},
        { category: "La casa", spanish: "el corredor", russian: "коридор"},
        { category: "La casa", spanish: "la habitacion", russian: "комната"},
        { category: "La casa", spanish: "el dormitorio", russian: "спальня"},
        { category: "La casa", spanish: "la recamara", russian: "спальня"},
        { category: "La casa", spanish: "el cuarto de baño", russian: "ванная комната"},
        { category: "La casa", spanish: "el estudio", russian: "рабочая комната"},
        { category: "La casa", spanish: "el balcon", russian: "балкон"},
        { category: "La casa", spanish: "las escaleras", russian: "лестница"}
    ]);

    return palabras;
});

