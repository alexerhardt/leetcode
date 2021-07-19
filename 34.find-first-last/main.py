from typing import List, Tuple


class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        return self.search_in(nums, target, 0, len(nums) - 1)

    def search_in(
            self,
            nums: List[int],
            target: int,
            lo: int,
            hi: int,
    ) -> List[int]:
        if len(nums) == 1:
            return [lo, hi] if nums[0] == target else [-1, -1]
        elif len(nums) == 0 or nums[0] > target or target > nums[len(nums) - 1]:
            return [-1, -1]
        else:
            mid = int(round(len(nums) / 2))
            l_min, l_max = self.search_in(nums[0:mid], target, lo, lo + mid - 1)
            r_min, r_max = self.search_in(nums[mid:len(nums)], target, lo + mid, hi)
            if (l_min, l_max) == (-1, -1):
                return [r_min, r_max]
            if (r_min, r_max) == (-1, -1):
                return [l_min, l_max]
            return [min(l_min, r_min), max(l_max, r_max)]

