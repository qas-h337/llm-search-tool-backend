import Analysis from '../models/Analysis.js';
import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  NotFoundError,
} from '../errors/index.js';
import mongoose from 'mongoose';
import moment from 'moment';
const createAnalysis = async (req, res) => {

    const { categories, name, review, summary} = req.body;

    if (!categories || !name || !review || !summary ) {
      throw new BadRequestError('Please provide all values');
    }


  const analyse = await Analysis.create(req.body);
  res.status(StatusCodes.CREATED).json({ analyse });
};

export { createAnalysis};