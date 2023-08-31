import Faq from "./Faq";
import RegisterEmail from "./RegisterEmail";

const Faqs = () => {
    const qna = [
        {
            ques: 'What is MovieScoop?',
            ans: 'MovieScoop is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There is always something new to discover, and new TV shows and movies are added every week!'
        },
        {
            ques: 'How much does MovieScoop cost?',
            ans: 'Watch MovieScoop on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.'
        },
        {
            ques: 'Where can I watch?',
            ans: 'Watch anywhere, anytime. Sign in with your MovieScoop account to watch instantly on the web at MovieScoop.com from your personal computer or on any internet-connected device that offers the MovieScoop app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you are on the go and without an internet connection. Take MovieScoop with you anywhere.'
        },
        {
            ques: 'How do I cancel?',
            ans: 'MovieScoop is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
        },
        {
            ques: 'What can I watch on MovieScoop?',
            ans: 'MovieScoop has an extensive library of feature films, documentaries, TV shows, anime, award-winning MovieScoop originals, and more. Watch as much as you want, anytime you want.'
        },
        {
            ques: 'Is MovieScoop good for kids?',
            ans: 'The MovieScoop Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'
        }
    ]
    return (
        <div className="faqs">
            <h1 style={{ fontSize: '4.2rem' }} >Frequently Asked Questions</h1><br />
            {
                qna.map((faq, index) => <Faq key={index} faq={faq} />)
            }
            <div className="faq-register-email">
                <RegisterEmail content={'Ready to watch? Enter your email to create or restart your membership.'} />
            </div>
        </div>
    )
}
export default Faqs;
