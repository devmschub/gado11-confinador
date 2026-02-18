import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gado 11 - Portal do Confinador',
  description: 'Acesse sua área exclusiva para gestão de compras coletivas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${manrope.variable} antialiased bg-surface-dark text-white`}
      >
        {children}
      </body>
    </html>
  );
}
