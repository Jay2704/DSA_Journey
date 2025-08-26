

def trap(height):
    left = 0
    right = len(height) - 1

    left_max = height[left]
    right_max = height[right]

    while left < right:
        if height[left] < height[right]:
            if height[left] > left_max:
                left_max = height[left]
            else:
                water += left_max - height[left]
            left += 1
        else:
            if height[right] > right_max:
                pass
            