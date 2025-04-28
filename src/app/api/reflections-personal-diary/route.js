import genAI from '@/services/gemini-conf';
import { GeminiReflectionsPersonalDiarySchema } from '@/services/gemini-reflections-personal-diary-schema';

export async function POST(req) {
  try {
    const body = await req.json();
    const { topic, context, depth, number } = body;
    const response = await genAI.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: `genera ${number} de (preguntas o temas de reflexión) centrados en ${topic}, reflexiones para momento de ${context}, profundidad deseado ${depth}, las reflexiones deben ser: abiertos, diseñados para fomentar la introspección y la autoexploración, formulados de manera clara y concisa`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: GeminiReflectionsPersonalDiarySchema,
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
