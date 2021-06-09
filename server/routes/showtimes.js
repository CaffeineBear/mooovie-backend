import express from 'express';
import { getShowtimes } from '../controllers/TheatreController';
import cors from 'cors';

const router = express.Router();

router.get('/', cors(), (req, res) => getShowtimes(req, res));

router.get('/1', (req, res) => {
  res.send('SHOW TIME!!!');
});

export default router;
