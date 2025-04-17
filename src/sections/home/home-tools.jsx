import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const dataTools = [
  {
    title: 'Plan Nutricional Inteligente',
    description:
      'Planes de nutrición personalizados Recibe un plan de comidas semanal adaptado a tu edad, peso, objetivos y género, generado por IA para una alimentación saludable y deliciosa. ',
    image: '/assets/images/nutricional-icon-equilibrapp.png',
    link: '/plan-nutricional',
  },
  {
    title: 'Rutina de Ejercicio Personalizada',
    description:
      'Obtén un plan de entrenamiento semanal para casa, ajustado a tu nivel, metas, tiempo y equipo disponible, diseñado para ponerte en forma eficazmente.',
    image: '/assets/images/ejercicio-icon-equilibrapp.png',
    link: '/rutina-ejercicio',
  },
  {
    title: 'Guía de Meditación a Medida',
    description:
      'Genera guiones de meditación guiada según tu estado de ánimo, tiempo y enfoque preferido (estrés, calma, concentración) para encontrar tu paz interior.',
    image: '/assets/images/meditacion-icon-equilibrapp.png',
    link: '/meditacion',
  },
  {
    title: 'Listado de Afirmaciones Positivas',
    description:
      'Crea listas de afirmaciones enfocadas en tus áreas de crecimiento (confianza, gratitud, motivación) para fortalecer tu mentalidad día a día.',
    image: '/assets/images/afirmaciones-icon-equilibrapp.png',
    link: '/meditacion',
  },
  {
    title: 'Inspiración para tu Diario Personal',
    description:
      'Descubre preguntas y temas de reflexión sobre autoconocimiento, metas o emociones, ideales para enriquecer tu práctica diaria de journaling.',
    image: '/assets/images/reflexion-icon-equilibrapp.png',
    link: '/meditacion',
  },
];

export const HomeTools = () => {
  return (
    <Grid
      container
      mt={10}
    >
      <Grid size={{ xs: 12, md: 12 }}>
        <Typography
          variant='h1'
          textAlign={'center'}
        >
          Herramientas que{' '}
          <Typography
            variant='h1'
            component={'span'}
            color='#4A8175'
          >
            EquilibrApp
          </Typography>{' '}
          te ofrece
        </Typography>
        <Typography
          variant='h6'
          textAlign={'center'}
          mt={2}
        >
          Explora nuestras funcionalidades inteligentes diseñadas para nutrir tu cuerpo, mente y espíritu.
        </Typography>
      </Grid>
      <Grid
        container
        size={{ xs: 12, md: 12 }}
        spacing={4}
        padding={4}
      >
        {dataTools.map((tool, index) => (
          <Grid
            key={index}
            size={{ xs: 12, md: 6 }}
            display='flex'
            justifyContent='top'
            alignItems='center'
            flexDirection='column'
            // mt={4}
          >
            <Box
              sx={{
                backgroundColor: '#4A8175',
                py: '25px',
                px: '25px',
                borderRadius: '20px',
              }}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Image
                src={tool.image}
                alt={tool.title}
                width={100}
                height={100}
              />
              <Typography
                variant='h4'
                textAlign={'center'}
                maxWidth={400}
                color='white'
                mt={2}
              >
                {tool.title}
              </Typography>
              <Typography
                variant='h6'
                minHeight={125}
                textAlign={'center'}
                color='white'
              >
                {tool.description}
              </Typography>
              <Button
                variant='contained'
                color='#4A8175'
                size='large'
                sx={{
                  mt: 2,
                  py: 1.5,
                  px: 4,
                  backgroundColor: 'white',
                  fontSize: '1.2rem',
                  color: '#4A8175',
                  '&:hover': {
                    backgroundColor: '#4A8175',
                    color: 'white',
                  },
                }}
                href={tool.link}
              >
                Probar
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* <Grid size={{ xs: 12, md: 7 }}>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            //height='100%'
          >
            <Image
            src='assets/images/equilibrapp-hero.svg'
            alt='hero'
            width={550}
            height={550}
            style={{ borderRadius: '20px' }}
            />
          </Box>
          </Grid> */}
    </Grid>
  );
};
