/**
 * Created by alexbol on 1/8/2015.
 */
require.config({
    urlArgs: "bust=" + (new Date()).getTime()
});
require(['collections/palabras','models/appstage','models/palabra','views/textbox'],
    function (palabras, appStage, Palabra, Textbox) {

        // alert ("we are here");
        var palabra = palabras.at(0);

        var spanish = new Textbox({ model:
            {
                id: palabra.cid,
                leftside: true,
                text: palabra.get("spanish"),
                y: 0
            }
        });
        var russian = new Textbox({ model:
            {
                id: palabra.cid,
                leftside: false,
                text: palabra.get("russian"),
                y: 0
            }
        });

        var palabra = palabras.at(9);
        var spanish = new Textbox({ model:
        {
            id: palabra.cid,
            leftside: true,
            text: palabra.get("spanish"),
            y: 100
        }
        });
        var russian = new Textbox({ model:
        {
            id: palabra.cid,
            leftside: false,
            text: palabra.get("russian"),
            y: 100
        }
        });

        appStage.get("stage").update();
    });

