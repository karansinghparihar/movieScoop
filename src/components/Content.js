import {Link} from 'react-router-dom'

const Content = ({ content, contentType }) => {
    // https://image.tmdb.org/t/p/w500/

    const { id, name, backdrop_path  } = content
    
    return (
        <div className='content'>
            {/* <h1 style={{color:'white'}}>{id}</h1> */}
            <Link to={`/${contentType}/${id}`}><img src = {`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={backdrop_path} /></Link>
        </div>
    )
}
export default Content;
