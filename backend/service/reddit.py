import os
import random
import string

import requests

# Implemented as a module with function rather than a class as I want this to behave like a singleton class


CLIENT_ID = os.environ['REDDIT_CLIENT_ID']
CLIENT_SECRET = os.environ['REDDIT_CLIENT_SECRET']
USER_AGENT = "danielhyon.com:castleblack v1.0"
OAUTH_BASEURL = "https://oauth.reddit.com"
DEVICE_ID = ''.join([random.choice(string.ascii_letters + string.digits) for n in range(8)])
BEARER_TOKEN = None


def get_random_string(length):
    return ''.join([random.choice(string.ascii_letters + string.digits) for n in range(length)])


def get_bearer_token():
    # https://github.com/reddit-archive/reddit/wiki/OAuth2 || Application-only OAuth
    global BEARER_TOKEN
    if not BEARER_TOKEN:
        data = {'grant_type': 'client_credentials', 'device_id': DEVICE_ID}
        headers = {'User-Agent': USER_AGENT}

        response = requests.post(url='https://www.reddit.com/api/v1/access_token', data=data,
                                 auth=(CLIENT_ID, CLIENT_SECRET), headers=headers)

        if response.status_code == 200:
            BEARER_TOKEN = response.json()['access_token']
        else:
            raise RuntimeError("not able to get reddit bearer token: %s" % response.text)

    return BEARER_TOKEN


def get_top_posts(subreddit, num_posts):
    # returns an array of arrays containing the permalink, title, and subreddit info of the top N posts
    global BEARER_TOKEN
    response = compose_and_make_request(subreddit)

    if response.status_code == 401:
        BEARER_TOKEN = None
        response = compose_and_make_request(subreddit)
    elif response.status_code != 200:
        raise RuntimeError("couldn't fetch %s subreddit posts: %s" % (subreddit, response.text))

    result_list = []
    for i in range(num_posts):
        data = response.json()['data']['children'][i]['data']
        stuff = ["https://www.reddit.com"+data['permalink'], data['title'], data['subreddit']]
        result_list.append(stuff)
    return result_list


def compose_and_make_request(subreddit):
    global BEARER_TOKEN
    headers = {'User-Agent': USER_AGENT,
               'Authorization': 'bearer ' + get_bearer_token()}

    url = OAUTH_BASEURL + '/r/%s/top' % subreddit
    return requests.get(url=url, headers=headers)