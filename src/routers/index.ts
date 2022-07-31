import { Router } from 'express';
import PokeRouter from './PokeRouter';

const routers = Router();

routers.use('/v1/pokemon', PokeRouter);

export default routers;