"""
Cases:
    - Two empty strings
    - Left empty string
    - Right empty string
    - Left string is longer
    - Right string is longer
    - Equal length strings
"""


def merge_strings_alt(word1: str, word2: str) -> str:
    arr_l: List[str] = word1.split()
    arr_r: List[str] = word2.split()
    len_l: int = len(arr_l)
    len_r: int = len(arr_r)
    s = ""
    for i in range(len_l + len_r):
        if i > len_l:
            s += arr_r.pop(0)
        elif i > len_r:
            s += arr_l.pop(0)
        else:
            s += arr_l.pop(0) if i % 2 == 0 else arr_r.pop(0)
    return s


def merge_strings_alt_chatgpt(word1: str, word2: str) -> str:
    arr_l: list = list(word1)  # Convert string to list of characters
    arr_r: list = list(word2)
    s = ""

    while arr_l or arr_r:
        if arr_l:
            s += arr_l.pop(0)
        if arr_r:
            s += arr_r.pop(0)

    return s
