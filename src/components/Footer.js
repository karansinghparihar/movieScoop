import React from 'react'
import FooterLinks from './FooterLinks'

const Footer = () => {
    const foLinks = [
        {
            foLink1: 'FAQ',
            foLink2: 'Help Centre',
            foLink3: 'Account',
            foLink4: 'Media Centre',
        },
        {
            foLink1: 'Investor Relations',
            foLink2: 'Jobs',
            foLink3: 'Ways to Watch',
            foLink4: 'Terms of Use',
        },
        {
            foLink1: 'Privacy',
            foLink2: 'Cookie Preferences',
            foLink3: 'Corporate Information',
            foLink4: 'Contact Us',
        },
        {
            foLink1: 'Speed Test',
            foLink2: 'Legal Notices',
            foLink3: 'Only on Netflix',
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
            <br /><h3 className='footer-country'><i className='fa fa-globe'></i>&nbsp;Netflix India</h3>
        </footer>
    )
}
export default Footer;
