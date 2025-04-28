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
import * as Yup from 'yup';
import {
  contextOptions,
  depthOptions,
  equipmentOptions,
  focusOptions,
  frequencyWeekOptions,
  genderOptions,
  numberItemsOptions,
  objetiveExerciseOptions,
  timeSessionOptions,
  toneOptions,
  topicsOptions,
} from '@/utils/constants';

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
          topic: 'Manejo del estres',
          context: 'Reflexion matutina',
          depth: 'Superficiales y rapidas',
        }}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          try {
            setLoading(true);
            setError(false);
            setData(null);
            setSuccess(false);

            const response = await fetch('/api/reflections-personal-diary', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                topic: values.topic,
                context: values.context,
                depth: values.depth,
                number: values.number,
              }),
            });

            if (!response.ok) {
              throw new Error(`Error en la respuesta: ${response.status}`);
            }

            const result = await response.json();

            setData(result);
            setSuccess(true);
            setStatus({ success: true });
          } catch (error) {
            console.error('Error generando reflexiones:', error);
            setError(true);
            setStatus({ success: false });
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
                    Completa los datos solicitados y Equilibra te generará reflexiones acorde a tus necesidades.
                  </Typography>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 12 }}
                  container
                  spacing={4}
                  padding={mdUp ? 4 : 2}
                >
                  <TextField
                    label='Cantidad de reflexiones'
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
                    label='Tema de la reflexión'
                    variant='outlined'
                    name='topic'
                    select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.topic}
                    error={errors.topic && touched.topic}
                    helperText={errors.topic && touched.topic ? errors.topic : ''}
                  >
                    {topicsOptions.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    label='Contexto de la reflexión'
                    variant='outlined'
                    name='context'
                    select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.context}
                    error={errors.context && touched.context}
                    helperText={errors.context && touched.context ? errors.context : ''}
                  >
                    {contextOptions.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    label='Profundidad de la reflexión'
                    variant='outlined'
                    name='depth'
                    select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.depth}
                    error={errors.depth && touched.depth}
                    helperText={errors.depth && touched.depth ? errors.depth : ''}
                  >
                    {depthOptions.map((option) => (
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
                    {loading ? 'Generando...' : 'Generar reflexiones'}
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
                Error generando reflexiones. Por favor, intenta nuevamente.
              </Alert>
            )}

            {success && !data && (
              <Alert
                severity='info'
                variant='filled'
                sx={{ mt: 3, mx: mdUp ? 4 : 2 }}
              >
                Reflexiones generadas correctamente, pero no hay datos para mostrar, intenta nuevamente.
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

            {/* Comentado el debug de datos */}

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
  '¿Qué pequeña cosa puedes hacer hoy para reducir tu estrés?',
  '¿Qué estás evitando que te causa estrés y cómo podrías abordarlo?',
  '¿Qué aspecto de tu vida te está causando más estrés en este momento y qué pasos puedes dar para gestionarlo mejor?',
];
