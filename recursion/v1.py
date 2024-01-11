
cnt = 0

def function():
    global cnt
    if cnt == 3:
        return
    cnt += 1
    print(cnt)
    function()

if __name__ == "__main__":
    function()