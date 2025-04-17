//import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import { Footer } from '@/sections/footer';
import { customTheme } from '@/theme/get-custom-theme';

export const metadata = {
  title: 'Armando Rivas V | Portafolio',
  description:
    'Desarrollo websites y aplicaciones web a medida, optimizados para ofrecer una experiencia rápida, atractiva y eficiente.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body style={{ padding: 0, margin: 0 }}>
        <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
