import math

class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        shortest = str1 if len(str1) < len(str2) else str2
        for i in range(len(shortest), 0, -1):
            divisor = shortest[:i]
            if self.divides_str(str1, divisor) and self.divides_str(str2, divisor):
                return divisor
        return ""

    def divides_str(self, dividend: str, divisor: str) -> bool:
        return "".join(dividend.split(divisor)) == ""

class SolutionGPT:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        if str1 + str2 != str2 + str1:
            return ""
        # find gcd of lengths
        gcd_len = math.gcd(len(str1), len(str2))
        # return substring of str1 up to gcd_len
        return str1[:gcd_len]
