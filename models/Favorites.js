"use strict";
module.exports = (sequelize, DataTypes) => {
  var Favorites = sequelize.define('Favorites', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  Favorites.associate = function(models) {

    Favorites.belongsTo(models.User);
  };
return Favorites;
};
