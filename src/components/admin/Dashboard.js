import React from 'react';
import Container from '../ui/Container';
import AppointmentList from './AppointmentList';
import Card from '../ui/Card';
import useStore from '../../lib/store';

const Dashboard = () => {
  const { appointments, estimates } = useStore();
  
  // Count appointments by status
  const appointmentCounts = {
    total: appointments.length,
    pending: appointments.filter(a => a.status === 'pending-estimate').length,
    scheduled: appointments.filter(a => a.status === 'scheduled').length,
    completed: appointments.filter(a => a.status === 'completed').length,
  };
  
  // Count estimates by status
  const estimateCounts = {
    total: estimates.length,
    pending: estimates.filter(e => e.status === 'pending').length,
    approved: estimates.filter(e => e.status === 'approved').length,
  };
  
  return (
    <div className="py-8">
      <Container>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage appointments, estimates, and customers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Card>
            <Card.Content className="text-center">
              <h2 className="text-lg font-medium text-gray-700">Total Appointments</h2>
              <p className="text-3xl font-bold text-gray-900 mt-2">{appointmentCounts.total}</p>
            </Card.Content>
          </Card>
          
          <Card>
            <Card.Content className="text-center">
              <h2 className="text-lg font-medium text-gray-700">Pending Estimates</h2>
              <p className="text-3xl font-bold text-yellow-600 mt-2">{appointmentCounts.pending}</p>
            </Card.Content>
          </Card>
          
          <Card>
            <Card.Content className="text-center">
              <h2 className="text-lg font-medium text-gray-700">Scheduled</h2>
              <p className="text-3xl font-bold text-blue-600 mt-2">{appointmentCounts.scheduled}</p>
            </Card.Content>
          </Card>
          
          <Card>
            <Card.Content className="text-center">
              <h2 className="text-lg font-medium text-gray-700">Completed</h2>
              <p className="text-3xl font-bold text-green-600 mt-2">{appointmentCounts.completed}</p>
            </Card.Content>
          </Card>
        </div>
        
        <AppointmentList />
      </Container>
    </div>
  );
};

export default Dashboard; 