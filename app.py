
from flask import Flask, render_template, flash, redirect, session, g, url_for, abort, jsonify, request
from flask_debugtoolbar import DebugToolbarExtension
from sqlalchemy.exc import IntegrityError

from random import randint
import requests
app = Flask(__name__)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route("/api/get-lucky-num", methods=["POST"])
def get_lucky_num():
    """Get user's lucky number and random fact."""

    # get form variables
    data = request.get_json()
    if data is None:
        return jsonify({"err": "Invalid JSON data in request."}), 400
    name = data.get("name")
    email = data.get("email")
    year = data.get("year")
    color = data.get("color")

    # make sure all fields are filled out
    if not name or not email or not year or not color:
        return jsonify({"err": "Please fill out all fields."}), 400

    # make sure year is between 1900 and 2000
    if int(year) < 1900 or int(year) > 2000:
        return jsonify({"err": "Year must be between 1900 and 2000."}), 400

    # make sure color is one of the options
    if color not in ["red", "green", "orange", "blue"]:
        return jsonify({"err": "Color must be one of red, green, orange, or blue."}), 400

    # get random number
    num = randint(1, 100)

    # get random fact
    fact = requests.get(f"http://numbersapi.com/{num}").text

    # return JSON
    return jsonify(
        {
            "num": {
                "num": num,
                "fact": fact,
            },
            "year": year,
            "color": color,

        }
    )
