const express = require('express')

app = express()

app.get('/', (req, res) => {
    res.status(200).send('Hello, world!');
})

if (module === require.main) {
    // [START server]
    // Start the server
    const server = app.listen(process.env.PORT || 8081, () => {
      const port = server.address().port;
      console.log(`App listening on port ${port}`);
    });
    // [END server]
  }