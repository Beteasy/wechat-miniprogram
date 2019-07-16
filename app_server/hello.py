
from flask import Flask, request
import control
import json
app = Flask(__name__)

@app.route('/predict/', methods=['GET', 'POST'])
def predict():
    return 'Hello World!'


@app.route('/xunlian/', methods=['GET', 'POST'])
def xunlian():
    return 'Hello World!'


if __name__ == '__main__':
    app.run()