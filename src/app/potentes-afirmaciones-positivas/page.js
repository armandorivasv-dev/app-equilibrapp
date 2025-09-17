import { Hero } from '@/sections/common/hero';
import { Form } from '@/sections/powerful-positive-affirmations/form';

export const metadata = {
  title: 'EquilibrApp - Potentes Afirmaciones Positivas',
  description: 'Alcanza el equilibrio en tu vida con herramientas creadas con IA.',
};

export default function Home() {
  return (
    <main>
      <Hero
        titleLine1='Potentes Afirmaciones'
        titleLine2='Positivas'
        subtitle='Crea listas de afirmaciones enfocadas en tus áreas de crecimiento (confianza, gratitud, motivación) para fortalecer tu mentalidad día a día.'
      />
      <Form />
    </main>
  );
}
