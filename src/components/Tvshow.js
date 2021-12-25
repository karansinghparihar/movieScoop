import { useParams } from 'react-router-dom'
import ContentDetail from './ContentDetail'

const Tvshow = () => {
    const { id } = useParams()
    const api_key = process.env.React_App_Api_Key

    return (
        <>
            <ContentDetail id={id} api_key={api_key} contentType='tv' />
        </>
    )
}
export default Tvshow;