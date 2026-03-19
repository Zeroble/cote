"""
Network 75
ArtificialIntelligence 93
Startup 5
CyberSecurity 47
TestStrategy 42
Algorithm 74
DataAnalysis 65
"""

max = -1
max_event = ""

for i in range(7):
    a, b = input().split(" ")
    b = int(b)
    if b > max:
        max = b
        max_event = a

print(max_event)
