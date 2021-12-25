import {Navigate} from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

const ProtectedRoute = ({ children }) => {
   
    let {user, guest} = useUserAuth()
      
    if( guest ) {
        return children
    } 
    if( !user ) {
        return <Navigate to='/signin' />
    }
    return children
}
export default ProtectedRoute;
