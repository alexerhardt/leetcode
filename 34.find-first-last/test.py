import unittest
from main import Solution


class Test(unittest.TestCase):
    def test_all(self):
        cases = [
            (([5, 7, 7, 8, 8, 10], 8), [3, 4]),
            (([8], 8), [0, 0]),
            (([9], 8), [-1, -1]),
            (([5, 7, 7, 8, 8, 10], 6), [-1, -1]),
        ]
        s = Solution()
        for case in cases:
            self.assertEqual(s.searchRange(case[0][0], case[0][1]), case[1])
