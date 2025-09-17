'use client';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import List from './list';
import * as Yup from 'yup';
import { genderOptions } from '@/utils/constants';

export const Form = () => {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <>
      <Formik
        initialValues={{ age: '', gender: 'Masculino', currentWeight: '', goalWeight: '' }}
        validationSchema={Yup.object({
          age: Yup.number()
            .required('La edad es obligatoria')
            .min(1, 'La edad debe ser mayor a 0')
            .max(120, 'La edad debe ser menor a 120'),
          currentWeight: Yup.number()
            .required('El peso actual es obligatorio')
            .min(1, 'El peso objetivo debe ser mayor a 0')
            .max(120, 'El peso objetivo debe ser menor a 120'),
          goalWeight: Yup.number()
            .required('El peso objetivo es obligatorio')
            .min(1, 'El peso objetivo debe ser mayor a 0')
            .max(120, 'El peso objetivo debe ser menor a 120')
            .notOneOf([Yup.ref('currentWeight')], 'El peso objetivo no puede ser igual al peso actual'),
        })}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          try {
            setLoading(true);
            setError(false);
            setData(null);
            setSuccess(false);

            // const response = await fetch(
            //   `/api/smart-nutritional-plan?age=${values.age}&gender=${values.gender}&currentWeight=${values.currentWeight}&goalWeight=${values.goalWeight}`
            // );

            const response = await fetch('/api/smart-nutritional-plan', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                age: values.age,
                gender: values.gender,
                currentWeight: values.currentWeight,
                goalWeight: values.goalWeight,
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
            console.error('Error generando plan de comidas:', error);
            setError(true);
          } finally {
            setLoading(false);
            setSubmitting(false);
          }
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, status }) => (
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
                    Completa los datos solicitados y el modelo generará un plan nutricional para 7 días adaptado a ti
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
                    label='Peso actual (kg)'
                    variant='outlined'
                    name='currentWeight'
                    type='number'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.currentWeight}
                    error={errors.currentWeight && touched.currentWeight}
                    helperText={errors.currentWeight && touched.currentWeight ? errors.currentWeight : ''}
                  />
                  <TextField
                    label='Peso objetivo (kg)'
                    variant='outlined'
                    name='goalWeight'
                    type='number'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.goalWeight}
                    error={errors.goalWeight && touched.goalWeight}
                    helperText={errors.goalWeight && touched.goalWeight ? errors.goalWeight : ''}
                  />
                </Grid>
                <Grid
                  size={{ xs: 12, md: 12 }}
                  px={mdUp ? 4 : 2}
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
                    Generar plan de comidas
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
                Error al generar el plan de comidas. Por favor, intenta nuevamente.
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
            {!data && (
              <Box marginTop={4}>
                <List
                  data={dataFake}
                  values={values}
                />
              </Box>
            )}

            {/* <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(data, null, 2)}</pre> */}
          </form>
        )}
      </Formik>
    </>
  );
};

