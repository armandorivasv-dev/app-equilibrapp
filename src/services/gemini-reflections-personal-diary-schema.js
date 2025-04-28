import { Type } from '@google/genai';

export const GeminiReflectionsPersonalDiarySchema = {
  description: 'Reflexiones personales para un diario',

  type: Type.ARRAY,
  items: {
    type: Type.STRING,
    description: 'Reflexión personal',
  },
};
