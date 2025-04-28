# EquilibrApp

![EquilibrApp](public/assets/images/equilibrapp-hero.svg)

## Descripción

EquilibrApp es una aplicación web desarrollada con Next.js que utiliza inteligencia artificial para generar planes personalizados de bienestar. La aplicación está diseñada para ayudar a los usuarios a alcanzar un equilibrio ideal en diferentes aspectos de su vida como nutrición, ejercicio y bienestar mental.

## Tecnologías Utilizadas

- **Frontend**: Next.js 15, React 19, Material UI 7
- **IA**: Google Gemini AI (API)
- **Formularios**: Formik con validación Yup
- **Estilos**: Material UI con tema personalizado

## Características y Funcionalidades

### 1. Plan Nutricional Inteligente

Genera planes de alimentación semanales completos adaptados a:

- Edad
- Género
- Peso actual
- Peso objetivo

Cada plan incluye desayuno, almuerzo, cena y snacks para los 7 días de la semana, con ingredientes e instrucciones de preparación detalladas.

### 2. Rutina de Ejercicio Personalizada

Crea rutinas de entrenamiento personalizadas basadas en:

- Edad y género
- Nivel de condición física
- Objetivo (perder peso, ganar masa muscular, etc.)
- Frecuencia de entrenamiento
- Duración de sesiones
- Equipamiento disponible

Las rutinas incluyen ejercicios específicos con series, repeticiones, descansos y calentamientos recomendados.

### 3. Potentes Afirmaciones Positivas

Genera afirmaciones positivas personalizadas según:

- Área de enfoque (confianza, autoestima, gratitud, etc.)
- Tono preferido (directas o elaboradas)
- Cantidad de afirmaciones

### 4. Reflexiones para Diario Personal

Crea preguntas y temas de reflexión para journaling basados en:

- Tema (manejo del estrés, autoconocimiento, metas, etc.)
- Contexto (reflexión matutina, revisión semanal, etc.)
- Profundidad deseada
- Cantidad de reflexiones

## Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/armandorivasv-dev/equilibrapp.git
cd equilibrapp
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env.local` en la raíz del proyecto con tu clave API de Google Gemini:

```
GEMINI_API_KEY=tu_clave_api_aqui
```

4. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del Proyecto

- `src/app`: Rutas y páginas de la aplicación
- `src/sections`: Componentes organizados por funcionalidad
- `src/services`: Configuración de servicios de IA y esquemas de respuesta
- `src/theme`: Configuración del tema personalizado de Material UI
- `src/utils`: Utilidades y constantes
- `public`: Archivos estáticos (imágenes, iconos, etc.)

## Despliegue

La aplicación está configurada para ser desplegada en Vercel:

```bash
npm run build
```

## Autor

[Armando Rivas](https://www.armandorivasv.dev/)

## Licencia

Este proyecto está bajo la Licencia MIT.
