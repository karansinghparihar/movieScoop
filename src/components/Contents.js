import { useState, useEffect } from "react";
import ContentList from "./ContentList";
import Loader from "./Loader";

export const Contents = ({ contents }) => {

    const api_key = process.env.REACT_APP_API_KEY
    const trendUrl = `https://api.themoviedb.org/3/trending/${contents.type}/day?api_key=${api_key}`
    const popUrl = `https://api.themoviedb.org/3/${contents.type}/popular?api_key=${api_key}`
    const upcomUrl = `https://api.themoviedb.org/3/${contents.type}/${contents.upcomPath}?api_key=${api_key}`
    const topUrl = `https://api.themoviedb.org/3/${contents.type}/top_rated?api_key=${api_key}`
    const nowUrl = `https://api.themoviedb.org/3/${contents.type}/${contents.nowPath}?api_key=${api_key}`

    const [contentsData, setContentsData] = useState({
        trendContents: [],
        popContents: [],
        upcomContents: [],
        topContents: [],
        nowContents: []
    })

    useEffect(() => {
        const getContents = async () => {
            const trendRes = await fetchContents(trendUrl)
            const popRes = await fetchContents(popUrl)
            const upcomRes = await fetchContents(upcomUrl)
            const topRes = await fetchContents(topUrl)
            const nowRes = await fetchContents(nowUrl)

            setContentsData({
                trendContents: trendRes.results,
                popContents: popRes.results,
                upcomContents: upcomRes.results,
                topContents: topRes.results,
                nowContents: nowRes.results
            })

            return () => {
                setContentsData({
                    trendContents: [],
                    popContents: [],
                    upcomContents: [],
                    topContents: [],
                    nowContents: []
                })
            }
        }
        getContents()
    }, [])

    const fetchContents = async (url) => {
        if (url === trendUrl) {
            const trendRes = await fetch(url)
            const trendContents = await trendRes.json()
            return trendContents
        }
        else if (url === popUrl) {
            const popRes = await fetch(url)
            const popContents = await popRes.json()
            return popContents
        }
        else if (url === upcomUrl) {
            const upcomRes = await fetch(url)
            const upcomContents = await upcomRes.json()
            return upcomContents
        }
        else if (url === topUrl) {
            const topRes = await fetch(url)
            const topContents = await topRes.json()
            return topContents
        }
        else if (url === nowUrl) {
            const nowRes = await fetch(url)
            const nowContents = await nowRes.json()
            return nowContents
        }
    }

    let contentsDataEmpty = false
    if (Object.keys(contentsData.trendContents).length === 0 && Object.keys(contentsData.popContents).length === 0 && Object.keys(contentsData.upcomContents).length === 0 && Object.keys(contentsData.topContents).length === 0 && Object.keys(contentsData.nowContents).length === 0) {
        contentsDataEmpty = true
        console.log(contentsDataEmpty)
    }

    if (contentsDataEmpty) {
        return <Loader />
    }

    return (
        <div className="contents">
            {/* {contentsDataEmpty ? <h2>Loading...</h2> : <> */}
            <ContentList contentType={contents.contentType} contents={contentsData.trendContents} heading={`Trending ${contents.heading}`} />
            <ContentList contentType={contents.contentType} contents={contentsData.popContents} heading='Popular on Netflix' />
            <ContentList contentType={contents.contentType} contents={contentsData.upcomContents} heading={`Upcoming ${contents.heading}`} />
            <ContentList contentType={contents.contentType} contents={contentsData.topContents} heading='Top Rated' />
            <ContentList contentType={contents.contentType} contents={contentsData.nowContents} heading='Now Playing' />
            {/* </>} */}
        </div>
    )
}
export default Contents;
