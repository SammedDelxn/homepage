'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDashboard } from '../../contexts/DashboardContext';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

// Role-specific dashboard components
const AdminDashboard = ({ userData }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Customers</h3>
        <p className="text-3xl font-bold text-green-600">243</p>
        <p className="text-sm text-gray-500 mt-2">12% increase from last month</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Revenue</h3>
        <p className="text-3xl font-bold text-green-600">$32,594</p>
        <p className="text-sm text-gray-500 mt-2">8% increase from last month</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Appointments</h3>
        <p className="text-3xl font-bold text-green-600">56</p>
        <p className="text-sm text-gray-500 mt-2">Scheduled this week</p>
      </div>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h3>
        <div className="space-y-4">
          {[
            { user: 'John Smith', action: 'booked a lawn maintenance service', time: '1 hour ago' },
            { user: 'Emily Johnson', action: 'requested a quote for garden design', time: '3 hours ago' },
            { user: 'Michael Brown', action: 'cancelled their appointment', time: '5 hours ago' },
            { user: 'Sarah Wilson', action: 'left a 5-star review', time: '1 day ago' },
            { user: 'David Thompson', action: 'signed up for monthly maintenance', time: '1 day ago' }
          ].map((activity, index) => (
            <div key={index} className="flex items-start pb-3 border-b border-gray-100 last:border-0 last:pb-0">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                {activity.user.charAt(0)}
              </div>
              <div>
                <p className="text-sm text-gray-800">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Services</h3>
        <div className="space-y-4">
          {[
            { name: 'Lawn Mowing & Maintenance', percentage: 85 },
            { name: 'Garden Design', percentage: 65 },
            { name: 'Tree Trimming', percentage: 60 },
            { name: 'Irrigation System Installation', percentage: 55 },
            { name: 'Landscape Lighting', percentage: 40 }
          ].map((service, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{service.name}</span>
                <span className="text-sm font-medium text-gray-700">{service.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: `${service.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const StaffDashboard = ({ userData }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Staff Dashboard</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Today's Appointments</h3>
        <p className="text-3xl font-bold text-green-600">8</p>
        <p className="text-sm text-gray-500 mt-2">2 completed, 6 remaining</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">This Week</h3>
        <p className="text-3xl font-bold text-green-600">24</p>
        <p className="text-sm text-gray-500 mt-2">Scheduled appointments</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Customer Ratings</h3>
        <p className="text-3xl font-bold text-green-600">4.8/5</p>
        <p className="text-sm text-gray-500 mt-2">Based on 42 reviews</p>
      </div>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Schedule</h3>
      <div className="overflow-x-auto">
        <div className="min-w-full">
          {[
            { time: '09:00 AM', customer: 'John Smith', service: 'Lawn Mowing', address: '123 Main St', status: 'Completed' },
            { time: '10:30 AM', customer: 'Sarah Johnson', service: 'Garden Maintenance', address: '456 Oak Ave', status: 'Completed' },
            { time: '01:00 PM', customer: 'Michael Brown', service: 'Hedge Trimming', address: '789 Pine Rd', status: 'In Progress' },
            { time: '02:30 PM', customer: 'Emily Wilson', service: 'Flower Bed Weeding', address: '321 Maple Dr', status: 'Scheduled' },
            { time: '04:00 PM', customer: 'David Thompson', service: 'Sprinkler Check', address: '654 Cedar Ln', status: 'Scheduled' }
          ].map((appointment, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center border-b border-gray-100 py-3 last:border-0">
              <div className="md:w-1/6 font-medium text-gray-700 mb-1 md:mb-0">{appointment.time}</div>
              <div className="md:w-1/5 text-gray-800 mb-1 md:mb-0">{appointment.customer}</div>
              <div className="md:w-1/4 text-gray-800 mb-1 md:mb-0">{appointment.service}</div>
              <div className="md:w-1/4 text-gray-600 text-sm mb-1 md:mb-0">{appointment.address}</div>
              <div className="md:w-1/6">
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                  appointment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  appointment.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {appointment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Equipment Status</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {[
          { name: 'Riding Mower #1', status: 'Available' },
          { name: 'Riding Mower #2', status: 'In Use' },
          { name: 'Push Mower', status: 'Available' },
          { name: 'Leaf Blower', status: 'Maintenance' },
          { name: 'Hedge Trimmer', status: 'Available' },
          { name: 'Chainsaw', status: 'In Use' }
        ].map((equipment, index) => (
          <div key={index} className="flex items-center p-2 bg-gray-50 rounded">
            <div className={`h-3 w-3 rounded-full mr-2 flex-shrink-0 ${
              equipment.status === 'Available' ? 'bg-green-500' :
              equipment.status === 'In Use' ? 'bg-yellow-500' :
              'bg-red-500'
            }`}></div>
            <span className="text-sm text-gray-800 mr-1">{equipment.name}</span>
            <span className="text-xs text-gray-500 ml-auto">({equipment.status})</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CustomerDashboard = ({ userData }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome back, {userData?.name || 'Customer'}!</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Upcoming Services</h3>
        <p className="text-3xl font-bold text-green-600">2</p>
        <p className="text-sm text-gray-500 mt-2">Next service: Tomorrow at 10:00 AM</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Quotes</h3>
        <p className="text-3xl font-bold text-green-600">1</p>
        <p className="text-sm text-gray-500 mt-2">Pending approval</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Completed Services</h3>
        <p className="text-3xl font-bold text-green-600">8</p>
        <p className="text-sm text-gray-500 mt-2">In the last 12 months</p>
      </div>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Appointments</h3>
        {[
          { date: 'Tomorrow, 10:00 AM', service: 'Lawn Mowing', technician: 'Michael Brown' },
          { date: 'Next Monday, 2:30 PM', service: 'Garden Maintenance', technician: 'Sarah Johnson' }
        ].map((appointment, index) => (
          <div key={index} className="mb-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-800">{appointment.service}</h4>
                <p className="text-sm text-gray-600">{appointment.date}</p>
                <p className="text-sm text-gray-600">Technician: {appointment.technician}</p>
              </div>
              <button className="text-sm text-red-600 hover:text-red-800 flex-shrink-0">
                Reschedule
              </button>
            </div>
          </div>
        ))}
        <div className="mt-4 text-center">
          <button className="text-green-600 hover:text-green-800 text-sm font-medium">
            Book New Service
          </button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommended Services</h3>
        {[
          { service: 'Fall Cleanup', description: 'Get your yard ready for winter with our comprehensive fall cleanup service.', price: '$120' },
          { service: 'Fertilization', description: 'Keep your lawn healthy and green with our professional fertilization treatment.', price: '$85' },
          { service: 'Sprinkler Winterization', description: 'Protect your irrigation system from freezing temperatures.', price: '$75' }
        ].map((service, index) => (
          <div key={index} className="mb-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div className="mb-2 sm:mb-0 sm:pr-4">
                <h4 className="font-medium text-gray-800">{service.service}</h4>
                <p className="text-sm text-gray-600">{service.description}</p>
                <p className="text-sm font-medium text-gray-700 mt-1">Starting at {service.price}</p>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1 rounded-md h-8 self-start sm:self-center flex-shrink-0">
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function DashboardPage() {
  const router = useRouter();
  const { userRole, userData, isLoading } = useDashboard();
  
  useEffect(() => {
    // If not loading and no role, redirect to login
    if (!isLoading && !userRole) {
      router.push('/login');
    }
  }, [isLoading, userRole, router]);
  
  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }
  
  // If no role, don't render anything (will redirect)
  if (!userRole) {
    return null;
  }
  
  // Render the appropriate dashboard based on user role
  return (
    <DashboardLayout userRole={userRole} userName={userData?.name}>
      {userRole === 'admin' && <AdminDashboard userData={userData} />}
      {userRole === 'staff' && <StaffDashboard userData={userData} />}
      {userRole === 'customer' && <CustomerDashboard userData={userData} />}
    </DashboardLayout>
  );
} 