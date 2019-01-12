"""
Blog endpoints.
"""
import flask
import wizsite
import datetime

from wizsite.model import get_latest_blogs

@wizsite.app.route('/api/v1/blogs/', methods=['GET'])
def get_recent_blogs():
    """
    Return test data.
    """

    context = {}
    context['url'] = flask.request.path
    context['posts'] = []

    # Query variables
    # num_groups = int(flask.request.args.get('size')) if flask.request.args.get('size') != None else 3
    # page_number = int(flask.request.args.get('page')) if flask.request.args.get('page') != None else 0

    # Get latest posts
    posts = get_latest_blogs()
    for p in posts:
        p_dict = {}
        p_dict['author'] = p[4]
        p_dict['posted'] = p[1]
        p_dict['content'] = p[2]
        p_dict['title'] = p[0]
        # if it was edited within 10 minutes of posting don't mark edited
        if p[3] - p[1] > datetime.timedelta(seconds=600):
            p_dict['edited'] = p[3]
        context['posts'].append(p_dict)

    return flask.jsonify(**context)