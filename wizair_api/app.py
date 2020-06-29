from flask import Flask, request
from keras.models import load_model
import tensorflow as tf
import numpy as np
import flask

app = Flask(__name__)
model = load_model('polPrediction')

# request model prediction
@app.route('/predict', methods=['POST'])
def predict():
        a = np.array([int(request.json["timeserieArray"][i]) for x in range(8))])
        b = 
        result = model.predict([,a, 1])
        print(result)
        data = {'result': result}
        return flask.jsonify(data)

# start Flask server
app.run(host='0.0.0.0', port=5000, debug=False)