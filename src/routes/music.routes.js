import {router} from "express"
import {createAlbum, createMusic} from "../controllers/music.controller"
import multer from "multer"

const upload = multer ({
    storage: multer.memoryStorage()
})

const router = Router();
router.post("/upload", upload.single("music"), createMusic)
router.route("/album").post(createAlbum);


export default router;

