//chaining promises made easier and more readable

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

function json(response) {
    return response.json()
}

fetch('users.json')
    .then(status)
    .then(json)
    .then(function(data) {
        console.log('Request succeeded with JSON response', data);
    }).catch(function(error) {
    console.log('Request failed', error);
});