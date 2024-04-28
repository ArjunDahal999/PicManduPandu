
import express from 'express'
import { addImageController } from '../controller/imageController/add-image-controller';



const router = express.Router();

router.post('/image', addImageController);




export default router