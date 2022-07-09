# converting a DataFrame column from str -> Timestamp:

# >>> from io import StringIO
# >>> from dateutil.parser import parse
# >>> import pandas as pd

from io import StringIO
from dateutil.parser import parse
import pandas as pd

# >>>
data = StringIO("""username;date_joined
... bbelderbos;2017-11-02 09:48:22
... pybites;2017-11-04 11:37:if 10
... ...
... """)

# >>>
df = pd.read_csv(data, sep=";")
# >>>
df.date_joined[0]
'2017-11-02 09:48:22'
# ^str

# convert from str to Timestamp (the whole col)
# >>>
df.date_joined = df.date_joined.apply(parse)
# >>>
df.date_joined[0]
Timestamp('2017-11-02 09:48:22')

# or use
# >>>
df.date_joined = pd.to_datetime(df.date_joined)

# https://codechalleng.es/tips/convert-str-to-datetime-in-pandas