import { Router } from "express";
import musicController from "../controllers/music-controller";
import { validateSchema } from "../middlewares/validate-schema";
import { musicSchema } from "../middlewares/music-schema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchema(musicSchema), musicController.createMusic); // TODO: validação via Joi

export default musicRouter;