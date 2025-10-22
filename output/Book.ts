import { DataTypes } from 'sequelize';
import { sequelize } from './db';

export const book = sequelize.define('book', {
  hello: { type: DataTypes.INTEGER, allowNull: false },
  world: { type: DataTypes.INTEGER, allowNull: false }
});