from flask import Flask
from flask_restful import Resource, Api
from flask import jsonify
from flask_cors import CORS
from config import FIREBASE_URL
from firebase import firebase

app = Flask(__name__)
CORS(app)
api = Api(app)


class User(Resource):
    def get(self):
        user = {
            'name': 'John Smith',
            'income': '30000',
            'education': 'High School',
            'kids': '3',
            'phone': '334-234-3341',
            'region': 'Homestead',
            'email': 'jsmith@gmail.com'
        }

        return jsonify(user)

class Budget(Resource):
    def get(self):
        fb = firebase.FirebaseApplication(FIREBASE_URL, None)
        res = fb.get('/user/budget', None)
        return jsonify(res)

api.add_resource(User, '/user')
api.add_resource(Budget, '/user/budget')

if __name__ == '__main__':
    app.run(debug=True)