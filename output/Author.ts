import { DataTypes } from 'sequelize';
import { sequelize } from './db';

export const Author = sequelize.define('Author', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: true }
});