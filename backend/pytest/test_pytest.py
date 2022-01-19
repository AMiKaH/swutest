import unittest
import pytest

class TestPyTest(unittest.TestCase):
    def test_add(self):
        self.assertEqual(pytest.add(10, 5), 15)
        self.assertEqual(pytest.add(1, -1), 0)
        self.assertEqual(pytest.add(-1, -1), -2)

    def test_subtract(self):
        self.assertEqual(pytest.subtract(10, 5), 5)
        self.assertEqual(pytest.subtract(1, -1), 2)
        self.assertEqual(pytest.subtract(-1, -1), 0)

    def test_multiply(self):
        self.assertEqual(pytest.multiply(5,10), 50)

    def test_divide(self):
        self.assertEqual(pytest.divide(10, 5), 2)


if __name__ == '__main__':
    unittest.main()