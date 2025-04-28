import genAI from '@/services/gemini-conf';
import { GeminiPowerfulPositiveAffirmationsSchema } from '@/services/gemini-powerful-positive-affirmations';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const focus = searchParams.get('focus');
  const tone = searchParams.get('tone');
  const number = searchParams.get('number');

  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: `genera ${number} afirmaciones positivas personalizadas para enfocarse en ${focus}, deben ser ${tone}, formuladas en primera persona`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: GeminiPowerfulPositiveAffirmationsSchema,
      },
    });

    console.log('🚀 -> GET -> response->', response.text);

    return new Response(response.text);
  } catch (error) {
    console.error('Error generando plan de comidas:', error);
  }
}
