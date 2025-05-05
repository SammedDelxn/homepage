'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Container from '../../../components/ui/Container';
import CreateEstimateForm from '../../../components/admin/CreateEstimateForm';

const CreateEstimatePage = () => {
  const searchParams = useSearchParams();
  const appointmentId = searchParams.get('appointment');
  
  return (
    <div className="py-8">
      <Container>
        <CreateEstimateForm appointmentId={appointmentId} />
      </Container>
    </div>
  );
};

export default CreateEstimatePage; 