
function removeDuplicateNumberInSortedArray(array){
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

console.log(removeDuplicateNumberInSortedArray([1,2,3]))
