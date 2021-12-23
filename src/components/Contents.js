import { useState, useEffect } from "react";
import ContentList from "./ContentList";

export const Contents = ({ contents }) => {

    const api_key = process.env.React_App_Api_Key
    const trendUrl = `https://api.themoviedb.org/3/trending/${contents.type}/day?api_key=${api_key}`
    const popUrl = `https://api.themoviedb.org/3/${contents.type}/popular?api_key=${api_key}`
    const upcomUrl = `https://api.themoviedb.org/3/${contents.type}/${contents.upcomPath}?api_key=${api_key}`
    const topUrl = `https://api.themoviedb.org/3/${contents.type}/top_rated?api_key=${api_key}`
    const nowUrl = `https://api.themoviedb.org/3/${contents.type}/${contents.nowPath}?api_key=${api_key}`

    const [trendContents, setTrendContents] = useState([])
    const [popContents, setPopContents] = useState([])
    const [upcomContents, setUpcompContents] = useState([])
    const [topContents, setTopContents] = useState([])
    const [nowContents, setNowContents] = useState([])

    useEffect(() => {
        const getContents = async () => {
            const trendRes = await fetchContents(trendUrl)
            const popRes = await fetchContents(popUrl)
            const upcomRes = await fetchContents(upcomUrl)
            const topRes = await fetchContents(topUrl)
            const nowRes = await fetchContents(nowUrl)

            setTrendContents(trendRes.results)
            setPopContents(popRes.results)
            setUpcompContents(upcomRes.results)
            setTopContents(topRes.results)
            setNowContents(nowRes.results)

            return () => {
                setTrendContents([])
                setPopContents([])
                setUpcompContents([])
                setTopContents([])
                setNowContents([])
            }
        }
        getContents()
    })

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

    let contentsEmpty = false
    if (trendContents.length ===0 || popContents.length ===0 || upcomContents.length ===0 || topContents.length ===0 || nowContents.length ===0) {
        contentsEmpty = true
    }

    return (
        <div className="contents">
            {contentsEmpty ? <h2>Loading...</h2> : <>
                <ContentList contentType={contents.contentType} contents={trendContents} heading={`Trending ${contents.heading}`} />
                <ContentList contentType={contents.contentType} contents={popContents} heading='Popular on Netflix' />
                <ContentList contentType={contents.contentType} contents={upcomContents} heading={`Upcoming ${contents.heading}`} />
                <ContentList contentType={contents.contentType} contents={topContents} heading='Top Rated' />
                <ContentList contentType={contents.contentType} contents={nowContents} heading='Now Playing' />
            </>}
        </div>
    )
}
export default Contents;
