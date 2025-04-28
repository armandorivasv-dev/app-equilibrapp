import genAI from '@/services/gemini-conf';
import { GeminiSmartNutricionalPLanSchema } from '@/services/gemini-smart-nutritional-plan-schema';

export async function POST(req) {
  try {
    const body = await req.json();
    const { gender, age, currentWeight, goalWeight } = body;
    const response = await genAI.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: `genera plan comidas persona ${age} años, género ${gender},  peso: ${currentWeight} kg, peso objetivo alcanzar ${goalWeight} kg. proporciona desayuno, almuerzo, cena y snacks durante 7 días.`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: GeminiSmartNutricionalPLanSchema,
      },
    });
    return new Response(response.text, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error generando la información:', error);
  }
}
