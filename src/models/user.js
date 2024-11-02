"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

const { Enums } = require("../utils/common");
const serverConfig = require("../config/server-config");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Rescude, {
        foreignKey: "userId",
        sourceKey: "id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      this.belongsTo(models.Title, {
        foreignKey: "titleId",
        targetKey: "id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  User.init(
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      bloodGroup: {
        type: DataTypes.ENUM(
          Enums.BloodGroup.A_pos,
          Enums.BloodGroup.A_neg,
          Enums.BloodGroup.B_pos,
          Enums.BloodGroup.B_neg,
          Enums.BloodGroup.AB_pos,
          Enums.BloodGroup.AB_neg
        ),
        allowNull: false,
      },
      location: {
        type: DataTypes.GEOMETRY("POINT"),
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM(Enums.Roles.ADMIN, Enums.Roles.VOLUNTER),
        defaultValue: Enums.Roles.VOLUNTER,
      },
      exp: {
        type: DataTypes.INTEGER,
        defaultValue: 100,
      },
      titleId: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        references: {
          model: "Titles",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.addHook("beforeCreate", (user, options) => {
    const hashedPassword = bcrypt.hashSync(
      user.password,
      +serverConfig.SaltRounds
    );
    user.password = hashedPassword;
  });

  return User;
};
