'use client';
import { Box, Typography, Grid, Paper } from '@mui/material';

export default function List(props) {
  const { data, values } = props;

  return (
    <Box padding={4}>
      <Typography
        variant='h3'
        mb={2}
      >
        Plan Nutricional Inteligente generado con IA
      </Typography>
      <Typography
        variant='h6'
        mb={2}
      >
        <strong>Edad:</strong> {values.age} | <strong>Género:</strong> {values.gender} - <strong>Peso Actual: </strong>
        {values.currentWeight} | <strong>Peso Objetivo:</strong> {values.goalWeight}
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

                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant='h5'
                    sx={{ fontWeight: 'bold', mb: 1 }}
                  >
                    Desayuno
                  </Typography>
                  <Box
                    sx={{
                      marginBottom: 2,
                      padding: 2,
                      borderRadius: 1,
                      backgroundColor: '#f5f5f5',
                    }}
                  >
                    <Typography
                      variant='h6'
                      sx={{ fontWeight: 'bold' }}
                    >
                      {item.meals.breakfast.name}
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      sx={{ fontWeight: 'bold', mt: 1 }}
                    >
                      Ingredientes:
                    </Typography>
                    {item.meals?.breakfast?.ingredients?.map((ingrediente, index) => (
                      <Typography
                        variant='body1'
                        key={index}
                      >
                        • {ingrediente}
                      </Typography>
                    ))}

                    <Typography
                      variant='subtitle1'
                      sx={{ fontWeight: 'bold', mt: 1 }}
                    >
                      Instrucciones:
                    </Typography>

                    <Typography variant='body1'>• {item.meals?.breakfast?.instructions}</Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant='h5'
                    sx={{ fontWeight: 'bold', mb: 1 }}
                  >
                    Almuerzo
                  </Typography>
                  <Box
                    sx={{
                      marginBottom: 2,
                      padding: 2,
                      borderRadius: 1,
                      backgroundColor: '#f5f5f5',
                    }}
                  >
                    <Typography
                      variant='h6'
                      sx={{ fontWeight: 'bold' }}
                    >
                      {item.meals.lunch.name}
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      sx={{ fontWeight: 'bold', mt: 1 }}
                    >
                      Ingredientes:
                    </Typography>
                    {item.meals?.lunch?.ingredients?.map((ingrediente, index) => (
                      <Typography
                        variant='body1'
                        key={index}
                      >
                        • {ingrediente}
                      </Typography>
                    ))}

                    <Typography
                      variant='subtitle1'
                      sx={{ fontWeight: 'bold', mt: 1 }}
                    >
                      Instrucciones:
                    </Typography>

                    <Typography variant='body1'>• {item.meals?.lunch?.instructions}</Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant='h5'
                    sx={{ fontWeight: 'bold', mb: 1 }}
                  >
                    Cena
                  </Typography>
                  <Box
                    sx={{
                      marginBottom: 2,
                      padding: 2,
                      borderRadius: 1,
                      backgroundColor: '#f5f5f5',
                    }}
                  >
                    <Typography
                      variant='h6'
                      sx={{ fontWeight: 'bold' }}
                    >
                      {item.meals.dinner.name}
                    </Typography>
                    <Typography
                      variant='subtitle1'
                      sx={{ fontWeight: 'bold', mt: 1 }}
                    >
                      Ingredientes:
                    </Typography>
                    {item.meals?.dinner?.ingredients?.map((ingrediente, index) => (
                      <Typography
                        variant='body1'
                        key={index}
                      >
                        • {ingrediente}
                      </Typography>
                    ))}

                    <Typography
                      variant='subtitle1'
                      sx={{ fontWeight: 'bold', mt: 1 }}
                    >
                      Instrucciones:
                    </Typography>

                    <Typography variant='body1'>• {item.meals?.dinner?.instructions}</Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant='h5'
                    sx={{ fontWeight: 'bold', mb: 1 }}
                  >
                    Snacks
                  </Typography>
                  {item.meals.snacks.map((snack, index) => (
                    <Box
                      key={index}
                      sx={{
                        marginBottom: 2,
                        padding: 2,
                        borderRadius: 1,
                        backgroundColor: '#f5f5f5',
                      }}
                    >
                      <Typography
                        variant='h6'
                        sx={{ fontWeight: 'bold' }}
                      >
                        {index + 1}. {snack.name}
                      </Typography>
                      <Typography
                        variant='subtitle1'
                        sx={{ fontWeight: 'bold', mt: 1 }}
                      >
                        Ingredientes:
                      </Typography>
                      {snack.ingredients.map((ingrediente, index) => (
                        <Typography
                          variant='body1'
                          key={index}
                        >
                          • {ingrediente}
                        </Typography>
                      ))}
                      <Typography
                        variant='subtitle1'
                        sx={{ fontWeight: 'bold', mt: 1 }}
                      >
                        Instrucciones:
                      </Typography>
                      <Typography variant='body1'>• {snack.instructions}</Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
