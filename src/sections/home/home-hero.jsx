import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export const HomeHero = () => {
  return (
    <Grid
      container
      //height='90vh'
    >
      <Grid size={{ xs: 12, md: 5 }}>
        <Box
          sx={{
            backgroundColor: '#B6CCC7',
            //height: '100%',
            py: '60px',
            px: '40px',
            borderBottomRightRadius: '200px',
          }}
        >
          <Typography
            variant='h1'
            color='#4A8175'
          >
            EquilibrApp
          </Typography>
          <Typography variant='h1'>tu bienestar</Typography>
          <Typography variant='h1'>personalizado</Typography>
          <Typography variant='h1'>
            con{' '}
            <Typography
              variant='h1'
              component={'span'}
              color='#4A8175'
            >
              IA
            </Typography>
          </Typography>
          <Typography
            variant='h6'
            width={400}
          >
            Descubre planes de nutrición, rutinas de ejercicio, meditaciones guiadas y más, creados por IA para ayudarte
            a alcanzar tu equilibrio ideal y vivir mejor.
          </Typography>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
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
      </Grid>
    </Grid>
  );
};
