import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoint';
import { Link } from 'react-router-dom';

//images
import companies from '../images/companies.svg'
import hero from '../images/hero.svg';
import iconOne from '../images/icon-one.svg';
import iconTwo from '../images/icon-two.svg';
import iconThree from '../images/icon-three.svg';

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
                        <p>Thousands of users already add more effiency to their events with Potluck Planner.</p>
                        <Link to='/'><button>See More</button></Link>
                    </div>
                    <img src={companies} alt='complany logos' className='companies-desktop'/>
                </div>
                
            </div>

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
        width 200px;
    }

    .highlight {
        background-color: #F4F3F3;
        height: 50vh;
        display: grid;
        place-items: center;

    }
    .highlight img {
        width: 100%;
    }

    .highlight h5 {
        
    }

    .highlight p {
        font-size: 15px;
        font-weight: 400;
    }

    .icons {
        width: 80px;
    }
    .service-card {
        border-radius: 20px;
        padding: 35px 0;
        margin: 0 40px 40px 40px;
        -webkit-box-shadow: 5px 5px 15px 5px #DBDADA; 
        box-shadow: 5px 5px 15px 5px #DBDADA;
    }

    .service-card button {
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