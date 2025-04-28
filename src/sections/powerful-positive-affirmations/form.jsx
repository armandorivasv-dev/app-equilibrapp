'use client';
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
  useMediaQuery,
  Alert,
  CircularProgress,
} from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import List from './list';

import { focusOptions, numberItemsOptions, toneOptions } from '@/utils/constants';

export const Form = () => {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          number: '3',
          focus: 'Confianza',
          tone: 'Directas y cortas',
        }}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          try {
            setLoading(true);
            setError(false);
            setData(null);
            setSuccess(false);

            const response = await fetch('/api/powerful-positive-affirmations', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                focus: values.focus,
                tone: values.tone,
                number: values.number,
              }),
            });

            if (!response.ok) {
              throw new Error(`Error en la respuesta: ${response.status}`);
            }

            const result = await response.json();
            setData(result);
            setSuccess(true);
          } catch (error) {
            console.error('Error generando afirmaciones:', error);
            setError(true);
          } finally {
            setLoading(false);
            setSubmitting(false);
          }
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            {data ? (
              <Box marginTop={4}>
                <List
                  data={data}
                  values={values}
                />
              </Box>
            ) : loading ? (
              <Box
                marginTop={4}
                textAlign='center'
              >
                <CircularProgress />
                <Typography variant='h4'>Generando... Espere...</Typography>
              </Box>
            ) : (
              <Grid
                container
                mt={mdUp ? 10 : 2}
              >
                <Grid
                  size={{ xs: 12, md: 12 }}
                  px={mdUp ? 4 : 2}
                >
                  <Typography variant='h6'>
                    Completa los datos solicitados y Equilibra te generará afirmaciones positivas acorde a tus
                    necesidades.
                  </Typography>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 12 }}
                  container
                  spacing={4}
                  padding={mdUp ? 4 : 2}
                >
                  <TextField
                    label='Cantidad de afirmaciones'
                    variant='outlined'
                    name='number'
                    select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.number}
                    error={errors.number && touched.number}
                    helperText={errors.number && touched.number ? errors.number : ''}
                  >
                    {numberItemsOptions.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    label='Enfoque de las afirmaciones'
                    variant='outlined'
                    name='focus'
                    select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.focus}
                    error={errors.focus && touched.focus}
                    helperText={errors.focus && touched.focus ? errors.focus : ''}
                  >
                    {focusOptions.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    label='Tono de las afirmaciones'
                    variant='outlined'
                    name='tone'
                    select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tone}
                    error={errors.tone && touched.tone}
                    helperText={errors.tone && touched.tone ? errors.tone : ''}
                  >
                    {toneOptions.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 12 }}
                  px={mdUp ? 4 : 2}
                  mt={2}
                >
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    size='large'
                    disabled={isSubmitting || loading}
                    sx={{
                      backgroundColor: '#4A8175',
                      fontSize: '1.2rem',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#4A8175',
                        color: 'white',
                      },
                    }}
                  >
                    Generar afirmaciones
                  </Button>
                </Grid>
              </Grid>
            )}

            {error && (
              <Alert
                severity='error'
                variant='filled'
                sx={{ mt: 3, mx: mdUp ? 4 : 2 }}
              >
                Error generando afirmaciones. Por favor, intenta nuevamente.
              </Alert>
            )}

            {success && !data && (
              <Alert
                severity='info'
                variant='filled'
                sx={{ mt: 3, mx: mdUp ? 4 : 2 }}
              >
                Afirmaciones generadas correctamente, pero no hay datos para mostrar, intenta nuevamente.
              </Alert>
            )}

            {/* Para desarrollo: mostrar datos de ejemplo si no hay datos reales */}
            {/* {!data && !loading && process.env.NODE_ENV === 'development' && (
              <Box marginTop={4}>
                <Typography
                  variant='subtitle2'
                  color='textSecondary'
                  sx={{ mb: 2, mx: mdUp ? 4 : 2 }}
                >
                  Vista previa con datos de ejemplo (solo visible en desarrollo):
                </Typography>
                <List
                  data={dataFake}
                  values={values}
                />
              </Box>
            )} */}

            {/* <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(data, null, 2)}</pre> */}
          </form>
        )}
      </Formik>
    </>
  );
};

// Datos de ejemplo para desarrollo
const dataFake = [
  'Confío en mis habilidades y decisiones.',
  'Soy valiente y capaz de superar cualquier desafío.',
  'Merezco el éxito y confío en mi camino.',
];
