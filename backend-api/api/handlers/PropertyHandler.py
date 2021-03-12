from flask import jsonify
from datetime import datetime as dt

from .. import db
from ..models.Realtor import Realtor
from ..models.Property import Property

class PropertyHandler:

    # @staticmethod
    # def getPropertiesByRealtorId(rid):
    #     # mock
    #     properties =  Property.query(filter())
    #     return jsonify(properties)

    @staticmethod
    def getPropertyById(pid):

        property = Property.query.filter(Property.id == pid).first()

        if property:
            response = {
            "success" : True,
            "Property" : property.toJSON()
            }

        else:
            response = {
                "success": False,
                "error": "Realtor not found"
            }

        return jsonify(property)

    @staticmethod
    def updateProperty(pid, propertyName, squareFootage, price):
        property = Property.query.filter(Property.id == pid).first()

        property.propertyName = propertyName
        property.squareFootage = squareFootage
        property.price = price

        db.session.add(property)
        db.session.commit()

        

        return jsonify(property)
