import axios from 'axios';

const BASE_URI = 'http://localhost:5000';

const client = axios.create({
  baseURL: BASE_URI,
  json: true
});

class APIClient {

  getTopRedditPosts(subreddit) {
    const path = '/reddit/' + subreddit;
    return this.perform('get', path);
  }

  async perform(method, resource, data) {
    return client({
      method,
      url: resource,
      data
    }).then(resp => {
      return resp.data ? resp.data : [];
    })
  }
}

export default APIClient;