'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';

// Create context
const DashboardContext = createContext();

// Hook to use the dashboard context
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

// Provider component
export const DashboardProvider = ({ children }) => {
  // State for user role and user data
  const [userRole, setUserRole] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching user data on initial load
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // For demo purposes, we'll check if there's a role in localStorage
        // In a real app, this would be a proper authentication API call
        const storedRole = localStorage.getItem('userRole');
        const storedUserData = localStorage.getItem('userData');
        
        if (storedRole && storedUserData) {
          setUserRole(storedRole);
          setUserData(JSON.parse(storedUserData));
        } else {
          // Default to no role if not found
          setUserRole(null);
          setUserData(null);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUserRole(null);
        setUserData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Function to login with a specific role
  const loginWithRole = (role, userData) => {
    setUserRole(role);
    setUserData(userData);
    
    // Save to localStorage for persistence (demo only)
    localStorage.setItem('userRole', role);
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  // Function to logout
  const logout = () => {
    setUserRole(null);
    setUserData(null);
    localStorage.removeItem('userRole');
    localStorage.removeItem('userData');
  };

  // Context value
  const value = {
    userRole,
    userData,
    isLoading,
    loginWithRole,
    logout
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext; 