require('es6-promise').polyfill()
require('isomorphic-fetch')

var ifetch = function(url, method, body, headers){
  if(method == 'GET'){
    return fetch(url, {
          method: 'GET',
          body,
          credentials: 'same-origin'
        })
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server")
            }
            return response.json()
        })
  }else if(method == 'POST'){
    return fetch(url, {method: 'POST',
        credentials: 'same-origin',
        headers: headers || {}, body: body})
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server")
            }
            return response.json()
        })
  }else if(method == 'JSONPOST'){
    return fetch(url, {method: 'POST',
      credentials: 'same-origin',
      headers: headers || {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)})
      .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server")
        }
        return response.json()
      })
  }else if(method == 'JSONPUT'){
    return fetch(url, {method: 'PUT',
      credentials: 'same-origin',
      headers: headers || {
        'Accept': 'application/json',
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(body)})
      .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server")
        }
        return response.json()
      })
  }
}

module.exports = ifetch
