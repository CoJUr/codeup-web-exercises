# in python the sorted/min/max functions take an optional 'key' keyword argument that recieves a callable:

# >>>
ages = {'bob': 23, 'julian': 11, 'tim': 7, 'sara': 37}


# >>>
sorted(ages.items())
[('bob', 23), ('julian', 11), ('sara', 37), ('tim', 7)]

# >>>
sorted(ages.items(), key=lambda x: x[1])
[('tim', 7), ('julian', 11), ('bob', 23), ('sara', 37)]

# >>>
sorted(ages.items(), key=lambda x: x[1], reverse=True)
('sara', 37), ('bob', 23), ('julian', 1), ('tim', 7)


# another example:
# >>>
names = 'bob Julian tim sara'.split()

# >>>
sorted(names)
['Julian', 'bob', 'sara', 'tim']
# >>>
sorted(names, key=str.lower)
['bob', 'Julian', 'sara', 'tim']

# https://codechalleng.es/tips/sorted-min-max-key-argument


