import React from "react";
import styled from 'styled-components'
import dashboardHero from '../../images/dashboard-hero.svg';
import breakpoint from '../../breakpoint';

const DashboardPlanner = () => {

    return (
       <FormWrapper>
            <div>
                <p className='greeting'>Welcome back!</p>
                <p className='text'>Time to plan a new dish</p>
            </div>
            <div>
                <img src={dashboardHero} alt='dashboard her' className='dash-hero'/>
            </div>
        </FormWrapper>
    )
}

export default DashboardPlanner;

const FormWrapper = styled.div`
    background-color: #10282A;
    padding: 20px 0;
    margin: 20px;
    border-radius: 25px;
    position: relative;

    .greeting, .text {
        margin: 0;
        color: #FFF3E6;
        text-align: left;
        margin-left: 50px;
    }

    .greeting {
        font-size: 25px;
        font-weight: 600;
    }

    .text {
        font-size: 14px;
        padding: 20px 0;
    }

    .dash-hero {
        width: 160px;
        position: absolute;
        bottom: -15px;
        right: -10px;
    }

    @media only screen and ${breakpoint.device.tablet} {
        //background-color: yellow;
  
        
        
  
  
    }
  
    @media only screen and ${breakpoint.device.desktop} {
        //background-color: red;
        
        .desktop-text {
           display: none;
        }
        
    }
 `;