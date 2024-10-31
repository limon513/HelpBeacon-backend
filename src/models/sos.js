"use strict";
const { Model } = require("sequelize");
const { Enums } = require("../utils/common");
module.exports = (sequelize, DataTypes) => {
  class SoS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Rescude, {
        foreignKey: "userId",
        sourceKey: "id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  SoS.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.GEOMETRY("POINT"),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM(Enums.SoSStatus.ACTIVE, Enums.SoSStatus.RESCUED),
        defaultValue: Enums.SoSStatus.ACTIVE,
      },
    },
    {
      sequelize,
      modelName: "SoS",
    }
  );
  return SoS;
};
