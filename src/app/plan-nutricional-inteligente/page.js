import { Hero } from '@/sections/common/hero';
import { Form } from '@/sections/smart-nutritional-plan/form';

export default function Home() {
  return (
    <main>
      <Hero
        titleLine1='Plan Nutricional'
        titleLine2='Inteligente'
        subtitle='Recibe un plan de comidas semanal adaptado a tu edad, peso, objetivos y género, generado por IA para una
            alimentación saludable y deliciosa.'
      />
      <Form />
    </main>
  );
}
