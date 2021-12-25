import Header from "./Header";
import Contents from "./Contents";
import Footer from "./Footer";

const Movies = ({guestLoginHandler}) => {
    
    const contents = {
        type: 'movie',
        upcomPath: 'upcoming',
        nowPath: 'now_playing',
        heading: 'Movies',
        contentType:'movie' 
    }

    return (
        <div className="movies">
            <Header guestLoginHandler={guestLoginHandler}/>
            <Contents contents={contents} />
            <Footer />
        </div>
    )
}
export default Movies;
