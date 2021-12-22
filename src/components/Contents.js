import { useState, useEffect } from "react";
import ContentList from "./ContentList";

export const Contents = ({ contents }) => {

    const api_key = process.env.React_App_Api_Key
    const trendUrl = `https://api.themoviedb.org/3/trending/${contents.type}/day?api_key=${api_key}`
    const popUrl = `https://api.themoviedb.org/3/${contents.type}/popular?api_key=${api_key}`
    const upcomUrl = `https://api.themoviedb.org/3/${contents.type}/${contents.upcomPath}?api_key=${api_key}`
    const topUrl = `https://api.themoviedb.org/3/${contents.type}/top_rated?api_key=${api_key}`
    const nowUrl = `https://api.themoviedb.org/3/${contents.type}/${contents.nowPath}?api_key=${api_key}`

    const [trendTvshows, setTrendTvshows] = useState([])
    const [popTvshows, setPopTvshows] = useState([])
    const [upcomTvshows, setUpcompTvshows] = useState([])
    const [topTvshows, setTopTvshows] = useState([])
    const [nowTvshows, setNowTvshows] = useState([])

    useEffect(() => {
        const getTvshows = async () => {
            const trendRes = await fetchTvshows(trendUrl)
            const popRes = await fetchTvshows(popUrl)
            const upcomRes = await fetchTvshows(upcomUrl)
            const topRes = await fetchTvshows(topUrl)
            const nowRes = await fetchTvshows(nowUrl)

            setTrendTvshows(trendRes.results)
            setPopTvshows(popRes.results)
            setUpcompTvshows(upcomRes.results)
            setTopTvshows(topRes.results)
            setNowTvshows(nowRes.results)

            return () => {
                setTrendTvshows([])
                setPopTvshows([])
                setUpcompTvshows([])
                setTopTvshows([])
                setNowTvshows([])
            }
        }
        getTvshows()
    })

    const fetchTvshows = async (url) => {
        if (url === trendUrl) {
            const trendRes = await fetch(url)
            const trendTvshows = await trendRes.json()
            return trendTvshows
        }
        else if (url === popUrl) {
            const popRes = await fetch(url)
            const popTvshows = await popRes.json()
            return popTvshows
        }
        else if (url === upcomUrl) {
            const upcomRes = await fetch(url)
            const upcomTvshows = await upcomRes.json()
            return upcomTvshows
        }
        else if (url === topUrl) {
            const topRes = await fetch(url)
            const topTvshows = await topRes.json()
            return topTvshows
        }
        else if (url === nowUrl) {
            const nowRes = await fetch(url)
            const nowTvshows = await nowRes.json()
            return nowTvshows
        }
    }

    // let contentsEmpty = false
    // if (trendTvshows.length ===0 || popTvshows.length ===0 || upcomTvshows.length ===0 || topTvshows.length ===0 || nowTvshows.length ===0) {
    //     contentsEmpty = true
    // }

    return (
        <div className="contents">
            {/* {contentsEmpty ? <h2>Loading...</h2> : <> */}
                <ContentList contents={trendTvshows} heading={`Trending ${contents.heading}`} />
                <ContentList contents={popTvshows} heading='Popular on Netflix' />
                <ContentList contents={upcomTvshows} heading={`Upcoming ${contents.heading}`} />
                <ContentList contents={topTvshows} heading='Top Rated' />
                <ContentList contents={nowTvshows} heading='Now Playing' />
            {/* </>} */}
        </div>
    )
}
export default Contents;
