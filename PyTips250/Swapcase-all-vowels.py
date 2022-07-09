# can use str.maketrans and str.translate to apply a mapping of replacements:

# >>>
vowels = 'aeiou'
# >>>
text = "Its friday evening, which means X-FILES night"
# >>>
table = {c: c.swapcase() for c in cowels + vowels.upper()}
# >>>
table
{'A': 'a', 'E': 'e', 'I': 'i', 'O': 'o', 'U': 'u',
 'a': 'A', 'e': 'E', 'i': 'I', 'o': 'O', 'u': 'U',}

# >>>
translation = text.maketrans(table)
# keys = outputs of ord() = integer rep of (Unicode) chars
# so ord('A) -> 65, ord('E') -> 69, etc

# >>>
translation
{65: 'a', 69: 'e', 73: 'i', 79: 'o', 85: 'u',
 97: 'A', 101: 'E', 105: 'I', 111: 'O', 117: 'U'}

# apply the xlation mapping, effectively swapcasing the vowels
# >>>
text.translate(translation)
"it's FrIdAy EvEning, whIch mEAns XFiLeS nIght"

# alternative: use join + a generator expr
# >>>
"".join(table.get(c, c) for c in text)
"it's FrIdAy EvEning..."

# https://codechalleng.es/tips/how-to-swapcase-all-vowels-in-a-text