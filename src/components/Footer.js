import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoint';

const Footer = () => {
    return (
        <Wrapper>
            <div className='footer-container'>
                <div>
                    <h6>Careers</h6>
                    <p>Bibendum Turpis</p>
                    <p>Bibendum </p>
                    <p>Bibendum Sendum</p>
                    <p>Bibendum Da</p>
                </div>
                <div>
                    <h6>Contact</h6>
                    <p>Bibendum</p>
                    <p>Bibendum Turpis</p>
                </div>
                <div>
                    <h6>Legal</h6>
                    <p>Bibendum Turpis</p>
                    <p>Bibendum Turpis</p>
                    <p>Bibendum Turpis</p>
                </div>
            </div>
            
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.footer`
    background-color: #88BA89;
    padding: 40px 0;

    h6 {
        color: #10282A;
        font-size: 17px;
        margin: 0;
        padding: 10px;
    }

    p {
        font-size: 15px;
        margin: 0;
        padding-bottom: 5px;
    }
`;