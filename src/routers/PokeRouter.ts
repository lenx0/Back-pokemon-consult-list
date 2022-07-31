import { Router } from "express";
import PokeController from "../controllers/PokeController";


const pokeController = new PokeController();
const pokeRouter = Router();

pokeRouter.post("/poke/create/", pokeController.create);
pokeRouter.get("/poke/list/", pokeController.find);
pokeRouter.put("/poke/update/:_id", pokeController.update);
pokeRouter.delete("/poke/delete/:_id", pokeController.delete);

export default pokeRouter;
