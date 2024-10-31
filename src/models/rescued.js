"use strict";
const { Model } = require("sequelize");
const { Enums } = require("../utils/common");

module.exports = (sequelize, DataTypes) => {
  class Rescude extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      this.belongsTo(models.SoS, {
        foreignKey: "sosId",
        targetKey: "id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Rescude.init(
    {
      sosId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Sos",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      status: {
        type: DataTypes.ENUM(Enums.VictimStatus.ALIVE, Enums.VictimStatus.DEAD),
        defaultValue: Enums.VictimStatus.ALIVE,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Rescude",
    }
  );
  return Rescude;
};
