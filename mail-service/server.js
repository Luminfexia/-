const express =  require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const mailRoutes = require("./routes/mailRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/mail", mailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on PORT : ${PORT}`);
})

