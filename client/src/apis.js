const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = 'https://api.themoviedb.org/3/movie'

const endpoints = {
  NOW_PLAYING: `${apiUrl}/now_playing?api_key=${apiKey}&language=en-US`, 
  POPULAR: `${apiUrl}/popular?api_key=${apiKey}&language=en-US`, 
  TOP_RATED: `${apiUrl}/top_rated?api_key=${apiKey}&language=en-US`, 
  UPCOMING: `${apiUrl}/upcoming?api_key=${apiKey}&language=en-US`
}

export default endpoints;