const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
// Define a route that responds with a JSON object
app.get('/', (req, res) => {
  const responseData = {
    title: 'Apidan gelen data',
    count: 30,
    price: 50,
    selectedImage:"https://appmaster.io/cdn-cgi/image/width=1024,quality=83,format=auto/api/_files/PqV7MuNwv89GrZvBd4LNNK/download/"
  };
  res.json(responseData);
});
 
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
