import csv
from os import read
import json

def read_csv(csv_file, list):
    rows = csv.DictReader(open(csv_file))

    for row in rows:
        list.append(row)

    return list

def get_json_file(list):
    return json.dumps(list)




if __name__ == '__main__':
    
    file_name = 'users.csv'
    items = []
    emails = get_json_file(list=read_csv(file_name, items))
    
    with open("users.json", "w") as outfile:
        outfile.write(emails)