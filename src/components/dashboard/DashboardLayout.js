import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = ({ children, userRole, userName }) => {
  const router = useRouter();

  // Redirect if no role is provided (would be handled by auth in real app)
  React.useEffect(() => {
    if (!userRole) {
      router.push('/login');
    }
  }, [userRole, router]);

  if (!userRole) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar userRole={userRole} />
      
      {/* Main Content */}
      <div className="flex flex-col ml-0 md:ml-64 min-h-screen transition-all duration-300 ease-in-out">
        <Header userName={userName} userRole={userRole} />
        
        <main className="flex-1 p-4 md:p-6 lg:p-8 pb-16">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 