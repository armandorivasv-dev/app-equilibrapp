'use client';
import { Box, Typography, Grid, Paper } from '@mui/material';

export default function List(props) {
  const { data, values } = props;
  // console.log('🚀 -> ExerciseRoutineList -> data->', data);
  return (
    <Box padding={4}>
      <Typography
        variant='h3'
        mb={2}
      >
        Afirmaciones positivas generada con IA
      </Typography>
      <Typography
        variant='h6'
        mb={2}
      >
        <strong>Cantidad:</strong> {values.number} | <strong>Enfoque:</strong> {values.focus} | <strong>Tono:</strong>{' '}
        {values.tone}
      </Typography>
      <Grid
        container
        spacing={3}
      >
        {data &&
          data.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
            >
              <Paper
                elevation={3}
                sx={{ padding: 3 }}
              >
                <Box
                  sx={{
                    //marginBottom: 2,
                    padding: 2,
                    borderRadius: 1,
                    backgroundColor: '#f5f5f5',
                  }}
                >
                  <Typography
                    variant='h6'
                    sx={{ fontWeight: 'bold' }}
                  >
                    <Typography
                      variant='h6'
                      gutterBottom
                      component={'span'}
                      sx={{ color: '#4A8175', fontWeight: 'bold' }}
                    >
                      {index + 1}.-
                    </Typography>{' '}
                    {item}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
