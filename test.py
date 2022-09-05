import json

def get_map_data():
    temp = []
    temp.append({"name": "position1", "value": [118.13, 24.54, "position1", "12:30", 300, "xxx"]})
    temp.append({"name": "position2", "value": [118.17, 24.47, "position2", "15:30", 100, "xxx"]})
    return temp

def get_pie_data():
    temp = []
    temp.append([10.0, 20.0, 30.0, 40.0])
    temp.append([25.0, 25.0, 25.0, 25.0])
    return temp

def get_dataset():
    map_data = get_map_data()
    pie_data = get_pie_data()
    data = {
        'map_data': map_data,
        'pie_data': pie_data
    }
    return data

data = get_dataset()
print(data)
dataset = json.dumps(data, ensure_ascii=False)
f = open('../json/test_visualization.json', "w", encoding="utf-8")
f.write(dataset)
f.close()
print("over")
