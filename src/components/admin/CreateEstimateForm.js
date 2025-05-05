"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button';
import Card from '../ui/Card';
import useStore from '../../lib/store';

const CreateEstimateForm = ({ appointmentId }) => {
  const router = useRouter();
  const { appointments, services, createEstimate } = useStore();
  
  // Find the appointment if an ID was provided
  const appointment = appointmentId
    ? appointments.find(app => app.id === parseInt(appointmentId))
    : null;
  
  // Initialize form state
  const [formData, setFormData] = useState({
    appointmentId: appointment?.id || '',
    customerName: appointment?.customerName || '',
    services: appointment
      ? [{ id: appointment.serviceId, name: appointment.serviceName, quantity: 1, unitPrice: 0, total: 0 }]
      : [],
    additionalFees: [{ name: '', amount: 0 }],
    subtotal: 0,
    tax: 0,
    total: 0
  });
  
  // Calculate totals whenever services or fees change
  useEffect(() => {
    const servicesTotal = formData.services.reduce((sum, service) => sum + service.total, 0);
    const feesTotal = formData.additionalFees.reduce((sum, fee) => sum + (parseFloat(fee.amount) || 0), 0);
    const subtotal = servicesTotal + feesTotal;
    const tax = subtotal * 0.1; // 10% tax rate
    const total = subtotal + tax;
    
    setFormData(prev => ({
      ...prev,
      subtotal: subtotal,
      tax: tax,
      total: total
    }));
  }, [formData.services, formData.additionalFees]);
  
  // Update service totals when quantity or price changes
  const updateServiceTotal = (index, field, value) => {
    const updatedServices = [...formData.services];
    updatedServices[index][field] = value;
    
    // Recalculate total
    const quantity = parseFloat(updatedServices[index].quantity) || 0;
    const unitPrice = parseFloat(updatedServices[index].unitPrice) || 0;
    updatedServices[index].total = quantity * unitPrice;
    
    setFormData(prev => ({
      ...prev,
      services: updatedServices
    }));
  };
  
  // Add a new service line
  const addServiceLine = () => {
    setFormData(prev => ({
      ...prev,
      services: [...prev.services, { id: '', name: '', quantity: 1, unitPrice: 0, total: 0 }]
    }));
  };
  
  // Remove a service line
  const removeServiceLine = (index) => {
    const updatedServices = [...formData.services];
    updatedServices.splice(index, 1);
    
    setFormData(prev => ({
      ...prev,
      services: updatedServices
    }));
  };
  
  // Add a new fee line
  const addFeeLine = () => {
    setFormData(prev => ({
      ...prev,
      additionalFees: [...prev.additionalFees, { name: '', amount: 0 }]
    }));
  };
  
  // Remove a fee line
  const removeFeeLine = (index) => {
    const updatedFees = [...formData.additionalFees];
    updatedFees.splice(index, 1);
    
    setFormData(prev => ({
      ...prev,
      additionalFees: updatedFees
    }));
  };
  
  // Update fee data
  const updateFee = (index, field, value) => {
    const updatedFees = [...formData.additionalFees];
    updatedFees[index][field] = value;
    
    setFormData(prev => ({
      ...prev,
      additionalFees: updatedFees
    }));
  };
  
  // Handle service selection change
  const handleServiceChange = (index, serviceId) => {
    const selectedService = services.find(s => s.id === parseInt(serviceId));
    if (!selectedService) return;
    
    const updatedServices = [...formData.services];
    updatedServices[index] = {
      ...updatedServices[index],
      id: selectedService.id,
      name: selectedService.name,
      unitPrice: selectedService.price,
      total: updatedServices[index].quantity * selectedService.price
    };
    
    setFormData(prev => ({
      ...prev,
      services: updatedServices
    }));
  };
  
  // Submit the estimate
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create the estimate in our store
    createEstimate(formData);
    
    // Redirect to the admin dashboard
    router.push('/admin');
  };
  
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Create Estimate</h2>
        <p className="text-gray-600 text-sm mt-1">
          {appointment 
            ? `Creating estimate for ${appointment.customerName}'s ${appointment.serviceName} request` 
            : 'Create a new estimate for a customer'}
        </p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <Card className="mb-8">
          <Card.Header>
            <h3 className="text-lg font-semibold">Customer Information</h3>
          </Card.Header>
          <Card.Content>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {!appointment && (
                <>
                  <div>
                    <label htmlFor="appointmentId" className="block text-sm font-medium text-gray-700 mb-1">
                      Appointment (Optional)
                    </label>
                    <select
                      id="appointmentId"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      value={formData.appointmentId}
                      onChange={(e) => {
                        const appId = parseInt(e.target.value);
                        const selectedApp = appointments.find(a => a.id === appId);
                        
                        setFormData(prev => ({
                          ...prev,
                          appointmentId: appId || '',
                          customerName: selectedApp?.customerName || '',
                          services: selectedApp 
                            ? [{ id: selectedApp.serviceId, name: selectedApp.serviceName, quantity: 1, unitPrice: 0, total: 0 }]
                            : prev.services
                        }));
                      }}
                    >
                      <option value="">Select an appointment</option>
                      {appointments.map(app => (
                        <option key={app.id} value={app.id}>
                          #{app.id} - {app.customerName} ({app.serviceName})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">
                      Customer Name
                    </label>
                    <input
                      type="text"
                      id="customerName"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      value={formData.customerName}
                      onChange={(e) => setFormData(prev => ({ ...prev, customerName: e.target.value }))}
                      required
                    />
                  </div>
                </>
              )}
              
              {appointment && (
                <div className="md:col-span-2">
                  <h4 className="text-sm font-medium text-gray-500">Customer</h4>
                  <p className="mt-1">{appointment.customerName}</p>
                </div>
              )}
            </div>
          </Card.Content>
        </Card>
        
        <Card className="mb-8">
          <Card.Header>
            <h3 className="text-lg font-semibold">Services</h3>
          </Card.Header>
          <Card.Content>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Unit Price
                    </th>
                    <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {formData.services.map((service, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3">
                        <select
                          className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm w-full"
                          value={service.id}
                          onChange={(e) => handleServiceChange(index, e.target.value)}
                          required
                        >
                          <option value="">Select a service</option>
                          {services.map(s => (
                            <option key={s.id} value={s.id}>
                              {s.name}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          min="1"
                          className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm w-20 text-right"
                          value={service.quantity}
                          onChange={(e) => updateServiceTotal(index, 'quantity', parseInt(e.target.value))}
                          required
                        />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end">
                          <span className="mr-1">$</span>
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm w-24 text-right"
                            value={service.unitPrice}
                            onChange={(e) => updateServiceTotal(index, 'unitPrice', parseFloat(e.target.value))}
                            required
                          />
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right">
                        ${service.total.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          type="button"
                          className="text-red-600 hover:text-red-900"
                          onClick={() => removeServiceLine(index)}
                          disabled={formData.services.length === 1}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4">
              <Button type="button" variant="outline" size="sm" onClick={addServiceLine}>
                Add Service
              </Button>
            </div>
          </Card.Content>
        </Card>
        
        <Card className="mb-8">
          <Card.Header>
            <h3 className="text-lg font-semibold">Additional Fees</h3>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              {formData.additionalFees.map((fee, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-grow">
                    <input
                      type="text"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      placeholder="Fee description"
                      value={fee.name}
                      onChange={(e) => updateFee(index, 'name', e.target.value)}
                      required={parseFloat(fee.amount) > 0}
                    />
                  </div>
                  <div className="w-32">
                    <div className="flex items-center">
                      <span className="mr-1">$</span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-right"
                        value={fee.amount}
                        onChange={(e) => updateFee(index, 'amount', parseFloat(e.target.value))}
                        required={fee.name.trim() !== ''}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="text-red-600 hover:text-red-900"
                      onClick={() => removeFeeLine(index)}
                      disabled={formData.additionalFees.length === 1 && !fee.name && !fee.amount}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              
              <div>
                <Button type="button" variant="outline" size="sm" onClick={addFeeLine}>
                  Add Fee
                </Button>
              </div>
            </div>
          </Card.Content>
        </Card>
        
        <Card className="mb-8">
          <Card.Header>
            <h3 className="text-lg font-semibold">Summary</h3>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Subtotal</span>
                <span>${formData.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Tax (10%)</span>
                <span>${formData.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${formData.total.toFixed(2)}</span>
              </div>
            </div>
          </Card.Content>
        </Card>
        
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline" onClick={() => router.push('/admin')}>
            Cancel
          </Button>
          <Button type="submit">
            Create Estimate
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEstimateForm; 