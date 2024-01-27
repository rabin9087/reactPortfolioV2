import React, { useState } from 'react'
import { Link as LinkR } from "react-router-dom"
import styled from 'styled-components';
import { DiCssdeck } from 'react-icons/di';
import { FaBars, } from 'react-icons/fa'
import { Bio } from '../../data/constant';
import '../../App.css'


const Nav = styled.div`
background-color: ${({ theme }) => theme.card_light};
height: 80px;
display: flex;
justify-content:center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
@media screen and (max-width:960px){
  transition:0.8s all ease;
}
`;

const NavContainer = styled.div`
display: flex;
justify-content: space-between;
height: 60px;
z-index:1;
width: 100%;
padding: 0 24px;
max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
width : 80%;
padding: 0 6px;
display: flex;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
align-items: center;
@media screen and (max-width: 640px){
  padding: 0 0px;
}
`;

const MobileIcon = styled.div`
 display: none;
 @media screen and (max-width: 768px){
  display: block;
  position: absolute;
  top: 0;
  right:0;
  transform: translate(-100%, 50%);
  font-size: 1.8rem;
  cursor:pointer;
  color: ${({ theme }) => theme.text_primary};
 }
 `;

const NavItems = styled.ul`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
  display: none;
  margin-Top: 20px;
  height: 100%
}
 `;

const NavLink = styled.a`
 color: ${({ theme }) => theme.text_primary};
 font-weight: 500;
 cursor: pointer;
 text-decoration: none;
 transition : all 0.2s ease-in-out;

 :hover {
  // color: ${({ theme }) => theme.text_primary + 100};
  // padding: 5px 25px 5px 25px;
//  border-radius: 20px;
//   background-color: ${({ theme }) => theme.primary};
 }
 `;

const ButtonContainer = styled.div`
 display:flex;
 align-items: center;
 justify-content:end;
 width: 80%;
 height: 100%;
 padding: 0 6px;
 @media screen and (max-width: 640px){
  display: none;
 }
 `;

export const GithubButton = styled.button`
 background-color: transparent;
 border: 1.8px solid ${({ theme }) => theme.primary};
 border-radius: 20px;
 display: flex;
 color: ${({ theme }) => theme.white};
 justify-content: center;
 align-items: center;
 padding: 0px 20px;
font-size: 1rem;
font-weight: 500;
cursor: pointer;
height: 70%;
:hover {
  background-color: ${({ theme }) => theme.primary};
 
}

@media only screen and (min-width: 640px){
  font-size: 0.8rem;
 }
 `;

export const Span = styled.span`
 padding: 0 4px;
 font-weight: bold;
 font-size: 30px;
 `;

const MobileMenu = styled.div`
 display: flex;
 flex-direction: column;
 gap: 16px;
 margin-top: 41rem;
 right: 0;
 min-height: 100vh;
 width: 100%;
 transition-delay: 2s;
 padding: 12px 40px 24px 40px;  
//  background: ${({ theme }) => theme.primary};
background: #171733;
 transition: all 1s ease-in-out;
 transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
 border-radius: 0 0 20px 20px;
 box-shodow: 0 5px 10px rgb(0, 0, 0, 0.3);
 opacity: ${({ open }) => open ? '1' : '0'};
 z-index: ${({ open }) => open ? '1' : '-1'};

 @media only screen and (max-width: 768px){
  margin-top: 58rem;
 }

 @media only screen and (max-width: 640px){
  margin-top: 68rem;
 }

 @media only screen and (max-width: 430px){
  margin-top: 53rem;
 }

@media only screen and (max-width: 414px){
  margin-top: 50rem;
 }

  @media only screen and (max-width: 390px){
  margin-top: 47rem;
 }
 
 @media only screen and (max-width: 375px){
  margin-top: 36rem;
 }

  @media only screen and (max-width: 360px){
  margin-top: 40rem;
 }
 `;

const MobileMenuLinks = styled.a`
color: ${({ theme }) => theme.text_primary};
font-weight: 500;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;
z-index: 3;
hover {
  color: ${({ theme }) => theme.primary};
}
`;

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a href='/' style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20",
            cursor: "pointer"
          }}>
            <DiCssdeck size="3rem" /><Span>Portfolio</Span>
          </a>
        </NavLogo>

        <MobileIcon>
          {!open && <FaBars onClick={() => {
            setOpen(!open)
          }} />}
        </MobileIcon>

        <NavItems>
          <NavLink href='#about'>Home</NavLink>
          {/* <NavLink href='#about'>About</NavLink> */}
          <NavLink href='#skills'>SKills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>
        <NavItems>
          <ButtonContainer>
            <GithubButton><a className='githubProfile' style={{ textDecoration: 'none', color: 'white' }} href={Bio.github} target='blank'>Github Profile </a></GithubButton>
          </ButtonContainer>
        </NavItems>
      </NavContainer>

      {
        open &&
        (<MobileMenu open={open}>

          <MobileMenuLinks style={{ textAlign: 'right', padding: '0px 0px -5px -5px', marginTop: '1rem' }}>

            <i style={{ color: "#ffffff", fontSize: '25px', fontWeight: 'bold' }} onClick={() => {
              setOpen(!open)
            }}>X</i>

          </MobileMenuLinks>

          <MobileMenuLinks href="#about" onClick={() => setOpen(!open)}>
            Home
          </MobileMenuLinks>

          <MobileMenuLinks
            href="#about" onClick={() => setOpen(!open)}
          >
            About
          </MobileMenuLinks>

          <MobileMenuLinks
            href="#skills" onClick={() => setOpen(!open)}
          >
            Skills
          </MobileMenuLinks>

          <MobileMenuLinks
            href="#experience" onClick={() => setOpen(!open)}
          >
            Experience
          </MobileMenuLinks>


          <MobileMenuLinks
            href="#projects" onClick={() => setOpen(!open)}
          >
            Projects
          </MobileMenuLinks>

          <MobileMenuLinks
            href="#education" onClick={() => setOpen(!open)}
          >
            Education
          </MobileMenuLinks>

          <MobileMenuLinks
            href="#contact" onClick={() => setOpen(!open)}
          >
            Contact
          </MobileMenuLinks>

        </MobileMenu>)
      }
    </Nav>
  )
}

export default Navbar
