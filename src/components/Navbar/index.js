import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars, FaTimes } from "react-icons/fa";
import { Bio } from "../../data/constant";
import "../../App.css";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const GithubButton = styled.button`
  background-color: transparent;
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  color: ${({ theme }) => theme.white};
  padding: 8px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #171733, #27275a);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease-in-out;
  z-index: 999;

  @media screen and (max-width: 768px) {
    right: ${({ open }) => (open ? "0" : "-100%")};
  }
`;

const MobileMenuLinks = styled.a`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 12px 0;
  text-decoration: none;
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.05);
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.primary};
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 2.2rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: rotate(90deg);
  }
`;


const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <DiCssdeck size="3rem" />
          <span style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "8px" }}>Portfolio</span>
        </NavLogo>

        {/* Mobile Menu Icon */}
        <MobileIcon onClick={() => setOpen(true)}>
          <FaBars />
        </MobileIcon>

        {/* Desktop Navigation Links */}
        <NavItems>
          <NavLink href="#about">Home</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>

        {/* Desktop Button */}
        <ButtonContainer>
          <GithubButton>
            <a className="githubProfile" style={{ textDecoration: "none", color: "white" }} href={Bio.github} target="_blank" rel="noopener noreferrer">
              Github Profile
            </a>
          </GithubButton>
        </ButtonContainer>
      </NavContainer>

      {/* Mobile Navigation Menu */}
      <MobileMenu open={open}>
        <CloseIcon onClick={() => setOpen(false)} />

        <MobileMenuLinks href="#about" onClick={() => setOpen(false)}>Home</MobileMenuLinks>
        <MobileMenuLinks href="#skills" onClick={() => setOpen(false)}>Skills</MobileMenuLinks>
        <MobileMenuLinks href="#experience" onClick={() => setOpen(false)}>Experience</MobileMenuLinks>
        <MobileMenuLinks href="#projects" onClick={() => setOpen(false)}>Projects</MobileMenuLinks>
        <MobileMenuLinks href="#education" onClick={() => setOpen(false)}>Education</MobileMenuLinks>
        <MobileMenuLinks href="#contact" onClick={() => setOpen(false)}>Contact</MobileMenuLinks>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;