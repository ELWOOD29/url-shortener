import axios from 'axios';

export const fetchUrlList = () => {
  return axios.get('/api/urls')
              .then(resp => {
                let urls = Object.keys(resp.data).map(id => {resp.data[id]});
                console.log(urls);
                return urls;
              });
  // return ([
  //   {
  //     id: "h4g5b6",
  //     short: "short/h4g5b6",
  //     long: "www.google.com"
  //   },
  //   {
  //     id: "j8k9l0",
  //     short: "short/j8k9l0",
  //     long: "www.bbc.co.uk"
  //   }
  // ]);
};

export const postUrl = longUrl => {
  // return axios.post(`/api/urls`, { longUrl })
  //             .then(resp => resp.data.url);
  console.log(`Url: ${longUrl} has been posted`);
};
