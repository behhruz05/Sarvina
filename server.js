const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const News = require("./models/News");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));


// GET NEWS
app.get("/api/news", async (req, res) => {
    try {
        const news = await News.find();
        res.json({ news });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// ADD NEWS
app.post("/api/news", async (req, res) => {
    try {
        const newNews = new News(req.body);
        await newNews.save();
        res.json(newNews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});