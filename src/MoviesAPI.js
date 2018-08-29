
const api = "http://www.omdbapi.com/?i=tt3896198&apikey=8099235f"

const headers = {
  'Accept': 'application/json'
}

export const get = () =>
  fetch(api, { headers })
    .then(res => res.json())
    .then(data => data)
