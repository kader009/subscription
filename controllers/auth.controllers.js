import mongoose from 'mongoose';
import User from '../models/users.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/index.js';

export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { username, email, password } = req.body;

    const existing = await User.findOne({ email }).session(session);

    if (existing) {
      const error = Error('user all ready exists');
      error.statusCode = 409;
      throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hassPass = await bcrypt.hash(password, salt);

    const newUsers = await User.create(
      [{ username, email, password: hassPass }],
      { session }
    );

    const token = jwt.sign({ userId: newUsers[0]._id }, JWT_SECRET, {
      expiresIn: '1d',
    });

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: {
        token,
        user: newUsers[0],
      },
    });
  } catch (error) {
    await session.abortTransaction();
    next(error);
  }
};

export const signIn = async (req, res, next) => {};

export const signOut = async (req, res, next) => {};
