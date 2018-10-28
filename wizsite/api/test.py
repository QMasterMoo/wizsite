"""
REST API example endpoint.

testing for react.
"""
import flask
import wizsite

@wizsite.app.route('/api/v1/', methods=['GET'])
def get_test():
    """
    Return test data.
    """

    context = {}
    context['test'] = 'this is a test message'

    return flask.jsonify(**context)