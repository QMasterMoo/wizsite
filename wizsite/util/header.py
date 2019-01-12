"""
Functions for updating and maintaining header file.
"""
import datetime
import flask
import wizsite
import requests  # pylint: disable=E0401

base_url = 'https://api.twitch.tv/helix/'

def update_header_dict(dicty):
    """
    Takes dictionary as input and appends header information to it before render
    """
    if not hasattr(flask.g, 'header_info'):
        flask.g.header_info = Header()
        h = flask.g.header_info
        h.update()
        dicty['header_live_status'] = h.online_status
        dicty['header_game'] = h.game
        dicty['header_title'] = h.title
        dicty['header_online_since'] = h.online_since

    

class Header:
    """
    Object holding online status. 

    Acts as a cache so we don't ping other servers too much.
    """
    def __init__(self):
        self.last_checked = datetime.datetime.min
        self.online_status = False
        self.title = ""
        self.game = ""
        self.online_since = None
        
    def update(self):
        """
        Update status at configured interval.
        """
        if datetime.datetime.now() - self.last_checked > datetime.timedelta(seconds=wizsite.app.config['HEADER_UPDATE_INTERVAL_SECONDS']):
            # reset check time
            self.last_checked = datetime.datetime.now()
            headers = {'Client-ID': wizsite.app.config['TWITCH_CLIENT_ID']}
            stream_status = requests.get('{}streams/?user_login={}'.format(base_url, wizsite.app.config['TWITCH_NAME']), headers=headers).json()
            
            if not stream_status['data']:
                self.online_status = False
                self.title = ""
                self.game = ""
                self.online_since = None
            else:
                self.online_status = True
                self.title = stream_status['data']['title']
                self.game = stream_status['data']['game_id']
                self.online_since = stream_status['data']['started_at']