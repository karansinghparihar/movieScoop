import { Link } from 'react-router-dom'
import EmptyBackdrop from '../images/emptyBackdrop.jpg'

const Content = ({ content, contentType, searchType }) => {
    // https://image.tmdb.org/t/p/w500/

    const { id, backdrop_path, original_title, name, poster_path } = content
    
    return (
        <div className={`${contentType === 'search' ? 'content-search' : 'content'}`}>

            {contentType === 'search' ? <>
                <Link to={`/${contentType}/${searchType}/${id}`}>
                    {poster_path === null ? <div className='content-image-null'>
                        <img style={{ width: '100%', borderRadius: '8px' }} src={EmptyBackdrop} alt={EmptyBackdrop} />
                    </div> :
                        <img style={{ width: '100%', borderRadius: '8px' }} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`${contentType === 'tv' ? name : original_title} `} />
                    }
                </Link>
                <h3 style={{textAlign: 'center'}}>{`${searchType === 'movie' ? original_title : name}`}</h3>
            </> : <>
                <Link to={`/${contentType}/${id}`}>
                    {backdrop_path === null ? <div><img style={{ height: '19.8rem', borderRadius: '8px' }} src={EmptyBackdrop} alt={EmptyBackdrop} /></div> :
                        <img style={{ borderRadius: '8px' }} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={`${contentType === 'tv' ? name : original_title} `} />
                    }
                </Link>
                <h3 style={{color: 'white', textAlign: 'center', marginBottom: '3rem'}}>{`${contentType === 'movie' ? original_title : name}`}</h3>
            </>
            }

        </div>
    )
}
export default Content;
