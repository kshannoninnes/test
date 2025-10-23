import { DataTypes } from 'sequelize';
import { sequelize } from './db';

export const DogSounds = sequelize.define('DogSounds', {
  woof: { type: DataTypes.INTEGER, allowNull: false }
});