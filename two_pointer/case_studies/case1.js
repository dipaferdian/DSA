/** 
Type: 
  1. solution to the problem
  2. 
*/ 

function case1(array){
  let left = 0 
  let right = 1
  
  while (right < array.length) {
  
      if (array[left] == array[right]){
          array.splice(right,1)

          if(left != 0){
            left--
            right--
          }
      }else{
          left++
          right++
      }
  }

  return array
}

console.log(case1([1,2,3]))
