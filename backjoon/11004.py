"""
K번째 수
5 5
4 1 2 3 5
=> 5
"""

_, k = map(int, input().split(" "))
nums = list(map(int, input().split(" ")))
nums.sort()

# print(nums)
print(nums[k - 1])
