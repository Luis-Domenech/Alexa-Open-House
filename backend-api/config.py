# These two lines are used for AWS s3 connection
#from boto.s3.connection import S3Connection
#s3 = S3Connection(os.environ['S3_KEY'], os.environ['S3_SECRET'])
import os
from testConfig import TestConfig

class Config:
    # General Config
    # Values are obtained from Heroku's hidden environment variables or untracked TestConfig file
    FLASK_SECRET_KEY = os.environ["FLASK_SECRET_KEY"] if "FLASK_SECRET_KEY" in os.environ else TestConfig.FLASK_SECRET_KEY
    FLASK_APP = os.environ["FLASK_APP"] if "FLASK_APP" in os.environ else TestConfig.FLASK_APP
    FLASK_ENV = os.environ["FLASK_ENV"] if "FLASK_ENV" in os.environ else TestConfig.FLASK_ENV

    SQLALCHEMY_DATABASE_URI = os.environ["SQLALCHEMY_DATABASE_URI"] if "SQLALCHEMY_DATABASE_URI" in os.environ else TestConfig.SQLALCHEMY_DATABASE_URI
    SQLALCHEMY_ECHO = False

    # Used to remove annoying warning about system resources
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # More config options for database can be found here -> https://flask-sqlalchemy.palletsprojects.com/en/2.x/config/