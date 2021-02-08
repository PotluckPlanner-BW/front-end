import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoint';
import { Link } from 'react-router-dom';
import Footer from './Footer';

//images
import companies from '../images/companies.svg'
import hero from '../images/hero.svg';
import iconOne from '../images/icon-one.svg';
import iconTwo from '../images/icon-two.svg';
import iconThree from '../images/icon-three.svg';
import actionImage from '../images/action-image.svg';

//
const services = [
    {
        id: 1,
        title: 'Set It + Forget It',
        icon: iconOne,
        description: 'Curabitur ac tincidunt mauris, ut tempor ante. Pellentesque aliquet quam.',
        cta: 'Get Started'
    },
    {
        id: 2,
        title: 'What You Need',
        icon: iconTwo,
        description: 'Curabitur ac tincidunt mauris, ut tempor ante. Pellentesque aliquet quam.',
        cta: 'Sign Up'
    },
    {
        id: 3,
        title: 'Always Reliable',
        icon: iconThree,
        description: 'Curabitur ac tincidunt mauris, ut tempor ante. Pellentesque aliquet quam.',
        cta: 'Learn More'
    }
]

const Landing = () => {
    return (
        <Wrapper>
            <div className='hero-section'>
                <div className='left-side-mobile'>
                    <img src={hero} alt='' className='hero'/>
                </div>
                <div className='right-side'>
                    <div>
                        <h1>The Ultimate Potluck Planner</h1>
                        <h2>Your meal planning in one place.</h2>

                        <p>Track your list. Invite guests. Keep it simple.</p>

                        <Link to='/login'><button className='hero-btn'>Start Tracking</button></Link>
                    </div>
                </div>
                <div className='left-side-desktop'>
                    left drsktop image
                </div>
                
            </div>

            <div className='highlight'>
                <div>
                    <h5>Trusted By</h5>
                    <img src={companies} alt='complany logos' className='companies-mobile'/>
                    <div>
                        <p>Thousands of users have already added more effiency to their event planning with Potluck Planner.</p>
                        <Link to='/'><button>See More</button></Link>
                    </div>
                    <img src={companies} alt='complany logos' className='companies-desktop'/>
                </div>
                
            </div>

            <div className='service-card-wrapper'>

                {services.map(item => {
                    return (
                        <div key={item.id} className='service-card'>
                            <img src={item.icon} alt='icon' className='icons'/>
                            <h6>{item.title}</h6>
                            <p>{item.description}</p>
                            <button>{item.cta}</button>
                        </div>
                    )
                })}
            </div>

            <div className='action-section'>
                <div className='action'>
                    <div>
                        <h6>What's Stopping You?</h6>
                        <p>Plan your next big event with Potluck Planner. Curabitur ac tincidunt mauris, ut tempor ante.</p>
                        <button>Get Started</button>
                    </div>
                    
                </div>
                <div>
                    <img src={actionImage} alt='woman eating burger'/>
                </div>
            </div>
            <Footer/>
        </Wrapper>
    )
}

export default Landing;

const Wrapper = styled.section`

    .hero-section {
        height: 80vh;
    }
    

    .hero {
        width: 100%;
    }
    .left-side-desktop {
        display: none;
    }

    .right-side {
        display: grid;
        place-items: center;
    }
    .right-side h1 {
        font-size: 24px;
        margin: 0;
        padding-bottom: 5px;
        
    }

    .right-side h2 {
        font-size: 20px;
        font-weight: 400;
        margin: 0;
        padding-bottom: 10px;
    }

    .right-side p {
        font-size: 15px;
        font-weight: 400;
        color: gray;
        margin: 0;
        padding-bottom: 30px;
    }

    .hero-btn {
        padding: 10px 20px;
        border: none;
        border-radius: 0 25px 25px 25px;
    }

    .companies-desktop {
        display: none;
    }

    .companies-mobile {
        width: 320px;
        padding: 10px 0;
    }

    .highlight {
        background-color: #F4F3F3;
        padding: 80px 0;
        display: grid;
        place-items: center;

    }

    .highlight h5 {
        margin: 0;
        font-size: 20px;
        padding-bottom: 20px;
    }

    .highlight p {
        font-size: 15px;
        font-weight: 400;
        line-height: 22px;
        margin: 20px 40px 20px 40px;
    }

    .highlight button {
        background-color: #88BA89;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 25px;
    }

    .icons {
        width: 80px;
    }

    .service-card-wrapper {
        background-color: #F8ECE2;
        padding: 80px 0;
    }
    .service-card {
        background-color: white;
        border-radius: 20px;
        padding: 35px 0;
        margin: 0 40px 40px 40px;
        -webkit-box-shadow: 5px 5px 15px 5px #DBDADA; 
        box-shadow: 5px 5px 15px 5px #DBDADA;
    }

    .service-card button {
        background-color: #F8ECE2;
        padding: 10px 20px;
        border: none;
        border-radius: 25px;
    }

    .service-card h6 {
        font-size: 17px;
        margin: 0;
        padding: 10px 0;
    }

    .service-card p {
        margin: 0;
        padding: 0 30px 30px 30px;
        line-height: 22px;
    }
    
    .action-section {
        padding: 80px 0;
    }

    .action-section p {
        font-size: 15px;
        font-weight: 400;
        line-height: 22px;
        margin: 20px 40px 20px 40px;
    }

    .action {
        display: grid;
        place-items: center;
    }

    .action-section h6 {
        font-size: 17px;
        margin: 0;
        padding: 10px 0;
    }

    .action-section button {
        background-color: #88BA89;
        color: white;
        padding: 10px 20px;
        margin-bottom: 30px;
        border: none;
        border-radius: 25px;
    }
    .action-section img {
        width: 250px;
    }
    @media only screen and ${breakpoint.device.tablet} {

        .left-side-mobile {
            display: none;
        }
        .left-side-desktop {
            display: block;
        }

        .companies-desktop {
            display: block;
        }

        .companies-mobile {
            display: none;
        }
    }

    @media only screen and ${breakpoint.device.desktop} {
        display: flex;
    }
    
`;