# context manager: use contextlib module for redirecting standard output

# https://codechalleng.es/tips/redirecting-standard-output

from contextlib import redirect_stdout

# >>>
with open('help.txt', 'w') as f:
    ... with redirect_stdout(f):
        ... help(pow)
        ...

# >>>
with open('help.txt') as f:
    ... f.read()
    ...
'Help on built-in function pow in module builtins: ... ... 