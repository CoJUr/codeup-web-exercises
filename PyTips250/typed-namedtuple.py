# typed version of collections.namedtuble()

# >>>
from typing import NamedTuple

# >>>
class Karma(NamedTuple):
    giver: str
    receiver: str
    score: int


# >>>
karma = Karma('bob', 'julian', 5)
# >>>
karma.giver
'bob'
# >>>
karma.receiver
'julian'
# >>>
karma.score
5

# https://codechalleng.es/tips/define-a-namedtuple-with-type-hints