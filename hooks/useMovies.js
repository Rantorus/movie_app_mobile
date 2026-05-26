// hooks/useMovies.js
import { useState, useEffect } from 'react'
import { getTrending, getUpcoming, getTopRated, getPopularMovies, IMAGE_BASE_URL, getMovieDetails, getMovieCredits, getSimilarMovies, getActorDetails, getActorMovies } from '../services/tmdb'

export const formatMovies = (movies = []) =>
    movies.map(movie => ({
        id: String(movie.id),
        title: movie.title,
        poster: `${IMAGE_BASE_URL}${movie.poster_path}`,
        rating: movie.vote_average?.toFixed(1),
    }))

export const useMovies = () => {
    const [trending, setTrending] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [topRated, setTopRated] = useState([])
    const [popular, setPopular] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const [trendingData, upcomingData, topRatedData, popularData] = await Promise.all([
                    getTrending(),
                    getUpcoming(),
                    getTopRated(),
                    getPopularMovies(),
                ])
                setTrending(formatMovies(trendingData))
                setUpcoming(formatMovies(upcomingData))
                setTopRated(formatMovies(topRatedData))
                setPopular(formatMovies(popularData))
            } catch (err) {
                console.error(err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchAll()
    }, [])

    return { trending, upcoming, topRated, popular, loading, error }
}

export const useMovieDetails = (movieId) => {
    const [details, setDetails] = useState(null)
    const [cast, setCast] = useState([])
    const [similar, setSimilar] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!movieId) return
        const fetchDetails = async () => {
            try {
                const [detailsData, creditsData, similarData] = await Promise.all([
                    getMovieDetails(movieId),
                    getMovieCredits(movieId),
                    getSimilarMovies(movieId),
                ])
                setDetails(detailsData)
                setCast(creditsData.map(actor => ({
                    id: String(actor.id),
                    name: actor.name,
                    character: actor.character,
                    picture: actor.profile_path   
                        ? `${IMAGE_BASE_URL}${actor.profile_path}`
                        : null,
                })))
                setSimilar(formatMovies(similarData))
            } catch (err) {
                console.error('Film detay hatası:', err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchDetails()
    }, [movieId])

    return { details, cast, similar, loading, error }
}

export const useActorDetails = (actorId) => {
    const [actor, setActor] = useState(null)
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!actorId) return
        const fetchActor = async () => {
            try {
                const [actorData, moviesData] = await Promise.all([
                    getActorDetails(actorId),
                    getActorMovies(actorId),
                ])
                setActor(actorData)
                setMovies(formatMovies(moviesData))
            } catch (err) {
                console.error('Aktör detay hatası:', err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchActor()
    }, [actorId])

    return { actor, movies, loading, error }
}