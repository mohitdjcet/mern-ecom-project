import express from 'express';
import { placeOrder } from '../controllers/orderController';

const router = express.Router();

router.post('/place', placeOrder);

export default router;