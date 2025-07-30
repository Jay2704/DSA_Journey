nums = [1, 2, 3, 3]

hmap = {}
for i in range(len(nums)):
    # Check if the key exists in the hashmap
    if nums[i] in hmap:
        print(nums[i])

    # Update the hashmap with the current key-value pair
    hmap[nums[i]] = i



from collections import defaultdict

nums = [1, 2, 3, 3]

hmap = defaultdict(list)
for i in range(len(nums)):
    hmap[nums[i]].append(i)

for key in hamp.key():
        if len(hmap[key]) > 1:
                return True
        return False