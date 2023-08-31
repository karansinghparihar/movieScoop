import Header from "./Header";
import Contents from "./Contents";
import Footer from "./Footer";

const Tvshows = () => {

    const contents = {
        type: 'tv',
        upcomPath: 'on_the_air',
        nowPath: 'airing_today',
        heading: 'Tv Shows',
        contentType:'tvshow'
    }

    return (
        <div className="tvshows">
            <Header />
            <Contents contents={contents} />
        </div>
    )
}
export default Tvshows;
