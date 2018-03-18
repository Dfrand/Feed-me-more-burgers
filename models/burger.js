module.exports = function (sequelize, DataTypes) {
    var BurgerNow = sequelize.define("BurgerNow", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE

    });

    return BurgerNow;
};
