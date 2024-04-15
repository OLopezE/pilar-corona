import React from 'react'

import { ProjectsSection } from './Projects.style';

import DigitalSketch from '../DigitalSketch/DigitalSketch'
import FurnitureDesign from '../FurnitureDesign';

const Projects = () => {
  return (
    <ProjectsSection>
        <h1>ARCHITECTURE PROJECTS</h1>
        <DigitalSketch />
        <FurnitureDesign />
    </ProjectsSection>
  )
}

export default Projects