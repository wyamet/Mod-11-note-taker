const express = require("express");
const apiRoutes = require("./routes/ApiRoutes");
const htmlRoutes = require("./routes/HtmlRoutes");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, function () {
  console.log("Server is listening on PORT: " + PORT);
});
