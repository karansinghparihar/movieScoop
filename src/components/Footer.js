import React from 'react'
import FooterLinks from './FooterLinks'

const Footer = () => {
    const tmdbLogo = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg'
    const foLinks = [
        {
            foLink1: 'FAQ',
            foLink2: 'Help Centre',
            foLink3: 'Account',
            foLink4: 'Media Centre',
        },
        {
            foLink1: 'Relations',
            foLink2: 'Jobs',
            foLink3: 'Ways',
            foLink4: 'Terms of Use',
        },
        {
            foLink1: 'Privacy',
            foLink2: 'Cookie',
            foLink3: 'Corporate',
            foLink4: 'Contact Us',
        },
        {
            foLink1: 'Speed Test',
            foLink2: 'Legal Notices',
            foLink3: 'Only',
            foLink4: '',
        }
    ]
    return (
        <footer>
            <h2>Questions? Call 000-800-040-1843</h2>
            {
                foLinks.map((foLink, index) => {
                    return <FooterLinks key={index} foLink={foLink} />
                })
            }
            <h3 className='footer-country'><i className='fa fa-globe'></i>&nbsp;Netflix India</h3>
            <div className='footer-copyright'>Copyright © 2021, Developed by Karan Singh Parihar
            <a href='https://www.linkedin.com/in/karan-singh-parihar-291813153/' target='_blank'><button>&#xf0e1;</button></a>
            <a href='https://github.com/karansinghparihar/netflixclone' target='_blank'><button>&#xf09b;</button></a>
            <br />
            Powered by &nbsp;
            <a href='https://www.themoviedb.org/' rel="noreferrer" target='_blank'><img src={tmdbLogo} style={{ width: '4rem' }} alt='tmdb'/></a>
            </div>
            
        </footer>
    )
}
export default Footer;
