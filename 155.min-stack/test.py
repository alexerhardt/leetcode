import unittest
from main import MinStack


class Test(unittest.TestCase):
    def test_one(self):
        ms: MinStack = MinStack()
        ms.push(3)
        self.assertEquals(ms.getMin(), 3)


