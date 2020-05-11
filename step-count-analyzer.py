from flask import Flask, request, make_response
from flask_restful import Resource, Api
import requests
import json


class Translator(Resource):
    def get(self):
        steps_count = int(request.args['steps'])

        if steps_count < 0:
          resp_message = "Cannot analyze negative number of steps!"
        elif steps_count < 5000:
          resp_message = "You should walk more tomorrow!"
        elif steps_count < 10000:
          resp_message = "Good work, but you can do even better!"
        elif steps_count < 20000:
          resp_message = "Excellent, keep up the good work!"
        else:
          resp_message = "That's amazing! You can rest tomorrow!"

        resp = make_response(resp_message)
        resp.headers['Access-Control-Allow-Origin'] = '*'

        return resp


if __name__ == '__main__':
    app = Flask(__name__)
    api = Api(app)

    api.add_resource(Translator, '/step-count-analyze')

    app.run(port='1996')
