from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema


class Haiku(db.Model, BaseModel):

    __tablename__ = 'haikus'

    name = db.Column(db.String(100), nullable=False)
    text = db.Column(db.String(120), nullable=False)
    portrait = db.Column(db.Boolean, default=True)

class HaikuSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = Haiku

    comments = fields.Nested('CommentSchema', many=True, exclude=('haiku',))

class Comment(db.Model, BaseModel):

    __tablename__ = 'comments'

    content = db.Column(db.String(120))
    haiku_id = db.Column(db.Integer, db.ForeignKey('haikus.id'))
    haiku = db.relationship('Haiku', backref='comments')

class CommentSchema(ma.ModelSchema, BaseSchema):

    class Meta:
        model = Comment
