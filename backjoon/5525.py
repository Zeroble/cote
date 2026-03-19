pn = int(input()) * ("IO") + "I"
# p1 = IOI
# p2 = IOIOI
# ....
input()
instr = input()

# print(f"pn : {pn}")

cur = 0
cnt = 0
while cur + len(pn) <= len(instr):
    if instr[cur : cur + len(pn)] == pn:
        # print(f"start : {cur}")
        cnt += 1
        while True:
            # 콤보 성공 : OI 가 이어지는 경우
            if instr[cur + len(pn) : cur + len(pn) + 2] == "OI":
                # print("combo!")
                cur += 2
                cnt += 1
            # 콤보 실패 : 다음 문자가 II / IO
            else:
                cur += len(pn)
                break
    cur += 1

print(cnt)
