"""
Shutdown flask server
"""
import flask

def shutdown_server():
    """
    Shut down the flask server.
    https://stackoverflow.com/questions/15562446/how-to-stop-flask-application-without-using-ctrl-c
    """
    shutdown_func = flask.request.environ.get('werkzeug.server.shutdown')
    if shutdown_func is None:
        raise RuntimeError('No server running')
    shutdown_func()