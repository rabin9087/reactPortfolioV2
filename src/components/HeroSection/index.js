import React, { useState } from 'react'
import styled from 'styled-components';
import { Bio } from '../../data/constant';
import Typewriter from 'typewriter-effect';
import image from '../../images/rabinProfile.png';
import HeroBgAnimation from '../HeroBgAnimation'

const HeroContainer = styled.div`
background-color: ${({ theme }) => theme.card_light};
display: flex;
justify-content: center;
position: relative;
padding: 80px 30px;

@media screen and (max-width: 960px){
  padding: 66px 16px;
}

@media screen and (max-width: 640px){
  padding: 32px 16px;
}

z-index: 1;
clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  overflow: hidden;
  width: 100%;
  height: 55%;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 768px){
    padding: 0 0px;
    justify-content: center;
  }
`;

const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px){
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media screen and (max-width: 960px){
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 640px){
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  gap: 12px;
  @media screen and (max-width: 960px){
    order: 1;
    margin-bottom: 80px;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 640px){
    order: 1;
    margin-bottom: 30px;
  }
`;


const Title = styled.div`
    font-size: 50px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;

    @media screen and (max-width: 960px){
      text-align: center;
    }

    @media screen and (max-width: 640px){
      font-size: 35px;
      line-height: 48px;
      margin-bottom: 8px;
    }
`;

const TextLoop = styled.div`
    font-size: 32px;
    font-weight: 600px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
    gap: 12px;
    display: flex;

    @media screen and (max-width: 960px){
      font-size: 20px;
      font-weight: 400px;
      text-align: left;
      display: start;
    }

    @media screen and (max-width: 640px){
      font-size: 20pxpx;
      line-height: 48px;
      margin-bottom: 16px;
      text-align: left;
      display: start;
    }
`;

const Span = styled.div`
color: ${({ theme }) => theme.primary};
cursor: pointer;
text-transform: uppercase;
`;

const SubTitle = styled.div`
font-size: 20px;
color: ${({ theme }) => theme.text_primary + 95};
line-height: 32px;
margin-botton: 42px;

@media screen and (max-width: 960px){
  text-align: center;
  justify-content: justify;
}

@media screen and (max-width: 640px){
  font-size: 16px;
  line-height: 32px;
  text-align: justify
}

`;

const ResumeButton = styled.a`
-webkit-appearance: button;
-moz-appearance: button;
appearance: button;
text-decoration: none;
width: 95%;
max-width: 300px;
text-align: center;
margin-top: 20px;
padding: 16px 0;
color:${({ theme }) => theme.white};
border-radius: 20px;
cursor: pointer;
font-size: 20px;
font-weight: 600;
transition: all 0.2s ease-in-out;
background: hsla(271, 100%, 50%, 1);
background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
box-shadow:  20px 20px 60px #1F2634,
-20px -20px 60px #1F2634;
 :hover {
  background: ${({ theme }) => theme.primary};
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%
  position: relative;
  border-radius: 50%;
  max-width: 400px;
  max-height: 500px;
  object-fit: cover;
  object-position: center;
  border: 1px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-height: 400px;
    max-width: 400px;
  }

  @media (max-width: 640px) {
    max-height: 300px;
    max-width: 280px;
  }
`;


const Hero = () => {

  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>Hi, I am <br /> {Bio.name}</Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>

            <ResumeButton href={Bio.resume} download='Rabin Shah Resume'>Check Resume
            </ResumeButton>

          </HeroLeftContainer>
          <HeroRightContainer>
            <Image src={image} alt="hero" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default Hero;
