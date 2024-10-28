import Category from '../models/Category.js';
import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  NotFoundError,
} from '../errors/index.js';
import mongoose from 'mongoose';
import moment from 'moment';
const createCategory = async (req, res) => {
  const { catId, category } = req.body;

  if (!catId || !category) {
    throw new BadRequestError('Please provide all values');
  }

  const cat = await Category.create(req.body);
  res.status(StatusCodes.CREATED).json({ cat });
};
const getAllCategories = async (req, res) => {

  let result = Category.find(queryObject);

  const categories = await result;

  res.status(StatusCodes.OK).json({ categories });
};

export { createCategory, getAllCategories};