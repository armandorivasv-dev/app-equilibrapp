'use client';
import React, { useContext } from 'react';
import { Button, Container, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { DiGithubBadge } from 'react-icons/di';
import { IoLogoLinkedin } from 'react-icons/io';

import Link from 'next/link';

function Copyright() {
  return (
    <Button
      variant='text'
      size='large'
      sx={{ pb: 5, color: 'black', textTransform: 'lowercase' }}
      href='https://www.armandorivasv.dev/'
      target='_blank'
      rel='noopener noreferrer'
    >
      {'Copyright © '}
      armandorivasv.dev {new Date().getFullYear()}
    </Button>
  );
}

export const Footer = () => {
  //const { color } = useContext(ColorContext);
  return (
    <Grid
      container
      direction={'column'}
      justifyContent='center'
      alignItems='center'
      sx={{ mt: 'auto', pt: 5, backgroundColor: '#B6CCC7' }}
    >
      <Grid
        container
        justifyContent='center'
        spacing={3}
      >
        <Grid>
          <Link
            href='https://github.com/armandorivasv-dev/ '
            target='_blank'
          >
            <Typography variant='h3'>
              <DiGithubBadge color='black' />
            </Typography>
          </Link>
        </Grid>
        <Grid>
          <Link
            href='https://www.linkedin.com/in/armandorivasv/ '
            target='_blank'
          >
            <Typography variant='h3'>
              <IoLogoLinkedin color='black' />
            </Typography>
          </Link>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent='center'
        spacing={3}
      >
        <Copyright />
      </Grid>
    </Grid>
  );
};
