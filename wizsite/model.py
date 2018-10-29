"""
Wizsite database api.
"""
import mysql.connector # pylint: disable=E0401
import flask
import wizsite
import sys

from wizsite.util.shutdown import shutdown_server

def test_db():
    """
    does she exist?
    """
    cursor = get_db().cursor()
    query = """
            SELECT password
            FROM Users
            WHERE username=%s
            """
    cursor.execute(query, ('alex',))
    string = cursor.fetchone()[0]
    cursor.close()
    return string

def get_db():
    """
    Return database connection or open new one if not present.
    """
    if not hasattr(flask.g, 'mysql_db'):
        # Establish Connection
        try:
            flask.g.mysql_db = mysql.connector.connect(
                user=wizsite.app.config['DATABASE_USERNAME'],
                password=wizsite.app.config['DATABASE_PASSWORD'],
                host=wizsite.app.config['DATABASE_HOST'],
                database=wizsite.app.config['DATABASE_NAME']
            )
        except:
            shutdown_server()
            raise RuntimeError('Database connection failed')



    return flask.g.mysql_db

@wizsite.app.teardown_appcontext
def close_db(error):
    # pylint: disable=unused-argument
    if hasattr(flask.g, 'mysql_db'):
        try:
            flask.g.mysql_db.commit()
        except:
            flask.g.mysql_db.roll_back()
        flask.g.mysql_db.close()