const dataFake = [
  {
    meals: {
      lunch: {
        name: 'Ensalada de pollo a la parrilla',
        ingredients: [
          'Pechuga de pollo a la parrilla',
          'Lechuga mixta',
          'Tomate cherry',
          'Pepino',
          'Aguacate',
          'Vinagreta balsámica',
        ],
        instructions: 'Mezclar todos los ingredients y aderezar con vinagreta.',
      },
      dinner: {
        name: 'Salmón al horno con espárragos',
        ingredients: ['Filete de salmón', 'Espárragos', 'Limón', 'Aceite de oliva', 'Ajo', 'Sal', 'Pimienta'],
        instructions: 'Sazonar el salmón y los espárragos. Hornear a 180°C durante 15-20 minutos.',
      },
      breakfast: {
        name: 'Avena con frutas y nueces',
        ingredients: ['Avena', 'Leche descremada', 'Frutas frescas (fresas, plátano, arándanos)', 'Nueces'],
        instructions: 'Cocinar la avena con leche. Añadir frutas y nueces.',
      },
      snacks: [
        {
          name: 'Yogur griego con bayas',
          ingredients: ['Yogur griego natural', 'Bayas mixtas'],
          instructions: 'Mezclar yogur y bayas.',
        },
        {
          name: 'Puñado de almendras',
          ingredients: ['Almendras crudas'],
          instructions: 'Consumir un puñado.',
        },
      ],
    },
    day: 1,
  },
  {
    meals: {
      lunch: {
        name: 'Sopa de lentejas',
        ingredients: ['Lentejas', 'Zanahoria', 'Cebolla', 'Apio', 'Caldo de verduras', 'Especias'],
        instructions: 'Cocinar todos los ingredients en caldo hasta que las lentejas estén tiernas.',
      },
      dinner: {
        name: 'Pechuga de pavo a la plancha con verduras al vapor',
        ingredients: ['Pechuga de pavo', 'Brócoli', 'Zanahoria', 'Calabacín', 'Especias'],
        instructions: 'Cocinar el pavo a la plancha y las verduras al vapor.',
      },
      breakfast: {
        name: 'Tostadas integrales con aguacate y huevo',
        ingredients: ['Pan integral', 'Aguacate', 'Huevo', 'Sal', 'Pimienta'],
        instructions: 'Tostar el pan, untar aguacate y colocar un huevo encima.',
      },
      snacks: [
        {
          name: 'Manzana con mantequilla de maní',
          ingredients: ['Manzana', 'Mantequilla de maní natural'],
          instructions: 'Cortar la manzana y untar con mantequilla de maní.',
        },
        {
          name: 'Palitos de zanahoria con hummus',
          ingredients: ['Zanahoria', 'Hummus'],
          instructions: 'Cortar la zanahoria en palitos y acompañar con hummus.',
        },
      ],
    },
    day: 2,
  },
  {
    meals: {
      lunch: {
        name: 'Ensalada de quinoa con garbanzos',
        ingredients: ['Quinoa', 'Garbanzos', 'Pepino', 'Tomate', 'Pimiento', 'Aceite de oliva', 'Limón'],
        instructions: 'Mezclar todos los ingredients y aderezar.',
      },
      dinner: {
        name: 'Tortilla de claras con espinacas y champiñones',
        ingredients: ['Claras de huevo', 'Espinacas', 'Champiñones', 'Cebolla', 'Ajo', 'Especias'],
        instructions: 'Sofreír las verduras y luego añadir las claras. Cocinar como una tortilla.',
      },
      breakfast: {
        name: 'Batido de proteína con frutas',
        ingredients: ['Proteína en polvo', 'Leche de almendras', 'Plátano', 'Espinacas'],
        instructions: 'Licuar todos los ingredients.',
      },
      snacks: [
        {
          name: 'Rebanadas de piña',
          ingredients: ['Piña fresca'],
          instructions: 'Consumir rebanadas de piña.',
        },
        {
          name: 'Un puñado de nueces mixtas',
          ingredients: ['Nueces mixtas (nueces, almendras, avellanas)'],
          instructions: 'Consumir un puñado.',
        },
      ],
    },
    day: 3,
  },
  {
    meals: {
      lunch: {
        name: 'Wrap de lechuga con carne molida de pavo',
        ingredients: ['Carne molida de pavo', 'Lechuga', 'Tomate', 'Cebolla', 'Salsa baja en sodio'],
        instructions: 'Cocinar la carne, rellenar las hojas de lechuga con la carne y vegetales.',
      },
      dinner: {
        name: 'Bacalao al horno con patatas al vapor',
        ingredients: ['Filete de bacalao', 'Patatas', 'Aceite de oliva', 'Ajo', 'Perejil', 'Sal', 'Pimienta'],
        instructions: 'Hornear el bacalao y cocinar las patatas al vapor.',
      },
      breakfast: {
        name: 'Yogur con granola y frutos rojos',
        ingredients: ['Yogur natural', 'Granola baja en azúcar', 'Frutos rojos'],
        instructions: 'Combinar los ingredients.',
      },
      snacks: [
        {
          name: 'Queso cottage con rodajas de pepino',
          ingredients: ['Queso cottage bajo en grasa', 'Pepino'],
          instructions: 'Combinar el queso cottage y las rodajas de pepino.',
        },
        {
          name: 'Huevo duro',
          ingredients: ['Huevo'],
          instructions: 'Hervir el huevo.',
        },
      ],
    },
    day: 4,
  },
  {
    meals: {
      lunch: {
        name: 'Ensalada de atún con vegetales',
        ingredients: ['Atún en agua', 'Apio', 'Cebolla roja', 'Pimiento', 'Limón', 'Aceite de oliva'],
        instructions: 'Mezclar todos los ingredients.',
      },
      dinner: {
        name: 'Pollo al curry con arroz integral',
        ingredients: [
          'Pechuga de pollo',
          'Curry en polvo',
          'Leche de coco light',
          'Arroz integral',
          'Vegetales mixtos',
        ],
        instructions: 'Cocinar el pollo con curry y leche de coco. Servir con arroz y vegetales.',
      },
      breakfast: {
        name: 'Tortilla francesa con verduras',
        ingredients: ['Huevo', 'Pimiento', 'Cebolla', 'Tomate', 'Especias'],
        instructions: 'Preparar una tortilla con las verduras.',
      },
      snacks: [
        {
          name: 'Naranja',
          ingredients: ['Naranja'],
          instructions: 'Comer una naranja.',
        },
        {
          name: 'Un puñado de semillas de calabaza',
          ingredients: ['Semillas de calabaza'],
          instructions: 'Consumir un puñado de semillas de calabaza.',
        },
      ],
    },
    day: 5,
  },
  {
    meals: {
      lunch: {
        name: 'Sándwich integral de pavo y aguacate',
        ingredients: ['Pan integral', 'Pavo en rodajas', 'Aguacate', 'Lechuga', 'Tomate'],
        instructions: 'Armar el sándwich con los ingredients.',
      },
      dinner: {
        name: 'Lomo de cerdo al horno con boniato',
        ingredients: ['Lomo de cerdo', 'Boniato', 'Especias', 'Aceite de oliva'],
        instructions: 'Hornear el lomo de cerdo y el boniato.',
      },
      breakfast: {
        name: 'Panqueques de avena y plátano',
        ingredients: ['Avena', 'Plátano', 'Huevo', 'Canela'],
        instructions: 'Triturar los ingredients y cocinar como panqueques.',
      },
      snacks: [
        {
          name: 'Yogur griego con semillas de chía',
          ingredients: ['Yogur griego', 'Semillas de chía'],
          instructions: 'Mezclar yogur y semillas de chía.',
        },
        {
          name: 'Un puñado de arándanos',
          ingredients: ['Arándanos frescos'],
          instructions: 'Consumir un puñado de arándanos.',
        },
      ],
    },
    day: 6,
  },
  {
    meals: {
      lunch: {
        name: 'Sobras de pollo al curry con arroz integral',
        ingredients: ['Pollo al curry', 'Arroz integral'],
        instructions: 'Recalentar y servir.',
      },
      dinner: {
        name: 'Hamburguesa de lentejas casera con ensalada',
        ingredients: ['Lentejas', 'Pan rallado', 'Cebolla', 'Ajo', 'Especias', 'Pan integral', 'Lechuga', 'Tomate'],
        instructions: 'Preparar hamburguesas de lentejas y servir en pan integral con ensalada.',
      },
      breakfast: {
        name: 'Tostadas integrales con requesón y miel',
        ingredients: ['Pan integral', 'Requesón', 'Miel'],
        instructions: 'Tostar el pan, untar requesón y rociar con miel.',
      },
      snacks: [
        {
          name: 'Kiwi',
          ingredients: ['Kiwi'],
          instructions: 'Comer un kiwi.',
        },
        {
          name: 'Palomitas de maíz caseras (sin mantequilla)',
          ingredients: ['Maíz palomero'],
          instructions: 'Preparar palomitas de maíz sin mantequilla.',
        },
      ],
    },
    day: 7,
  },
];
