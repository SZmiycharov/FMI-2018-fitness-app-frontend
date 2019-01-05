from flask import Flask, request, make_response
from flask_restful import Resource, Api
import requests
import json


class Translator(Resource):
    def get(self):
        text_for_translation = request.args['text']
        translate_to = request.args['translate_to']

        url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190105T152653Z.54bbcb5f1f0aea38.b58a210bc7b0bccdc7225a99a6c4ae6ce3280695&text=' + text_for_translation + '&lang='+ translate_to
        response = requests.get(url)
        json_response_data = json.loads(response.text)

        translated_text = json_response_data['text'][0]

        resp = make_response(translated_text)
        resp.headers['Access-Control-Allow-Origin'] = '*'
		
        return resp

        
if __name__ == '__main__':
    app = Flask(__name__)
    api = Api(app)

    api.add_resource(Translator, '/translate')

    app.run(port='1948')