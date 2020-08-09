const request = require('request')

async function get (options) {
  return new Promise((resolve, reject) => {
    options.method = 'GET';
    request(options, (error, response, body) => {
      if (error) return reject(error)
      return resolve({ body, response })
    })
  })
}

async function post (options) {
  return new Promise((resolve, reject) => {
    options.method = 'POST';
    // console.log(options);
    request(options, (error, response, body) => {
      if (error) return reject(error)
      return resolve({ body, response })
    })
  })
}

async function put (options) {
  return new Promise((resolve, reject) => {
    options.method = 'PUT';
    request(options, (error, response, body) => {
      if (error) return reject(error)
      return resolve({ body, response })
    })
  })
}

module.exports = {
  get,
  post,
  put
}