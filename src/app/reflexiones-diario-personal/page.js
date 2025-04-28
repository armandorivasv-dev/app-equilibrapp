import { Hero } from '@/sections/common/hero';
import { Form } from '@/sections/reflections-personal-diary/form';

export default function Home() {
  return (
    <main>
      <Hero
        titleLine1='Reflexiones'
        titleLine2='Diario Personal'
        subtitle='Descubre preguntas y temas de reflexión sobre autoconocimiento, metas o emociones, ideales para enriquecer tu práctica diaria de journaling.'
      />
      <Form />
    </main>
  );
}
