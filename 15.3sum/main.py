from dataclasses import dataclass
from typing import List, Dict, Optional, Tuple


@dataclass
class NumberInfo:
    first_idx: int
    freq: int = 1
    next: 'NumberInfo' = None


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        if len(nums) < 3:
            return []
        lst = sorted(nums)
        info = self._get_info_map(lst)
        sol: List[List[int, int, int]] = []
        i, j = (0, 1)
        while i < len(nums) - 2:
            a = lst[i]
            while j < len(nums) - 1:
                b = lst[j]
                c = -(a + b)
                if self._should_add(info, (a, b, c)):
                    sol.append([a, b, c])
                nxt = info[b].next
                j = nxt.first_idx if nxt is not None else len(nums)
            nxt = info[a].next
            i = nxt.first_idx if nxt is not None else len(nums)
            j = i + 1
        return sol

    @staticmethod
    def _should_add(info: Dict[int, NumberInfo], tup: Tuple[int, int, int]) -> bool:
        a, b, c = tup
        if c not in info:
            return False
        if (a, b, c) == (0, 0, 0) and info[c].freq >= 3:
            return True
        if info[c].first_idx > info[b].first_idx:
            return True
        if c != 0 and info[c].first_idx == info[b].first_idx and info[c].freq > 1:
            return True
        return False

    @staticmethod
    def _get_info_map(nums: List[int]) -> Dict[int, NumberInfo]:
        hash_map: Dict[int, NumberInfo] = {}
        prev: Optional[NumberInfo] = None
        for i in range(0, len(nums)):
            num = nums[i]
            if num in hash_map:
                hash_map[num].freq += 1
            else:
                hash_map[num] = NumberInfo(i)
                if prev is not None:
                    prev.next = hash_map[num]
                prev = hash_map[num]
        return hash_map
