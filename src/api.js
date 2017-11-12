import axios from 'axios';

export const fetchUrlList = () => {
  return axios.get('/api/urls')
              .then(resp => resp.data);
};

export const postUrl = (longUrl) => {
  return axios.post('/api/urls', { longUrl })
              .then(resp => resp.data);
};
