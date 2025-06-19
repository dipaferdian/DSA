// Problem: Find the Index of the First Occurrence in a String
// Time: coming soon 
// Space: coming soon

function case4(haystack, needle){
  let left = 0
  let right = needle.length - 1
  while(right < haystack.length){
    if(haystack.substring(left, right + 1) == needle){
      return left
    }else{
      left++
      right++
    }
  }
  return -1
}

console.log(case4("sadbutsad", "sad"))