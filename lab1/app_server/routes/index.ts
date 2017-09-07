
import {Router, Request, Response} from 'express';
import {Exercise} from '../models/exercise';
import {DataAccess} from '../services/data-acces';
import {IndexController} from '../controllers/index-controller'

const router = Router();

router.get('/', IndexController.Index);

router.post('/', IndexController.Post);

export const Index: Router = router;