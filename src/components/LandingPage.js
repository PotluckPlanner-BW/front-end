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
import one from '../images/poster-one.png';
import two from '../images/poster-two.png';
import three from '../images/poster-three.png';
import four from '../images/poster-four.png';
import paraBg from '../images/parralox-bg.png';
import pizzaBg from '../images/pizza-bg.png';


//

//
const services = [
    {
        id: 1,
        title: 'Set It + Forget It',
        icon: iconOne,
        description: 'Create an account. Identify your financial state. Research the options in your state.',
        cta: 'Get Started'
    },
    {
        id: 2,
        title: 'What You Need',
        icon: iconTwo,
        description: 'Inivite friends. Choose a specific investing account strategy. Take a pre-licensing state exam. Research the options in your state.',
        cta: 'Sign Up'
    },
    {
        id: 3,
        title: 'Always Reliable',
        icon: iconThree,
        description: 'Create an account. Plan potlucks for your next getogether. Pass your license state exam. Identify your financial state. Research the options in your state.',
        cta: 'Learn More'
    }
]

const posters = [
    {
        image: one
    },
    {
        image: two
    },
    {
        image: three
    },
    {
        image: four
    },
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
            <div id="wave"></div>
            <div className='logo-banner'>
                <img 
                    src={companies} 
                    alt='complany logos' 
                    
                />
            </div>

            <div className='steps-wrapper'>
            <h3 style={{ paddingTop: '120px'}}>start today</h3>
            {/* style={{ margin: '0', padding: '100px 0 50px 0', fontSize: '1.6rem'}} */}
            <h2>3 Easy Steps To Get You Started</h2>
            <div className='highlight'>
                <div></div>
                        
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
                                
                            </div>
                            <Link to='/'>
                                <button className='steps-btn'>See More</button>
                            </Link>
                            
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

            <div style={{height: '100%', padding: '130px 0', backgroundImage: `url(${paraBg})`, backgroundAttachment: 'fixed'}}>
                <h3>products</h3>
                <h2 style={{color: 'white'}}>Save Time. Become More Effective.</h2>
                {posters.map(item => (
                    <img src={item.image} alt='' style={{width: '200px', margin: '0 10px 5px 10px'}}/>
                ))}
            </div>


            <div className='stats-wrapper'>
                <h3>achievements</h3>
                <h2>Why Choose Potluck Planner</h2>
                <div className='stats'>
                    <div>
                        <h4>78%</h4>
                        <p>Users have increased their productivity by 87% and growing.</p>
                    </div>
                    <div>
                        <h4>8%</h4>
                        <p>Stress due to party planning has seen an 8% decline after just one month of utilization.</p>
                    </div>
                    <div>
                        <h4>45%</h4>
                        <p>45% of users said parties are more organized and eventful using Potluck Planner.</p>
                    </div>
                    <div>
                        <h4>90%</h4>
                        <p>90% of users have shared or recommended us to friends and loved ones.</p>
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
                    
                    <div className='action-info'>
                        <h2>What's Stopping You?</h2>
                        <p>Find out why thousands of users have trusted their meal planning with us. 
                            Try a month free, no commitments. Plan your next big event with Potluck Planner.</p>
                        <button>Get Started</button>
                    </div> 
                    <div className='action-image'> 
                        <img src={actionImage} alt='woman eating burger'/>
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
        font-family: 'Heebo', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        color: #808080;
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
        padding: 15px 80px;
        border: none;
        border-radius: 0 25px 25px 25px;
        background-color: #88BA89;
        font-size: 1rem;
        color: #FFF4E6;
        transition: 0.5s;
    }

    .hero-btn:hover {
        cursor: pointer;
        background-color: rgba(136, 186, 137, 0.7);
        transition: 0.5s;
    }

    .steps-wrapper {
        margin: 0 20px 150px 0;
    }

    .steps-btn {
        padding: 20px 150px;
        border: none;
        border-radius: 0 25px 25px 25px;
        background-color: #F76C61;
        font-size: 1rem;
        color: #FFF4E6;
        transition: 0.5s;
        margin-bottom: 50px;
    }

    .steps-btn:hover {
        background-color: rgba(247, 107, 97, 0.7);
        cursor: pointer;
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

    .steps-container {
        padding-bottom: 20px; 
    }

    .companies-desktop {
        width: 80%;
        //margin-top: 50px;
    }

    .stats-wrapper {
        max-width: 1920px;
        height: 100%;
        margin: 0 auto;
        background-image: url(${pizzaBg});
        background-size: 650px;
        background-repeat: no-repeat;
        background-position: center;
        padding: 120px 50px;
    }

    h3 {
        font-family: 'Ballet', cursive;
        font-size: 2.5rem;
        font-weight: 400;
        color: #808080;
        margin: 0;
    }

    h2 {
        font-family: 'Rubik', sans-serif;
        font-size: 2rem;
        color: #111;
        padding-bottom: 50px;
        margin: 0;
    }
    .stats {
    }

    .stats h4 {
        color: #F76C61;
        font-weight: 800;
        font-size: 2rem;
        margin: 0;
        padding-bottom: 20px;
    }

    .stats p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        color: #808080;
        margin: 0 10px;
    }

    .icons {
        width: 80px;
    }

    .service-card-wrapper {
        background-color: #F4F3F3;
        padding: 120px 20px;
        max-width: 1920px;
        margin: 0 auto;
    }
    .service-card {
        background-color: #FFF;
        border-radius: 20px;
        padding: 35px 0;
        margin: 0 60px 40px 60px;
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

    .action-section button {
        background-color: #88BA89;
        color: white;
        padding: 10px 20px;
        margin-bottom: 30px;
        border: none;
        border-radius: 25px;
    }

    .action-info p {
            font-family: 'Heebo', sans-serif;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5rem;
            color: #808080;
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

        .companies-desktop {
            width: 350px;
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

       .stats-wrapper {
            padding: 130px 0;
       }

       .stats {
           padding: 0 90px
       }

       .stats h4 {
           font-size: 3rem;
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

        .stats {
            display: flex;
            justify-content: space-around;
            margin: 0 90px;
            
        }

        .stats h4 {
            font-size: 4rem;
        }
        
        .service-card-wrapper {
            display: flex;
            padding: 150px 50px;
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
        

        .highlight {
            max-width: 1920px;
            margin: 0 auto;
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding: 15px 0 0 0;
        }

        .highlight h5, .highlight p {
            margin: 0;
            padding-bottom: 20px;
        }

        .highlight p {
            margin: 0 50px;
        }

        .steps, .company-logos {
            width: 50%;
        }


        .steps {
            width: 50%;
            display: grid;
            place-items: center;
            text-align: left;
            margin-left: 180px;
        }

        .steps, .company-logos {
            width: 50%;
        }

        .steps-container button {
            text-align: center;
        }

        .companies-mobile {
            display: none;
        }
        .companies-desktop {
            display: block;
            width: 350px;
            margin-right: 180px;
        }

       

       
    }
    
`;


