const express = require('express');
const app = express();
const port = 3000;
mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send('Hello World!')
})





app.use("*", function (req, res, next) {
  // 404 page
  res.json({ error: "this route doesn't exist" });
});
// Errors handler function
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status).json({ error: err.message });
});
mongoose.set("debug", true); // in devolpment process
mongoose
  .connect("mongodb+srv://alla:Alla2001@cluster0.x4elx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     
      dbName: "Cluster0",
  })
  .then((con) => {
      console.log("Database is connected");
      app.listen(port, () => {
          console.log(`Server started on ${port}`);
      });
  })
  .catch((err) => {
      console.error(err);
  });