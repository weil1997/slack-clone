import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("hej");
});

const channelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 30,
    },
  },
  { timestamps: true }
);

const Channel = mongoose.model("channels", channelSchema);
app.get("/channels", async (req, res) => {
  // await Channel.create({ name: "batch-5" });
  const channels = await Channel.find();
  res.send(channels);
});

const messageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      minLength: 1,
    },
    user: {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
    channelId: {
      type: mongoose.Schema.Types.ObjectId,
      re: "channels",
    },
  },
  { timestamps: true }
);
const Message = mongoose.model("messages", messageSchema);

app.get("/channels/:id", async (req, res) => {
  const messages = await Message.find();
  res.send(messages);
});

app.listen(3000, async () => {
  await mongoose.connect(
    "mongodb+srv://weil:weil@cluster0.ksj2u0b.mongodb.net/?retryWrites=true&w=majority"
  );
});
