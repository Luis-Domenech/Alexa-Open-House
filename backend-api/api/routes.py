from flask import request, render_template, make_response
from flask import current_app as app

from .handlers.PropertyHandler import PropertyHandler
from .handlers.RealtorHandler import RealtorHandler

@app.route('/hello')
def say_hello():
    return {'text': 'Hello... fellow human!'}

# Property Routes
@app.route('/properties/<int:pid>', methods=['GET', 'PUT'])
def getOrUpdatePropertyById(pid):
    if request.method == 'GET':
        return PropertyHandler.getPropertyById(pid)
    if request.method == 'PUT':
        return PropertyHandler.updateProperty(pid, request.json)

@app.route('/properties/realtor/<int:rid>', methods=['GET'])
def getPropertiesByRealtorId(rid):
    if request.method == 'GET':
        return PropertyHandler.getPropertiesByRealtorId(rid)

@app.route('/properties', methods=['GET', 'POST'])
def getAllPropertiesOrCreate():
    if request.method == 'GET':
        return PropertyHandler.getAllProperties()
    if request.method == 'POST':
        return PropertyHandler.createProperty(request.json)


# Realtor Routes
@app.route('/createRealtor', methods=['POST'])
def createRealtor():
    return RealtorHandler.createRealtor(request)

@app.route('/realtor/<int:rid>', methods=['GET'])
def getRealtor(rid):
    return RealtorHandler.getRealtor(rid)