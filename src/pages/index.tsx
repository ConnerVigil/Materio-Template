import React, { useEffect } from 'react';
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts';
import { supabase } from 'src/supabaseClient';

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <h1>Dashboard</h1>
    </ApexChartWrapper>
  );
};

export default Dashboard;
