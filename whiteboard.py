# Find Smaller Numbers
# Given the array nums, for each num find out how many numbers in the array are smaller than it. 
# Return the answer in an array.

# Example 1:
# Input: nums = [8,1,2,2,3]
# Output: [4,0,1,1,3]
# Explanation:
# For nums = 8 there exist four smaller numbers than it (1, 2, 2 and 3).
# For nums = 1 does not exist any smaller number than it.
# For nums = 2 there exist one smaller number than it (1).
# For nums = 2 there exist one smaller number than it (1).
# For nums = 3 there exist three smaller numbers than it (1, 2 and 2).

# Example 2:
# Input: nums = [6,5,4,8]
# Output: [2,1,0,3] 

# Example 3:
# Input: nums = [7,7,7,7]
# Output: nums = [0,0,0,0]


def small(n):
    newlist =[]
    for i in range(len(n)):
        count = 0
        for v in range(len(n)):
            if n[i] > n[v]:
                count += 1
        newlist.append(count)
    return newlist
print(small([7,7,7,7]))


def small_nums2(arr):

    sorted_arr = sorted(arr)
    #sorted arr = [4,5,6,8]
    result = []
    num_dict = {}

    for i in range(len(sorted_arr)):
        if sorted_arr[i] not in num_dict:
            num_dict[sorted_arr[i]] = i

    for num in arr: 
        result.append(num_dict[num])

    #return [num_dict[num] for num in arr]

    return result

print(small_nums2([6,5,4,8]))


# Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
# Examples:
# solution('abc', 'bc') # returns true
# solution('abc', 'd') # returns false
def matched(arg1, arg2):
    return arg1.endswith(arg2)
    
print(matched('abc', 'd'))