const express = require('express');
const app = express();

app.use(express.json());

// ✨ Your 40-character verification token
const VERIFICATION_TOKEN = "verify1234567890abcdefghijklmnopqrstuvwxyz12";

app.post('/account-deletion-webhook', (req, res) => {
  console.log('Received eBay verification challenge:', req.body);

  res.status(200).send(VERIFICATION_TOKEN);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
