import { DataTypes } from 'sequelize';
import { sequelize } from './db';

export const TurkeySounds = sequelize.define('TurkeySounds', {
  gobble: { type: DataTypes.STRING, primaryKey: true, unique: true, allowNull: false },
  gobblegobble: { type: DataTypes.STRING, unique: true, allowNull: false }
});