const { forLoop, whileLoop, persegiPanjang, tangga, catur } = require("./lib/looping");

const args = process.argv;

switch (args[2]) {
  case "forLoop":
    forLoop();
    break;
  case "whileLoop":
    whileLoop();
    break;
  case "persegiPanjang":
    persegiPanjang(args[3], args[4]);
    break;
  case "tangga":
    tangga(args[3]);
    break;
  case "catur":
    catur(args[3]);
    break;
  default:
    console.log("Tidak ada fungsi yang dipilih");
}