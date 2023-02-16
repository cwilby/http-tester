const axios = require('axios');

const [url] = process.argv.slice(2);

axios.get(url, { transformResponse: r => r }).then(response => console.log(response));