import mongoose from "mongoose"

const musicSchema = new mongoose.Schema({
    uri: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
})

export const musicModel = mongoose.model("music", musicSchema)