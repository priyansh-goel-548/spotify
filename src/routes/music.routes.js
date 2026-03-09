import {router} from "express"
import {createMusic} from "../controllers/music.controller"
import multer from "multer"

const upload = multer ({
    storage: multer.memoryStorage()
})

const router = Router();
router.post("/upload", upload.single("music"), createMusic)


export default router;

