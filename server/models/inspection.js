'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class INSPECTION extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.inspection.belongsTo(models.user);
      models.inspection.belongsTo(models.product);
    }
  }
  INSPECTION.init(
    {
      INSPECTION_DATE: DataTypes.DATE,
      INSPECTION_STATUS: {
        type: DataTypes.STRING(1),
        defaultValue: '0'
      },
      INSPECTION_RESULT: DataTypes.STRING(1),
      INSPECTION_ADATE: DataTypes.DATE,
      INSPECTION_RDATE: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'INSPECTION'
    }
  );
  return INSPECTION;
};