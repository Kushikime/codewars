def filter_list(list):
    return [entry for entry in list if type(entry) != str]


a = filter_list(['samurai', 'ai', 1, 2, 3])
print(a)