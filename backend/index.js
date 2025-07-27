const express = require('express');
const cors = require('cors');
const presensiRoutes = require('./routes/presensiroutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/presensi', presensiRoutes);

app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});
