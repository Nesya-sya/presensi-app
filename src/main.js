import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app.js';
import { supabase } from 'supabaseClient.js'

useEffect(() => {
  const fetchData = async () => {
    const { data, error } = await supabase.from('presensi').select('*')
    console.log(data, error)
  }

  fetchData()
}, [])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
