import json
from .. import db

class Property(db.Model):

    # Set table name manually
    # __tablename__ = 'property'
    id = db.Column(
        db.Integer,
        primary_key=True
    )
    propertyName = db.Column(
        db.String(64),
        index=True,
        unique=False,
        nullable=False
    )
    squareFootage = db.Column(
        db.Integer,
        index=False,
        unique=False,
        nullable=False
    )
    price = db.Column(
        db.Integer,
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
        return '<Property {}>'.format(self.propertyName)

    def toJSON(self):

        return {
            "id": self.id,
            "propertyName": self.propertyName,
            "price": self.price,
            "created": self.date
        }

        # return json.dumps(self, default=lambda o: o.__dict__, 
        #     sort_keys=True, indent=4)