import { Request, Response } from "express";
import PokeSchema from "../schemas/PokeSchema";

class PokeController {
    async create(req: Request, res: Response) {
        try {
            const pokes = await PokeSchema.create(req.body);
            console.log("Pokemon Created!");
            return res.send(pokes);
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }

    async find(req: Request, res: Response) {
        try {
            const pokes = await PokeSchema.find(req.body);
            console.log("Pokemon listed");
            return res.send(pokes);
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }

    async update(req: Request, res: Response) {
        try {
            await PokeSchema.findByIdAndUpdate(req.params._id, req.body);
            const pokes = await PokeSchema.findById(req.params._id);
            return res.send(pokes);
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const pokes = await PokeSchema.findByIdAndDelete(req.params._id);
            return res.send();
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }
}

export default PokeController;