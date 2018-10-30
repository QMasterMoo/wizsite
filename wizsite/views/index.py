"""
REST API endpoint for index.

Main endpoint for wizsite.
"""
import flask
import wizsite

from wizsite.util import update_header_dict

@wizsite.app.route('/', methods=['GET'])
def get_index():
    """
    Return index template.
    """
    context = {}
    update_header_dict(context)
    return flask.render_template("index.html", **context)
