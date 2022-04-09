import { DataTypes } from 'sequelize';

export default (sequelize) => {
  sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
   timestamps: false, 
  //  charset: 'utf8',
  //  collate: 'utf8_general_ci', 
  });
};