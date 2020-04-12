import axios from 'axios';

var baseURI;
if (process.env.REACT_APP_DEV) {
  baseURI= 'http://localhost:5000';
} else {
  baseURI = process.env.REACT_APP_BASE_URL;
}

const client = axios.create({
  baseURL: baseURI,
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
