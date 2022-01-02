import { Link } from 'react-router-dom';

const MyListItem = ({ item }) => {
    
    let contentType = ''
    if(item.name) {
        contentType = 'tvshow'
    } else {
        contentType = 'movie'
    }

    return (
        <div className='my-list-item'>
            <Link to={`/${contentType}/${item.id}`}><img style={{ width: '100%' }} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.poster_path} /></Link>
            { item.name ? <h3>{item.name}</h3> : <h3>{item.original_title}</h3>}
        </div>
    )
}
export default MyListItem;