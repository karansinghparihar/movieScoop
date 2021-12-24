import {Navigate} from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

const ProtectedRoute = ({ children }) => {
   
    let {user} = useUserAuth()
    
    if( !user ) {
        return <Navigate to='/signin' />
    }
    return children
}
export default ProtectedRoute;