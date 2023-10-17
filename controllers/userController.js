const User = require('../models/userModel');

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    // Serve images from the 'uploads/images' directory
    const usersWithImages = users.map(user => {
      return {
        name: user.name,
        email: user.email,
        image: `${req.protocol}://${req.get('host')}/uploads/images/${user.image}`,
      };
    });
    res.status(200).json(usersWithImages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUser,
};
