import Movie from "./Content";

const ContentList = ({ heading, contents, contentType, searchType }) => {
    return (
        <>
            <h1 style={{ margin: '3rem 0rem 1rem 0rem', color: '#fff' }}>{heading}</h1>
            <div className={`${contentType === 'search' ? 'search-list' : 'content-list'}`}>
                {
                    contents.slice(0, 6).map((content, index) => {
                        return <Movie key={index} content={content} contentType={contentType} searchType={searchType} />
                    })
                }
            </div>
        </>
    )
}
export default ContentList;
