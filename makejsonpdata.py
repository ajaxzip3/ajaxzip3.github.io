#!/usr/bin/env python
# -*- coding: utf-8 -*-

# dataフォルダ内の郵便番号データをJSONP形式にしてzipdataフォルダ内に保存します

import glob

for file in glob.glob('data/*.json'):
    print file, '-'*20
    f = open('zipdata/' + file[5:-2], "w")
    f.write("zipdata(")
    for line in open(file, 'r'):
        f.write(line)
    f.write(");\n")
    f.close()

