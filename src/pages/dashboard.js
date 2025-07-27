import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import PresensiForm from '../components/PresensiForm';

function DashboardPage() {
  const [user, setUser] = useState(null);
  const [riwayat, setRiwayat] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      loadPresensi(user.id);
    };
    fetchUser();
  }, []);

  const loadPresensi = async (user_id) => {
    const { data } = await supabase
      .from('presensi')
      .select('*')
      .eq('user_id', user_id)
      .order('waktu_presensi', { ascending: false });
    setRiwayat(data);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Halo, {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
      <PresensiForm userId={user?.id} onSuccess={() => loadPresensi(user.id)} />
      <h4>Riwayat Presensi</h4>
      <ul>
        {riwayat.map((item) => (
          <li key={item.id}>{item.waktu_presensi} | Lokasi: {item.lokasi}</li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardPage;
