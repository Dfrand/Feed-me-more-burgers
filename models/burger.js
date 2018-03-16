module.exports = function (sequelize, dataType) {
    var Burger = sequelize.define("Burger",{
        burger_name: {
           type: dataType.STRING,
           allowNull: false
        },
        devoured: {
            type: dataType.BOOLEAN,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                Burger.hasOne(models.Customer);
            }
        }
    });
        return Burger;
};
