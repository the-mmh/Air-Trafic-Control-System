import requests

url = 'http://localhost:5000/predict_api'
r = requests.post(url,json={'average':2, 'atc':3, 'fuel':22})

print(r.json())