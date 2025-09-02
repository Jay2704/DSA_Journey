

def solution1(height):
    n = len(height)
    left_max = [0] * n
    right_max = [0] * n
    water_trapped = 0

    left_max[0] = height[0]
    right_max[n-1] = height[n-1]
    
    for i in range(1,n):
        left_max[i] = max(left_max[i-1], height[i])
    for j in range(n-2, -1, -1):
        right_max = max(right_max[i+1], height[i])
    
    for k in range(n):
        water_trapped += min(left_max[k], right_max[k]) - height[k]
    return water_trapped

print(solution1([0,1,0,2,1,0,1,3,2,1,2,1]))