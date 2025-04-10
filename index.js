const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const orderRoutes = require("./routes/order");
const {connectToDB} = require("./config/db");
const authenticateToken = require("./middlewares/protected");

dotenv.config();
const cors = require("cors");


const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// Middleware

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET;
connectToDB();


app.use("/auth", authRoutes);

app.use("/order", authenticateToken, orderRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
