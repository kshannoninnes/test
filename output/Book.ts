import { DataTypes } from 'sequelize';
import { sequelize } from './db';

export const Book = sequelize.define('Book', {
  isbn: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false },
  title: { type: DataTypes.INTEGER, allowNull: false }
});