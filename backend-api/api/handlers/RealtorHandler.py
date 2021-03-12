import json
import bcrypt
from flask import jsonify
from datetime import datetime as dt

from .. import db
from ..models.Realtor import Realtor

class RealtorHandler:

    @staticmethod
    def getRealtor(rid):

        existingRealtor = Realtor.query.filter(
                Realtor.id == rid
            ).first()

        if existingRealtor:
            response = {
                "success": True,
                "realtor": existingRealtor.toJSON()
            }

            return jsonify(response)

        else:
            response = {
                "success": False,
                "error": "Realtor not found"
            }

            return jsonify(response)

    @staticmethod
    def createRealtor(request):
        name = request.args.get('name')
        email = request.args.get('email')
        password = request.args.get('password')

        # Make sure values exists
        if name and email and password:

            # Hash password using bcrypt
            # Note, password must be encoded to utf8 before passing to hashpw
            salt = bcrypt.gensalt()
            hashedPassword = bcrypt.hashpw(password.encode('utf8'), salt).decode('utf-8')

            # existing_user = Realtor.query.filter(
            #     User.username == username or User.email == email
            # ).first()

            # Check if realtor exists
            existingRealtor = Realtor.query.filter(
                Realtor.email == email
            ).first()
            
            if existingRealtor:
                response = {
                    "success": False,
                    "error": "Realtor already exists"
                }

                return jsonify(response)

            # Realtor is not in DB, so create them
            newRealtor = Realtor(
                name = name,
                email = email,
                password = hashedPassword,
                created = dt.now()
            ) 

            # Add Realtor to DB. This change is part of a transaction
            db.session.add(newRealtor)

            # Actually commit changes to DB by finishing the transaction
            db.session.commit()

            response = {
                "success": True,
                "error": ""
            }

            return jsonify(response)
