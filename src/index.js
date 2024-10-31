const { serverConfig } = require("./config");
const entryRoutes = require("./routes");

const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", entryRoutes);

app.listen(serverConfig.PORT, () => {
  console.log(`Server Started at ${serverConfig.PORT} port`);
});
