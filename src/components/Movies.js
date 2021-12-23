import Header from "./Header";
import Contents from "./Contents";

const Movies = () => {
    
    const contents = {
        type: 'movie',
        upcomPath: 'upcoming',
        nowPath: 'now_playing',
        heading: 'Movies',
        contentType:'movie' 
    }

    return (
        <div className="movies">
            <Header />
            <Contents contents={contents} />
        </div>
    )
}
export default Movies;
