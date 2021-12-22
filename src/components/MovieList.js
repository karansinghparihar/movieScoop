import Movie from "./Movie";

const MovieList = ({ heading, movies }) => {
    return (
        <>
            <h1 style={{ margin: '2rem 3rem', color: '#fff' }}>{heading}</h1>
            <div className="movies-trending">
                {
                    movies.map((movie, index) => {
                        return <Movie key={index} movie={movie} />
                    })
                }
            </div>
        </>
    )
}
export default MovieList
