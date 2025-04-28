import { Type } from '@google/genai';

export const GeminiPowerfulPositiveAffirmationsSchema = {
  description: 'Afirmaciones positivas poderosas',
  type: Type.ARRAY,
  items: {
    type: Type.STRING,
    description: 'Afirmación positiva',
  },
};
