const express = require('express');
const app = express();

app.use(express.json());

const VERIFICATION_TOKEN = "verify1234567890abcdefghijklmnopqrstuvwxyz12";

app.get('/account-deletion-webhook', (req, res) => {
  console.log('Received eBay verification GET');
  res.status(200).send(VERIFICATION_TOKEN);
});

app.post('/account-deletion-webhook', (req, res) => {
  console.log('Received eBay verification POST:', req.body);
  res.status(200).send(VERIFICATION_TOKEN);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
