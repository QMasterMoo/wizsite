"""
REST API example endpoint.

testing for react.
"""
import flask
import wizsite

from wizsite.model import test_db

@wizsite.app.route('/api/v1/', methods=['GET'])
def get_test():
    """
    Return test data.
    """

    context = {}
    context['test'] = 'this is a test message'
    print(test_db())


    return flask.jsonify(**context)