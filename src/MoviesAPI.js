//homePage link (shows movies from current year)
const apiHome = "http://www.omdbapi.com/?apikey=8099235f&s=trending"

//search link
const apiSearch = "http://www.omdbapi.com/?apikey=8099235f&s="

//details link
const apiDetails = "http://www.omdbapi.com/?apikey=8099235f&i="

const headers = {
  'Accept': 'application/json'
}

export const get = () =>
  fetch(apiHome, { headers })
    .then(res => res.json())
    .then(data => data)

export const search = (query) =>
  fetch(apiSearch+query, { headers })
    .then(res => res.json())
    .then(data =>  {let results = data.Search; console.log(data.Search); return results})

//tt0138097
export const getDetails = (movieID) =>
  fetch(apiDetails+movieID, { headers })
    .then(res => res.json())
    .then(data => data)
    //Year, Runtime, Genre, imdbRating, Plot, Poster
