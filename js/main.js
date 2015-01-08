/**
 * Created by alexbol on 1/8/2015.
 */
require.config({
    urlArgs: "bust=" + (new Date()).getTime()
});
require(['collections/palabras','models/appstage','models/palabra',
        'views/textbox','views/quiz'],
    function (palabras, appStage, Palabra, Textbox, Quiz) {

        // alert ("we are here");
        var quiz = new Quiz();
        quiz.start();
    });

