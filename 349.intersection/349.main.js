/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let map1 = {};
  for (let i = 0; i < nums1.length; i++) {
      map1[nums1[i]] = true;
  }
  
  let map2 = {};
  for (let j = 0; j < nums2.length; j++) {
      if (map1[nums2[j]]) {
          map2[nums2[j]] = true;
      } 
  }
  
  return Object.keys(map2);  
};

module.exports = intersection;
