import Contents from "./Contents";

const Tvshows = () => {

    const contents = {
        type: 'tv',
        upcomPath: 'on_the_air',
        nowPath: 'airing_today',
        heading: 'Tv Shows', 
    }

    return (
        <div className="tvshows">
            <Contents contents={contents} />
        </div>
    )
}
export default Tvshows;
