module.exports = function (sequelize, dataType) {
    var Customer = sequelize.define("Customer", {
        customer: {
            type: dataType.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                Customer.belongsTo(models.Burger);
            }
        }
    });
    return Customer;
};
