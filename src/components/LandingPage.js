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
import appleStore from '../images/apple-store.png';
import googlePlay from '../images/google-play.png';

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
                        <h1>Transform your ordinary<br/> <span>food list into a digital one</span></h1>

                        <p>Your meal planning in one place. Track your list. Invite guests. Keep it simple.</p>

                        <Link to='/login'><button className='hero-btn'>Start Tracking</button></Link>
                        <div className='store-icon-div'>
                            <img src={appleStore} alt='apple store' className='store-icon'/>
                            <img src={googlePlay} alt='Google play store' className='store-icon'/>
                        </div>
                    </div>
                </div>
                <div className='right-side-desktop'>
                    <img src={hero} alt='' className='hero'/>
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
                </div>
                <div>
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
                    <div className='action-image'> 
                        <img src={actionImage} alt='woman eating burger'/>
                    </div>
                    <div className='action-info'>
                        <h6>What's Stopping You?</h6>
                        <p>Plan your next big event with Potluck Planner. Curabitur ac tincidunt mauris, ut tempor ante.</p>
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

    .hero-section {
        height: 100vh;
        margin: 0 50px;
    }
    
    .hero {
        width: 360px;
    }

    .right-side-desktop {
        display: none;
    }

    .right-side {
        display: grid;
        place-items: center;
    }
    .right-side h1 {
        font-size: 30px;
        margin: 0;
        padding-bottom: 20px;
        font-family: 'Rubik', sans-serif;
        color: #10282A;
    }

    span {
        font-weight: 100px;
        font-size: 25px;
        color: #88BA89;
    }

    .right-side p {
        font-size: 18px;
        font-family: 'Heebo', sans-serif;
        font-weight: 400;
        color: gray;
        margin: 0;
        padding-bottom: 30px;
    }

    .store-icon-div {
        
    }

    .store-icon {
        border-radius: 8px;
        padding: 40px 15px 0 15px;
    }

    .store-icon {
        width: 100px;
    }

    .hero-btn {
        padding: 10px 20px;
        border: none;
        border-radius: 0 25px 25px 25px;
        background-color: #88BA89;
        color: #FFF4E6;
    }

    .companies-desktop {
        display: none;
    }

    .companies-mobile {
        width: 80%;
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
        padding-bottom: 40px;
    }

    .highlight p {
        font-size: 15px;
        font-weight: 400;
        line-height: 22px;
        margin: 40px 40px 20px 40px;
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
        //background-color: #F8FFF8;
        padding: 80px 20px;
    }
    .service-card {
        background-color: #10282A;
        border-radius: 20px;
        padding: 35px 0;
        margin: 0 60px 40px 60px;
        -webkit-box-shadow: 5px 5px 15px 5px #10282A; 
        box-shadow: 5px 5px 15px 5px #10282A;
    }

    .service-card button {
        background-color: #F8ECE2;
        padding: 10px 20px;
        border: none;
        border-radius: 25px;
    }

    .service-card h6 {
        font-size: 17px;
        color: #F8ECE2;
        margin: 0;
        padding: 10px 0;
    }

    .service-card p {
        margin: 0;
        padding: 0 30px 30px 30px;
        color: #F8ECE2;
        line-height: 22px;
    }
    
    .action-section {
        padding: 80px 0;
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f8ece2+0,ffffff+100 */
background: #f8ece2; /* Old browsers */
background: -moz-linear-gradient(top,  #f8ece2 0%, #ffffff 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #f8ece2 0%,#ffffff 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #f8ece2 0%,#ffffff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8ece2', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */

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
        //background-color: yellow;


        .companies-desktop {
            display: block;
        }

        .companies-desktop {
            display: none;
        }

        .service-card-wrapper {
            display: grid;
            place-items: center;
        }

        .service-card {
            width: 500px;
        }
    }

    @media only screen and ${breakpoint.device.desktop} {
        //background-color: red;
       
        
        .hero-section {
            display: flex;
            margin: 0 50px;
        }

        .right-side h1 {
            font-size: 40px;
        }
    
        span {
            font-size: 30px;
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
            margin: 0 50px;
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

    }
    
`;