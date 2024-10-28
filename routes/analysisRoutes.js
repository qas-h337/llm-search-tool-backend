import express from 'express';
const router = express.Router();

import {
    createAnalysis,
} from '../controllers/analysisController.js';

router.route('/').post(createAnalysis)

export default router;