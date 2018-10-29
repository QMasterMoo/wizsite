"""
Wizsite Initializer.

Alex Harding <alex.harding@whale-net.net>
"""
import flask

# flask object shared amongst modules
app = flask.Flask(__name__) # pylint: disable=invalid-name

# Load config from file (config.py)
app.config.from_object('wizsite.config')
# Load config from envar
app.config.from_envvar('SITE_SETTINGS', silent=True)

# give access to our friends api, model, and view
import wizsite.api
import wizsite.model
import wizsite.views
import wizsite.util