// 'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { DashboardProvider } from '../contexts/DashboardContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Green Gardens Landscaping",
  description: "Professional landscaping and lawn care services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardProvider>
          <div className="flex flex-col min-h-screen w-full ">
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
