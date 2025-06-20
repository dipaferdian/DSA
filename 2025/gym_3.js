/** 
Type: 
  1. solution to the problem
     - using two pointer
  2. 
*/ 

function case3(nums1, m, nums2, n) {

let left = 0
let right = 0

 while(left <= m || right <= n){


  if(nums1[left] == 0 && left == m){
    nums1.splice(left, 1)
  }

  if(nums1[right] == 0 && right == n){
    nums2.splice(right, 1)
  }

  nums1.splice(m, nums1.length - m, ...nums2)
  nums2.splice(n, nums2.length - n)


  if(left <= m){
    left++
  }
  
  if(right <= n){
    right++
  }
 }

 nums1.sort((a,b) => a - b)
 return nums1
}


console.log(case3([1,0,0,0], 1, [2,5,6,0,0], 3))