n = int(input())

for i in range(n):
    s = input()

    cnt_b = 0
    cnt_g = 0

    for j in s:
        if j in ["b", "B"]:
            cnt_b += 1
        elif j in ["g", "G"]:
            cnt_g += 1

    if cnt_b == cnt_g:
        print(f"{s} is NEUTRAL")
    elif cnt_b > cnt_g:
        print(f"{s} is BADDY")
    else:
        print(f"{s} is GOOD")
