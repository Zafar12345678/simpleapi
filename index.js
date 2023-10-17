const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const app = express();

// Database connection
mongoose.connect("mongodb+srv://merningday123:merningday123@cluster0.6llqgoh.mongodb.net/software?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

// Middleware
app.use(express.json());
app.use('/uploads/images', express.static('uploads/images'));

// Routes
app.use('/api', userRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
