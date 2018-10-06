from flask import Flask, request
from flask_restful import Resource, Api
from flask import jsonify
from flask_cors import CORS
from config import FIREBASE_URL
from firebase import firebase
import json

app = Flask(__name__)
CORS(app)
api = Api(app)

class User(Resource):
    def get(self):
        user = {
            'name': 'John Smith',
            'income': '30000',
            'education': 'Miami Killian Senior High',
            'kids': '3',
            'phone': '334-234-3341',
            'region': 'Homestead',
            'email': 'jsmith@gmail.com'
        }

        return jsonify(user)

class Budget(Resource):

    def get(self):
        fb = firebase.FirebaseApplication(FIREBASE_URL, None)
        fb_res = fb.get('/user/budget', None)

        # sample response from firebase will be of the form:
        # "{ x: [1,2,3,4], y: [10,20,40,50], goal: 100 }"

        y_axis = fb_res["y"]

        res = {
            "data": y_axis
        }

        return jsonify(res)
    
    def post(self):
        appendee = request.get_json(force=True)["data"]

        fb = firebase.FirebaseApplication(FIREBASE_URL, None)
        old_y = fb.get('/user/budget', None)["y"]
        new_y = old_y + eval(appendee)
        fb.put('/user/budget', "y", new_y)

class Credit(Resource):

    def get(self):
        fb = firebase.FirebaseApplication(FIREBASE_URL, None)
        fb_res = fb.get('/user/credit', None)

        # sample response from firebase will be of the form:
        # "{ x: [1,2,3,4], y: [10,20,40,50], goal: 100 }"

        y_axis = fb_res["y"]

        res = {
            "data": y_axis
        }

        return jsonify(res)
    
    def post(self):
        appendee = request.get_json(force=True)["data"]

        fb = firebase.FirebaseApplication(FIREBASE_URL, None)
        old_y = fb.get('/user/credit', None)["y"]
        new_y = old_y + eval(appendee)
        fb.put('/user/credit', "y", new_y)

class Savings(Resource):

    def get(self):
        fb = firebase.FirebaseApplication(FIREBASE_URL, None)
        fb_res = fb.get('/user/savings', None)

        y_axis = fb_res["y"]

        res = {
            "data": y_axis
        }

        return jsonify(res)
    
    def post(self):
        appendee = request.get_json(force=True)["data"]

        fb = firebase.FirebaseApplication(FIREBASE_URL, None)
        old_y = fb.get('/user/savings', None)["y"]
        new_y = old_y + eval(appendee)
        fb.put('/user/savings', "y", new_y)

class CivicAction(Resource):

    def get(self):
        fb = firebase.FirebaseApplication(FIREBASE_URL, None)
        fb_res = fb.get('/user/civicAction', None)

        y_axis = fb_res["y"]

        res = {
            "data": y_axis
        }

        return jsonify(res)
    
    def post(self):
        appendee = request.get_json(force=True)["data"]

        fb = firebase.FirebaseApplication(FIREBASE_URL, None)
        old_y = fb.get('/user/civicAction', None)["y"]
        new_y = old_y + eval(appendee)
        fb.put('/user/civicAction', "y", new_y)



api.add_resource(User, '/user')
api.add_resource(Budget, '/user/budget')
api.add_resource(Credit, '/user/credit')
api.add_resource(Savings, '/user/savings')
api.add_resource(CivicAction, '/user/civicAction')

if __name__ == '__main__':
    app.run(debug=True)