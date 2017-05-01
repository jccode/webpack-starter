
// index.html RELOAD
require("file-loader?emitFile=false!../index.html");

// css
import "../scss/index.scss";


function init() {
    console.log("init");
}

// ready
jQuery($ => {
    init();
})
