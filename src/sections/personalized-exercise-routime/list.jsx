'use client';
import { Box, Typography, Grid, Paper, useMediaQuery } from '@mui/material';

export default function List(props) {
  const { data, values } = props;
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  console.log('🚀 -> ExerciseRoutineList -> data->', data);
  return (
    <Box
      padding={4}
      mb={mdUp ? 10 : 2}
    >
      <Typography
        variant='h3'
        mb={2}
      >
        Rutina de Ejercicio Personalizada generada con IA
      </Typography>
      <Typography
        variant='h6'
        mb={2}
      >
        <strong>Edad:</strong> {values.age} | <strong>Género:</strong> {values.gender} | <strong>Objetivo:</strong>{' '}
        {values.objetive} | <strong>Nivel:</strong> {values.level} | <strong>Equipamiento:</strong> {values.equipment}
      </Typography>
      <Grid
        container
        spacing={3}
      >
        {data &&
          data.map((item) => (
            <Grid
              key={item.day}
              size={{ xs: 12, sm: 6, md: 4 }}
              mb={8}
            >
              <Paper
                elevation={3}
                sx={{ padding: 3, height: '100%' }}
              >
                <Typography
                  variant='h4'
                  gutterBottom
                  sx={{ color: '#4A8175', fontWeight: 'bold' }}
                >
                  Día {item.day}
                </Typography>

                {item.exercises.map((exercise, index) => (
                  <Box
                    key={index}
                    sx={{
                      marginBottom: 2,
                      padding: 2,
                      borderRadius: 1,
                      backgroundColor: exercise.heating ? '#f5f5f5' : 'transparent',
                    }}
                  >
                    <Typography
                      variant='h6'
                      sx={{ fontWeight: 'bold' }}
                    >
                      {exercise.name}
                    </Typography>

                    <Grid
                      container
                      spacing={1}
                      sx={{ mt: 1 }}
                    >
                      {exercise.sets && (
                        <Grid size={{ md: 6 }}>
                          <Typography variant='body1'>
                            <strong>Series:</strong> {exercise.sets}
                          </Typography>
                        </Grid>
                      )}

                      {exercise.reps && (
                        <Grid size={{ md: 6 }}>
                          <Typography variant='body1'>
                            <strong>Repeticiones:</strong> {exercise.reps}
                          </Typography>
                        </Grid>
                      )}

                      {exercise.restTime && (
                        <Grid size={{ md: 12 }}>
                          <Typography variant='body1'>
                            <strong>Descanso:</strong> {exercise.restTime}
                          </Typography>
                        </Grid>
                      )}
                    </Grid>

                    {exercise.heating && (
                      <Typography
                        variant='body2'
                        sx={{ mt: 1, fontStyle: 'italic' }}
                      >
                        {exercise.heating}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
