import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectsCards'
import { projects } from '../../data/constant'
import Carousel from "react-bootstrap/Carousel";
import { Col, Row } from 'react-bootstrap';


const TrialProjects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project, i) => (
              <ProjectCard key={i} project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
          <Container fluid>
            <Row>
              <Col>
                <Carousel data-bs-theme="dark" interval={1000}>
                  {projects
                    .filter((item) => item.category === toggle)
                    .map((project, i) => (
                      <Carousel.Item style={{ width: "90%" }}>
                        <ProjectCard key={i} project={project} openModal={openModal} setOpenModal={setOpenModal} />
                      </Carousel.Item>
                    ))}
                </Carousel>
              </Col>
            </Row>
          </Container>
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default TrialProjects