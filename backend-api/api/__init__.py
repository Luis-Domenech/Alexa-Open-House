from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()


def create_app():

    # Setup core app
    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object('config.Config')

    db.init_app(app)

    # Setup db migration
    migrate = Migrate(app, db)

    with app.app_context():
        from . import routes

        # Create sql tables for our data models
        # db.create_all()  

        return app