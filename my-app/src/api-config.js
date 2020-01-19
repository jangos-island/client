let baseURL;

const hostname = window && window.location && window.location.hostname;

if(hostname === 'localhost') {
  baseURL = 'http://127.0.0.1:8000/';
} else {
  baseURL = 'https://jango-island-production.herokuapp.com'
}

export { baseURL }
