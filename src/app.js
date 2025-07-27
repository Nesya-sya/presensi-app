import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginpage.js';
import DashboardPage from './pages/DashboardPage';
import { supabase } from 'supabaseClient.js'

useEffect(() => {
  const fetchData = async () => {
    const { data, error } = await supabase.from('presensi').select('*')
    console.log(data, error)
  }

  fetchData()
}, [])


function App() {
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
