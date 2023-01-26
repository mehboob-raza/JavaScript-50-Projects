const API_URL = 'https://api.themoviedb.com/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL = 'https://api.tmdb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


// get iniatial movies 
getMovies(API_URL)
async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results);
}