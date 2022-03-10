const {teriak, kalikan, perkenalan} = require("./lib/function");

const args = process.argv;
console.log(args);

switch (args[2]){
    case "teriak":
    console.log(teriak());
    break;

    case "kalikan":
    console.log(kalikan(args[3], args[4]));
    break;

    case "kenalan":
    console.log(perkenalan(args[3],args[4], args[5], args[6]));
    break;

    default:
    console.log("tidak ada fungsi yang dipilih")
}