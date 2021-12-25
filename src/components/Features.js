import Feature from "./Feature";
import HorizontalSection from "./HorizontalSection";
import imgFeature1 from '../images/feature1.png'
import imgFeature2 from '../images/feature2.jpg'
import imgFeature3 from '../images/feature3.png'
import imgFeature4 from '../images/feature4.png'

const Features = () => {

    const featureData = [
        {
            title:'Enjoy on your TV.',
            desc:'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
            img:imgFeature1
        },
        {
            title:'Download your shows to watch offline.',
            desc:'Save your favourites easily and always have something to watch.',
            img:imgFeature2
        },
        {
            title:'Watch everywhere.',
            desc:'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
            img:imgFeature3
        },
        {
            title:'Create profiles for children.',
            desc:'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
            img:imgFeature4
        }
    ]
    return (
        <>
            {
                featureData.map((feature, index) => <><Feature key={index} featureData={feature} index={index+1} /> <HorizontalSection /></> )
            }
        </>
    )
}
export default Features;