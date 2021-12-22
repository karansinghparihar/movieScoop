import RegisterEmail from "./RegisterEmail";

const Home = () => {
    return (
        <div className="home">
        <h1 style={{ fontSize: '5.2rem' }}>Unlimited movies, TV shows and more.</h1>
        <h2 style={{ fontSize: '2.6rem' }}>Watch anywhere. Cancel anytime.</h2><br />
        <RegisterEmail content={'Ready to watch? Enter your email to create or restart your membership.'} />
        </div>
    )
}
export default Home;