import { useState, useEffect } from "react";
import ContentList from "./ContentList";
import NetflixBg from '../images/netflixBg.png'
import AppLogo from '../images/AppLogo.png'
import { Link } from "react-router-dom";

export const Search = () => {

    const api_key = process.env.REACT_APP_API_KEY
    const [searchTerm, setSearchTerm] = useState('')
    const [searchItems, setSearchItems] = useState([])
    const [content, setContent] = useState('movie')

    useEffect(() => {
        const getSearchItems = async () => {
            const searchResults = await fetchSearchItems()
            setSearchItems(searchResults.results)
        }
        getSearchItems()
    }, [searchTerm, content])

    const fetchSearchItems = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/search/${content}?api_key=${api_key}&query=${searchTerm}`)
        const searchResults = await res.json()
        return searchResults
    }

    return (
        <div className="bg-search">
            <img className='bg-search-image' src={NetflixBg} alt={NetflixBg} />

            <div className="search">
            <Link to='/'><img src={AppLogo} alt={AppLogo} /></Link>
                <form>
                    <input placeholder="&#xf002;  Movies and Tv Shows..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </form>
                <div className="search-filters">
                    <button style={{ border: `${content === 'movie' ? '0.2rem solid white' : ''}` }} onClick={() => setContent('movie')}>Movies</button>
                    <button style={{ border: `${content === 'tv' ? '0.2rem solid white' : ''}` }} onClick={() => setContent('tv')}>Tv Shows</button>
                </div>
                { content === 'movie' ? <h2>Movies</h2> : <h2>Tv Shows</h2>}
                {searchItems ? <ContentList contents={searchItems} contentType='search' searchType={content} /> : null}
            </div>
        </div>
    )
}
export default Search;