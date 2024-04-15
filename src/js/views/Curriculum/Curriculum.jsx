import React from 'react';

import pili from '/assets/images/pili.png'

import { CurriculumSection } from './Curriculum.style';

const Curriculum = () => {
  return (
  <CurriculumSection>
    <div>
      <h1>CURRICULUM</h1>
      <h2>PILAR CORONA - ARCHITECTURE STUDENT</h2>
      <h3>EDUCATION</h3>
      <ul>
        <li>ISAD Escuela de Arquitectura y Diseño Arquitectura, 2017- 2018</li>
        <li>Isthmus Norte Escuela de Arquitectura Arquitectura, 2020 - current</li>
      </ul>
      <h3>LANGUAGES</h3>
      <ul>
        <li>Spanish - Native</li>
        <li>English - Advanced</li>
        <li>German - Goeth - Zertifikat A2. </li>
        <li>Mandarin - UBC Extended Learning Beginner 1.</li>
      </ul>
      <h3>SOFTWARE</h3>
      <ul>
        <li>Sketchup</li>
        <li>Photoshop</li>
        <li>Vray</li>
        <li>Enscape</li>
        <li>Autocad</li>
        <li>Blender</li>
      </ul>
      <h3>INTERESTS AND SKILLS</h3>
      <ul>
        <li>Diseño gráfico</li>
        <li>Modelado 3D</li>
        <li>Ventas</li>
        <li>Fotografía</li>
        <li>Estudio y análisis bioclimático</li>
        <li>Diseño arquitectónico</li>
        <li>Dibujo</li>
        <li>Diseño de mobiliario</li>
        <li>Construcción</li>
        <li>Idiomas</li>
      </ul>
      <img src={pili} />
      <p>
        Soy una persona proactiva, excelente
        compañera de equipo, organizada y
        responsable. Mi objetivo es un
        puesto desafiante y dinámico dónde poder sumar experiencia y nuevos
        conocimientos.
      </p>

    </div>
  </CurriculumSection>
  )
}

export default Curriculum