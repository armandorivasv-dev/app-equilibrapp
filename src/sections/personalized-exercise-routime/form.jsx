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
  duration,
} from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import List from './list';
import * as Yup from 'yup';
import {
  equipmentOptions,
  frequencyWeekOptions,
  genderOptions,
  objetiveExerciseOptions,
  timeSessionOptions,
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
          age: '',
          gender: 'Masculino',
          objetive: 'Perder peso',
          level: 'Principiante',
          frequency: '3 veces a la semana',
          duration: '15 minutos',
          equipment: 'Ninguno (Solo peso corporal)',
        }}
        validationSchema={Yup.object({
          age: Yup.number()
            .required('La edad es obligatoria')
            .min(1, 'La edad debe ser mayor a 0')
            .max(120, 'La edad debe ser menor a 120'),
        })}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          try {
            setLoading(true);
            setError(false);
            setData(null);
            setSuccess(false);

            const response = await fetch('/api/personalized-exercise-routine', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                age: values.age,
                gender: values.gender,
                objetive: values.objetive,
                level: values.level,
                frequency: values.frequency,
                duration: values.duration,
                equipment: values.equipment,
              }),
            });

            if (!response.ok) {
              throw new Error(`Error en la respuesta: ${response.status}`);
            }

            const result = await response.json();
            setData(result);
            setSuccess(true);
          } catch (error) {
            console.error('Error generando rutina:', error);
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
                    Completa los datos solicitados y Equilibra te generará un plan de entrenamiento físico acorde a tus
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
                    label='Edad'
                    variant='outlined'
                    name='age'
                    type='number'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    error={errors.age && touched.age}
                    helperText={errors.age && touched.age ? errors.age : ''}
                  />

                  <TextField
                    label='Género'
                    variant='outlined'
                    name='gender'
                    select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.gender}
                    error={errors.gender && touched.gender}
                    helperText={errors.gender && touched.gender ? errors.gender : ''}
                  >
                    {genderOptions.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    label='Objetivo'
                    variant='outlined'
                    name='objetive'
                    select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.objetive}
                    error={errors.objetive && touched.objetive}
                    helperText={errors.objetive && touched.objetive ? errors.objetive : ''}
                  >
                    {objetiveExerciseOptions.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    label='Frecuencia de entrenamiento'
                    variant='outlined'
                    name='frequency'
                    select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.frequency}
                    error={errors.frequency && touched.frequency}
                    helperText={errors.frequency && touched.frequency ? errors.frequency : ''}
                  >
                    {frequencyWeekOptions.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    label='Duración de la sesión'
                    variant='outlined'
                    name='duration'
                    select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.duration}
                    error={errors.duration && touched.duration}
                    helperText={errors.duration && touched.duration ? errors.duration : ''}
                  >
                    {timeSessionOptions.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    label='Equipamiento disponible'
                    variant='outlined'
                    name='equipment'
                    select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.equipment}
                    error={errors.equipment && touched.equipment}
                    helperText={errors.equipment && touched.equipment ? errors.equipment : ''}
                  >
                    {equipmentOptions.map((option) => (
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
                    {loading ? 'Generando...' : 'Generar rutina de ejercicios'}
                  </Button>
                </Grid>
              </Grid>
            )}

            {success && !data && (
              <Alert
                severity='info'
                variant='filled'
                sx={{ mt: 3, mx: mdUp ? 4 : 2 }}
              >
                Rutina generada correctamente, pero no hay datos para mostrar, intenta nuevamente.
              </Alert>
            )}

            {error && (
              <Alert
                severity='error'
                variant='filled'
                sx={{ mt: 3, mx: mdUp ? 4 : 2 }}
              >
                Error al generar la rutina de ejercicios. Por favor, intenta nuevamente.
              </Alert>
            )}

            {/* Para desarrollo: mostrar datos de ejemplo si no hay datos reales */}
            {!data && !loading && process.env.NODE_ENV === 'development' && (
              <Box marginTop={4}>
                <List
                  data={dataFake}
                  values={values}
                />
              </Box>
            )}

            {/* Comentado el debug de datos */}
            {/*
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            */}
          </form>
        )}
      </Formik>
    </>
  );
};

// Datos de ejemplo para desarrollo
const dataFake = [
  {
    day: 1,
    exercises: [
      {
        name: 'Calentamiento: Movilidad articular (rotación de tobillos, rodillas, muñecas y cuello)',
        reps: 10,
        sets: 1,
        heating: 'Realizar antes de cada sesión',
        restTime: 'Sin descanso',
      },
      {
        name: 'Sentadillas',
        reps: 10,
        sets: 2,
        restTime: '60 segundos',
      },
      {
        name: 'Flexiones (apoyando rodillas si es necesario)',
        reps: 8,
        sets: 2,
        restTime: '60 segundos',
      },
      {
        name: 'Plancha abdominal',
        reps: 30,
        sets: 2,
        restTime: '60 segundos',
      },
      {
        name: 'Elevación de talones',
        reps: 12,
        sets: 2,
        restTime: '60 segundos',
      },
    ],
  },
  {
    day: 3,
    exercises: [
      {
        name: 'Calentamiento: Movilidad articular (rotación de tobillos, rodillas, muñecas y cuello)',
        reps: 10,
        sets: 1,
        heating: 'Realizar antes de cada sesión',
        restTime: 'Sin descanso',
      },
      {
        name: 'Zancadas alternas',
        reps: 8,
        sets: 2,
        restTime: '60 segundos',
      },
      {
        name: 'Flexiones (apoyando rodillas si es necesario)',
        reps: 6,
        sets: 2,
        restTime: '60 segundos',
      },
      {
        name: 'Plancha lateral (cada lado)',
        reps: 20,
        sets: 2,
        restTime: '60 segundos',
      },
      {
        name: 'Abdominales crunch',
        reps: 10,
        sets: 2,
        restTime: '60 segundos',
      },
    ],
  },
  {
    day: 5,
    exercises: [
      {
        name: 'Calentamiento: Movilidad articular (rotación de tobillos, rodillas, muñecas y cuello)',
        reps: 10,
        sets: 1,
        heating: 'Realizar antes de cada sesión',
        restTime: 'Sin descanso',
      },
      {
        name: 'Sentadillas isométricas (mantener la posición)',
        reps: 20,
        sets: 2,
        restTime: '60 segundos',
      },
      {
        name: 'Dominadas negativas (bajar lentamente de una barra)',
        reps: 3,
        sets: 2,
        restTime: '60 segundos',
      },
      {
        name: 'Puente de glúteos',
        reps: 12,
        sets: 2,
        restTime: '60 segundos',
      },
      {
        name: 'Bird dog (extensión de brazo y pierna contraria)',
        reps: 8,
        sets: 2,
        restTime: '60 segundos',
      },
    ],
  },
];
