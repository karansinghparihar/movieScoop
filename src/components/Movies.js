import Contents from "./Contents";

const Movies = () => {
    
    const contents = {
        type: 'movie',
        upcomPath: 'upcoming',
        nowPath: 'now_playing',
        heading: 'Movies', 
    }

    return (
        <div className="movies">
            <Contents contents={contents} />
        </div>
    )
}
export default Movies;
