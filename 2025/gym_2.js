/** 
Type: 
  1. solution to the problem
    - using two pointer
  2. 
*/ 

function case2(array, target) {
  

let left = 0
let right = 1

if(array.length === 1){

  if(array[left] === target){
    array.splice(left, 1)
  }

  return array
}

  while (right < array.length) {
    

      if (array[left] === target) {

          array.splice(left, 1)

          if(left != 0){
            left--
          }

          if(array.length == 1){
            right--
          }

      }else if(array[right] === target){
          
        array.splice(right, 1)

        if(right != 1){
          right--
        }
      }else{
        left++
        right++
      }
  }

  return array
}

console.log(case2([3,3,3], 3))