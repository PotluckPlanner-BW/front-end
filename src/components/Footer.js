import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoint';

const Footer = () => {
    return (
        <Wrapper>
            <div className='footer-container'>
                <div>
                    <h6>Careers</h6>
                    <p>Why Potluck Planner</p>
                    <p>Learn </p>
                    <p>Pricing</p>
                    <p>Follow Us</p>
                </div>
                <div>
                    <h6>Contact</h6>
                    <p>Design</p>
                    <p>Technology</p>
                </div>
                <div>
                    <h6>Legal</h6>
                    <p>Terms + Condition</p>
                    <p>Privacy Policy</p>
                    <p>Cookies</p>
                </div>
            </div>
            
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.footer`
    background-color: #88BA89;
    padding: 40px 0;

    .footer-container {
        text-align: center;
    }

    .footer-container div:not(:last-child) {
        margin-bottom: 40px;
    }

    h6 {
        color: #10282A;
        font-size: 17px;
        margin: 0;
        padding: 10px;
        padding-left: 0;
    }

    p {
        font-size: 15px;
        margin: 0;
        padding-bottom: 5px;
    }

    @media only screen and ${breakpoint.device.tablet} {
        //background-color: yellow;
       .footer-container { 
           display: flex;
           justify-content: space-around;
           text-align: left;
           max-width: 1920px;
           margin: 0 auto;
        }
        
  
    
  
    }
  
    @media only screen and ${breakpoint.device.desktop} {
        //background-color: red;
        
        
  
    }
`;