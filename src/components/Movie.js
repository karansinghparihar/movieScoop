import React from 'react'

const Movie = (props) => {
    // https://image.tmdb.org/t/p/w500/

    // const id = props.movie.id
    const backdrop_path = props.movie.backdrop_path
    
    return (
        <div className='movie'>
            {/* <h1>{id}</h1> */}
            <img src = {`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={backdrop_path} />
        </div>
    )
}
export default Movie
