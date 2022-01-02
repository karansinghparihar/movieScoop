import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import Header from './Header';
import MyListItem from './MyListItem';

const MyList = () => {
    
    const [myList, setMyList] = useState([])
    let myListData = useSelector((state) => state.myList)
    
    useEffect(() => {
        if (myListData.length > 0) {
            localStorage.setItem('myList', JSON.stringify(myListData));
        }
        setMyList(JSON.parse(localStorage.getItem('myList')))
    }, [])

    return (
        <>
            <Header />
            <h1>My List</h1>
            <div className='my-list'>
                {   myList !== null ?
                    myList.map((item, index) => {
                        return <MyListItem key={index} item={item} />
                    }) : null
                }
            </div>
        </>
    )
}
export default MyList;
