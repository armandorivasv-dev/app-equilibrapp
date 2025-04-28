import { Type } from '@google/genai';

export const GeminiSmartNutricionalPLanSchema = {
  description: 'Plan de comidas de 7 días',
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      day: {
        type: Type.INTEGER,
        description: 'Día del plan de comidas (1 a 7)',
        nullable: false,
      },
      meals: {
        type: Type.OBJECT,
        properties: {
          breakfast: {
            type: Type.OBJECT,
            properties: {
              name: {
                type: Type.STRING,
                description: 'Nombre de la receta del desayuno',
                nullable: false,
              },
              ingredients: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING,
                },
                description: 'Lista de ingredientes para el desayuno',
              },
              instructions: {
                type: Type.STRING,
                description: 'Instrucciones de preparación para el desayuno',
              },
            },
            required: ['name'],
          },
          lunch: {
            type: Type.OBJECT,
            properties: {
              name: {
                type: Type.STRING,
                description: 'Nombre de la receta del almuerzo',
                nullable: false,
              },
              ingredients: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING,
                },
                description: 'Lista de ingredientes para el almuerzo',
              },
              instructions: {
                type: Type.STRING,
                description: 'Instrucciones de preparación para el almuerzo',
              },
            },
            required: ['name'],
          },
          dinner: {
            type: Type.OBJECT,
            properties: {
              name: {
                type: Type.STRING,
                description: 'Nombre de la receta de la cena',
                nullable: false,
              },
              ingredients: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING,
                },
                description: 'Lista de ingredientes para la cena',
              },
              instructions: {
                type: Type.STRING,
                description: 'Instrucciones de preparación para la cena',
              },
            },
            required: ['name'],
          },
          snacks: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: {
                  type: Type.STRING,
                  description: 'Nombre de la receta del snack',
                  nullable: false,
                },
                ingredients: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.STRING,
                  },
                  description: 'Lista de ingredientes para el snack',
                },
                instructions: {
                  type: Type.STRING,
                  description: 'Instrucciones de preparación para el snack',
                },
              },
              required: ['name'],
            },
            description: 'Lista de snacks para el día',
          },
        },
        required: ['breakfast', 'lunch', 'dinner', 'snacks'],
      },
    },
    required: ['day', 'meals'],
  },
};
