import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginpage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import { supabase } from './services/supabaseClient.jsx';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('presensi').select('*');
      console.log('Supabase data:', data);
      console.log('Supabase error:', error);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
