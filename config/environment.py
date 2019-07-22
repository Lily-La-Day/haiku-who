import os

db_uri = os.getenv('DATABASE_URI')

secret = os.getenv('SECRET', 'secreto')

LOG_TO_STDOUT = os.environ.get('LOG_TO_STDOUT')
