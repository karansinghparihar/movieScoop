import { useState, useEffect } from "react";
import MovieList from "./MovieList";

const Movies = () => {
    const api_key = process.env.React_App_Api_Key
    const trendUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
    const popUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
    const upcomUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}` 

    const [trendMovies, setTrendMovies] = useState([])
    const [popMovies, setPopMovies] = useState([])
    const [upcomMovies, setUpcompMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const trendRes = await fetchMovies(trendUrl)
            const popRes = await fetchMovies(popUrl)
            const upcomRes = await fetchMovies(upcomUrl)

            setTrendMovies(trendRes.results)
            setPopMovies(popRes.results)
            setUpcompMovies(upcomRes.results)
        }
        getMovies()
    })

    const fetchMovies = async (url) => {
        if (url === trendUrl) {
            const trendRes = await fetch(url)
            const trendMovies = await trendRes.json()
            return trendMovies
        }
        else if (url === popUrl) {
            const popRes = await fetch(url)
            const popMovies = await popRes.json()
            return popMovies
        }
        else if (url === upcomUrl) {
            const upcomRes = await fetch(url)
            const upcomMovies = await upcomRes.json()
            return upcomMovies
        }
    }

    return (
        <div className="movies">
            <MovieList movies={trendMovies} heading='Trending Movies' />
            <MovieList movies={popMovies} heading='Popular on Netflix' />
            <MovieList movies={upcomMovies} heading='Upcoming movies' />
        </div>
    )
}
export default Movies;
