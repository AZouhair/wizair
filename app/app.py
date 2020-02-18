from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

#Init app
app = Flask(__name__)

def func(a):
    return (a)


@app.route('/captor', methods=['POST'])
def captor_data():
    if request.is_json: # validates the request body contains JSON
        req = request.get_json() # create a dict from the JSON
        print(req) # return an HTTP status code
        return "ok",200
    else:
        return 'not json',400


@app.route('/predict',methods=['POST'])
def predict():
    if request.get_json():
        req= request.get_json()
        return jsonify(func(req))
    return 
#Run Server
if __name__ == '__main__':
    app.run(debug=True)