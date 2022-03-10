function whileLoop() {
    let maju = 2;
    let mundur = 20;
  
    console.log("LOOPING PERTAMA");
    while (maju <= 20) {
      console.log(`${maju} - I love coding`);
      maju += 2;
    }
  
    console.log("\nLOOPING KEDUA");
    while (mundur > 0) {
      console.log(`${mundur} - I will become a Backend developer`);
      mundur -= 2;
    }
  }
  
  function forLoop() {
    for (let i = 1; i <= 20; i++) {
      if (i % 2 === 0) {
        console.log(`${i} - Berkualitas`);
      } else if (i % 3 === 0) {
        console.log(`${i} - I love coding`);
      } else {
        console.log(`${i} - Santai`);
      }
    }
  }
  
  function persegiPanjang(panjang, lebar) {
    let row = "";
    for (let i = 0; i < lebar; i++) {
      for (let j = 0; j < panjang; j++) {
        row += "#";
      }
      console.log(row);
      row = "";
    }
  }
  
  function tangga(sisi) {
    for (let i = 0; i <= sisi; i++) {
      let row = "";
      for (let j = 0; j < i; j++) {
        row += "#";
      }
      console.log(row);
    }
  }
  
  function catur(sisi) {
    for (let i = 0; i < sisi; i++) {
      let row = "";
      for (let j = 0; j < sisi; j++) {
        if (i % 2 === 0) {
          if (j % 2 === 0) {
            row += " ";
          } else {
            row += "#";
          }
        } else {
          if (j % 2 === 0) {
            row += "#";
          } else {
            row += " ";
          }
        }
      }
      console.log(row);
    }
  }
  
  module.exports = { whileLoop, forLoop, persegiPanjang, tangga, catur };