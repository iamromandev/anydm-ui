"use strict";
const styles = "@layer qwik-ui {\n  /* browsers automatically set an interesting max-width and max-height for dialogs \n    https://twitter.com/t3dotgg/status/1774350919133691936\n  */\n  dialog:modal {\n    max-width: unset;\n    max-height: unset;\n  }\n}\n";
module.exports = styles;
