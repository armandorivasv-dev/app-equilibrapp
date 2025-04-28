'use client';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export const Hero = () => {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

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
            py: mdUp ? '60px' : '10px',
            px: mdUp ? '40px' : '20px',
            borderBottomRightRadius: '200px',
          }}
        >
          <Typography
            variant={mdUp ? 'h1' : 'h4'}
            color='#4A8175'
          >
            EquilibrApp
          </Typography>
          <Typography variant={mdUp ? 'h1' : 'h4'}>tu bienestar</Typography>
          <Typography variant={mdUp ? 'h1' : 'h4'}>personalizado</Typography>
          <Typography variant={mdUp ? 'h1' : 'h4'}>
            con{' '}
            <Typography
              variant={mdUp ? 'h1' : 'h4'}
              component={'span'}
              color='#4A8175'
            >
              IA
            </Typography>
          </Typography>
          <Typography
            variant={mdUp ? 'h6' : 'subtitle1'}
            width={mdUp ? 400 : 300}
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
            width={mdUp ? 550 : 225}
            height={mdUp ? 550 : 225}
            //style={{ borderRadius: '20px' }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
