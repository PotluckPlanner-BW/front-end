import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoint';
import { Link } from 'react-router-dom';
import Footer from './Footer';

//images
import companies from '../images/companies.svg';
import deviceDash from '../images/device-dash.png';
import hero from '../images/hero.svg';
import iconOne from '../images/icon-one.svg';
import iconTwo from '../images/icon-two.svg';
import iconThree from '../images/icon-three.svg';
import actionImage from '../images/action-image.svg';
import appleStore from '../images/apple-store.png';
import googlePlay from '../images/google-play.png';

//

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
            {/* <div className='wrapper'></div> */}
            <div className='hero-section'>
                <div className='left-side'>
                    <img src={hero} alt='' className='hero'/>
                </div>
                <div className='right-side'>
                    <div>
                        <h1>Transforming potlucks<br/> <span>effective digital planner</span></h1>

                        <p>Your meal planning in one place. Track your list. <br/>Invite guests. Keep it simple.</p>

                        <Link to='/login'>
                            <button className='hero-btn'>Start Tracking</button>
                        </Link>
                        <div className='store-icon-div'>
                            <img src={appleStore} alt='apple store' className='store-icon'/>
                            <img src={googlePlay} alt='Google play store' className='store-icon'/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='logo-banner'>
                <img 
                    src={companies} 
                    alt='complany logos' 
                    
                />
            </div>

            <div>

            <h3 style={{ margin: '0', padding: '100px 0 50px 0', fontSize: '1.6rem'}}>3 Easy Steps To Get You Started</h3>
            <div className='highlight'>
                        
                <div className='steps'>
                    
                            <div className='steps-container'>
                                <ul>
                                    <li><span className='number'>1</span></li>
                                    <li className='detail'>Create an account. Identify your financial state. Research the options in your state.</li>
                                </ul>
                                <ul>
                                    <li><span className='number'>2</span></li>
                                    <li className='detail'>Inivite friends. Choose a specific investing account strategy. Take a pre-licensing state exam. Research the options in your state.</li>
                                </ul>
                                <ul>
                                    <li><span className='number'>3</span></li>
                                    <li className='detail'>Create an account. Plan potlucks for your next getogether. Pass your license state exam. Identify your financial state. Research the options in your state.</li>
                                </ul>
                                <Link to='/'>
                                    <button>See More</button>
                                </Link>
                            </div>
                            
                </div>

                    <div className='company-logos'>
                        <img 
                            src={deviceDash} 
                            alt='dashboard' 
                            className='companies-desktop'
                        />
                    </div>
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
                    <div className='action-image'> 
                        <img src={actionImage} alt='woman eating burger'/>
                    </div>
                    <div className='action-info'>
                        <h6>What's Stopping You?</h6>
                        <p>Find out why thousands of users have trusted their meal planning with us. 
                            Try a month free, no commitments. Plan your next big event with Potluck Planner.</p>
                        <button>Get Started</button>
                    </div> 
                </div>
                
            </div>
            <Footer/>
        </Wrapper>
    )
}

export default Landing;

