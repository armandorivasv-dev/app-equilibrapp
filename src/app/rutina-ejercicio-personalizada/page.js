import { Hero } from '@/sections/common/hero';
import { Form } from '@/sections/personalized-exercise-routime/form';

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
