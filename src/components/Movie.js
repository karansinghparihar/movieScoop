import { useParams } from 'react-router-dom'
import ContentDetail from './ContentDetail'

const Movie = ({guestLoginHandler}) => {
    const { id } = useParams()
    const api_key = process.env.React_App_Api_Key

    return (
        <>
            <ContentDetail id={id} api_key={api_key} contentType='movie' guestLoginHandler={guestLoginHandler} />
        </>
    )
}
export default Movie;