import requests
import json

url_nox = "https://services8.arcgis.com/gtmasQsdfwbDAQSQ/arcgis/rest/services/mes_idf_horaire_nox/FeatureServer/0/query?where=1%3D1&outFields=valeur,unite,date_debut,date_fin,x,y&outSR=4326&f=json"

url_pm25 = "https://services8.arcgis.com/gtmasQsdfwbDAQSQ/arcgis/rest/services/mes_idf_horaire_pm25/FeatureServer/0/query?where=1%3D1&outFields=valeur,unite,date_debut,date_fin,x,y&outSR=4326&f=json"

url_o3 = "https://services8.arcgis.com/gtmasQsdfwbDAQSQ/arcgis/rest/services/mes_idf_journalier_o3/FeatureServer/0/query?where=1%3D1&outFields=valeur,unite,date_debut,date_fin,x,y&outSR=4326&f=json"

url_pm10 = "https://services8.arcgis.com/gtmasQsdfwbDAQSQ/arcgis/rest/services/mes_idf_horaire_pm10/FeatureServer/0/query?where=1%3D1&outFields=valeur,unite,date_debut,date_fin,x,y&outSR=4326&f=json"

response=requests.get(url_nox)


with open('data.txt', 'w') as outfile:
    json.dump(response.json()["features"] , outfile)