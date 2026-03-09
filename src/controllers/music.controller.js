import { musicModel } from "../models/music.model";
import jwt from "jsonwebtoken";
import {uploadFile} from "../services/storage.services"

async function createMusic(req, res){

    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({ message: "Uauthorized"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.role !== "artist"){
            return res.status(403).json({message: "You dont't have access to create an music"})
        }

    const {title} = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'))

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: decoded.id,
    })

    res.status(201).json({
        message: "Music created successfully",
        music: {
            id: music._id,
            uri: music.uri,
            title: music.title,
            artist: music.artist,
        }
    })
    } catch (err) {

        console.log(err);

        return res.status(401).json({message: "Uauthorized"})
    }
}

export default createMusic