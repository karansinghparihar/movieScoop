const Feature = ({ featureData, index }) => {
    return (
        <div className={`app-feature ${ index%2===0 ? 'app-feature-row-reverse' : 'app-feature-row' }`}>
            <section>
                <h1>{featureData.title}</h1>
                <h3>{featureData.desc}</h3>
            </section>
            <img src={featureData.img} alt={featureData.img}  width={'40%'} />
        </div>
    )
}
export default Feature;