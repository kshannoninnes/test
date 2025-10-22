import { DataTypes } from 'sequelize';
import { sequelize } from './db';

export const a = sequelize.define('a', {
  b: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true, allowNull: false },
  c: { type: DataTypes.BLOB, allowNull: false }
});