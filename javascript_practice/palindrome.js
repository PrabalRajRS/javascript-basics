function palindrome(num){

    num = num.toString().split('')
    console.log(num)
    let len =  num.length
    for(let i = 0; i<= len / 2 ; i++){
      if(num[i] === num[len - 1 -i])
      return "palindrome"
      else{
        return "not palindrome"
      }
    }
    }
    console.log(palindrome(1234321))