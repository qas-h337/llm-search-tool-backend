import express from 'express';
const router = express.Router();

import {
    createResponse,
} from '../controllers/questionResponseController.js';

router.route('/').post(createResponse)

export default router;