const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('type a number: ', (num, num1) => {
      if(num1 %2 == 0){
        console.log(`the number is even `);   
      }else {
          console.log(`the number is odd`)
      }
      readline.close();
  });