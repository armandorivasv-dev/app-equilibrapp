'use client';
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Hero = (props) => {
  const { titleLine1, titleLine2, subtitle } = props;
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
            {titleLine1}
          </Typography>

          <Typography variant={mdUp ? 'h1' : 'h4'}>{titleLine2}</Typography>
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
            {subtitle}
          </Typography>
          <Link href='/'>
            <Button
              variant='contained'
              color='#4A8175'
              size={mdUp ? 'large' : 'medium '}
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
              //href={tool.link}
            >
              Ir al Home
            </Button>
          </Link>
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
            src='assets/images/equilibrapp-hero-herramientas.svg'
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
