import genAI from '@/services/gemini-conf';
import { GeminiPersonalizedRoutineSchema } from '@/services/gemini-personalized-routine-schema';

export async function POST(req) {
  try {
    const body = await req.json();
    const { gender, age, frequency, level, objetive, duration, equipment } = body;
    const response = await genAI.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: `genera plan entrenamiento físico en casa persona ${age} años, género ${gender}, durante ${frequency} días,  nivel condición física ${level}, objetivo principal ${objetive}, sesión debe durar ${duration} minutos, equipamiento disponible: ${equipment}, proporciona lista de ejercicios específicos diferentes cada dia, Numero de series y repeticiones, calentamientos previos`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: GeminiPersonalizedRoutineSchema,
      },
    });

    return new Response(response.text, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error generando plan de comidas:', error);
  }
}
