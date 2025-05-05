import { create } from 'zustand';
import { services, appointments, estimates } from './data/mockData';

const useStore = create((set) => ({
  // Services
  services: services,
  
  // Appointments
  appointments: appointments,
  createAppointment: (appointment) => 
    set((state) => ({
      appointments: [
        ...state.appointments,
        {
          id: Math.max(0, ...state.appointments.map(a => a.id)) + 1,
          status: 'pending-estimate',
          ...appointment
        }
      ]
    })),
  
  updateAppointment: (id, updatedData) =>
    set((state) => ({
      appointments: state.appointments.map(appointment => 
        appointment.id === id ? { ...appointment, ...updatedData } : appointment
      )
    })),
  
  // Estimates
  estimates: estimates,
  createEstimate: (estimate) =>
    set((state) => ({
      estimates: [
        ...state.estimates,
        {
          id: Math.max(0, ...state.estimates.map(e => e.id)) + 1,
          status: 'pending',
          createdAt: new Date().toISOString().split('T')[0],
          expiresAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          ...estimate
        }
      ]
    })),
  
  updateEstimate: (id, updatedData) =>
    set((state) => ({
      estimates: state.estimates.map(estimate => 
        estimate.id === id ? { ...estimate, ...updatedData } : estimate
      )
    })),
  
  // Current booking data (for multi-step form)
  currentBooking: {
    serviceId: null,
    date: null,
    timeSlot: null,
    frequency: 'one-time',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    address: '',
    notes: '',
    photos: []
  },
  
  updateCurrentBooking: (data) => 
    set((state) => ({
      currentBooking: { ...state.currentBooking, ...data }
    })),
  
  resetCurrentBooking: () =>
    set({
      currentBooking: {
        serviceId: null,
        date: null,
        timeSlot: null,
        frequency: 'one-time',
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        address: '',
        notes: '',
        photos: []
      }
    })
}));

export default useStore; 