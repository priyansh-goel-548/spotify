import {router} from "express"
import {createAlbum, createMusic, getAllMusics} from "../controllers/music.controller"
import {authArtist, authUser} from "../middlewares/auth.middleware"
import multer from "multer"

const upload = multer ({
    storage: multer.memoryStorage()
})

const router = Router();
router.post("/upload", authArtist, upload.single("music"), createMusic)
router.post("/album", authArtist, createMusic);
router.get("/", authUser, getAllMusics)
router.get("/albums", authUser, getAllAlbums)


export default router;

