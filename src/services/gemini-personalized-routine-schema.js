import { Type } from '@google/genai';

export const GeminiPersonalizedRoutineSchema = {
  description: 'Rutina personalizada de ejercicios para una semana',
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      day: {
        type: Type.INTEGER,
        description: 'Día de la rutina (1 a 7)',
        nullable: false,
      },
      exercises: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            name: {
              type: Type.STRING,
              description: 'Nombre del ejercicio',
              nullable: false,
            },
            heating: {
              type: Type.STRING,
              description: 'Calentamiento recomendado',
              nullable: false,
            },
            sets: {
              type: Type.INTEGER,
              description: 'Número de series',
              nullable: false,
            },
            reps: {
              type: Type.INTEGER,
              description: 'Número de repeticiones por serie',
              nullable: false,
            },
            restTime: {
              type: Type.STRING,
              description: 'Tiempo de descanso entre series',
            },
          },
          required: ['name', 'sets', 'reps'],
        },
      },
    },
    required: ['day', 'exercises'],
  },
};
