import { DataTypes } from 'sequelize';
import { sequelize } from './db';

export const book = sequelize.define('book', {
  isbn: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  author: { type: DataTypes.INTEGER, allowNull: false },
  title: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
  edition: { type: DataTypes.INTEGER, allowNull: false }
});