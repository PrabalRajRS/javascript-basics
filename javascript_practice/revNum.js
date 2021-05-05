function reverseNum(num){
  var n = "";
  numb = num.toString().split("")
  for (var i = numb.length - 1;i>=0; i--){
      n = n + numb[i]
  }
  return n;
}
console.log(reverseNum(12345));