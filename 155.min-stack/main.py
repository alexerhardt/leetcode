from typing import Optional, List


class MinStack:

    def __init__(self):
        self.stack: List[int] = []
        self.min: Optional[int] = None

    def push(self, val: int) -> None:
        self.stack.append(val)
        if self.min is None or val < self.min:
            self.min = val

    def pop(self) -> None:
        val = self.stack.pop()
        if val == self.min:
            self.min = min(self.stack, default=None)

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min
