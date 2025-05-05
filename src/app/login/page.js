'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AuthFormContainer from '../../components/auth/AuthFormContainer';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import SocialButton from '../../components/auth/SocialButton';
import { useDashboard } from '../../contexts/DashboardContext';

export default function LoginPage() {
  const router = useRouter();
  const { loginWithRole } = useDashboard();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear field-specific error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Simple email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setShowError(false);
    setShowSuccess(false);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock login logic with role-based access
      // In a real app, this would come from your backend authentication system
      let userData = null;
      let userRole = null;

      // Demo login credentials for testing different roles
      if (formData.email === 'admin@example.com' && formData.password === 'password123') {
        userRole = 'admin';
        userData = { id: 1, name: 'Admin User', email: 'admin@example.com' };
      } else if (formData.email === 'staff@example.com' && formData.password === 'password123') {
        userRole = 'staff';
        userData = { id: 2, name: 'Staff Member', email: 'staff@example.com' };
      } else if (formData.email === 'customer@example.com' && formData.password === 'password123') {
        userRole = 'customer';
        userData = { id: 3, name: 'John Customer', email: 'customer@example.com' };
      } else if (formData.email === 'demo@example.com' && formData.password === 'password123') {
        // Default demo user is a customer
        userRole = 'customer';
        userData = { id: 4, name: 'Demo User', email: 'demo@example.com' };
      }

      if (userRole && userData) {
        console.log(`Login successful as ${userRole}:`, userData);
        setShowSuccess(true);
        
        // Log in with the determined role
        loginWithRole(userRole, userData);
        
        // Redirect after 1.5 seconds to the dashboard
        setTimeout(() => {
          router.push('/dashboard');
        }, 1500);
      } else {
        console.log('Login failed: Invalid credentials');
        setShowError(true);
      }
    } catch (error) {
      console.error('Login error:', error);
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    setIsLoading(true);
    
    // Simulate API call for social login
    setTimeout(() => {
      // Default social login as customer
      const userData = { id: 5, name: 'Social User', email: 'social@example.com' };
      loginWithRole('customer', userData);
      
      setShowSuccess(true);
      setIsLoading(false);
      
      // Redirect after 1.5 seconds
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    }, 1000);
  };

  return (
    <AuthFormContainer 
      title="Log in to your account" 
      subtitle="Welcome back to Your Landscaping Company"
    >
      {showSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
          <p className="font-bold">Success!</p>
          <p className="text-sm">You have successfully logged in. Redirecting to dashboard...</p>
        </div>
      )}
      
      {showError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          <p className="font-bold">Login failed</p>
          <p className="text-sm">Invalid email or password. Try one of these demo accounts:</p>
          <ul className="text-xs list-disc ml-5 mt-1">
            <li>admin@example.com / password123 (Admin)</li>
            <li>staff@example.com / password123 (Staff)</li>
            <li>customer@example.com / password123 (Customer)</li>
          </ul>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <Input
          label="Email Address"
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        
        <Input
          label="Password"
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          required
        />
        
        <div className="text-right">
          <Link href="/forgot-password" className="text-sm text-green-600 hover:text-green-500">
            Forgot your password?
          </Link>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          fullWidth
          isLoading={isLoading}
        >
          Log in
        </Button>
        
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>
        
        <SocialButton 
          provider="Google" 
          onClick={() => handleSocialLogin('Google')} 
        />
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="font-medium text-green-600 hover:text-green-500">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </AuthFormContainer>
  );
} 