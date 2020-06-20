import React, { useState } from 'react';
import { Grid, ExpansionPanel, ExpansionPanelSummary } from '@material-ui/core';
import './style.scss';

const faqs = [
  {
    title: '¿Cómo crear una cuenta en Edefy?',
    details:
      "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página al mirar su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. ",
    id: 1,
  },
  {
    title: '¿Cómo escribir el registro de cambios para las actualizaciones de temas?',
    details:
      "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página al mirar su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. ",
    id: 2,
  },
  {
    title: '¿Qué sucede cuando vence mi licencia?',
    details:
      "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página al mirar su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. ",
    id: 3,
  },
  {
    title: '¿Recomiendas usar un software de gestión de descargas?',
    details:
      "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página al mirar su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. ",
    id: 4,
  },
  {
    title: '¿Qué versión de WordPress necesito?',
    details:
      "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página al mirar su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. ",
    id: 5,
  },
];

const Faq = () => {
  const [expanded, setExpanded] = useState(1);
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Grid className="faqWrap">
      {faqs.map((item, i) => (
        <ExpansionPanel
          classes={{
            root: 'faqWrapper',
            expanded: 'faqWrapperExpanded',
          }}
          square
          key={i}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
        >
          <ExpansionPanelSummary className="faqHeader">{item.title}</ExpansionPanelSummary>
          <p>{item.details}</p>
        </ExpansionPanel>
      ))}
    </Grid>
  );
};
export default Faq;
