import React, { useState } from 'react';
import { supabase } from '../services/supabase';

function presensiform({ userId, onSuccess }) {
  const [kelasId, setKelasId] = useState('');
  const [lokasi, setLokasi] = useState('');

  const isiPresensi = async () => {
    const { error } = await supabase
      .from('presensi')
      .insert([{ user_id: userId, kelas_id: kelasId, lokasi, status: 'hadir' }]);
    if (error) {
      alert('Presensi gagal: ' + error.message);
    } else {
      alert('Presensi berhasil!');
      onSuccess();
    }
  };

  return (
    <div>
      <input type="text" placeholder="ID Kelas" value={kelasId} onChange={e => setKelasId(e.target.value)} />
      <input type="text" placeholder="Lokasi" value={lokasi} onChange={e => setLokasi(e.target.value)} />
      <button onClick={isiPresensi}>Isi Presensi</button>
    </div>
  );
}

export default PresensiForm;
