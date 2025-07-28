// models/presensimodel.js
const { supabase } = require('../services/supabaseClient'); // Sesuaikan path jika perlu

// Menyimpan presensi baru
async function insertPresensi({ user_id, kelas_id, lokasi, status = 'hadir' }) {
  const { data, error } = await supabase
    .from('presensi')
    .insert([{ user_id, kelas_id, lokasi, status }]);

  if (error) {
    throw error;
  }
  return data;
}

// Mengambil semua presensi user tertentu
async function getPresensiByUser(user_id) {
  const { data, error } = await supabase
    .from('presensi')
    .select('*')
    .eq('user_id', user_id)
    .order('waktu_presensi', { ascending: false });

  if (error) {
    throw error;
  }
  return data;
}

module.exports = {
  insertPresensi,
  getPresensiByUser
};
