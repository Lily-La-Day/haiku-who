import os

db_uri = os.getenv('DATABASE_URI', 'postgres://localhost:5432/haikus')

secret = os.getenv('SECRET', 'secreto')
