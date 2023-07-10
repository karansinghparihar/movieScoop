import { useParams } from 'react-router-dom'
import ContentDetail from './ContentDetail'

const Movie = () => {
    const { id } = useParams()
    const api_key = process.env.REACT_APP_API_KEY

    return (
        <>
            <ContentDetail id={id} api_key={api_key} contentType='movie' />
        </>
    )
}
export default Movie;