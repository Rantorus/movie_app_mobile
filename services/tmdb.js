const API_KEY = process.env.EXPO_PUBLIC_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

export const getTrending = async () => {
    const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    const data = await res.json()
    return data.results
}

export const getUpcoming = async () => {
    const res = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`)
    const data = await res.json()
    return data.results
}

export const getPopularMovies = async () => {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await res.json()
    return data.results
}

export const getTopRated = async () => {
    const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`)
    const data = await res.json()
    return data.results
}

export const searchMovies = async (query) => {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    const data = await res.json()
    return data.results
}   

export const getMovieDetails = async (movieId) => {
    const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    const data = await res.json()
    return data
}

export const getMovieCredits = async (movieId) => {
    const res = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
    const data = await res.json()
    return data.cast.slice(0, 10) // ilk 10 oyuncu
}

export const getSimilarMovies = async (movieId) => {
    const res = await fetch(`${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`)
    const data = await res.json()
    return data.results
}

export const getActorDetails = async (actorId) => {
    const res = await fetch(`${BASE_URL}/person/${actorId}?api_key=${API_KEY}`)
    const data = await res.json()
    return data
}

export const getActorMovies = async (actorId) => {
    const res = await fetch(`${BASE_URL}/person/${actorId}/movie_credits?api_key=${API_KEY}`)
    const data = await res.json()
    return data.cast
}