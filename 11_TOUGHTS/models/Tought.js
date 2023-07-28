import { DataTypes } from "sequelize";
import { conn } from '../db/conn.js';
import { User } from "./User.js";

export const Tought = conn.define('Thought', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  }
})

Tought.belongsTo(User)
User.hasMany(Tought)