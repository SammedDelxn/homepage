// 'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { DashboardProvider } from '../contexts/DashboardContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'GreenScapes - Professional Landscaping Services',
    template: '%s | GreenScapes'
  },
  description: 'Transform your outdoor space with our professional landscaping services. Expert solutions tailored to your unique needs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </DashboardProvider>
      </body>
    </html>
  );
}
