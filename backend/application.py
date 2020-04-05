from flask import Flask, json, request
from flask_cors import CORS
from service.reddit import *

import logging

application = Flask(__name__)
CORS(application)
application.logger.setLevel(logging.INFO)


@application.route('/')
def hello():
    return 'Hello, World!'


@application.route("/reddit/<subreddit>", methods=["GET"])
def get_reddit_posts(subreddit):
    logging.info("get_reddit_posts called with subreddit=%s" % subreddit)
    assert subreddit == request.view_args['subreddit']
    return json_response(get_top_posts(subreddit, 4))


def json_response(payload, status=200):
    return json.dumps(payload), status, {'content-type': 'application/json'}


if __name__ == "__main__":
    application.run()
