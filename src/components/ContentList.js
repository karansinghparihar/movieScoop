import Movie from "./Content";

const ContentList = ({ heading, contents }) => {
    return (
        <>
            <h1 style={{ margin: '3rem 3rem 1rem 3rem', color: '#fff' }}>{heading}</h1>
            <div className="content-list">
                {
                    contents.map((content, index) => {
                        return <Movie key={index} content={content} />
                    })
                }
            </div>
        </>
    )
}
export default ContentList;
