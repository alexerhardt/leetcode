from typing import Tuple, List
from main import Solution
import unittest

TestCase = Tuple[str, int]


class Test(unittest.TestCase):
    def setUp(self):
        self.roman_to_int = Solution().roman_to_int
        self.test_cases: List[TestCase] = [
            ('I', 1),
            ('II', 2),
            ('III', 3),
            ('IV', 4),
            ('V', 5),
            ('VI', 6),
            ('VII', 7),
            ('VIII', 8),
            ('IX', 9),
            ('X', 10),
            ('XI', 11),
            ('XII', 12),
            ('XIII', 13),
            ('XIV', 14),
            ('XV', 15),
            ('XVI', 16),
            ('XVII', 17),
            ('XVIII', 18),
            ('XIX', 19),
            ('XX', 20),
            ('XL', 40),
            ('L', 50),
            ('XC', 90),
            ('C', 100),
            ('CD', 400),
            ('D', 500),
            ('CM', 900),
            ('M', 1000),
            ('MDCCC', 1800),
            ('MCMXCIV', 1994),
            ('MCMXCVIII', 1998),
            ('MMXXIV', 2024),
        ]

    def test_all(self):
        for test_case in self.test_cases:
            param, output = test_case
            self.assertEqual(self.roman_to_int(param), output)


