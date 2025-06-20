/** 
Type: 
  1. solution to the problem
  2. 
*/ 

function case5(s){
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '')

  let left = 0
  let right = s.length - 1

  while(left < right){
    if(s[left] != s[right]){
      return false
    }else{
      left++
      right--
    }
  }
  return true
}

console.log(case5("madam"))