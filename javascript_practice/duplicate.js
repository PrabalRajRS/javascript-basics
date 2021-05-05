const problem = () => {
    let n = "prabal raj R";
    let c = n.split("");
    
  let uniqueChars = [...new Set(c)];
  
  console.log(uniqueChars.join(''));
  }
  problem();