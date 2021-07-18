class Solution:
    """
    Better solutions:
    Reverse the string and sum or subtract
    https://leetcode.com/problems/roman-to-integer/discuss/450264/Python-Beginner-98-fast-100-Memo
    Change edge cases to normal cases:
    https://leetcode.com/problems/roman-to-integer/discuss/264743/Clean-Python-beats-99.78.
    """
    def roman_to_int(self, s: str) -> int:
        sol = 0
        i = 0

        while i < len(s):
            cur = s[i]
            nxt = s[i + 1] if i + 1 < len(s) else None
            if cur == 'I':
                if nxt == 'V':
                    sol = sol + 4
                    i += 1
                elif nxt == 'X':
                    sol = sol + 9
                    i += 1
                else:
                    sol += 1
            elif cur == 'V':
                sol += 5
            elif cur == 'X':
                if nxt == 'L':
                    sol += 40
                    i += 1
                elif nxt == 'C':
                    sol = sol + 90
                    i += 1
                else:
                    sol += 10
            elif cur == 'L':
                sol += 50
            elif cur == 'C':
                if nxt == 'D':
                    sol += 400
                    i += 1
                elif nxt == 'M':
                    sol += 900
                    i += 1
                else:
                    sol += 100
            elif cur == 'D':
                sol += 500
            elif cur == 'M':
                sol += 1000
            else:
                raise ValueError('Value not recognized')
            i += 1

        return sol
