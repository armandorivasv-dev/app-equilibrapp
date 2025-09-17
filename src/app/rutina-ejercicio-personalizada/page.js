import { Hero } from '@/sections/common/hero';
import { Form } from '@/sections/personalized-exercise-routime/form';

export const metadata = {
  title: 'EquilibrApp - Rutina de Ejercicio Personalizada',
  description: 'Alcanza el equilibrio en tu vida con herramientas creadas con IA.',
};

export default function Home() {
  return (
    <main>
      <Hero
        titleLine1='Rutina de Ejercicio'
        titleLine2='Personalizada'
        subtitle='Obtén un plan de entrenamiento semanal para casa, ajustado a tu nivel, metas, tiempo y equipo disponible, diseñado para ponerte en forma eficazmente.'
      />
      <Form />
    </main>
  );
}
