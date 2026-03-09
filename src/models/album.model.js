import mongoose from "mongoose"

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    musics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"music"
    }],
    artist: {
        type: mongoose.Schema.Type.ObjectId,
        ref: "user",
        required: true,
    }
})

export const albumModel = mongoose.model("album", albumSchema)