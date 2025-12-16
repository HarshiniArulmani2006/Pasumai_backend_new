// const express = require("express");
// const ProductRoute = require("./routes/productRoute")
// const dotenv = require("dotenv");
// const connectdb = require("./config/db");
// dotenv.config();
// connectdb();
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/api", ProductRoute);
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// app.use("/api", require("./routes/productRoutes"));

// app.get("/", (req, res) => {
//   res.send("Pasumai Backend Running");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on ${PORT}`));



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// console.log("Attempting to connect to MongoDB Atlas...");

// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log("✅ Database Connected Successfully"))
//   .catch(err => console.error("❌ DB Error:", err));

// app.use("/api", require("./routes/productRoute"));

// app.get("/", (req, res) => {
//   res.send("Pasumai Backend Running");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoute");

const app = express();

app.use(cors());               //  allow frontend to access backend
app.use(express.json());       //  read JSON body


app.use("/api", productRoutes);


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ Database Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ DB Connection Error:", err);
  });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
