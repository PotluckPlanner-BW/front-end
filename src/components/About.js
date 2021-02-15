import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoint';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const About = () => {

    const data = [
        {
            id: 1,
            name: 'Mike Benton',
            image: 'https://avatars.githubusercontent.com/u/9836704?s=400&u=aa7177f1df007c6b989919a5f95f0e80878eea6d&v=4',
            github: 'https://github.com/mikecrbenton',
            linkedin: ''
        },
        {
            id: 2,
            name: 'Alanna Mathieu',
            image: 'https://avatars.githubusercontent.com/u/26489059?s=460&u=4e97148df9cb42dd32827441c2e9a854acadba36&v=4',
            github: 'https://github.com/ruthmatieu',
            linkedin: 'https://www.linkedin.com/in/ruthmatieu/'
        },
        {
            id: 3,
            name: 'Valerie',
            image: 'https://avatars.githubusercontent.com/u/53797814?s=400&u=2bd18e68577dc712d2727cb70cdee64b19127aeb&v=4',
            github: 'https://github.com/valerievazq',
            linkedin: ''
        }
    ]
    return (
        <Wrapper>
            <h3>Meet The Developers Behind <br/><span>Potluck Planner</span></h3>
            <section className='developers'>
                {data.map(item => (
                <div key={item.id} className='dev-container'>
                    <img src={item.image} alt={item.name}/>
                    <h4>{item.name}</h4>
                    <div>
                        <a href={item.github} target='_blank' rel="noreferrer"><AiFillGithub size={30} color='#88BA89' style={{padding: '0 5px'}}/></a>
                        <a href={item.linkedin} target='_blank' rel="noreferrer"><AiFillLinkedin size={30} color='#88BA89' style={{padding: '0 5px'}}/></a>
                    </div>
                    
                </div>
            ))}
            </section>

        </Wrapper>
    )
}

export default About;


const Wrapper = styled.section`
    h3 {
        font-size: 30px;
        font-family: 'Rubik', sans-serif;
        color: #FFF4E6;
        background-color: #10282A;
        margin: 0;
        padding: 20px 0;
    }
    span {
        color: #F76C61;
    }

    h4 {
        font-size: 25px;
        margin: 0;
        padding: 20px 0 10px 0;
    }

    p {
        margin: 0;
    }

    .dev-container {
        margin: 50px 0;
    }

    img {
        border-radius: 50%;
        width: 200px;
    }
    .developers {
        padding: 10px 0;
    }

    

    @media only screen and ${breakpoint.device.tablet} {
        //background-color: yellow;
        .developers {
            display: flex;
            justify-content: space-around;
        }
     }
  
     @media only screen and ${breakpoint.device.desktop} {
        //background-color: red;
        .developers {
            justify-content: space-around;
        }
     }
`;