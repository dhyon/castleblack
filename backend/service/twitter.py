import requests

BASE_URL = 'https://api.twitter.com'
BEARER_TOKEN = ''  # TODO fetch this from env variable


def get_latest_tweets_from_account(account, count):
    # DOCSTRING
    headers = {'Authorization': 'bearer ' + BEARER_TOKEN}

    url = BASE_URL + '/1.1/statuses/user_timeline.json?count=%d&screen_name=%s' % (count, account)
    response = requests.get(url=url, headers=headers)

    if response.status_code != 200:
        raise RuntimeError("couldn't fetch tweets from %s: %s" % (account, response.text))

    result_list = []
    for i in range(count):
        data = response.json()[i]
        stuff = [data['text'], data[0]['entities']['urls'][0]['url'], data['user']['name'], data['user']['screen_name']]
        result_list.append(stuff)
    return result_list

