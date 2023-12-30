from flask import Blueprint, jsonify

views = Blueprint(__name__, 'views')

@views.route("/game", methods=["GET"])
def game():
    return jsonify({
            "board": [[0]*3 for _ in range(3)],
            "turns": [[0]*3 for _ in range(3)],
            "turn": -1,
    })