const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const clubRoutes = require("./routes/clubroutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use("/api", clubRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
