import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
  console.log('hello');
  res.send('Hello world');
});

router.get('/bye', (req, res) => {
  res.send('bye world');
});

export default router;
