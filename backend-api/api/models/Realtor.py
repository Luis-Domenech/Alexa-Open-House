import json
from .. import db

class Realtor(db.Model):

    # Set table name manually
    # __tablename__ = 'realtor'
    id = db.Column(
        db.Integer,
        primary_key=True
    )
    name = db.Column(
        db.String(64),
        index=False,
        unique=True,
        nullable=False
    )
    email = db.Column(
        db.String(64),
        index=True,
        unique=True,
        nullable=False
    )
    password = db.Column(
        db.String(60),
        index=False,
        unique=False,
        nullable=False
    )
    created = db.Column(
        db.DateTime,
        index=False,
        unique=False,
        nullable=False
    )

    def __repr__(self):
        return '<Realtor {}>'.format(self.email)

    def toJSON(self):

        return {
            "id": self.id,
            "name": self.name,
            "password": self.password,
            "created": self.created
        }