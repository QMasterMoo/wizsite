"""
REST API endpoint for index.

Main endpoint for wizsite.
"""
import flask
import wizsite

@wizsite.app.route('/', methods=['GET'])
def get_index():
    """
    Return index template.
    """
    context = {}
    return flask.render_template("temp_index.html", **context)
