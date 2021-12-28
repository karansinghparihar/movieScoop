import { useState, useEffect } from 'react'
import Header from './Header'
import ReactPlayer from 'react-player/youtube'
import EmptyCastImage from '../images/empty_cast_image.png'
import EmptyBackdrop from '../images/emptyBackdrop.jpg'
import Footer from './Footer'

const ContentDetail = ({ id, api_key, contentType }) => {
    const [detail, setDetail] = useState({
        cdshow: {},
        cdcasts: [],
        rating: [],
        trailer: []
    })
    const [showPlayer, setShowPlayer] = useState(false)

    useEffect(() => {
        const getCdshow = async () => {
            const cdshowContent = await fetchCdshow()
            const cdcastsContent = await fetchCdcasts()
            const rating = await fetchRating()
            const trailer = await fetchTrailer()

            setDetail({
                cdshow:cdshowContent,
                cdcasts:cdcastsContent,
                rating:rating,
                trailer:trailer
            })
        }
        getCdshow()
    }, [])

    const fetchCdshow = async () => {
        const resCdshow = await fetch(`https://api.themoviedb.org/3/${contentType}/${id}?api_key=${api_key}`)
        const cdshowContent = await resCdshow.json()
        return cdshowContent
    }

    const fetchCdcasts = async () => {
        const resCdcasts = await fetch(`https://api.themoviedb.org/3/${contentType}/${id}/credits?api_key=${api_key}`)
        const cdcastsContent = await resCdcasts.json()
        return cdcastsContent.cast
    }

    const fetchRating = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/${contentType}/${id}/content_ratings?api_key=${api_key}`)
        const rating = await res.json()
        return rating.results
    }

    const fetchTrailer = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/${contentType}/${id}/videos?api_key=${api_key}`)
        const trailer = await res.json()
        return trailer.results.at(-1)
    }

    let contentDetailEmpty = false
    if (Object.keys(detail.cdshow).length === 0 ) {
        contentDetailEmpty = true
    }

    return (
        <div className='bg-contact-detail'>
            <img className='bg-contact-detail-img' style={{ height: showPlayer ? '108rem' : '65rem' }} src={`https://image.tmdb.org/t/p/w500/${detail.cdshow.poster_path}`} alt={detail.cdshow.poster_path} />

            <div className='header-contact-detail'>
                <Header />
                {
                    contentDetailEmpty ? <h1 style={{ color: 'white', margin: '4rem 0rem 0rem 22rem' }}>Loading...</h1> : <>

                    { showPlayer?<ReactPlayer className = 'video-player' controls = { true } url = {`https://www.youtube.com/watch?v=${detail.trailer.key}`} /> : null}

                    <div className='content-detail'>

                        {detail.cdshow.poster_path === null ? <img src={EmptyBackdrop} alt={EmptyBackdrop} /> :
                            <img style={{ width: '100%' }} src={`https://image.tmdb.org/t/p/w500/${detail.cdshow.poster_path}`} alt={detail.cdshow.poster_path} />
                        }

                        <div className='content-detail-details'>
                            <div className='content-detail-list'>
                                <h1>{contentType === 'tv' ? detail.cdshow.name : detail.cdshow.original_title}</h1><br />
                            </div>

                            <h3>{detail.cdshow.overview}</h3><br />

                            <div className='content-detail-trailer'>
                                {detail.rating == null ? <h2> Ratings : NA</h2> : <h2>Rating : {detail.rating.length > 0 ? detail.rating[0].rating : 'NA'}</h2>}
                                {detail.trailer == null ? <h2>Trailer Not available</h2> : showPlayer ? <div onClick={() => setShowPlayer(false)}><i style={{ color: 'red' }} className="fa fa-stop"></i>&nbsp;Close Trailer</div> : <div onClick={() => setShowPlayer(true)}><i style={{ color: 'red' }} className="fa fa-youtube-play"></i>&nbsp;Watch Trailer</div>}
                            </div>

                            <h2>Cast</h2><br />
                            <div className='content-detail-casts'>
                                {
                                    detail.cdcasts.slice(0, 4).map((cdcast, index) => {
                                        return <div key={index} className='content-detail-cast'>
                                            {cdcast.profile_path ? <img src={`https://image.tmdb.org/t/p/w500/${cdcast.profile_path}`} alt={cdcast.profile_path} /> : <img src={EmptyCastImage} alt={EmptyCastImage} />}
                                            {cdcast.name ? <h2 style={{ textAlign: 'center' }}>{cdcast.name}</h2> : null}
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </>
                }
                <Footer />
            </div>
        </div>
    )
}
export default ContentDetail;
