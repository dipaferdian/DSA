/** 
Type: 
  1. solution to the problem
     - using hash map, and one pointer
  2. 
*/ 

function case6(n) {

  let value = n.toString()
  let sum = 0
  let left = 0
  let group = {}

  if(n == 1){
    return true
  }

  while(left < value.length) {

     sum =  sum + (parseInt(value[left]) ** 2)

     if(left == (value.length - 1)){
      if(sum == 1){
        return true
      }else{

        if(group[value] != undefined){
          group[value] += 1
       }else{
          group[value] = 0
       }

        if(group[value] > 0){
          return false
        }

        value = sum.toString()
        sum = 0
        left = 0
      }
    }else{
      left++
    }
  }
}

console.log(case6(100))