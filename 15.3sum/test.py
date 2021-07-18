import unittest
from main import Solution


class Test(unittest.TestCase):
    def test_all(self):
        test_cases = [
            # ([-1, 0, 1, 0], [[-1, 0, 1]]),
            # ([1, 2, -2, -1], []),
            # ([1, 1, -2], [[-2, 1, 1]]),
            # ([-1, 0, 1, 2, -1, -4], [[-1, -1, 2], [-1, 0, 1]]),
            # ([], []),
            # ([0], []),
            # ([0, 0], []),
            ([0, 0, 0], [[0, 0, 0]]),
            ([0, 0, 0, 0, 0], [[0, 0, 0]]),
        ]
        s = Solution()
        for x, expected in test_cases:
            self.assertEqual(s.threeSum(x), expected)
