const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

(async () => {
    try {
        await connectDB();
    } catch (err) {
        console.error('Failed to connect to database:', err);
        process.exit(1);
    }
})();

const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
});