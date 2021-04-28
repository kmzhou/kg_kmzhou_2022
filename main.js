const app = require("./app")

// slices the command line arguments to exclude 'node' and the file
var args = process.argv.slice(2)

// call convertPhonetics from app.js
app.convertPhonetics(args);