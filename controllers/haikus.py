from flask import Blueprint, jsonify, request
from models.haiku import Haiku, HaikuSchema, CommentSchema, Comment
from lib.secure_route import secure_route

api = Blueprint('haikus', __name__)
haiku_schema = HaikuSchema()
comment_schema = CommentSchema()



@api.route('/haikus/<int:haiku_id>', methods=['GET'])
def show(haiku_id):

    haiku = Haiku.query.get(haiku_id)
    print('showing', haiku)
    if not haiku:
        return jsonify({'message': 'not found'}), 404
    return haiku_schema.jsonify(haiku), 200

@api.route('/haikus', methods=['GET'])
def index():
    haikus = Haiku.query.all()
    print('getting haikus')
    return haiku_schema.jsonify(haikus, many=True), 200


@api.route('/haikus', methods=['POST'])
@secure_route
def create():
    data = request.get_json()
    haiku, errors = haiku_schema.load(data)
    if errors:
        return jsonify(errors), 422
    haiku.save()
    return haiku_schema.jsonify(haiku), 201

@api.route('/haikus/<int:haiku_id>', methods=['PUT'])
def update(haiku_id):
    haiku = Haiku.query.get(haiku_id)
    if not haiku:
        return jsonify({'message': 'not found'}), 404
    data = request.get_json()
    haiku, errors = haiku_schema.load(data, instance=haiku, partial=True)
    if errors:
        return jsonify(errors), 422
    haiku.save()
    return haiku_schema.jsonify(haiku), 202


@api.route('/haikus/<int:haiku_id>', methods=['DELETE'])
def delete(haiku_id):
    haiku = Haiku.query.get(haiku_id)
    if not haiku:
        return jsonify({'message': 'not found'}), 404
    haiku.remove()
    return '', 200


@api.route('/haikus/<int:haiku_id>/comments', methods=['POST'])
@secure_route
def comment_create(haiku_id):
    haiku = Haiku.query.get(haiku_id)
    if not haiku:
        return jsonify({'message': 'not found'}), 404
    data = request.get_json()
    comment, errors = comment_schema.load(data)
    if errors:
        return jsonify(errors), 422
    comment.haiku = haiku
    haiku.save()
    return haiku_schema.jsonify(haiku), 201


@api.route('/haikus/<int:haiku_id>/comments/<int:comment_id>', methods=['DELETE'])
@secure_route
def comment_delete(**kwargs):
    comment = Comment.query.get(kwargs['comment_id'])
    if not comment:
        return jsonify({'message': 'not found'}), 404
    comment.remove()
    return '', 204