const Wrapper = styled.section`

    .wrapper {
        
    }
    .hero-section {
        height: 100%;
        margin: 0 50px;
        max-width: 1920px;
        margin: 0 auto;
        padding: 60px 0;
    }
    
    .hero {
        width: 80%;
    }

    
    .right-side h1 {
        text-transform: uppercase;
        font-family: 'Rubik', sans-serif;
        font-size: 1.6rem;
        font-weight: 800;
        margin: 0;
        padding-bottom: 20px;
        color: #10282A;
    }

    span {
        font-weight: 100px;
        font-size: 1.3rem;
        color: #88BA89;
    }

    .right-side p {
        font-size: 0.9rem;
        font-family: 'Heebo', sans-serif;
        font-weight: 400;
        color: gray;
        margin: 0;
        padding-bottom: 30px;
    }

    .store-icon {
        border-radius: 8px;
        padding: 40px 15px 0 15px;
    }

    .store-icon {
        width: 100px;
    }

    .hero-btn {
        padding: 10px 50px;
        border: none;
        border-radius: 0 25px 25px 25px;
        background-color: #88BA89;
        color: #FFF4E6;
    }

    .logo-banner {
        background-color: #10282A;
        padding: 15px 0;
    }

    .logo-banner img {
        width: 90%;
    }

    ul {
        display: flex;
        list-style: none;
    }

    .number {
        font-weight: 900;
        font-size: 2.5rem;
        color: #A8ABB5;
        padding-right: 20px;
    }

    .detail {
        color: #808080;
        font-size: 1rem;
        line-height: 1.5rem;
        text-align: left;
    }

    .highlight button {
        background-color: #88BA89;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 25px;
    }

    .steps-container {
        padding-bottom: 20px; 
    }

    .companies-desktop {
        width: 80%;
        margin: 50px 0 100px 0;
    }

    .icons {
        width: 80px;
    }

    .service-card-wrapper {
        background-color: #F4F3F3;
        padding: 80px 20px;
        max-width: 1920px;
        margin: 0 auto;
    }
    .service-card {
        background-color: #FFF;
        border-radius: 20px;
        padding: 35px 0;
        //margin: 0 60px 40px 60px;
        -webkit-box-shadow: 5px 5px 15px 5px #e8e6e6; 
        box-shadow: 5px 5px 15px 5px #e8e6e6;
    }

    .service-card button {
        background-color: #F8ECE2;
        padding: 10px 20px;
        border: none;
        border-radius: 25px;
    }

    .service-card h6 {
        font-size: 17px;
        color: #10282A;
        margin: 0;
        padding: 10px 0;
    }

    .service-card p {
        margin: 0;
        padding: 0 30px 30px 30px;
        color: #10282A;
        line-height: 22px;
    }
    
    .action-section {
        padding: 80px 0;
        
    }

    .action-section p {
        font-size: 21px;
        font-weight: 400;
        line-height: 33px;
        margin: 20px 40px 20px 40px;
    }

    .action {
        display: grid;
        place-items: center;
    }

    .action-section h6 {
        font-size: 20px;
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
        //background-color: yellow;

        .hero-section {
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 1920px;
            margin: 0 auto;
            width: 100%;
        }

        .service-card-wrapper {
            display: grid;
            place-items: center;
        }

        .service-card {
            width: 500px;
        }

        .highlight-styles {
            display: flex;
            max-width: 1920px;
            width: 100%;
            margin: 0 auto;
            align-items: center;
        }

        .trusted-by div p {
            line-height: 33px;
        }

        .right-side {
            width: 50%;
        }
    }

    @media only screen and ${breakpoint.device.desktop} {
        //background-color: red;
       
        
        .hero-section {
            display: flex;
            //margin: 0 50px;
        }
        .right-side {
            text-align: left;
            margin-left: 9%;
        }

        .right-side h1 {
            font-size: 2rem;
            font-weight: 700;
        }
    
        span {
            font-size: 1.5rem;
            color: #88BA89;
        }
        .left-side-mobile {
            display: none;
        }

        .right-side-desktop {
            display: block;
            display: grid;
            place-items: center;
            width: 60%;
        }

        .right-side-desktop img {
            width: 600px;
        }

        .right-side {
            width: 40%;
        }

        .logo-banner img {
            width: 1000px;
        }  
        .steps {
            text-align: left;
        }

        .steps-container {
            padding: 0 30px;
        }

        .steps-container button {
            text-align: center;
        }

        .service-card-wrapper {
            display: flex;
            padding: 80px 50px;
        }

        .service-card {
            padding: 35px 0;
            margin: 0 30px;
        }

        .action {
            display: flex;
            max-width: 1920px;
            margin: 0px auto;
        }
        .action-image {
            width: 40%;
        }

        .action-image img {
            width: 350px;
        }

        .action-info {
            width: 60%;
        }
        .companies-mobile {
            display: none;
        }
        .companies-desktop {
            display: block;
        }

        .highlight {
            max-width: 1920px;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            padding: 15px 50px 150px 50px;
        }

        .steps, .company-logos {
            width: 50%;
        }

        .steps {
            display: grid;
            place-items: center;
        }

        .highlight h5, .highlight p {
            margin: 0;
            padding-bottom: 20px;
        }

        .highlight p {
            margin: 0 50px;
        }

        .highlight img {
            width: 100%;
        }

        .trusted-by {
            width: 50%;
        }

        .company-logos {
            width: 50%;
        }

    }
    
`;